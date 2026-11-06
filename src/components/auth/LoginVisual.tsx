import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

export const LoginVisual: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid weight and tactile momentum
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Multi-layered depth transforms
  const layer1X = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const layer1Y = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  const layer2X = useTransform(smoothX, [-0.5, 0.5], [-24, 24]);
  const layer2Y = useTransform(smoothY, [-0.5, 0.5], [-24, 24]);

  const layer3X = useTransform(smoothX, [-0.5, 0.5], [18, -18]);
  const layer3Y = useTransform(smoothY, [-0.5, 0.5], [18, -18]);

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (shouldReduceMotion) return;
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, shouldReduceMotion]);

  return (
    <div className="relative w-full h-full min-h-[580px] lg:min-h-full flex flex-col justify-between p-8 lg:p-14 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F111A] via-[#0A0B10] to-[#07080B] border border-white/[0.08] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)]">
      {/* Subtle architectural grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #E5C07B 1px, transparent 1px), linear-gradient(to bottom, #E5C07B 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Top Studio Brand Header */}
      <motion.div
        initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex items-center justify-between"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-[#151721] border border-[#E5C07B]/30 flex items-center justify-center shadow-[0_0_20px_rgba(229,192,123,0.15)]">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#E5C07B]">
              <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
              <path d="M12 2V22" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.6" />
              <circle cx="12" cy="12" r="2.5" fill="currentColor" />
            </svg>
          </div>
          <div>
            <span className="font-serif text-lg tracking-[0.2em] font-bold text-white uppercase block">
              ANGGUR
            </span>
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#9295A5] uppercase block -mt-0.5">
              Media Atelier
            </span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151721]/80 border border-white/[0.08] backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-[11px] tracking-wider text-[#9295A5] uppercase font-mono">
    SELAMAT DATANG KEMBALI
          </span>
        </div>
      </motion.div>

      {/* Center 3D Monolith Sculpture with Depth Parallax */}
      <div className="relative z-10 my-auto py-12 flex items-center justify-center perspective-[1200px]">
        {/* Layer 1: Ambient Glow Disc Behind Sculpture */}
        <motion.div
          style={{ x: layer3X, y: layer3Y }}
          className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-tr from-[#E5C07B]/20 via-[#C69F54]/10 to-transparent blur-3xl pointer-events-none"
        />

        {/* Layer 2: Geometric Orbit Rims */}
        <motion.div
          style={{ x: layer2X, y: layer2Y, rotateX, rotateY }}
          className="absolute w-80 h-80 lg:w-[420px] lg:h-[420px] border border-[#E5C07B]/15 rounded-full pointer-events-none"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  rotate: [0, 360],
                }
          }
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />

        {/* Layer 3: Central Architectural Monolith Figure */}
        <motion.div
          style={{ x: layer1X, y: layer1Y, rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.88, filter: 'blur(12px)' }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            y: shouldReduceMotion ? 0 : [0, -14, 0],
          }}
          transition={{
            opacity: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
            filter: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="relative w-64 h-80 lg:w-72 lg:h-96 flex items-center justify-center"
        >
          {/* Custom Architectural SVG 3D Monolith */}
          <svg viewBox="0 0 280 360" fill="none" className="w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
            <defs>
              <linearGradient id="monolithFaceA" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1E212E" />
                <stop offset="50%" stopColor="#13151D" />
                <stop offset="100%" stopColor="#0B0C11" />
              </linearGradient>
              <linearGradient id="monolithFaceB" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2A2E3D" />
                <stop offset="50%" stopColor="#181B24" />
                <stop offset="100%" stopColor="#0F1017" />
              </linearGradient>
              <linearGradient id="champagneSeam" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F3DC9E" />
                <stop offset="60%" stopColor="#E5C07B" />
                <stop offset="100%" stopColor="#9F7A38" />
              </linearGradient>
            </defs>

            {/* Left Monolith Obelisk Facet */}
            <polygon points="140,40 60,95 60,265 140,320" fill="url(#monolithFaceA)" stroke="#E5C07B" strokeWidth="1" strokeOpacity="0.25" />
            
            {/* Right Monolith Obelisk Facet */}
            <polygon points="140,40 220,95 220,265 140,320" fill="url(#monolithFaceB)" stroke="#E5C07B" strokeWidth="1" strokeOpacity="0.35" />

            {/* Central Precision Champagne Seam (The Core Beam) */}
            <line x1="140" y1="40" x2="140" y2="320" stroke="url(#champagneSeam)" strokeWidth="2.5" strokeLinecap="round" />

            {/* Internal Architectural Geometric Planes */}
            <line x1="60" y1="180" x2="140" y2="235" stroke="#E5C07B" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
            <line x1="220" y1="180" x2="140" y2="235" stroke="#E5C07B" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
            
            {/* Floating Top Cap Anchor */}
            <polygon points="140,20 180,50 140,80 100,50" fill="none" stroke="#E5C07B" strokeWidth="1.25" strokeOpacity="0.6" />
            <line x1="140" y1="20" x2="140" y2="40" stroke="#E5C07B" strokeWidth="1.5" strokeOpacity="0.8" />

            {/* Subtle Horizon Cut Line */}
            <line x1="30" y1="320" x2="250" y2="320" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </svg>

          {/* Floating Data Plate Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute -bottom-4 bg-[#11131B]/90 backdrop-blur-xl border border-[#E5C07B]/30 rounded-xl px-4 py-2 shadow-2xl flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-[#E5C07B] shadow-[0_0_8px_#E5C07B]" />
            <span className="text-xs font-mono text-zinc-300 tracking-wider">
              RAFFA/DAMAR/ARKHA/HAQI/ZUQO
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Architectural Editorial Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 space-y-2 pt-6 border-t border-white/[0.06]"
      >
        <p className="font-serif text-xl lg:text-2xl font-light text-white leading-snug">
          SELAMAT DATANG KEMBALI . SILAHKAN LOGIN TERLEBIH DAHULU
        </p>
        <div className="flex items-center justify-between text-xs text-[#9295A5] pt-1 font-sans">
          <span>
            
          </span>
          <span className="font-mono text-[#E5C07B]/80 tracking-widest uppercase">
            
          </span>
        </div>
      </motion.div>
    </div>
  );
};
