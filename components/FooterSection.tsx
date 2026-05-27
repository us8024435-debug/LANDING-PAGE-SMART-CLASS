'use client';

import { Camera, Github, Linkedin, Mail, Phone, Globe } from 'lucide-react';

export default function FooterSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Top sitemap / info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-16">
          
          {/* Column 1 - Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-white" />
              <span className="text-white text-xl font-semibold tracking-tight">Smart Class</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              The next generation of classroom management, powered by advanced AI biometrics. Join the future of education today.
            </p>
          </div>

          {/* Column 2 - Product */}
          <div>
            <span className="block text-white/60 text-xs tracking-widest uppercase mb-6 font-mono">
              Product
            </span>
            <ul className="space-y-3 font-light">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/40 text-sm hover:text-white/80 transition-all cursor-pointer text-left block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  AI Attendance
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/40 text-sm hover:text-white/80 transition-all cursor-pointer text-left block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Smart Roster
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('tech')}
                  className="text-white/40 text-sm hover:text-white/80 transition-all cursor-pointer text-left block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Tech Stack
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('student-journey')}
                  className="text-white/40 text-sm hover:text-white/80 transition-all cursor-pointer text-left block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Student Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Experience */}
          <div>
            <span className="block text-white/60 text-xs tracking-widest uppercase mb-6 font-mono">
              Experience
            </span>
            <ul className="space-y-3 font-light">
              <li>
                <button
                  onClick={() => scrollToSection('journey')}
                  className="text-white/40 text-sm hover:text-white/80 transition-all cursor-pointer text-left block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Teacher Journey
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('student-journey')}
                  className="text-white/40 text-sm hover:text-white/80 transition-all cursor-pointer text-left block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Student Journey
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/40 text-sm hover:text-white/80 transition-all cursor-pointer text-left block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Voice ID Roll-call
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/40 text-sm hover:text-white/80 transition-all cursor-pointer text-left block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  FaceID Scan
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 - Developer */}
          <div>
            <span className="block text-white/60 text-xs tracking-widest uppercase mb-6 font-mono">
              Developer Profile
            </span>
            <div className="space-y-4">
              <div>
                <p className="text-white text-base font-medium">Ujjwal Sharma</p>
                <p className="text-white/40 text-xs font-mono">Full Stack Engineer</p>
              </div>
              <ul className="space-y-2.5 font-light text-sm text-white/40">
                <li>
                  <a 
                    href="https://ujjwal-sharma-dev.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors flex items-center gap-2 font-sans"
                  >
                    <Globe className="w-4 h-4 text-white/60 shrink-0" />
                    <span className="truncate">Portfolio Website</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/us8024435-debug" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors flex items-center gap-2 font-sans"
                  >
                    <Github className="w-4 h-4 text-white/60 shrink-0" />
                    <span className="truncate">GitHub Profile</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/ujjwal-sharma-776832293" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors flex items-center gap-2 font-sans"
                  >
                    <Linkedin className="w-4 h-4 text-white/60 shrink-0" />
                    <span className="truncate">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:us5533400@gmail.com" 
                    className="hover:text-white transition-colors flex items-center gap-2 font-sans"
                  >
                    <Mail className="w-4 h-4 text-white/60 shrink-0" />
                    <span className="truncate">us5533400@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:7351057134" 
                    className="hover:text-white transition-colors flex items-center gap-2 font-sans"
                  >
                    <Phone className="w-4 h-4 text-white/60 shrink-0" />
                    <span className="truncate">+91 73510 57134</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-white/10 pt-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-widest uppercase font-mono">
            &copy; 2026 Smart Class AI. Designed & Developed by Ujjwal Sharma.
          </p>
          <p className="text-white/20 text-xs tracking-widest uppercase font-mono">
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
