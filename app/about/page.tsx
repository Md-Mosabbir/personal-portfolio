
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 mb-10 ${alignment}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
        {title}
      </h2>
      {subtitle && <p className="text-gray-600 max-w-2xl">{subtitle}</p>}
    </div>
  );
}

/* ----------------------------- Section 1 Intro ----------------------------- */

function ScratchIntro() {
  return (
    <section className="space-y-10">
     
   <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4 text-gray-950">
            About Me
          </h1>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl"
      >
        <p className="text-gray-600 leading-relaxed">
          I&apos;m a full-stack developer who loves designing systems end-to-end —
          from a single interaction in the UI to the database, APIs, and
          infrastructure that keep it running.
        </p>
      </motion.div>
    </section>
  );
}

/* ----------------------------- Section 2 About Text ----------------------------- */

function AboutText() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mt-16"
    >
      <p className="text-gray-700 leading-relaxed mb-4">
        I&apos;m a full-stack developer who enjoys working across the entire stack —
        from expressive frontends in React and Next.js to backend services,
        APIs, and databases. Most of my work has been with real businesses and
        teams where reliability and maintainability matter.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        I have a strong interest in{" "}
        <span className="text-brand font-medium">
          creative technology and 3D web development
        </span>
        , using tools like Three.js and motion-driven interfaces to bring depth
        and clarity to complex systems.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        I lean heavily on <span className="text-brand font-medium">AI tools</span>{" "}
        to explore ideas faster and automate repetitive work. Day-to-day I work
        in the <span className="text-brand font-medium">Linux ecosystem</span>{" "}
        and stay close to how systems behave under the hood.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Whether it&apos;s a product MVP, internal platform, or experimental
        interactive experience, I try to balance engineering discipline with
        curiosity and play.
      </p>
    </motion.section>
  );
}

/* ----------------------------- Section 3 What I Do ----------------------------- */

function WhatIDo() {
  const ref = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const inView = useInView(ref, { once: true, amount: 0.35 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();

      canvas.width = rect.width;
      canvas.height = rect.height;

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(15,23,42,0.95)";
      ctx.fillRect(0, 0, rect.width, rect.height);
    };

    resize();
    window.addEventListener("resize", resize);

    let drawing = false;

    const getPos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();

      const clientX =
        "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;

      const clientY =
        "touches" in e ? e.touches[0].clientY : (e as MouseEvent).clientY;

      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const scratch = (e: MouseEvent | TouchEvent) => {
      if (!drawing) return;

      e.preventDefault();

      const { x, y } = getPos(e);

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 40, 0, Math.PI * 2);
      ctx.fill();
    };

    const start = (e: MouseEvent | TouchEvent) => {
      drawing = true;
      scratch(e);
    };

    const end = () => {
      drawing = false;
      ctx.globalCompositeOperation = "source-over";
    };

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", scratch);
    window.addEventListener("mouseup", end);

    canvas.addEventListener("touchstart", start, { passive: false });
    canvas.addEventListener("touchmove", scratch, { passive: false });
    window.addEventListener("touchend", end);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mouseup", end);
      window.removeEventListener("touchend", end);
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mousemove", scratch);
      canvas.removeEventListener("touchstart", start);
      canvas.removeEventListener("touchmove", scratch);
    };
  }, []);

  return (
    <section className="mt-24">
      <SectionHeader
        eyebrow="What I do"
        title="Building thoughtful, full-stack experiences"
        subtitle="From idea to deployed product — with a focus on clarity, performance, and maintainability."
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 md:gap-16 items-center"
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-brand/10 blur-2xl rounded-3xl pointer-events-none" />

          <div
            ref={containerRef}
            className="relative rounded-3xl overflow-hidden shadow-lg bg-gray-900"
          >
            <Image
              src="/photo.jpeg"
              alt="Developer portrait"
              width={768}
              height={768}
              className="w-full h-full object-cover"
            />

            <canvas
              ref={canvasRef}
              className="absolute inset-0 cursor-crosshair"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur text-xs text-brand border border-brand/40">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Scratch to reveal
            </div>
          </div>
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            I design and build modern web applications that span both{" "}
            <span className="text-brand font-medium">frontend and backend</span>.
          </p>

          <p>
            On the frontend I focus on component-driven UIs and motion that
            helps guide attention and explain system state.
          </p>

          <p>
            On the backend I build clean APIs, well-structured data models, and
            reliable deployment pipelines.
          </p>

          <p>
            I also explore{" "}
            <span className="text-brand font-medium">
              3D web graphics and interactive experiences
            </span>{" "}
            to bring depth and clarity to interfaces.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

/* ----------------------------- Experience Cards ----------------------------- */

const calcExp = new Date().getFullYear() - 2023
const experienceCards = [
  {
    title: `${calcExp}+ Years Experience`,
    desc: "Hands-on work across production apps, startup products, and internal tools.",
  },
  {
    title: "30+ Projects Built",
    desc: "A mix of freelance, personal, and team projects shipped from idea to deployment.",
  },
  {
    title: "Startup Collaboration",
    desc: "Helping early-stage teams design and deliver digital products.",
  },
  {
    title: "Full-Stack Systems",
    desc: "Frontend, backend, databases, and deployment designed as one system.",
  },
];

function ExperienceCards() {
  return (
    <section className="mt-24">
      <SectionHeader
        eyebrow="Experience"
        title="A snapshot of impact"
        subtitle="Not every project is public, but these themes show up consistently."
      />

      <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
        {experienceCards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-gray-200 bg-white shadow-sm px-6 py-6"
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- Tech Stack ----------------------------- */

const techCategories = [
  {
    title: "Languages & Frameworks",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "C",
      "C++",
      "C#",
      "Linux (strong experience)",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps",
    items: ["Docker", "Azure", "Vercel", "VPS deployment"],
  },
  {
    title: "3D & Creative Tech",
    items: ["Three.js", "Blender", "WebGL", "Framer Motion", "GSAP"],
  },
  {
    title: "UI / Frontend",
    items: ["TailwindCSS", "Radix UI", "Framer Motion"],
  },
  {
    title: "AI & Data",
    items: ["Python", "Pandas", "NumPy", "FastAI"],
  },
];

function TechStack() {
  return (
    <section className="mt-24 pb-12">
      <SectionHeader
        eyebrow="Stack"
        title="Tools I reach for"
        subtitle="A practical toolkit for building robust systems."
      />

      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        {techCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-sm uppercase tracking-[0.24em] text-gray-500 mb-4">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ scale: 1.05, y: -1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="px-3 py-1 rounded-full border border-gray-200 text-sm text-gray-800 bg-white hover:border-brand hover:text-brand hover:bg-brand/5 cursor-default transition-colors"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- Page ----------------------------- */

export default function AboutPage() {
  return (
    <main className="bg-white py-28 md:py-32">
      <div className="max-w-6xl mx-auto px-6 space-y-24 md:space-y-28">
        <ScratchIntro />
        <AboutText />
        <WhatIDo />
        <ExperienceCards />
        <TechStack />
      </div>
    </main>
  );
}
