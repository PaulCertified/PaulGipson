import React from 'react';
import { GlowingTitle } from './GlowingTitle';
import { CertificationBadge } from './CertificationBadge';

export const HeroHeader = () => {
  return (
    <div className="text-center mb-12">
      <GlowingTitle />
      <CertificationBadge />
    </div>
  );
};
