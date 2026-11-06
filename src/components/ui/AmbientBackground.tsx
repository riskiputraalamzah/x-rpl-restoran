import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const AmbientBackground: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#08090D]">
      {/* Subtle architectural noise texture layer */}
      <div 
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Primary Ambient Champagne Glow Sphere - Top Left */}
      <motion.div
        className="absolute -top-[15%] -left-[10%] w-[650px] h-[650px] rounded-full blur-[140px] opacity-20 bg-gradient-to-br from-[#E5C07B] via-[#9F7A38] to-transparent"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 40, -20, 0],
                y: [0, 30, -10, 0],
                scale: [1, 1.08, 0.95, 1],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary Obsidian / Deep Bronze Glow - Bottom Right */}
      <motion.div
        className="absolute -bottom-[20%] -right-[10%] w-[700px] h-[700px] rounded-full blur-[160px] opacity-15 bg-gradient-to-tl from-[#C69F54] via-[#352B18] to-transparent"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -35, 25, 0],
                y: [0, -40, 20, 0],
                scale: [1, 0.96, 1.05, 1],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle Center Light Leak */}
      <motion.div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 bg-[#E5C07B]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [0.08, 0.14, 0.08],
                scale: [0.95, 1.1, 0.95],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Delicate floating ambient dust particles */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#E5C07B]/40 blur-[0.5px]"
              style={{
                top: `${15 + i * 14}%`,
                left: `${10 + (i * 17) % 80}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.7,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
