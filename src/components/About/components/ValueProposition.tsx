import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '../../ui';

export const ValueProposition = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto"
    >
      <h3 className="text-3xl font-bold mb-6">
        Why Work with <GradientText>Me</GradientText>
      </h3>
      <p className="text-lg text-gray-400">
        As a certified AWS Solutions Architect and an experienced full stack developer, 
        I bring a unique combination of technical expertise and a deep understanding of 
        cloud-native architectures. My goal is to help you create a website or application 
        that is not only visually appealing but also highly functional, secure, and 
        scalable for your growing business. Let's work together to bring your ideas to life!
      </p>
    </motion.div>
  );
};
