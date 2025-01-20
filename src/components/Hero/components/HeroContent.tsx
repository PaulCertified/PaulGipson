import React from 'react';
import { GradientText } from '../../ui';
import { heroConfig } from '../config';
import { HeroTitle } from './HeroTitle';
import { HeroDescription } from './HeroDescription';

export const HeroContent: React.FC = () => {
  return (
    <>
      <HeroTitle />
      <HeroDescription />
    </>
  );
};
