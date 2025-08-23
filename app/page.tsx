import React from "react";
import Hero from "./_components/Hero";
import { cn } from "@/lib/utils";
import { NavbarDemo } from "./_components/Navbar";
import { NavbarMobile } from "./_components/NavMobile";
import Work from "./_components/Work";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
export default function Home() {
  return (
    <main className="md:relative">
      <>
        <div
          className={cn(
            "absolute inset-0 -z-10",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_0.1px)]"
            // "dark:[background-image:radial-gradient(#404040_1px,transparent_0.1px)]"
          )}
        />
        <Hero />
        <NavbarDemo />
        <NavbarMobile />
      </>
      <div className="-z-10 absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(to_bottom,black_50%,transparent_100%))]"></div>

      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
