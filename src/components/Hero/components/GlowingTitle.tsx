import React from 'react';
import { motion } from 'framer-motion';

export const GlowingTitle = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-6xl md:text-7xl font-bold tracking-tighter mb-4 relative"
    >
      <span className="relative inline-block">
        {/* Glow Effect */}
        <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-30" />
        
        {/* Main Text with Gradient */}
        <span className="relative bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
          PAUL CERTIFIED
        </span>
        
        {/* Subtle Highlight */}
        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl" />
      </span>
    </motion.h1>
  );
};
