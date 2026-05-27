'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { BorderBeam } from './ui/border-beam';

interface Phase {
  phase: string;
  badge: string;
  title: string;
  description: string;
  placeholderText: string;
  imageUrl: string;
}

export default function StudentJourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const phases: Phase[] = [
    {
      phase: '01',
      badge: 'Phase 01',
      title: 'Instant Enrollment',
      description: 'Students join courses in seconds using unique QR codes or course links provided by their teachers. No tedious sign-up forms.',
      placeholderText: 'QR Enrollment',
      imageUrl: '/images/class_qr_enrollment.png',
    },
    {
      phase: '02',
      badge: 'Phase 02',
      title: 'Biometric Registration',
      description: 'Students register their FaceID and VoiceID once. Our AI securely stores these biometrics for all future class sessions.',
      placeholderText: 'Biometric Setup',
      imageUrl: '/images/class_faceid_vision.png',
    },
    {
      phase: '03',
      badge: 'Phase 03',
      title: 'Personal Dashboard',
      description: 'A unified view for students to track their attendance percentage across all subjects and receive real-time updates.',
      placeholderText: 'Student Dashboard',
      imageUrl: '/images/class_teacher_dashboard.png',
    },
  ];

  return (
    <section
      id="student-journey"
      ref={containerRef}
      className="bg-black py-16 sm:py-28 md:py-40 px-4 sm:px-6 md:px-8 overflow-hidden max-w-6xl mx-auto border-t border-white/5"
    >
      <div className="text-center mb-12 sm:mb-20 md:mb-28">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white/40 text-xs tracking-widest uppercase block font-mono mb-4"
        >
          — Workflow —
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl text-white tracking-tight"
        >
          The Student&apos;s <span className="font-instrument italic text-white/60">Journey</span>
        </motion.h2>
      </div>

      <div className="flex flex-col gap-24 md:gap-36">
        {phases.map((item, idx) => {
          const isOdd = idx % 2 === 0;

          return (
            <motion.div
              key={item.badge}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${isOdd ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`}
            >
              {/* Text Side */}
              <div className="flex-1 w-full space-y-4">
                <div className="liquid-glass rounded-full px-4 py-1.5 inline-block backdrop-blur-sm">
                  <span className="text-white/60 text-xs tracking-widest uppercase font-mono">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-white text-3xl md:text-4xl tracking-tight font-medium font-sans">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm md:text-base leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Image / Visualization Box Side */}
              <div className="flex-1 w-full">
                <div className="liquid-glass rounded-3xl aspect-video w-full flex items-center justify-center p-8 bg-white/[0.02] border border-white/5 relative group overflow-hidden">
                  <BorderBeam size={200} duration={12} delay={idx * 2} colorFrom="#ffffff" colorTo="rgba(255,255,255,0.05)" />
                  
                  {/* Contextual Generated Background Image */}
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                  {/* Web window frame accents */}
                  <div className="absolute top-0 inset-x-0 h-8 border-b border-white/5 bg-white/[0.01] px-4 flex items-center gap-1.5 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  
                  {/* Representation markup */}
                  <div className="text-center mt-6 transition-transform duration-500 group-hover:scale-105 relative z-10 bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/5">
                    <span className="block text-white/45 font-mono text-[10px] tracking-widest uppercase mb-2">
                      Secure Enrollment
                    </span>
                    <span className="text-white text-base md:text-lg font-sans font-medium tracking-wide">
                      {item.placeholderText}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
