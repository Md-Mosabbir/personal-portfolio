"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { projects } from "./projects-data";
import Image from "next/image";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-32">
      <section className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="mb-16"
        >
   
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4 text-gray-950">
            Work
          </h1>
          <p className="text-lg text-gray-600">
            Selected projects and experiments
          </p>
        </motion.div>

        {/* Project grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12"
        >
          {projects.map((project) => (
            <motion.article
              key={project.slug}
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
            >
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Thumbnail */}
                  <div className="aspect-square relative rounded-xl mb-6 overflow-hidden">
                    <Image
                      src={project.images.hero}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                    {project.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
                    {project.category}
                  </p>

                  {/* Content */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-brand/5 text-gray-800 text-sm rounded-full border border-brand/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-brand group-hover:gap-3 transition-all">
                    View Project <ExternalLink size={16} />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </main>
  );
}

