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
    name: "Payedge",
    excerpt:
      "Built an interactive payment flow simulator that models real-world transactional states across success paths, failure scenarios, and recovery flows. The system is driven by a deterministic state machine, allowing engineers, product teams, and QA to simulate and inspect how a checkout pipeline behaves under conditions like network timeouts, card declines, idempotency collisions, and partial failures.",
    image: "/payedge.png",
    buttonText: "View Project",
    buttonLink: "https://payedge-omega.vercel.app/",
    tech: [
      "Next.js",
      "TypeScript",
      "React Compiler",
      "React-Hook-Form",
      "Tailwind CSS",
      "ShadCN UI",
    ],
  },
  {
    name: "Onekard's Blog",
    excerpt:
      "Built a CMS-powered content platform enabling OneKard’s marketing team to publish and manage content independently while improving performance and SEO readiness. Built the initial version in early 2025; the current product reflects continued iteration beyond my contribution.",
    image: "/onekard.png",
    buttonText: "View Project",
    buttonLink: "https://www.onekard.io/blog",
    tech: ["Next.js", "TypeScript", "Prismic CMS", "Tailwind CSS", "Figma"],
  },
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
];
