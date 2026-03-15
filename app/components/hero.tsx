"use client"
import { ChevronDown } from 'lucide-react';
import SocialSidebar from './socials';
import { DonutScene } from './3d/Scene';
import MagneticButton from './magnetic-button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-b from-gray-950 via-black to-gray-950"
    >
      {/* Background 3D canvas layer (behind hero content) */}
      <div className="absolute inset-0 z-0">
        {/* Do not set pointer-events:none here; controls should work in empty areas.
            Hero content remains clickable because it sits above this layer. */}
        <DonutScene />
      </div>

      {/* Soft vignette to keep text readable over the 3D scene */}
      <div className="absolute inset-0 z-0 bg-radial-[circle_at_center] from-transparent via-black/35 to-black/75" />

      <div className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 z-20">
        <SocialSidebar />
      </div>

      <div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000"
      >
        <p className="hidden sm:block text-sm sm:text-xl  text-white mb-6 w-fit mx-auto rounded-2xl font-black px-3 py-1">
          Hi, I&apos;m Mosabbir Hossain Khan
        </p>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
          <span className="text-white">Full-Stack Developer</span>
          <br />
          <span className="text-white/70">specializing in scalable web systems</span>
        </h1>

        <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
          I builds modern web platforms using technologies like Node.js, Next.js, MongoDB,
          and cloud infrastructure.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton>

            <button
              onClick={() => scrollToSection('work')}
              className="px-8 py-4 bg-brand text-black font-medium rounded-full hover:bg-emerald-500 transition-colors duration-200 cursor-pointer"
            >
              View My Work
            </button>
          </MagneticButton>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-transparent text-white font-medium rounded-full border-2 border-white/25 hover:border-brand hover:text-brand transition-all hover:scale-105 transform duration-200"
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs font-medium">Scroll Down</span>
          <ChevronDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
