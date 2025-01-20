import React from 'react';
import { motion } from 'framer-motion';

export const CertificationBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20"
    >
      <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        AWS Certified Solutions Architect • Full-Stack Web Developer
      </span>
    </motion.div>
  );
};
