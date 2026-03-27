"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { VideoDemoShowcase } from "@/components/VideoDemoShowcase";
import { cn } from "@/lib/utils";

type ZoomableMediaProps =
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      className?: string;
      priority?: boolean;
      sizes?: string;
      caption?: string;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      className?: string;
      caption?: string;
    };

export function ZoomableMedia(props: ZoomableMediaProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        type="button"
        className="group block w-full text-left cursor-zoom-in"
        onClick={() => setIsOpen(true)}
        aria-label={
          props.type === "image"
            ? "Open image in full view"
            : "Open video in full view"
        }
      >
        {props.type === "image" ? (
          <Image
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
            sizes={props.sizes}
            priority={props.priority}
            className={cn("w-full h-auto", props.className)}
          />
        ) : (
          <VideoDemoShowcase
            src={props.src}
            poster={props.poster}
            className={props.className}
          />
        )}
      </button>

      {props.caption && (
        <p className="text-xs text-[#7c9487] mt-3 italic text-center">{props.caption}</p>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden bg-black">
                {props.type === "image" ? (
                  <Image
                    src={props.src}
                    alt={props.alt}
                    width={props.width}
                    height={props.height}
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="w-full h-auto"
                  />
                ) : (
                  <video
                    className="w-full h-auto"
                    controls
                    autoPlay
                    muted
                    playsInline
                    poster={props.poster}
                  >
                    <source src={props.src} type="video/mp4" />
                  </video>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
