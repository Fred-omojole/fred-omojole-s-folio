"use client";
import { useEffect, useState } from "react";
import { preLoaderAnim } from "./loader";
import "./preloader.css";

// Module state survives client-side navigation but resets on a full page load,
// so the intro only plays once per visit.
let hasPlayed = false;

const PreLoader = () => {
  const [skip] = useState(() => hasPlayed);

  useEffect(() => {
    if (hasPlayed) return;
    hasPlayed = true;
    preLoaderAnim();
  }, []);

  if (skip) return null;

  return (
    <div className="preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
      <div className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[14px] font-extrabold  opacity-0 sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
        <span>Welcome</span>
        <span>To</span>
        <span>Fred&apos;s</span>
        <span>Portfolio.</span>
        <div className="sub hidden"></div>
      </div>
    </div>
  );
};

export default PreLoader;
