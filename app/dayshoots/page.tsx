import type { Metadata } from "next";
import Dayshoots from "../_components/Dayshoots";

export const metadata: Metadata = {
  title: "Dayshoots — Fred-Omojole Omoyele",
  description:
    "Dayshoots: short documentary cuts from this phase of my life. Part 1, Motion Man.",
};

export default function DayshootsPage() {
  return <Dayshoots />;
}
