import React from 'react';
import { heroConfig } from '../config';

export const HeroDescription: React.FC = () => (
  <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
    {heroConfig.description}
  </p>
);
