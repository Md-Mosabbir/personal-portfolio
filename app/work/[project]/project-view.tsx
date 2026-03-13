"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Project } from "../projects-data";

type Props = {
project: Project;
};

export default function ProjectView({ project }: Props) {
return  <main className="min-h-screen bg-white text-gray-900 pt-28 pb-32">
  <div className="max-w-6xl mx-auto px-6 space-y-24">

    <Link
      href="/work"
      className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-gray-900 transition-colors"
    >
      <ArrowLeft size={14} />
      Back to Work
    </Link>

    {/* Hero */}
    <section className="grid grid-cols-1  gap-10 xl:gap-16 items-center">

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        className="space-y-6"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
          {project.category}
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          {project.name}
        </h1>

        <p className="text-sm text-white/60 max-w-xl">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-3 pt-4">
          {project.links?.live && (
            <Link
              href={project.links.live}
              target="_blank"
              className="px-5 py-2.5 rounded-full bg-brand text-black text-xs font-medium inline-flex items-center gap-2 hover:bg-emerald-500 transition-colors"
            >
              Live site <ExternalLink size={14} />
            </Link>
          )}

          {project.links?.source && (
            <Link
              href={project.links.source}
              target="_blank"
              className="px-5 py-2.5 rounded-full border border-brand/40 text-xs font-medium inline-flex items-center gap-2 text-brand hover:bg-brand/10 transition-colors"
            >
              Source code <ExternalLink size={14} />
            </Link>
          )}
        </div>

        <p className="text-xs text-gray-500 pt-4">
          Scroll to explore the build ↓
        </p>
      </motion.div>

      {/* Hero banner */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0.22, 0.61, 0.36, 1],
        }}
        className="relative rounded-3xl overflow-hidden bg-linear-to-br from-brand/15 via-white to-brand/20 border border-gray-200 aspect-video"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(63,198,116,0.45),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.85),transparent_60%)] opacity-80" />
        <div className="absolute inset-0 bg-white/35" />

        <div className="absolute inset-0 flex items-end justify-between px-8 pb-7">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-gray-600">
              Case study
            </p>

            <p className="mt-2 text-lg font-medium text-gray-900">
              {project.name}
            </p>
          </div>

          <p className="text-xs text-gray-600 max-w-xs text-right">
            Built around performance, scalability, and pragmatic
            engineering choices.
          </p>
        </div>
      </motion.div>

    </section>

    {/* Overview */}
    <section className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
          Overview
        </h2>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {project.overview}
        </p>
      </motion.div>

      {/* Tech stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h3 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
          Tech stack
        </h3>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full border border-brand/20 bg-brand/5 text-xs text-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

    </section>

    {/* Gallery */}
    <section className="space-y-8">

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-sm uppercase tracking-[0.3em] text-gray-500"
      >
        Gallery
      </motion.h2>

      <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">

        <motion.div
          className="relative rounded-3xl bg-white border border-gray-200 aspect-video overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-linear-to-tr from-brand/15 via-white to-brand/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(63,198,116,0.18),transparent_65%)]" />
        </motion.div>

        <div className="grid gap-6">
          {project.images.gallery.slice(0, 2).map((_, index) => (
              <motion.div
                  key={index}
              className="relative rounded-3xl bg-white border border-gray-200 aspect-16/10 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.05 * index }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-brand/10 via-white to-brand/5" />
            </motion.div>
          ))}
        </div>

      </div>

    </section>

    {/* Case Study */}
    <section className="grid gap-10 lg:grid-cols-2">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
          The problem
        </h2>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {project.story.problem}
        </p>

        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mt-10 mb-4">
          The solution
        </h2>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {project.story.solution}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
          Technical decisions
        </h2>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {project.story.technicalDecisions}
        </p>

        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mt-10 mb-4">
          What I learned
        </h2>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {project.story.learning}
        </p>
      </motion.div>

    </section>

  </div>
</main>
}
