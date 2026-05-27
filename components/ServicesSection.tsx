'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { BorderBeam } from './ui/border-beam';

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const cardsData = [
    {
      id: 'service-strategy',
      videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4',
      tag: 'For Teachers',
      title: 'Smart Classroom Attendance',
      description: 'Snap a single class photo or activate voice roll-call. Our AI identifies every student in milliseconds, logs attendance with confidence scores, and syncs results to your dashboard in real-time.'
    },
    {
      id: 'service-craft',
      videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4',
      tag: 'For Students',
      title: 'Effortless Enrollment & Tracking',
      description: 'Join courses instantly via QR codes, register your FaceID and VoiceID once, and never worry about attendance again. Track your record across all subjects from a unified personal dashboard.'
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-black py-16 sm:py-28 md:py-40 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex justify-between items-end mb-8 sm:mb-12 md:mb-16 border-b border-white/10 pb-6"
        >
          <h2 className="text-3xl md:text-5xl text-white tracking-tight font-sans">
            How It Works
          </h2>
          <span className="text-white/40 text-sm hidden md:block font-mono uppercase tracking-widest">
            Dual Biometric System
          </span>
        </motion.div>

        {/* Two-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {cardsData.map((card, idx) => (
            <motion.div
              key={card.id || idx}
              id={card.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="liquid-glass rounded-3xl overflow-hidden group flex flex-col justify-between relative"
            >
              <BorderBeam size={250} duration={12} delay={idx * 3} colorFrom="#ffffff" colorTo="rgba(255,255,255,0.05)" />
              {/* Card video area */}
              <div className="aspect-video w-full overflow-hidden relative">
                <video
                  src={card.videoUrl}
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 group-hover:scale-105"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>

              {/* Card body */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* Header elements line */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-white/40 text-xs font-mono uppercase tracking-widest">
                    {card.tag}
                  </span>
                  
                  {/* Arrow icon wrap */}
                  <div className="liquid-glass rounded-full p-2.5 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Info titles */}
                <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-medium">
                  {card.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
