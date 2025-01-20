import React from 'react';
import { motion } from 'framer-motion';
import { HeroHeader } from './components';
import { GradientText } from '../ui';

const Hero: React.FC = () => {
  return (
    <main className="min-h-[80vh] flex items-center justify-center pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <HeroHeader />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
        >
          Transforming ideas into exceptional digital experiences with
          {' '}<GradientText>modern technologies</GradientText>{' '}
          and innovative solutions.
        </motion.p>
      </motion.div>
    </main>
  );
};

export default Hero;
