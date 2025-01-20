import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icon';
import { CanvasRevealEffect } from '../../ui/canvas-reveal-effect/CanvasRevealEffect';
import type { Phase } from '../types';

interface ApproachCardProps extends Phase {
  colorScheme: 'purple' | 'blue' | 'cyan';
}

export const ApproachCard: React.FC<ApproachCardProps> = ({
  number,
  title,
  description,
  colorScheme,
}) => {
  const [hovered, setHovered] = useState(false);

  const colors = {
    purple: [[168, 85, 247], [139, 92, 246]],
    blue: [[59, 130, 246], [96, 165, 250]],
    cyan: [[34, 211, 238], [45, 212, 191]],
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.2] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative h-[30rem] rounded-[24px]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0 rounded-[24px] overflow-hidden"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName={`bg-${colorScheme}-900`}
              colors={colors[colorScheme]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="mb-4">
            <span className="text-2xl font-bold text-white">Phase {number}</span>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
          <p className="text-white/70">{description}</p>
        </motion.div>
      </div>
    </div>
  );
};
