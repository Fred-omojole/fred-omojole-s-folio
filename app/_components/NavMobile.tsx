"use client";
import React, { useState } from "react";

import { Menu } from "./navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Variants } from "framer-motion";
import { HomeIcon } from "./HomeIcon";
import { Menu as LucideMenu, X as LucideX } from "lucide-react";

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

export function NavbarMobile() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-[85vh] lg:hidden block " />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const navContent: NavContents[] = [
    { title: "works", href: "#works" },
    { title: <HomeIcon />, href: "#home" },
    { title: "about", href: "/about" },
  ];

  const [open, setOpen] = useState(false);

  const buttonVariants: Variants = {
    closed: { rotate: 0, scale: 1 },
    open: { rotate: 90, scale: 1.02 },
  };

  const menuVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 8,
      scale: 0.98,
      transition: { duration: 0.12 },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.18,
        when: "beforeChildren",
        staggerChildren: 0.06,
      },
    },
    exit: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 6 },
  };

  return (
    <motion.div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      initial="hidden"
      animate="visible"
      variants={navContainer}
    >
      <div className="relative flex items-center justify-center">
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="absolute bottom-full mb-6 sm:mb-8 left-1/2 -translate-x-1/2 z-10 w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-auto"
            >
              <Menu>
                {navContent.map((item, index) => (
                  <Link
                    href={item.href}
                    key={item.href}
                    onClick={() => setOpen(false)}
                    className={`capitalize cursor-pointer w-full flex items-center justify-center text-foreground text-[18px] sm:text-[20px] md:text-[20px] leading-[132%] tracking-[-0.14px] pt-6 pb-6 pl-10 pr-10 sm:pt-7 sm:pb-7 sm:pl-12 sm:pr-12 md:pt-8 md:pb-8 md:pl-14 md:pr-14 transition-all ease-in-out hover:bg-[#bbc3b9] border-b lg:border-b-0 lg:border-l lg:border-solid`}
                  >
                    <motion.span
                      variants={itemVariants}
                      className="w-full flex items-center justify-center"
                    >
                      {index === navContent.length - 1 ? (
                        <div className="flex items-center gap-2">
                          <span className="relative inline-flex h-2 w-2 mr-1 ">
                            <span className="animate-ping absolute h-full w-full rounded-full bg-foreground" />
                            <span className="rounded-full h-2 w-2 bg-foreground" />
                          </span>
                          {item.title}
                        </div>
                      ) : (
                        <>{item.title}</>
                      )}
                    </motion.span>
                  </Link>
                ))}
              </Menu>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((v) => !v)}
          variants={buttonVariants}
          animate={open ? "open" : "closed"}
          whileTap={{ scale: 0.98 }}
          className="w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 md:border-6 lg:border-2 border-foreground bg-background flex items-center justify-center z-20 shadow-sm"
        >
          {open ? <LucideX size={24} /> : <LucideMenu size={24} />}
        </motion.button>
      </div>
    </motion.div>
  );
}
