import React from 'react';
import { Code2 } from 'lucide-react';
import { featuresConfig } from '../config';
import { GradientText } from '../../ui';

export const TechStackCard = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white/5 p-8 backdrop-blur-sm">
      <div className="mb-4">
        <Code2 className="w-6 h-6 text-purple-400" />
      </div>
      <h3 className="text-2xl font-bold mb-4">
        I constantly try to improve{' '}
        <GradientText>my tech stack</GradientText>
      </h3>
      <div className="flex flex-wrap gap-3 mt-6">
        {featuresConfig.technologies.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-white/5 rounded-lg text-sm hover:bg-white/10 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
