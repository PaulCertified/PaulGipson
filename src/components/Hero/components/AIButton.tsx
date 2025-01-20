import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { CircuitPattern } from './effects/CircuitPattern';
import { AIRipple } from './effects/AIRipple';

interface AIButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const AIButton: React.FC<AIButtonProps> = ({ onClick, children }) => {
  return (
    <div className="relative inline-block">
      {/* Background Effects */}
      <div className="absolute inset-[-1px] rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-md" />
      <CircuitPattern />
      <AIRipple />
      
      {/* Button */}
      <motion.button
        onClick={onClick}
        className="relative z-10 px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 text-white backdrop-blur-sm border border-white/10 bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </div>
  );
};
