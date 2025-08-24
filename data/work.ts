export type projectProp = {
  name: string;
  excerpt: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
  tech?: string[];
};

export const projects: projectProp[] = [
  {
    name: "Webify",
    excerpt:
      "Developed Webify, a modern digital agency website with a scalable architecture, bold typography, and high-performance design. The project focused on responsive layouts, clear messaging, and conversion-driven call-to-actions.",
    image: "/weblix.png",
    buttonText: "View Project",
    buttonLink: "https://weblix-snowy.vercel.app/",
    tech: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Aceternity UI",
    ],
  },
  {
    name: "Onekard's Blog",
    excerpt:
      "Developed a scalable, SEO-optimized blog with Next.js, TypeScript, and Prismic CMS, empowering OneKard’s marketing team to publish content faster and improve site performance.",
    image: "/onekard.png",
    buttonText: "Currently Unavailable",
    // buttonLink: "https://weblix-snowy.vercel.app/",
    tech: ["Next.js", "TypeScript", "Prismic CMS", "Tailwind CSS"],
  },

  {
    name: "Inflatable",
    excerpt:
      "Developed a clone of Inflatable's Landing page, a cutting-edge e-commerce platform specializing in inflatable products.",
    image: "/inflate4.png",
    buttonText: "View Project",
    buttonLink: "https://creative-studio-landing-page.vercel.app/",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Devstack",
    excerpt:
      "Designed and developed a developer-first platform that makes sharing tech stacks simple, engaging, and community-driven.",
    image: "/devstack 1.png",
    buttonText: "Currently Unavailable",
    // buttonLink: "/projects/project2",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Convex",
      "React-Hook-Form",
      "ShadCN UI",
    ],
  },
];
