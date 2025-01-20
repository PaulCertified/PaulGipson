import React from 'react';
import { BentoCard } from './components/BentoCard';
import { BentoTitle } from './components/BentoTitle';
import { BentoDescription } from './components/BentoDescription';
import { bentoConfig } from './config';

export const BentoGrid = () => {
  return (
    <section className="relative z-20 pt-0 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <BentoTitle />
        <BentoDescription />

        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 gap-4 xl:border rounded-2xl border-white/10 bg-[#0F0F23]/50 backdrop-blur-sm">
          {bentoConfig.features.map((feature) => (
            <BentoCard key={feature.title} className={feature.className}>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-400 text-sm mb-4">{feature.description}</p>
              {feature.content && feature.content()}
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
};
