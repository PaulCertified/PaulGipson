import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Cloud, Rocket } from 'lucide-react';
import { ExpertiseCard } from './ExpertiseCard';
import { expertiseConfig } from '../config';

export const ExpertiseGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      {expertiseConfig.expertise.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <ExpertiseCard {...item} />
        </motion.div>
      ))}
    </div>
  );
};
