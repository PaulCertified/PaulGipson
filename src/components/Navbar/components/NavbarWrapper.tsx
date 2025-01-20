import React from 'react';
import { motion } from 'framer-motion';
import type { NavbarWrapperProps } from '../types';

export const NavbarWrapper: React.FC<NavbarWrapperProps> = ({ children }) => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.header>
  );
};
