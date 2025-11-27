import React from "react";
import Fred from "./Fred";

import { FaFilePdf } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="home"
      className="py-20 sm:py-28 md:py-40 mx-4 sm:mx-8 md:mx-20 h-auto md:h-screen flex flex-col justify-between"
    >
      <div className="absolute top-4 sm:top-6 right-4 sm:right-8 md:right-20 flex items-center gap-3 sm:gap-4">
        <a
          href="https://drive.google.com/file/d/1rJJNfpdF7Jk8KJPP_oJI91dV1vt1J6PT/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download resume (PDF)"
          className="text-foreground hover:scale-109 transition cursor-pointer"
        >
          <FaFilePdf size={18} />
        </a>

        <a
          href="https://www.linkedin.com/in/omojole/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-foreground hover:scale-109 transition cursor-pointer"
        >
          <FaLinkedinIn size={18} />
        </a>

        <a
          href="https://x.com/omoyele60762"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-foreground hover:scale-109 transition cursor-pointer"
        >
          <FaXTwitter size={18} />
        </a>
      </div>
      <h1 className="mx-auto md:m-0  mb-15 md:mb-0 text-foreground font-semibold text-3xl sm:text-4xl md:text-6xl">
        Fred-Omojole Omoyele
      </h1>

      <p className=" mb-10 md:mb-0 text-foreground mx-auto md:m-0 max-w-[300px] md:max-w-2xl font-medium text-base sm:text-lg md:text-xl">
        Frontend Engineer building better than yesterday. My goal is to empower
        clients own a powerful online presence. One of my deepest joys comes
        from equipping creative people with the visual tools they need to
        further their work.
      </p>

      <div className="flex justify- md:justify-end">
        <Fred />
      </div>
    </section>
  );
};

export default Hero;
