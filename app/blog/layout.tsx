"use client";

import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { motion } from "motion/react";
import { BsHouseDoorFill } from "react-icons/bs";
import { IoReturnUpBack } from "react-icons/io5";
import { Literata } from "next/font/google";

const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();
  const isPost = !!segment;

  return (
    <div
      className=" relative min-h-screen bg-[#f5faf7] pt-24
                  [background-size:24px_24px]
                  [background-image:radial-gradient(rgba(120,180,140,0.25)_1px,transparent_0.1px)]"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 z-0
                   bg-gradient-to-b from-[#c2d3c7]/70 via-[#f5faf7] to-transparent
                   [mask-image:radial-gradient(ellipse_at_top,black_45%,transparent_100%)]"
      />

      <header>
        <div className="mx-auto flex max-w-3xl items-center justify-between  py-4">
          <motion.div
            key={isPost ? "post" : "index"}
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Link
              href={isPost ? "/blog" : "/"}
              aria-label={
                isPost ? "Back to blog list" : "Back to portfolio home"
              }
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border bg-[#c2d3c7]/20 text-[#102018] text-[10px] font-medium uppercase tracking-[0.18em] active:border-[#9bb7a5] active:scale-95 transition"
            >
              {isPost ? (
                <IoReturnUpBack className="h-5 w-5" />
              ) : (
                <BsHouseDoorFill className="h-4 w-4" />
              )}
            </Link>
          </motion.div>
        </div>
      </header>

      <main className={`${literata.variable} `}>{children}</main>
      <div
        className=" pointer-events-none absolute inset-x-0 bottom-0 h-64 z-0
                   bg-gradient-to-t from-[#c2d3c7]/70 via-[#f5faf7] to-transparent
                   [mask-image:radial-gradient(ellipse_at_bottom,black_45%,transparent_100%)]"
      />
    </div>
  );
}
