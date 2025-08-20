import React from "react";
import Fred from "./Fred";

const Footer = () => {
  return (
    <section className="h-[5vh] mb-[5px]">
      <div className="flex items-center justify-between h-full text-sm px-6">
        <a
          className="cursor-pointer -mt-8"
          href="https://github.com/Fred-omojole"
          rel="noopener noreferrer"
          aria-label="link to github"
          target="_blank"
        >
          <Fred />
        </a>
        <p className="text-foreground">
          &copy; {new Date().getFullYear()} Fred-Omojole Omoyele. All rights
          reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
