"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const BAR_HEIGHTS = [6, 12, 8, 14];

const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnd = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnd);
    return () => audio.removeEventListener("ended", handleEnd);
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed top-4 sm:top-6 left-4 sm:left-8 md:left-20 z-50 flex items-center">
      <audio
        ref={audioRef}
        src="/audio/zephiramusic-chill-lofi-585360.mp3"
        loop
        preload="none"
      />

      <motion.button
        type="button"
        onClick={toggle}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Pause lofi music" : "Play lofi music"}
        title={isPlaying ? "Pause lofi music" : "Play lofi music"}
        whileTap={{ scale: 0.88 }}
        whileHover={{ scale: 1.06 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="group relative flex items-center gap-2 rounded-full border border-foreground/15 bg-background/70 backdrop-blur-sm px-3 py-2 text-foreground shadow-sm cursor-pointer"
      >
        <span className="relative flex items-center justify-center w-4 h-4">
          <motion.span
            animate={{ opacity: isPlaying ? 1 : 0, scale: isPlaying ? 1 : 0.6 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <Volume2 size={16} strokeWidth={2} />
          </motion.span>
          <motion.span
            animate={{ opacity: isPlaying ? 0 : 1, scale: isPlaying ? 0.6 : 1 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <VolumeX size={16} strokeWidth={2} />
          </motion.span>
        </span>

        <span className="flex items-end gap-[2px] h-3.5 overflow-hidden">
          {BAR_HEIGHTS.map((h, i) => (
            <motion.span
              key={i}
              className="w-[2px] rounded-full bg-foreground/70"
              animate={
                isPlaying
                  ? { height: [4, h, 4] }
                  : { height: 3 }
              }
              transition={
                isPlaying
                  ? {
                      duration: 0.7 + i * 0.12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  : { duration: 0.2 }
              }
            />
          ))}
        </span>
      </motion.button>
    </div>
  );
};

export default MusicToggle;
