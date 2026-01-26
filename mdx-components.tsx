import React from "react";
import type { MDXComponents } from "mdx/types";
import { Literata } from "next/font/google";

const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
});

const components: MDXComponents = {
  wrapper: ({ children }) => (
    <main className="min-h-screen px-4 pb-24">
      <section className="mx-auto max-w-3xl">{children}</section>
    </main>
  ),
  h1: (props) => (
    <h1
      className={`mt-3 text-2xl font-semibold font-plex-sans text-[#102018] `}
      {...props}
    />
  ),

  h2: (props) => (
    <h2
      className={`mt-3 text-lg font-semibold font-plex-sans text-[#102018] `}
      {...props}
    />
  ),

  p: (props) => (
    <p
      className="mt-4 font-Literata text-sm text-[#405347] md:text-base"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
