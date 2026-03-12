
"use client"
import { useEffect, useRef, useState } from 'react';

const ScrollingImage = () => {
  const [scale, setScale] = useState(0.8);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const imageTop = rect.top;
        const imageHeight = rect.height;

        if (imageTop < windowHeight && imageTop + imageHeight > 0) {
          const progress = 1 - imageTop / windowHeight;
          const newScale = Math.min(Math.max(0.8 + progress * 0.3, 0.8), 1.1);
          setScale(newScale);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={imageRef} className="relative overflow-hidden rounded-3xl">
          <div
            className="transition-transform duration-300 ease-out"
            style={{ transform: `scale(${scale})` }}
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-32 h-32 mx-auto mb-6 bg-gray-700 rounded-full flex items-center justify-center text-5xl font-bold">
                  MK
                </div>
                <p className="text-lg font-medium">Mosabbir Khan</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-8 text-lg font-light">
          Developer. Builder. Problem solver.
        </p>
      </div>
    </section>
  );
};

export default ScrollingImage;
