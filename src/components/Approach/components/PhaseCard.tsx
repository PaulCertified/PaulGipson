import React from 'react';
import { motion } from 'framer-motion';
import { CircuitReveal } from './reveal-effects/CircuitReveal';
import { WaveReveal } from './reveal-effects/WaveReveal';
import { ParticleReveal } from './reveal-effects/ParticleReveal';
import type { Phase } from '../types';
import { cn } from '../../../utils/cn';

interface PhaseCardProps extends Phase {
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  colorScheme: 'purple' | 'blue' | 'cyan';
}

const RevealEffects = {
  purple: CircuitReveal,
  blue: WaveReveal,
  cyan: ParticleReveal,
};

export const PhaseCard: React.FC<PhaseCardProps> = ({
  number,
  title,
  description,
  isHovered,
  onHover,
  onLeave,
  colorScheme,
}) => {
  const RevealEffect = RevealEffects[colorScheme];

  return (
    <motion.div
      className="relative w-full aspect-[3/4] md:aspect-[2/3] perspective"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={cn(
        "relative w-full h-full rounded-[24px] md:rounded-[32px] border border-white/[0.08]",
        "bg-[#0A0A1B] overflow-hidden group transition-all duration-500",
        isHovered && "bg-[#0F0F23]"
      )}>
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-6 md:w-8 h-6 md:h-8 border-l border-t border-white/10" />
        <div className="absolute top-0 right-0 w-6 md:w-8 h-6 md:h-8 border-r border-t border-white/10" />
        <div className="absolute bottom-0 left-0 w-6 md:w-8 h-6 md:h-8 border-l border-b border-white/10" />
        <div className="absolute bottom-0 right-0 w-6 md:w-8 h-6 md:h-8 border-r border-b border-white/10" />

        {/* AI Reveal Effect */}
        <RevealEffect isActive={isHovered} />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center p-6 md:p-8 text-center">
          {/* Phase Number */}
          <motion.div
            className={cn(
              "text-base md:text-lg font-medium px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-white/10",
              colorScheme === 'purple' && "bg-gradient-to-r from-purple-400/10 to-violet-400/10 text-purple-400",
              colorScheme === 'blue' && "bg-gradient-to-r from-blue-400/10 to-cyan-400/10 text-blue-400",
              colorScheme === 'cyan' && "bg-gradient-to-r from-cyan-400/10 to-teal-400/10 text-cyan-400"
            )}
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            Phase {number}
          </motion.div>

          {/* Revealed Content */}
          <motion.div
            className="absolute inset-0 p-6 md:p-8 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className={cn(
                "text-2xl md:text-[2rem] leading-tight font-bold mb-4 md:mb-6",
                "bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent",
                "tracking-[-0.02em]"
              )}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {title}
            </motion.h3>

            <motion.p
              className={cn(
                "text-base md:text-lg leading-relaxed",
                "max-w-[280px] mx-auto",
                "text-white/70 font-light tracking-wide"
              )}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
