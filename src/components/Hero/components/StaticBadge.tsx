import React from 'react';

interface StaticBadgeProps {
  text: string;
}

export const StaticBadge: React.FC<StaticBadgeProps> = ({ text }) => {
  return (
    <div className="inline-block px-6 py-2 mb-6 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
        {text}
      </span>
    </div>
  );
};
