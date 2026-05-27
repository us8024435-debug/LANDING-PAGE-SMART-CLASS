'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Zap, Eye, Mic, Cloud } from 'lucide-react';
import { BorderBeam } from './ui/border-beam';

interface TechItem {
  id: string;
  icon: typeof Zap | typeof Eye | typeof Mic | typeof Cloud;
  title: string;
  description: string;
  tag: string;
}

export default function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const techItems: TechItem[] = [
    {
      id: 'tech-streamlit',
      icon: Zap,
      title: 'Streamlit & Flask',
      description: 'Reactive frontend architecture paired with a robust Flask landing layer.',
      tag: 'Platform',
    },
    {
      id: 'tech-face',
      icon: Eye,
      title: 'Face Registration',
      description: 'Leveraging FaceRecognition and Dlib for high-fidelity facial biometrics.',
      tag: 'Vision AI',
    },
    {
      id: 'tech-voice',
      icon: Mic,
      title: 'Voice Embeddings',
      description: 'Utilizing Resemblyzer and Librosa for unique student voice signatures.',
      tag: 'Audio AI',
    },
    {
      id: 'tech-supabase',
      icon: Cloud,
      title: 'Supabase Cloud',
      description: 'Real-time PostgreSQL infrastructure with secure auth and sync.',
      tag: 'Storage',
    }
  ];

  return (
    <section
      id="tech"
      ref={containerRef}
      className="bg-black py-16 sm:py-28 md:py-40 px-4 sm:px-6 md:px-8 overflow-hidden max-w-6xl mx-auto border-t border-white/5"
    >
      <div className="text-center mb-16 md:mb-24">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white/40 text-xs tracking-widest uppercase block font-mono mb-4"
        >
          — Our Backend —
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl text-white tracking-tight"
        >
          Advanced Tech <span className="font-instrument italic text-white/60">Stack</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {techItems.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="liquid-glass rounded-3xl p-6 md:p-8 text-center flex flex-col justify-between items-center group hover:bg-white/[0.02] transition-colors relative"
            >
              <BorderBeam size={120} duration={8} delay={idx * 1.5} colorFrom="#ffffff" colorTo="rgba(255,255,255,0.05)" />
              <div className="w-full flex flex-col items-center">
                {/* Icon wrapper */}
                <div className="liquid-glass rounded-full w-14 h-14 mb-6 flex items-center justify-center text-white/85 group-hover:scale-110 group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Info and tags */}
                <h3 className="text-white text-lg tracking-tight font-medium mb-3">
                  {item.title}
                </h3>
                
                <p className="text-white/50 text-sm leading-relaxed font-light mb-6">
                  {item.description}
                </p>
              </div>

              <div className="liquid-glass rounded-full px-4 py-1 inline-block">
                <span className="text-white/40 text-xs tracking-widest uppercase font-mono">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
