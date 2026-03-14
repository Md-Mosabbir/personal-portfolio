"use client"

import Link from "next/link";
import { useRef } from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { projects } from "../work/projects-data";
import Image from "next/image";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <motion.section
      id="work"
      ref={sectionRef}
      className="py-32 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 mb-16">
            A selection of work across{" "}
            <span className="text-brand font-medium">e-commerce</span>,{" "}
            <span className="text-brand font-medium">platforms</span>, and{" "}
            <span className="text-brand font-medium">infrastructure</span>.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
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
                  <div className="aspect-square relative rounded-xl mb-6 overflow-hidden">
                    <Image
                      src={project.images.hero}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
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
                    {project.techStack.length > 5 && (
                      <span className="px-3 py-1 bg-brand/5 text-gray-700 text-sm rounded-full border border-brand/20">
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-brand group-hover:gap-3 transition-all">
                    View Project <ExternalLink size={16} />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
