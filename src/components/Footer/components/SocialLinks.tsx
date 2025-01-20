import React from 'react';
import { motion } from 'framer-motion';
import type { SocialLink } from '../types';

interface SocialLinksProps {
  links: SocialLink[];
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex items-center gap-4">
      {links.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        >
          <link.icon className="w-5 h-5" />
          <span className="sr-only">{link.name}</span>
        </motion.a>
      ))}
    </div>
  );
};
