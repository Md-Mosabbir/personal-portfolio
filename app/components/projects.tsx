"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { projects } from "../work/projects-data";
import Image from "next/image";

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-32">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600">
            A selection of work across{" "}
            <span className="text-brand font-medium">e-commerce</span>,{" "}
            <span className="text-brand font-medium">platforms</span>, and{" "}
            <span className="text-brand font-medium">infrastructure</span>.
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {projects.map((project) => (
            <motion.article
              key={project.slug}
              variants={{
                hidden: { opacity: 0, y: 26 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Thumbnail */}
                  <div className="relative aspect-square rounded-xl mb-6 overflow-hidden min-h-50">
                    <Image
                      src={project.images.hero}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Project Info */}
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                    {project.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
                    {project.category}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-brand/5 text-gray-800 text-sm rounded-full border border-brand/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-3 py-1 bg-brand/5 text-gray-700 text-sm rounded-full border border-brand/20">
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* View Project */}
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
