import React from 'react';
import { Quote } from 'lucide-react';
import type { Testimonial } from '../types';
import { motion } from 'framer-motion';

interface TestimonialCardProps extends Testimonial {
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  author,
  role,
  company,
  avatar,
  className = '',
}) => {
  return (
    <motion.div 
      className={`relative bg-[#0A0A1B]/80 p-12 rounded-[32px] backdrop-blur-sm border border-white/[0.08] ${className}`}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <Quote className="w-8 h-8 text-purple-400 mb-8 opacity-50" />
      <p className="text-[20px] leading-relaxed text-white/90 mb-12 max-w-[800px]">{content}</p>
      
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={author}
          className="w-14 h-14 rounded-full object-cover border-2 border-purple-400/20"
        />
        <div>
          <h4 className="text-xl font-medium text-white">{author}</h4>
          <p className="text-base text-white/60">
            {role} at {company}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] to-blue-500/[0.03] rounded-[32px] pointer-events-none" />
    </motion.div>
  );
};
