import React from 'react';
import { motion } from 'framer-motion';

interface HamburgerButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, toggle }) => {
  return (
    <motion.button
      onClick={toggle}
      className="relative h-12 w-12 rounded-full bg-white/5 md:hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex flex-col items-center justify-center gap-1.5">
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 8 : 0,
          }}
          className="h-0.5 w-6 bg-white origin-center transition-all"
        />
        <motion.span
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? -20 : 0,
          }}
          className="h-0.5 w-6 bg-white transition-all"
        />
        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
          }}
          className="h-0.5 w-6 bg-white origin-center transition-all"
        />
      </div>
    </motion.button>
  );
};
