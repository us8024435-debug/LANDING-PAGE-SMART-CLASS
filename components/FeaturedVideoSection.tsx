'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { BorderBeam } from './ui/border-beam';

export default function FeaturedVideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden">
      <div ref={containerRef} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden aspect-auto min-h-[520px] md:aspect-video w-full group flex flex-col justify-end"
        >
          <BorderBeam size={400} duration={15} colorFrom="#ffffff" colorTo="rgba(255,255,255,0.05)" />
          {/* External Cinema Loop Video */}
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
          />

          {/* Gradient Overlay on video */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 pointer-events-none" />

          {/* Bottom overlay content */}
          <div className="relative p-5 sm:p-8 md:p-10 z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            
            {/* Left Content Card */}
            <div className="liquid-glass rounded-2xl p-5 sm:p-6 md:p-8 max-w-md w-full backdrop-blur-md relative">
              <BorderBeam size={100} duration={8} colorFrom="#ffffff" colorTo="rgba(255,255,255,0.1)" />
              <span className="block text-white/50 text-xs tracking-widest uppercase mb-2 md:mb-3 font-mono">
                Our Approach
              </span>
              <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed font-light">
                We believe in making attendance effortless through AI. Every class session starts with a single photo or voice command, and our neural networks handle the rest — instant, accurate, bias-free recognition.
              </p>
            </div>

            {/* Right Action Button */}
            <motion.a
              href="https://smart-class-s1.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="liquid-glass rounded-full px-6 sm:px-8 py-3 text-white text-xs sm:text-sm font-medium hover:bg-white/5 transition-all text-center self-stretch md:self-auto cursor-pointer inline-block relative"
            >
              <BorderBeam size={60} duration={6} colorFrom="#ffffff" colorTo="rgba(255,255,255,0.2)" />
              Try It Live
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
