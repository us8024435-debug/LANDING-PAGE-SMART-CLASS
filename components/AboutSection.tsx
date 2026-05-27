'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative bg-black pt-20 sm:pt-32 md:pt-44 pb-10 md:pb-14 px-4 sm:px-6 md:px-8 overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Label "About Smart Class" */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white/40 text-xs sm:text-sm tracking-widest uppercase mb-6 sm:mb-8 font-mono"
        >
          About Smart Class
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight sm:leading-[1.25] tracking-tight max-w-4xl"
        >
          <span className="font-instrument italic text-white/60">Pioneering smart attendance</span>{' '}
          <span className="font-sans font-light">for</span>{' '}
          <br className="hidden md:block" />
          <span className="font-instrument italic text-white/60">
            classrooms that innovate, engage, and inspire.
          </span>
        </motion.h2>
      </div>
    </section>
  );
}
