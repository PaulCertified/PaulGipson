import React, { useRef, useEffect, useState } from 'react';
import { TestimonialCard } from './components';
import { testimonialsConfig } from './config';
import { GradientText } from '../ui';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (!scrollRef.current || isPaused) return;
      
      const scrollAmount = 1;
      const currentScroll = scrollRef.current.scrollLeft;
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      
      if (currentScroll >= maxScroll) {
        scrollRef.current.scrollLeft = 0;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    };

    const interval = setInterval(scroll, 12);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-24 scroll-mt-24">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Kind words from{' '}
        <GradientText>satisfied clients</GradientText>
      </motion.h2>

      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide py-4"
          style={{ 
            scrollBehavior: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {[...testimonialsConfig.testimonials, ...testimonialsConfig.testimonials].map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              className="min-w-[900px] flex-shrink-0 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      <div className="mt-24 grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
        {testimonialsConfig.companies.map((company, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="px-6 py-4 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors group cursor-pointer border border-white/10"
          >
            <p className={`text-lg font-medium bg-gradient-to-r ${company.color} bg-clip-text text-transparent text-center`}>
              {company.logo}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
