import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { AmbientBackground } from '../ui/AmbientBackground';
import { LoginVisual } from './LoginVisual';

interface LoginLayoutProps {
  children: React.ReactNode;
}

export const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#08090D] p-4 sm:p-6 lg:p-10">
      <AmbientBackground />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl min-h-[640px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column: Visual Showcase (Hidden or scaled on very small devices, full on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="lg:col-span-6 xl:col-span-7 flex flex-col"
        >
          <LoginVisual />
        </motion.div>

        {/* Right Column: Authentication Card */}
        <motion.div
          initial={{ opacity: 0, x: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.9,
            delay: shouldReduceMotion ? 0 : 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center"
        >
          <div className="w-full bg-[#11131B]/95 backdrop-blur-2xl rounded-3xl border border-white/[0.08] p-7 sm:p-10 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.85)] flex flex-col justify-between relative overflow-hidden">
            {/* Subtle top champagne accent hairline */}
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#E5C07B]/40 to-transparent" />

            {children}

            {/* Bottom Footer Credits */}
            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#56596A]">
              <span>ANGGUR</span>
              <div className="flex items-center gap-3">
                <a href="#privacy" className="hover:text-[#E5C07B] transition-colors">Privacy</a>
                <span>•</span>
                <a href="#terms" className="hover:text-[#E5C07B] transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
