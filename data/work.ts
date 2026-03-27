export type WalkthroughSection = {
  title: string;
  content: string;
  highlights?: string[];
  mediaCaption?: string;
};

export type projectProp = {
  name: string;
  slug: string;
  category: string;
  summary: string;
  excerpt: string;
  image: string;
  buttonLink?: string;
  tech?: string[];
  walkthrough?: {
    videoUrl?: string;
    videoPoster?: string;
    goal: WalkthroughSection;
    whatWasBuilt: WalkthroughSection;
    technicalApproach: WalkthroughSection;
    result: WalkthroughSection;
  };
};

export const projects: projectProp[] = [
  {
    name: "Payedge",
    slug: "payedge",
    category: "Payment flow simulation • Developer tools",
    summary:
      "An interactive payment flow simulator that helps engineering teams understand checkout behavior through a deterministic state machine. Model success paths, failure scenarios, and recovery flows without touching production.",
    excerpt:
      "Built an interactive payment flow simulator that models real-world transactional states across success paths, failure scenarios, and recovery flows. The system is driven by a deterministic state machine, allowing engineers, product teams, and QA to simulate and inspect how a checkout pipeline behaves under conditions like network timeouts, card declines, idempotency collisions, and partial failures.",
    image: "/payedge.png",
    buttonLink: "https://payedge-omega.vercel.app/",
    tech: [
      "Next.js",
      "TypeScript",
      "React Compiler",
      "React-Hook-Form",
      "Tailwind CSS",
      "ShadCN UI",
    ],
    walkthrough: {
      videoUrl:
        "https://jvgctxduec.ufs.sh/f/Zw4QJRKolCGJCkaWvgURfO4wTZ3yqNPSoW0nGt5EHQFzg2v8",
      goal: {
        title: "The Goal",
        content:
          "Build an interactive tool that models payment states as a finite state machine, allowing engineers and product teams to manually trigger and observe payment lifecycle changes with real-time feedback through a live event log.",
        highlights: [
          "Model payment states as a finite state machine",
          "Allow manual triggering and observation of payment lifecycle changes",
          "Provide real-time feedback through a live event log",
          "Render realistic checkout UI that reflects current payment state",
        ],
      },
      whatWasBuilt: {
        title: "What I Built",
        content:
          "A three-panel layout consisting of a payment form, state inspector, and event log. The state machine drives all payment transitions from idle through processing to success or failure states, with retry capabilities. A mock API layer simulates network delays, failures, and edge cases.",
        highlights: [
          "Three-panel layout: payment form, state inspector, event log",
          "State machine driving all transitions (idle → processing → success/failed → retry)",
          "Mock API layer simulating network delays and failures",
          "Scenarios: network timeout retry, card declined, idempotency handling, partial failures",
        ],
        mediaCaption: "Payedge demo video",
      },
      technicalApproach: {
        title: "Technical Approach",
        content:
          "Implemented using useReducer with typed actions and states to ensure predictable state transitions. The mock API layer supports configurable delays and failure modes. Component composition keeps concerns separated between PaymentForm, StateInspector, and EventLog.",
        highlights: [
          "State machine via useReducer with typed actions and states",
          "Mock API layer with configurable delays and failure modes",
          "Component composition: PaymentForm, StateInspector, EventLog",
          "TypeScript for state transition validation",
        ],
      },
      result: {
        title: "The Result",
        content:
          "Frontend engineers can now test edge cases without a backend. Product managers can visualize payment flows for specifications. QA can trigger specific failure modes for testing. New team members can learn payment architecture interactively.",
        highlights: [
          "Frontend engineers can test edge cases without backend",
          "Product managers can visualize payment flows for specs",
          "QA can trigger specific failure modes for testing",
          "New team members learn payment architecture interactively",
        ],
      },
    },
  },
  {
    name: "Onekard’s Blog",
    slug: "onekards-blog",
    category: "Content platform • CMS integration",
    summary:
      "A CMS-powered content platform enabling OneKard’s marketing team to publish and manage content independently with excellent performance and SEO.",
    excerpt:
      "Built a CMS-powered content platform enabling OneKard’s marketing team to publish and manage content independently while improving performance and SEO readiness. Built the initial version in early 2025; the current product reflects continued iteration beyond my contribution.",
    image: "/onekard.png",
    buttonLink: "https://www.onekard.io/blog",
    tech: ["Next.js", "TypeScript", "Prismic CMS", "Tailwind CSS", "Figma"],
    walkthrough: {
      videoUrl:
        "https://jvgctxduec.ufs.sh/f/Zw4QJRKolCGJsM8bjGV3pGcCXViNs9D7KRQHtBlmTZL4EwkI",

      goal: {
        title: "The Goal",
        content:
          "Enable OneKard’s marketing team to publish and manage blog content independently without developer intervention, while ensuring excellent performance and SEO.",
        highlights: [
          "Empower non-technical content creators",
          "Improve SEO and page performance",
          "Maintain brand consistency across posts",
        ],
      },
      whatWasBuilt: {
        title: "What I Built",
        content:
          "A fully integrated blog platform connected to Prismic CMS, featuring dynamic routing, rich text rendering, and SEO optimization built into the content model.",
        highlights: [
          "CMS-driven content management",
          "Dynamic routing for blog posts",
          "Structured data for SEO",
        ],
        mediaCaption: "Onekard's Blog demo video",
      },
      technicalApproach: {
        title: "Technical Approach",
        content:
          "Integrated Prismic CMS with Next.js using ISR (Incremental Static Regeneration) for optimal performance. Created reusable slice components that map to CMS content types, giving editors flexibility while maintaining design consistency.",
        highlights: [
          "ISR for fast page loads with fresh content",
          "Slice-based component architecture",
          "Automated sitemap and meta generation",
        ],
      },
      result: {
        title: "The Result",
        content:
          "The marketing team can now publish content without developer involvement. The initial version I built laid the foundation; the current product reflects continued iteration by the team.",
        highlights: [
          "Content team independence achieved",
          "Improved page load times",
          "Foundation for ongoing content growth",
        ],
      },
    },
  },
  {
    name: "Webify",
    slug: "webify",
    category: "Agency website • Web development",
    summary:
      "Built a sleek, high-performance landing page for creative agencies that merges bold typography with smooth micro-interactions. The design balances visual impact and conversion focus while maintaining excellent load speed.",
    excerpt:
      "Developed Webify, a modern digital agency website with a scalable architecture, bold typography, and high-performance design. The project focused on responsive layouts, clear messaging, and conversion-driven call-to-actions.",
    image: "/weblix.png",
    buttonLink: "https://weblix-snowy.vercel.app/",
    tech: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Aceternity UI",
      "UploadThing",
    ],
    walkthrough: {
      videoUrl:
        "https://jvgctxduec.ufs.sh/f/Zw4QJRKolCGJKAIrq2jXhWHUk7iVol6qSruLA1s3zQfMPgm0",
      goal: {
        title: "The Goal",
        content:
          "Create a modern, conversion-focused agency website that showcases bold design while maintaining excellent performance and responsiveness across all devices.",
        highlights: [
          "Bold, memorable visual design",
          "High conversion potential",
          "Responsive across all breakpoints",
        ],
      },
      whatWasBuilt: {
        title: "What I Built",
        content:
          "A fully responsive agency website featuring smooth animations, dynamic sections, and strategically placed calls-to-action. The design emphasizes bold typography and visual hierarchy.",
        highlights: [
          "Animated hero and section transitions",
          "Service showcase with interactive elements",
          "Contact forms with validation",
        ],
        mediaCaption: "Weblix demo video",
      },
      technicalApproach: {
        title: "Technical Approach",
        content:
          "Used Framer Motion for smooth, fluid animations throughout the interface. Leveraged Aceternity UI to build high-performance sliders and interactive components while maintaining excellent page load speed. Desktop-first approach with responsive fallback ensures optimal experience on large screens.",
        highlights: [
          "Framer Motion for smooth animations and interactions",
          "Aceternity UI for performance-optimized sliders",
          "Desktop-first responsive design with optimized performance",
        ],
      },
      result: {
        title: "The Result",
        content:
          "A visually striking agency template that demonstrates modern web design capabilities. The site loads quickly despite rich animations and serves as a portfolio piece for frontend development skills.",
        highlights: [
          "Sub-second page loads",
          "Smooth 60fps animations",
          "Professional design showcase",
        ],
      },
    },
  },
];
