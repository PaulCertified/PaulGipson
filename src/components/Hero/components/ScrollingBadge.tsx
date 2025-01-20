import React from 'react';
import { motion } from 'framer-motion';

interface ScrollingBadgeProps {
  badges: string[];
}

export const ScrollingBadge: React.FC<ScrollingBadgeProps> = ({ badges }) => {
  const badgeText = badges.join(' • ');
  
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-2 mb-6 overflow-hidden bg-gradient-to-r from-purple-500/5 to-blue-500/5">
      <div className="relative whitespace-nowrap">
        <motion.div
          animate={{
            x: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="inline-block"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">
            {`${badgeText} • ${badgeText} • `}
          </span>
        </motion.div>
      </div>
    </div>
  );
};
