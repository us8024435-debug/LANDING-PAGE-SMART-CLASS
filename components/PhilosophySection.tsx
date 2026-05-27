'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { BorderBeam } from './ui/border-beam';

export default function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="bg-black py-16 sm:py-28 md:py-40 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-10 sm:mb-16 md:mb-24"
        >
          <span className="font-instrument italic text-white/40 block md:inline mr-4">
            FaceID x
          </span>
          <span className="font-sans font-light">VoiceID</span>
        </motion.h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Left Block - Video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl overflow-hidden aspect-[4/3] w-full relative"
          >
            <BorderBeam size={200} duration={12} colorFrom="#ffffff" colorTo="rgba(255,255,255,0.05)" />
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
              className="w-full h-full object-cover select-none pointer-events-none"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
            />
            {/* Subtle glow edge gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/5 pointer-events-none" />
          </motion.div>

          {/* Right Block - Description Texts */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 md:gap-12"
          >
            {/* Block 1 */}
            <div>
              <span className="block text-white/40 text-xs tracking-widest uppercase mb-4 font-mono">
                AI Face Analysis
              </span>
              <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
                Advanced neural networks recognize every student&apos;s face from a single class photo, making attendance instant and accurate. Our FaceID system leverages FaceRecognition and Dlib for high-fidelity facial biometrics that work in any lighting condition.
              </p>
            </div>

            {/* Divider line */}
            <div className="w-full h-px bg-white/10" />

            {/* Block 2 */}
            <div>
              <span className="block text-white/40 text-xs tracking-widest uppercase mb-4 font-mono">
                Sequential Voice ID
              </span>
              <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
                Students say &apos;Present&apos; one-by-one, and our audio-AI matches their voice biometrics against stored embeddings in real-time. Powered by Resemblyzer and Librosa, our VoiceID creates unique voice signatures that are impossible to spoof.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
