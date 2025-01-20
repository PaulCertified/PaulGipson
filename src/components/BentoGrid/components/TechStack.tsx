import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export const TechStack = () => {
  const technologies = [
    'React', 'Node.js', 'TypeScript', 'AWS', 'Next.js', 'Supabase'
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {technologies.map((tech, index) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="px-4 py-2 bg-neutral-800 rounded-lg text-sm hover:bg-neutral-700 transition-colors"
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
};
