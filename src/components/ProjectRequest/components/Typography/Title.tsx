import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '../../../ui';

export const Title = () => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
  >
    Let's Build Your
    <br />
    <GradientText>Next Project</GradientText>
  </motion.h2>
);
