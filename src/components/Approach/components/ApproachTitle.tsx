import React from 'react';
import { GradientText } from '../../ui';
import { motion } from 'framer-motion';

export const ApproachTitle: React.FC = () => {
  return (
    <motion.h2 
      className="text-4xl md:text-5xl font-bold text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      My{' '}
      <GradientText>approach</GradientText>
    </motion.h2>
  );
};
