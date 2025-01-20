import React from 'react';

export const GradientText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
    {children}
  </span>
);
