"use client"
import { useEffect, useRef, useState } from 'react';

const experiences = [
  {
    year: '2023',
    title: 'WordPress Developer Trainee',
    description:
      'First professional development experience focused on WordPress customization and real production workflows.',
  },
  {
    year: '2024',
    title: 'Full-Stack E-commerce Development',
    description:
      'Built a complete e-commerce platform using MedusaJS, Node.js, and Next.js deployed on Microsoft Azure.',
  },
  {
    year: '2025',
    title: 'Full-Stack Developer at Chatpoka',
    description:
      'Worked on multiple startup projects including NextGen Circuits (Next.js frontend migration), TechFlow.live platform backend development, and Cloudflare R2 streaming infrastructure for media delivery.',
  },
];

const Timeline = () => {
  const [lineHeight, setLineHeight] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && lineRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionTop = rect.top;
        const sectionHeight = rect.height;

        if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
          const progress = Math.min(
            Math.max((windowHeight - sectionTop) / (sectionHeight + windowHeight), 0),
            1
          );
          setLineHeight(progress * 100);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-20">Experience</h2>

        <div className="relative">
          <div
            ref={lineRef}
            className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200"
          >
            <div
              className="w-full bg-black transition-all duration-300 ease-out"
              style={{ height: `${lineHeight}%` }}
            />
          </div>

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } items-center gap-8`}
              >
                <div
                  className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
                >
                  <div className="inline-block bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                    <span className="text-sm font-semibold text-gray-500 tracking-wide">
                      {exp.year}
                    </span>
                    <h3 className="text-2xl font-semibold mt-2 mb-4">{exp.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg" />

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
