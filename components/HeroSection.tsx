'use client';

import { useEffect, useRef } from 'react';
import { Camera, ArrowDown } from 'lucide-react';
import { LazyMotion, domAnimation, m } from 'motion/react';
import { BorderBeam } from '@/components/ui/border-beam';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Video fade transitions logic via vanilla JS & requestAnimationFrame
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animFrameId: number;
    let animStart: number | null = null;
    let fadeDir: 'in' | 'out' | null = null;
    const isFadingOut = { current: false };
    let loopTimeoutId: NodeJS.Timeout;

    // Sets opacity directly on the DOM element for smooth operation
    const setVideoOpacity = (val: number) => {
      if (video) {
        video.style.opacity = val.toString();
      }
    };

    // Initialize with opacity 0
    setVideoOpacity(0);

    const fadeAnimationLoop = (timestamp: number, targetOpacity: number, durationLimit: number, initialOpacity: number, onComplete?: () => void) => {
      if (!animStart) animStart = timestamp;
      const elapsed = timestamp - animStart;
      const progress = Math.min(elapsed / durationLimit, 1);
      
      const opacityValue = initialOpacity + (targetOpacity - initialOpacity) * progress;
      setVideoOpacity(opacityValue);

      if (progress < 1) {
        animFrameId = requestAnimationFrame((t) => 
          fadeAnimationLoop(t, targetOpacity, durationLimit, initialOpacity, onComplete)
        );
      } else {
        setVideoOpacity(targetOpacity);
        animStart = null;
        if (onComplete) onComplete();
      }
    };

    const startOpacityFade = (direction: 'in' | 'out', duration: number, onComplete?: () => void) => {
      cancelAnimationFrame(animFrameId);
      animStart = null;
      fadeDir = direction;
      const target = direction === 'in' ? 1 : 0;
      const startVal = direction === 'in' ? 0 : Number(video.style.opacity || '1');
      animFrameId = requestAnimationFrame((t) => 
        fadeAnimationLoop(t, target, duration, startVal, onComplete)
      );
    };

    const handleCanPlay = () => {
      video.play().catch(() => {});
      startOpacityFade('in', 500);
    };

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const remaining = video.duration - video.currentTime;
      if (remaining <= 0.55 && !isFadingOut.current && fadeDir !== 'out') {
        isFadingOut.current = true;
        startOpacityFade('out', 500);
      }
    };

    const handleEnded = () => {
      cancelAnimationFrame(animFrameId);
      setVideoOpacity(0);
      loopTimeoutId = setTimeout(() => {
        if (!video) return;
        video.currentTime = 0;
        isFadingOut.current = false;
        video.play()
          .then(() => {
            startOpacityFade('in', 500);
          })
          .catch(() => {
            isFadingOut.current = false;
          });
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    // Trigger ready if it is already cached or partially buffered
    if (video.readyState >= 3) {
      handleCanPlay();
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      cancelAnimationFrame(animFrameId);
      clearTimeout(loopTimeoutId);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden">
        
        {/* Cinematic loop background video */}
        <div className="absolute inset-0 bg-black pointer-events-none z-0 bg-gradient-to-b from-neutral-900 to-black">
          <video
            ref={videoRef}
            poster="/fallback-poster.jpg"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
            className="absolute inset-0 w-full h-full object-cover object-bottom opacity-0 transition-none select-none pointer-events-none will-change-[opacity] translate-z-0"
            muted
            autoPlay
            playsInline
            preload="auto"
          />
          {/* Subtle gradient overlay to provide text readability */}
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>

        {/* Navbar */}
        <header className="relative z-20 w-full px-4 sm:px-6 py-4 sm:py-6 md:py-8">
          <div className="liquid-glass rounded-full max-w-5xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between backdrop-blur-md transform-gpu backface-hidden">
            <BorderBeam size={160} duration={10} colorFrom="#ffffff" colorTo="rgba(255,255,255,0.05)" />
            
            {/* Left Brand elements and navigation anchors */}
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" />
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg tracking-wider font-sans uppercase">Smart Class</span>
              
              {/* Desktop anchor options */}
              <nav className="hidden md:flex items-center gap-8 ml-10">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white text-sm font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('journey')}
                  className="text-white/80 hover:text-white text-sm font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Journey
                </button>
                <button 
                  onClick={() => scrollToSection('tech')}
                  className="text-white/80 hover:text-white text-sm font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Tech Stack
                </button>
              </nav>
            </div>

            {/* Right Sign-up option and interactive launch button */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a 
                href="https://smart-class-s1.streamlit.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="liquid-glass rounded-full px-4 sm:px-6 py-2 text-white text-xs sm:text-sm font-medium hover:bg-white/5 transition-all cursor-pointer inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                <BorderBeam size={60} duration={6} colorFrom="#ffffff" colorTo="rgba(255,255,255,0.2)" />
                Launch App
              </a>
            </div>

          </div>
        </header>

        {/* Hero content area centered */}
        <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 sm:px-6 py-12 text-center max-w-4xl mx-auto -translate-y-[8%] md:-translate-y-[10%] select-none">
          
          {/* Main Title heading targeting Instrument Serif */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight font-instrument font-light select-none mb-6 leading-tight max-w-3xl mx-auto">
            AI Powered Attendance <span className="italic inline font-instrument text-white/90">System</span>.
          </h1>

          {/* Core Subtitle description text */}
          <p className="text-white/80 text-xs md:text-sm leading-relaxed max-w-lg px-4 mb-8 font-light select-none">
            Revolutionizing the classroom with next-gen computer vision and voice biometrics. Trusted by educators for speed, accuracy, and security.
          </p>

          {/* Action trigger links and scroll indicators */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => scrollToSection('journey')}
              className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-all cursor-pointer select-none relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <BorderBeam size={80} duration={8} colorFrom="#ffffff" colorTo="rgba(255,255,255,0.1)" />
              Explore Journey
            </button>

            {/* Scroll Indicator button */}
            <button 
              onClick={() => scrollToSection('about')}
              className="mt-6 flex flex-col items-center text-white/40 hover:text-white/80 transition-all gap-2 text-xs font-mono tracking-widest cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <span>EXPLORE</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>

        </div>

      </section>
    </LazyMotion>
  );
}
