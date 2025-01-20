import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { contactConfig } from './config';
import { GradientText } from '../ui';
import { motion } from 'framer-motion';

const Contact = () => {
  const handleContactClick = () => {
    window.location.href = `mailto:${contactConfig.email}`;
  };

  return (
    <section id="contact" className="py-32 relative scroll-mt-24">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,black,transparent)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to take{' '}
          <GradientText>your</GradientText>{' '}
          digital presence to the next level?
        </h2>
        
        <p className="text-gray-400 mb-12">
          {contactConfig.description}
        </p>

        <motion.button
          onClick={handleContactClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glow-button px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 text-white"
        >
          Contact Me Now
          <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Contact;
