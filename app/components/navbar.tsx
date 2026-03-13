
"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="absolute top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-semibold tracking-tight text-brand hover:opacity-80 transition-opacity"
          >
            MK
          </button>

          <div className="hidden md:flex items-center gap-8 text-brand">
            <Link href="/"

              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >Home</Link>
            <Link
              href="/work"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Work
            </Link>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-brand text-black text-sm font-medium rounded-full hover:bg-emerald-500 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
