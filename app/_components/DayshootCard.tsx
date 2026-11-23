"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { ArrowRight } from "lucide-react";
import type { Dayshoot } from "@/data/dayshoots";

// The glow is the footage itself, shrunk to a few pixels and blurred, so its
// colour always matches what's on screen.
const GLOW_W = 24;
const GLOW_H = 42;

function useAmbientGlow(
  videoRef: RefObject<HTMLVideoElement | null>,
  canvasRef: RefObject<HTMLCanvasElement | null>,
  poster: string,
  canPlay: boolean,
) {
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      ctx.globalAlpha = 1;
      ctx.drawImage(img, 0, 0, GLOW_W, GLOW_H);
    };
    img.src = poster;

    const video = videoRef.current;
    if (!video) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const hasVFC = "requestVideoFrameCallback" in video;
    let handle = 0;

    // Low alpha blends each frame into the last, so hard cuts fade instead of flashing.
    const draw = (alpha: number) => {
      ctx.globalAlpha = alpha;
      ctx.drawImage(video, 0, 0, GLOW_W, GLOW_H);
    };
    const cancel = () =>
      hasVFC
        ? video.cancelVideoFrameCallback(handle)
        : cancelAnimationFrame(handle);
    const loop = () => {
      draw(0.25);
      handle = hasVFC
        ? video.requestVideoFrameCallback(loop)
        : requestAnimationFrame(loop);
    };

    const onPlay = () => {
      cancel();
      if (!reduceMotion) loop();
    };
    const onStill = () => {
      cancel();
      draw(1);
    };

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onStill);
    video.addEventListener("seeked", onStill);
    return () => {
      cancel();
      img.onload = null;
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onStill);
      video.removeEventListener("seeked", onStill);
    };
  }, [videoRef, canvasRef, poster, canPlay]);
}

export default function DayshootCard({
  title,
  part,
  summary,
  video,
  poster,
  duration,
}: Dayshoot) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);

  const canPlay = Boolean(video) && !failed;
  useAmbientGlow(videoRef, canvasRef, poster, canPlay);

  const watch = async () => {
    const el = videoRef.current;
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    try {
      el.muted = false;
      await el.play();
    } catch {
      // Browser refused to start playback; the native controls still work.
    }
  };

  return (
    <article className="relative overflow-hidden rounded-[1.5rem] bg-[#070a07] text-[#d5d6d0]">
      <div className="grid items-center gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:px-[6vw] lg:py-[5vw]">
        <div className="relative mx-auto w-full max-w-[22rem] lg:max-w-[24rem]">
          <canvas
            ref={canvasRef}
            width={GLOW_W}
            height={GLOW_H}
            aria-hidden="true"
            className={`pointer-events-none absolute -left-[80%] -top-[35%] h-[170%] w-[260%] [filter:blur(48px)_saturate(1.5)] [mask-image:radial-gradient(closest-side,#000_40%,transparent)] transition-opacity duration-1000 ${
              playing ? "opacity-100" : "opacity-75"
            }`}
          />
          <div className="relative overflow-hidden rounded-2xl bg-[#1a1f1a] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
            {canPlay ? (
              <video
                ref={videoRef}
                src={video}
                poster={poster}
                className="w-full aspect-[9/16] object-cover [&:fullscreen]:object-contain"
                controls
                playsInline
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onError={() => setFailed(true)}
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={poster}
                alt={title}
                className="w-full aspect-[9/16] object-cover"
              />
            )}
          </div>
        </div>

        <div className="relative flex max-w-[30.5rem] flex-col gap-6 lg:order-first lg:self-end">
          <p className="uppercase tracking-[0.4em] text-xs text-[#bbc3b9]">
            {part} · {duration}
          </p>
          <h2 className="lg:text-5xl md:text-[2.75rem] text-[2.25rem]">
            {title}
          </h2>
          <p className="sm:text-base text-sm lg:text-lg leading-[1.6em] font-light">
            {summary}
          </p>

          {canPlay && (
            <button
              type="button"
              onClick={watch}
              className="group z-0 relative cursor-pointer self-start flex pt-[0.25rem] pb-[0.25rem] pr-[0.25em] pl-[1.5rem] flex-row gap-[0.75rem] border border-[#e8e8e3] rounded-4xl text-[#4f564d] text-[0.7rem] leading-[1.4em] items-center uppercase font-bold justify-center tracking-[0.6em] overflow-hidden"
            >
              <span className="-z-1 bg-[#e8e8e3] inset-0 absolute rounded-[2.5rem] transition-all duration-300 ease-in-out group-hover:bg-[#dcdcd7]" />
              <span className="z-1 relative">Watch {part.toLowerCase()}</span>
              <span className="z-1 relative transition-transform duration-300 ease-in-out group-hover:translate-x-1.5">
                <ArrowRight />
              </span>
            </button>
          )}

          {failed && (
            <p className="text-sm text-[#bbc3b9]">
              The video couldn&apos;t load here.{" "}
              <a
                href={video}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Open it directly
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
