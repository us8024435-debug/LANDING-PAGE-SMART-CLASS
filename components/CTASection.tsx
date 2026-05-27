'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { BorderBeam } from './ui/border-beam';

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="bg-black py-20 md:py-28 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="liquid-glass rounded-3xl p-10 md:p-16 backdrop-blur-md relative"
        >
          <BorderBeam size={350} duration={14} colorFrom="#ffffff" colorTo="rgba(255,255,255,0.05)" />
          {/* Subtle light leak gradient background inside card */}
          <div className="absolute -inset-x-20 -inset-y-20 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.015)_0%,_transparent_50%)] pointer-events-none" />

          {/* Title */}
          <h2 className="text-3xl md:text-5xl text-white tracking-tight">
            Ready to upgrade your <span className="font-instrument italic text-white/60">classroom</span>?
          </h2>

          {/* Description */}
          <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6 mb-10 font-light">
            Join thousands of educators who have simplified their day with Smart Class. The smartest AI powered attendance system is just one click away.
          </p>

          {/* Action button */}
          <motion.a
            href="https://smart-class-s1.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="liquid-glass rounded-full px-10 py-4 text-white text-sm font-medium tracking-wide inline-block hover:bg-white/5 transition-all cursor-pointer shadow-lg relative"
          >
            <BorderBeam size={80} duration={8} colorFrom="#ffffff" colorTo="rgba(255,255,255,0.2)" />
            Start AI Attendance Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
