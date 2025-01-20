import React from 'react';
import { motion } from 'framer-motion';
import { ApproachCard } from './components/ApproachCard';
import { approachConfig } from './config';
import { GradientText } from '../ui';

const Approach = () => {
  const colorSchemes = ['purple', 'blue', 'cyan'] as const;

  return (
    <section id="approach" className="py-24 relative scroll-mt-24">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <GradientText>approach</GradientText>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {approachConfig.phases.map((phase, index) => (
          <motion.div
            key={phase.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ApproachCard
              {...phase}
              colorScheme={colorSchemes[index]}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Approach;
