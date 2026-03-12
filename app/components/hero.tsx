"use client"
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-50 to-white"
    >
      <div
        className={`max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <p className="text-sm sm:text-base font-medium text-gray-600 mb-6 tracking-wide">
          Hi, I'm Mosabbir Khan
        </p>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
          Full-Stack Developer
          <br />
          <span className="text-gray-600">specializing in scalable web systems</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Mosabbir builds modern web platforms using technologies like Node.js, Next.js, MongoDB,
          and cloud infrastructure.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('work')}
            className="px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all hover:scale-105 transform duration-200"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-white text-black font-medium rounded-full border-2 border-black hover:bg-black hover:text-white transition-all hover:scale-105 transform duration-200"
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs font-medium">Scroll Down</span>
          <ChevronDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
