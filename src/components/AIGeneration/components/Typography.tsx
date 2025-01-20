import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '../../ui';

export const Title = () => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
  >
    What Can I Build For You?
  </motion.h2>
);

export const Subtitle = () => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="text-xl md:text-2xl text-gray-400 mb-12"
  >
    <span className="text-white">I Am</span> your{' '}
    <GradientText>Superhuman Full Stack Engineer</GradientText>
  </motion.p>
);
