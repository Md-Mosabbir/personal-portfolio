
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link
              className="text-xl font-semibold tracking-tight text-brand hover:opacity-80 transition-opacity"
              href="/"
            >
              MK
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8 text-brand">
              <Link
                href="/"
                className="text-sm font-medium hover:opacity-70 transition-opacity"
              >
                Home
              </Link>
              <Link
                href="/work"
                className="text-sm font-medium hover:opacity-70 transition-opacity"
              >
                Work
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:opacity-70 transition-opacity"
              >
                About
              </Link>
              <a href="mailto:contact@mosabbir.tech">
                <button className="px-6 py-2.5 bg-brand text-black text-sm font-medium rounded-full hover:bg-emerald-500 transition-colors">
                  Contact
                </button>
              </a>
            </div>

            {/* Hamburger: visible only on small screens */}
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 p-2 rounded-lg text-brand hover:bg-white/10 transition-colors"
            >
              <span
                className={`block w-6 h-0.5 bg-current rounded-full transition-transform duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current rounded-full transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current rounded-full transition-transform duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="fixed inset-0 flex flex-col justify-end items-start p-8 pb-16">
          <nav className="flex flex-col gap-6 text-left">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-4xl sm:text-5xl font-semibold text-gray-900 hover:text-brand transition-colors"
            >
              Home
            </Link>
            <Link
              href="/work"
              onClick={() => setMenuOpen(false)}
              className="text-4xl sm:text-5xl font-semibold text-gray-900 hover:text-brand transition-colors"
            >
              Work
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-4xl sm:text-5xl font-semibold text-gray-900 hover:text-brand transition-colors"
            >
              About
            </Link>
            <a
              href="mailto:contact@mosabbir.tech"
              onClick={() => setMenuOpen(false)}
              className="text-4xl sm:text-5xl font-semibold text-gray-900 hover:text-brand transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
