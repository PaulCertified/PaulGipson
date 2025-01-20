import React from 'react';

export const GradientBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
    <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
      {children}
    </span>
  </div>
);
