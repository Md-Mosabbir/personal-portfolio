export type ProjectSlug = "nufatahs" | "techflow-academy" | "sedera-vow" | "weatherly";

export type Project = {
  slug: ProjectSlug;
  name: string;
  category: string;
  shortDescription: string;
  overview: string;
  problem?: string;
  solution?: string;
  architecture?: string[];
  features?: string[];
  story: {
    problem: string;
    solution: string;
    technicalDecisions: string;
    learning: string;
  };
  techStack: string[];
  links?: {
    live?: string;
    source?: string;
  };
  // In a real app these would be actual image URLs
  images: {
    hero: string;
    gallery: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "nufatahs",
    name: "Nufatah's – Medusa E-commerce Platform",
    category: "E-commerce Infrastructure",
    shortDescription:
      "Headless Medusa.js commerce engine with a Next.js storefront, built to scale while keeping hosting costs near zero at launch.",
    overview:
      "A scalable headless e-commerce platform built with Medusa.js and a Next.js storefront, designed to support long-term business growth with minimal infrastructure costs.",
    architecture: [
      "Next.js storefront deployed on Netlify.",
      "Medusa.js backend hosted on Microsoft Azure free tier.",
      "PostgreSQL database hosted via Supabase.",
      "Redis for caching.",
      "Supabase file storage for product assets.",
    ],
    features: [
      "Custom Medusa integrations and headless commerce architecture.",
      "Scalable infrastructure tuned for zero initial hosting cost.",
      "Separation of concerns between frontend, backend, and storage.",
    ],
    story: {
      problem:
        "The client needed a solid commerce foundation that could handle future scale, but their first-year budget for hosting was effectively zero.",
      solution:
        "I combined Medusa.js with a static-optimized Next.js storefront and deployed the backend on Azure's free tier, while using Netlify, Supabase, and Redis to offload heavy lifting. This allowed us to ship quickly with a path to scale up later without re-architecting.",
      technicalDecisions:
        "Medusa.js was chosen for its headless flexibility and plugin ecosystem. Azure was used for the Node.js backend because of its generous free tier, while Supabase handled PostgreSQL and storage with simple developer ergonomics. Redis improved responsiveness for product and catalog queries.",
      learning:
        "This project reinforced how far you can push modern free tiers when you keep the architecture lean, and how important it is to design for migration before you need it.",
    },
    techStack: [
      "Node.js",
      "Medusa.js",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Supabase",
      "Microsoft Azure",
      "Netlify",
      "Framer Motion",
    ],
    links: {
      live: "https://nufatahs.me",
    },
    images: {
      hero: "/images/work/nufatahs-hero.jpg",
      gallery: ["/images/work/nufatahs-1.jpg", "/images/work/nufatahs-2.jpg", "/images/work/nufatahs-3.jpg", "/images/work/nufatahs-4.jpg"],
    },
  },
  {
    slug: "techflow-academy",
    name: "TechFlow Academy",
    category: "Online Learning Platform",
    shortDescription:
      "Course platform for purchasing and securely streaming educational content with low-infra video delivery.",
    overview:
      "A modern course-selling platform that allows users to purchase and stream educational content securely while keeping infrastructure costs under control.",
    features: [
      "Course purchasing and enrollment system.",
      "Secure video streaming pipeline via Cloudflare R2.",
      "Authentication and authorization powered by Supabase.",
      "Optimized media delivery with caching and signed URLs.",
    ],
    story: {
      problem:
        "The initial platform relied on unlisted YouTube videos, which made it easy for users to download and redistribute paid content.",
      solution:
        "I moved content to Cloudflare R2 and wired up a streaming flow that serves videos through signed, time-limited URLs. Combined with Next.js and Supabase auth, this locked down access without making playback fragile.",
      technicalDecisions:
        "Next.js handled the app shell and server-side rendering of critical pages. Supabase simplified auth and relational data. Cloudflare R2 was chosen for its S3-compatible APIs and cost-effective storage close to the edge.",
      learning:
        "I gained a deeper understanding of building secure yet user-friendly media pipelines, especially around balancing DRM-like constraints with realistic implementation effort.",
    },
    techStack: ["Next.js", "Supabase", "Cloudflare R2", "Framer Motion"],
    links: {
      live: "https://techflow.live",
    },
    images: {
      hero: "/images/work/techflow-hero.jpg",
      gallery: ["/images/work/techflow-1.jpg", "/images/work/techflow-2.jpg", "/images/work/techflow-3.jpg", "/images/work/techflow-4.jpg"],
    },
  },
  {
    slug: "sedera-vow",
    name: "Sedera-Vow",
    category: "Full-stack E-commerce Platform",
    shortDescription:
      "Jewelry e-commerce platform built as a full MERN-style playground with a Next.js admin surface.",
    overview:
      "A full-stack jewelry e-commerce platform built as a learning and experimentation project while exploring the MERN ecosystem.",
    features: [
      "User authentication and profile management.",
      "Product catalog and category system.",
      "Admin dashboard for orders and inventory.",
      "Image uploads and basic media management.",
    ],
    story: {
      problem:
        "I wanted a realistic playground to deeply understand full-stack architecture beyond tutorials and toy apps.",
      solution:
        "Sedera-Vow became a production-style MERN project with real features: auth flows, product management, orders, and an admin panel. It allowed me to iterate on patterns that feel good in day-to-day development.",
      technicalDecisions:
        "MongoDB and Express provided a fast feedback loop for modeling product and order data. Next.js powered a modern React front-end and an admin panel for higher-level control.",
      learning:
        "This project clarified where a classic MERN stack shines and where I prefer more opinionated backends or headless commerce platforms.",
    },
    techStack: ["MongoDB", "Express", "React", "Node.js", "Next.js (Admin Panel)"],
    links: {
      source: "https://github.com/Md-Mosabbir/Sedera-Vow",
    },
    images: {
      hero: "/images/work/sedera-hero.jpg",
      gallery: ["/images/work/sedera-1.jpg", "/images/work/sedera-2.jpg", "/images/work/sedera-3.jpg", "/images/work/sedera-4.jpg"],
    },
  },
  {
    slug: "weatherly",
    name: "Weatherly",
    category: "Data Analysis / Hackathon Project",
    shortDescription:
      "NASA hackathon project comparing environmental comfort between locations with AI-assisted insights.",
    overview:
      "A weather analysis tool developed for a NASA hackathon that evaluates environmental comfort between two locations.",
    features: [
      "Comfort Index calculation between origin and destination.",
      "Weather Risk Score and climate comparison.",
      "AI assistant to contextualize weather patterns for non-technical users.",
    ],
    story: {
      problem:
        "Travelers and event planners lacked an intuitive way to compare comfort between two destinations beyond raw weather metrics.",
      solution:
        "Weatherly consumed NASA POWER data, computed derived comfort metrics, and summarized them in a way that humans can quickly understand. An AI assistant added narrative explanations on top of the numbers.",
      technicalDecisions:
        "Python, Pandas, and NumPy handled the statistical side; Jupyter helped iterate on metrics. The architecture stayed lean to focus on analysis and visualization rather than infrastructure.",
      learning:
        "I learned how to translate dense scientific datasets into human-centered stories, and how small, focused models can provide real value in niche decision-making flows.",
    },
    techStack: ["Python", "Pandas", "NumPy", "Jupyter Notebook", "AI Integration"],
    links: {
      live: "https://nasa-space-app-peach.vercel.app",
      source: "https://github.com/Md-Mosabbir/nasa-space-app"
    },
    images: {
      hero: "/images/work/weatherly-hero.jpg",
      gallery: ["/images/work/weatherly-1.jpg", "/images/work/weatherly-2.jpg", "/images/work/weatherly-3.jpg", "/images/work/weatherly-4.jpg"],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

