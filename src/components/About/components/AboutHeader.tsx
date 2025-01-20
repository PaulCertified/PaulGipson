import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '../../ui';

export const AboutHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        About <GradientText>Me</GradientText>
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        Hello! I'm a Full Stack Website Creator and a certified AWS Solutions Architect with a passion for building scalable, secure, and user-friendly web applications. I specialize in combining modern frontend frameworks with robust backend solutions to deliver seamless, high-performing websites tailored to your needs.
      </p>
    </motion.div>
  );
};
