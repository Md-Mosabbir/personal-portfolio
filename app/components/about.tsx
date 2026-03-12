"use client"
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
    <section
      id="about"
      ref={sectionRef}
      className="py-32 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <p className="text-3xl sm:text-4xl lg:text-5xl font-light leading-relaxed text-gray-800">
            Mosabbir Khan is a full-stack developer focused on building modern, scalable web
            platforms. His work focuses on backend architecture, APIs, and product-driven
            development using technologies like Node.js, Next.js, and cloud infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
