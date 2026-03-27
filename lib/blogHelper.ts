import fs from "fs";
import path from "path";
import { readingTimeLabel } from "./readingTimeLabel";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
};

const POSTS_DIR = path.join(process.cwd(), "app", "blog", "(posts)");

export function getAllPosts(): PostMeta[] {
  const entries = fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory());

  const posts = entries.map((entry) => {
    const slug = entry.name;
    const metaPath = path.join(POSTS_DIR, slug, "meta.json");
    const raw = fs.readFileSync(metaPath, "utf8");
    const data = JSON.parse(raw) as {
      title: string;
      date: string;
      excerpt: string;
    };

    const contentPath = path.join(POSTS_DIR, slug, "page.mdx");
    const content = fs.readFileSync(contentPath, "utf8");

    return {
      slug,
      title: data.title,
      date: data.date,
      readingTime: readingTimeLabel(content),
      excerpt: data.excerpt,
    } as PostMeta;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
