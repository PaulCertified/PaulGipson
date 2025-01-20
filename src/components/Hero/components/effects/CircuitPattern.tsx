import React from 'react';
import { motion } from 'framer-motion';

export const CircuitPattern = () => (
  <motion.div
    className="absolute inset-0 opacity-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.5 }}
    transition={{ duration: 0.6 }}
  >
    <svg width="100%" height="100%" className="absolute inset-0">
      <pattern
        id="circuit-pattern"
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 10 0 L 10 10 M 0 10 L 20 10"
          stroke="rgba(139, 92, 246, 0.3)"
          strokeWidth="0.5"
          fill="none"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
    </svg>
  </motion.div>
);
