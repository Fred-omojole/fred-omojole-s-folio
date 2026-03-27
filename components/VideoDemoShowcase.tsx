"use client";

import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type VideoDemoShowcaseProps = {
  src: string;
  poster?: string;
  className?: string;
};

function VideoSkeleton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#d4e8dc]">
      <Skeleton className="w-full h-full" />
    </div>
  );
}

export function VideoDemoShowcase({
  src,
  poster,
  className,
}: VideoDemoShowcaseProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={cn(
        "rounded-3xl overflow-hidden bg-gradient-to-b from-[#e8f4ec] to-[#d4e8dc] p-4 md:p-8",
        className,
      )}
    >
      <div className="relative aspect-video overflow-hidden bg-[#1a1f1a]">
        {isLoading && <VideoSkeleton />}

        <video
          className="w-full h-full object-cover"
          loop
          autoPlay
          muted
          playsInline
          poster={poster}
          onCanPlay={() => setIsLoading(false)}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export { VideoSkeleton };
