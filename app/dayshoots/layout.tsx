import Link from "next/link";
import { BsHouseDoorFill } from "react-icons/bs";

export default function DayshootsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen pt-8 sm:pt-12">
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background-size:20px_20px] [background-image:radial-gradient(#d4d4d4_1px,transparent_0.1px)]"
        aria-hidden="true"
      />
      <header className="relative z-10">
        <div className="mx-auto flex w-[94vw] items-center justify-between py-4">
          <Link
            href="/"
            aria-label="Back to portfolio home"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border bg-[#c2d3c7]/20 text-[#102018] active:scale-95 transition"
          >
            <BsHouseDoorFill className="h-4 w-4" />
          </Link>
        </div>
      </header>
      <main className="relative z-10 pb-24">{children}</main>
    </div>
  );
}
