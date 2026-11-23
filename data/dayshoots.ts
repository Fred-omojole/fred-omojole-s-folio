export type Dayshoot = {
  title: string;
  part: string;
  summary: string;
  video?: string;
  poster: string;
  duration: string;
};

// Videos are NOT stored in the repo (too big). Upload the mp4 to UploadThing
// (dashboard -> Files), copy its URL and paste it into `video` below.
// Add new parts here: poster goes in /public/dayshoots, video URL from UploadThing.
export const dayshoots: Dayshoot[] = [
  {
    title: "Motion Man",
    part: "Part 1",
    summary:
      "A documentary of this phase of my life. Early starts, Lagos traffic, long hours at the desk, and the small things that make a day. No voiceover, just the day as it went.",
    video: "https://jvgctxduec.ufs.sh/f/Zw4QJRKolCGJU73nf2IRLxaiB4AJG0KwjevECguFfHhWq7PX",
    poster: "/dayshoots/day1-part1-poster.jpg",
    duration: "1:17",
  },
];
