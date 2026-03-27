"use client";
import React, { useEffect, useState } from "react";

import { Menu } from "./navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { HomeIcon } from "./HomeIcon";

type NavContents = {
  title: React.ReactNode;
  href: string;
};

const navContainer: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.05,
      type: "spring",
      stiffness: 260,
      damping: 20,
      duration: 0.2,
    },
  },
};

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-[85vh] hidden lg:block " />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const navContent: NavContents[] = [
    { title: <HomeIcon />, href: "#home" },
    { title: "works", href: "#works" },
    { title: "Thoughts", href: "/blog" },
    { title: "contact", href: "#contact" },
  ];

  const [preloaderDone, setPreloaderDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isDone = () =>
      (window as unknown as { __preloaderDone?: boolean }).__preloaderDone ===
      true;

    if (isDone()) setPreloaderDone(true);

    const handler = () => setPreloaderDone(true);
    window.addEventListener("preloader:done", handler);
    return () => window.removeEventListener("preloader:done", handler);
  }, []);

  return (
    <motion.div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 rounded-full",
        className,
      )}
      initial="hidden"
      animate={preloaderDone ? "visible" : "hidden"}
      variants={navContainer}
    >
      <Menu>
        {navContent.map((item, index) => {
          return (
            <Link
              href={item.href}
              key={item.href}
              className={`${index === 0 ? "hover:rounded-l-full" : ""} ${
                index != 0 ? "border-l border-solid" : ""
              }  ${
                index === navContent.length - 1 ? "hover: rounded-r-full" : ""
              } capitalize cursor-pointer w-full   flex items-center justify-center text-foreground  text-[14px] leading-[132%] tracking-[-0.14px]  pt-6 pb-6 pl-8 pr-8 hover:px-[48px] transition-all ease-in-out hover:bg-[#bbc3b9]`}
            >
              {index === navContent.length - 1 ? (
                <>
                  {" "}
                  <div className="">
                    <span className="relative inline-flex h-2 w-2 mr-1  ">
                      <span className="animate-ping absolute h-full w-full rounded-full bg-foreground" />
                      <span className="rounded-full h-2 w-2 bg-foreground" />
                    </span>
                    {item.title}
                  </div>
                </>
              ) : (
                <> {item.title}</>
              )}
            </Link>
          );
        })}
      </Menu>
    </motion.div>
  );
}
