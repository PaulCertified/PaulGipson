import React from 'react';
import { motion } from 'framer-motion';
import type { NavLinkProps } from '../types';
import { cn } from '../../../utils/cn';

export const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick, className }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className={cn(
        "px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors relative",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 bg-white/5 rounded-full opacity-0 hover:opacity-100 transition-opacity" />
    </motion.a>
  );
};
