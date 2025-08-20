"use client";
import React from "react";

export const Menu = ({
  children,
}: {
  // setActive: (item: string | null) => void;

  children: React.ReactNode;
}) => {
  return (
    <div
      className={`border-2 border-foreground bg-[rgb(230,230,230,1)] rounded-full z-10 `}
    >
      <nav className="relative rounded-full border  bg-background flex justify-center   ">
        {children}
      </nav>
    </div>
  );
};
