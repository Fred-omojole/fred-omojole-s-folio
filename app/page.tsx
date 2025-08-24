"use client";
import React, { useEffect } from "react";
import Hero from "./_components/Hero";
import { cn } from "@/lib/utils";
import { NavbarDemo } from "./_components/Navbar";
import { NavbarMobile } from "./_components/NavMobile";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import PreLoader from "./animations/Preloader/Preloader";
import dynamic from "next/dynamic";

const Work = dynamic(() => import("./_components/Work"));

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      <PreLoader />
      <NavbarDemo />
      <NavbarMobile />
      <main className="md:relative">
        <>
          <div
            className={cn(
              "absolute inset-0 -z-10",
              "[background-size:20px_20px]",
              "[background-image:radial-gradient(#d4d4d4_1px,transparent_0.1px)]"
            )}
          />
          <Hero />
        </>
        <div className="-z-10 absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(to_bottom,black_50%,transparent_100%)]"></div>

        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
