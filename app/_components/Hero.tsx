import React from "react";
import Fred from "./Fred";
import { FaFilePdf } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative py-20 sm:py-28 md:py-40 mx-4 sm:mx-8 md:mx-20 h-auto md:h-screen flex flex-col justify-center gap-10 md:gap-14"
    >
      <div className="absolute top-4 sm:top-6 right-4 sm:right-8 md:right-20 flex items-center gap-3 sm:gap-4">
        <a
          href="https://drive.google.com/file/d/1ydr1Np5y7gd-l15LInK5AhUGCt6gsvBC/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download resume (PDF)"
          className="text-foreground hover:scale-109 transition cursor-pointer"
        >
          <FaFilePdf size={18} />
        </a>

        {/* <a
          href="https://drive.google.com/file/d/1rJJNfpdF7Jk8KJPP_oJI91dV1vt1J6PT/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download resume (PDF)"
          className="text-foreground hover:scale-109 transition cursor-pointer"
        >
          <FaFilePdf size={18} />
        </a> */}

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
          href="https://x.com/yelebuilds"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-foreground hover:scale-109 transition cursor-pointer"
        >
          <FaXTwitter size={18} />
        </a>
      </div>

      <h1 className="mx-auto md:mx-0 mb-10 md:mb-10 lg:mb-12 text-foreground font-semibold text-3xl sm:text-4xl md:text-6xl">
        Fred-Omojole Omoyele
      </h1>

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-16">
        <div className="text-foreground mx-auto md:mx-0 max-w-[340px] sm:max-w-[480px] md:max-w-xl lg:max-w-2xl font-medium text-sm sm:text-base md:text-lg leading-relaxed space-y-4">
          <p>
            I’m a frontend engineer based in Lagos, Nigeria, building
            thoughtful product interfaces and exploring new ways people
            interact with software.
          </p>
          <p>
            Since 2023, I’ve worked across fintech, product interfaces,
            internal tools, and now emerging AI systems. I currently work as
            an engineering intern at{" "}
            <span className="font-bold">Leadway Health</span>, while
            continuing to explore the intersection of interface, interaction,
            and technology.
          </p>
          <p>
            I care about the details that make software feel clear,
            responsive, and effortless.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end shrink-0">
          <Fred />
        </div>
      </div>
    </section>
  );
};

export default Hero;
