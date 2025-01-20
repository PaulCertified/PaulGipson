import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div 
      className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" 
      style={{
        maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, black, transparent)',
        WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, black, transparent)'
      }}
    />
  );
};
