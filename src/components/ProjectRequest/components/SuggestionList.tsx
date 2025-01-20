import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Suggestion } from '../types';

interface SuggestionListProps {
  suggestions: Suggestion[];
}

export const SuggestionList: React.FC<SuggestionListProps> = ({ suggestions }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-wrap justify-center gap-4"
    >
      {suggestions.map((suggestion, index) => (
        <motion.div
          key={suggestion.text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
          className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 
                   flex items-center gap-2 transition-all hover:scale-105"
        >
          {suggestion.text}
          <ArrowUpRight className="w-4 h-4" />
        </motion.div>
      ))}
    </motion.div>
  );
};
