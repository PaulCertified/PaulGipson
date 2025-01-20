import React from 'react';
import { cn } from '../../../utils/cn';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({ children, className }) => {
  return (
    <div className={cn(
      'p-4 sm:p-8 relative overflow-hidden group transition-colors duration-300',
      'hover:bg-white/5',
      className
    )}>
      <div className="relative z-10">
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};
