import React from 'react';
import { GradientText } from '../../ui';
import { heroConfig } from '../config';

export const HeroTitle: React.FC = () => (
  <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
    {heroConfig.titleFirstPart}{' '}
    <span className="block mt-2">
      {heroConfig.titleSecondPart}{' '}
      <GradientText>{heroConfig.titleHighlight}</GradientText>
    </span>
  </h1>
);
