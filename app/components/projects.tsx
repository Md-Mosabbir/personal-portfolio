
"use client"
import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Sedera-Vow',
    description:
      'A jewelry-focused e-commerce platform designed for wedding products and luxury accessories.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'TailwindCSS'],
  },
  {
    title: 'TechFlow.live',
    description:
      'A technology platform built with Node.js and Next.js. Backend systems and frontend structure were developed to support live tech content.',
    tech: ['Node.js', 'Next.js', 'REST API'],
  },
  {
    title: 'Medusa E-commerce Platform',
    description:
      'A full e-commerce platform developed using MedusaJS, Node.js, and Next.js with deployment on Microsoft Azure.',
    tech: ['MedusaJS', 'Node.js', 'Next.js', 'Azure'],
  },
  {
    title: 'Weatherly',
    description:
      'A smart weather prediction platform built using NASA POWER API, Python, Pandas, and Azure. The platform predicts weather comfort levels and provides AI-driven suggestions.',
    tech: ['NASA API', 'Python', 'Pandas', 'Azure'],
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          projects.forEach((_, index) => {
            setTimeout(() => {
              setVisibleProjects((prev) => [...prev, index]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-20">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white p-8 lg:p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                visibleProjects.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl mb-6" />

              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                View Project <ExternalLink size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
