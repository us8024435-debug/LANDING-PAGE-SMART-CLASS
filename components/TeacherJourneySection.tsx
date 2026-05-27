'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { BorderBeam } from './ui/border-beam';

interface Step {
  step: string;
  badge: string;
  title: string;
  description: string;
  placeholderText: string;
  imageUrl: string;
}

export default function TeacherJourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const steps: Step[] = [
    {
      step: '01',
      badge: 'Step 01',
      title: 'Secure Login',
      description: 'Start your session with our high-security authentication portal. Your data is encrypted and synced across all your devices.',
      placeholderText: 'Login Portal',
      imageUrl: '/images/class_secure_login.png',
    },
    {
      step: '02',
      badge: 'Step 02',
      title: 'Interactive Dashboard',
      description: 'Manage all your subjects, attendance logs, and student rosters from a single, beautiful unified stream.',
      placeholderText: 'Dashboard',
      imageUrl: '/images/class_teacher_dashboard.png',
    },
    {
      step: '03',
      badge: 'Step 03',
      title: 'Course Management',
      description: 'Creating a new subject is a breeze. Just name it, and Smart Class generates everything you need to start tracking.',
      placeholderText: 'Course Manager',
      imageUrl: '/images/class_teacher_dashboard.png',
    },
    {
      step: '04',
      badge: 'Step 04',
      title: 'FaceID Attendance',
      description: 'Use high-speed computer vision to scan the entire room. Our AI identifies every student from a single class photo in milliseconds.',
      placeholderText: 'FaceID Scan',
      imageUrl: '/images/class_faceid_vision.png',
    },
    {
      step: '05',
      badge: 'Step 05',
      title: 'Voice ID Attendance',
      description: 'Switch to voice mode for a futuristic roll-call. Students speak sequentially, and our AI matches their unique voice signatures.',
      placeholderText: 'Voice Roll-call',
      imageUrl: '/images/class_voice_biometrics.png',
    },
    {
      step: '06',
      badge: 'Step 06',
      title: 'Actionable Records',
      description: 'Review and manage historical logs. View confidence scores, download CSV reports, and track long-term attendance trends.',
      placeholderText: 'Actionable Records',
      imageUrl: '/images/class_teacher_dashboard.png',
    },
  ];

  return (
    <section
      id="journey"
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
          The Teacher&apos;s <span className="font-instrument italic text-white/60">Journey</span>
        </motion.h2>
      </div>

      <div className="flex flex-col gap-24 md:gap-36">
        {steps.map((item, idx) => {
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

                  {/* Subtle layout/design accent representing a screen mockup container */}
                  <div className="absolute top-0 inset-x-0 h-8 border-b border-white/5 bg-white/[0.01] px-4 flex items-center gap-1.5 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  
                  {/* Inner representation text with typography */}
                  <div className="text-center mt-6 transition-transform duration-500 group-hover:scale-105 relative z-10 bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/5">
                    <span className="block text-white/45 font-mono text-[10px] tracking-widest uppercase mb-2">
                      Interactive Interface
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
