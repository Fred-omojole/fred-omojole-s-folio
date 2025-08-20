import React from "react";
import Fred from "./Fred";

import { FaFilePdf } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="home"
      className="py-40 mx-20 h-screen flex flex-col justify-between"
    >
      <div className="absolute top-6 right-20 flex items-center gap-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download resume (PDF)"
          className="text-foreground hover:scale-105 transition cursor-pointer"
        >
          <FaFilePdf size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/omojole/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-foreground hover:scale-105 transition cursor-pointer"
        >
          <FaLinkedinIn size={20} />
        </a>

        <a
          href="https://x.com/omoyele60762"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-foreground hover:scale-105 transition cursor-pointer"
        >
          <FaXTwitter size={20} />
        </a>
      </div>
      <h1 className="text-foreground font-semibold text-6xl">
        Fred-Omojole Omoyele
      </h1>

      <p className="text-foreground max-w-2xl font-medium text-xl">
        Frontend Engineer building better than yesterday. My goal is to empower
        clients own a powerful online presence. One of my deepest joys comes
        from equipping creative people with the visual tools they need to
        further their work.
      </p>

      <div className="flex justify-end">
        <Fred />
      </div>
    </section>
  );
};

export default Hero;
