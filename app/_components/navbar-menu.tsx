"use client";
import React from "react";

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`border-3 md:border-4 lg:border-2 border-foreground rounded-lg lg:rounded-full z-10`}
    >
      <nav className="relative rounded-lg lg:rounded-full bg-background flex flex-col lg:flex-row items-stretch lg:justify-center">
        {children}
      </nav>
    </div>
  );
};
