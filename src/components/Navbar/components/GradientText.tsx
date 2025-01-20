import React from 'react';
import type { GradientTextProps } from '../types';

export const GradientText: React.FC<GradientTextProps> = ({ children }) => {
  return (
    <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
      {children}
    </div>
  );
};
