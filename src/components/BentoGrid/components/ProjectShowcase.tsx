import React from 'react';
import { motion } from 'framer-motion';

export const ProjectShowcase = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-neutral-900 shadow-2xl group h-full rounded-lg overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
          alt="Code on screen"
          className="h-full w-full aspect-square object-cover object-left-top rounded-lg transition-transform duration-500 group-hover:scale-110"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-[#0A0A1B] via-[#0A0A1B]/50 to-transparent" />
    </div>
  );
};
