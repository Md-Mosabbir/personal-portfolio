"use client"
import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Rocket, Cloud } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building fast and scalable modern web applications.',
  },
  {
    icon: Database,
    title: 'Backend Systems',
    description: 'Designing APIs and backend services using Node.js and database architecture.',
  },
  {
    icon: Rocket,
    title: 'Startup Product Development',
    description: 'Helping startups turn ideas into working digital platforms.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Deployment',
    description:
      'Deploying and scaling applications using cloud platforms such as Microsoft Azure and Cloudflare.',
  },
];

const WhatIDo = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          services.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.2 }
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
    <section ref={sectionRef} className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">What I Do</h2>
        <p className="text-center text-gray-600 mb-16">
          A mix of <span className="text-brand font-medium">engineering</span>,{' '}
          <span className="text-brand font-medium">architecture</span>, and{' '}
          <span className="text-brand font-medium">deployment</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-8 lg:p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="w-14 h-14 bg-brand/10 text-brand rounded-xl flex items-center justify-center mb-6">
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
