export type Dayshoot = {
  title: string;
  part: string;
  summary: string;
  video?: string;
  poster: string;
  duration: string;
};

// Videos are NOT stored in the repo. Upload to UploadThing (dashboard -> Files) and paste the
// file URL into NEXT_PUBLIC_DAYSHOOT_PART1_URL (set it in .env.local and in Vercel). Without it the card shows the poster only.
const PART1_VIDEO = process.env.NEXT_PUBLIC_DAYSHOOT_PART1_URL;
// Add new parts here: drop the mp4 + poster in /public/dayshoots and push a new entry.
export const dayshoots: Dayshoot[] = [
  {
    title: "Motion Man",
    part: "Part 1",
    summary:
      "A documentary of this phase of my life. Early starts, Lagos traffic, long hours at the desk, and the small things that make a day. No voiceover, just the day as it went.",
    video: PART1_VIDEO,
    poster: "/dayshoots/day1-part1-poster.jpg",
    duration: "1:17",
  },
];
