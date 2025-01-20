import React from 'react';
import { motion } from 'framer-motion';
import { AboutHeader } from './components/AboutHeader';
import { ExpertiseGrid } from './components/ExpertiseGrid';
import { ServicesList } from './components/ServicesList';
import { ValueProposition } from './components/ValueProposition';

const About = () => {
  return (
    <section id="about" className="py-24 relative scroll-mt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,black,transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AboutHeader />
        <ExpertiseGrid />
        <ServicesList />
        <ValueProposition />
      </div>
    </section>
  );
};

export default About;
