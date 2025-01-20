import React from 'react';
import { AnimatedBackground } from '../ui';

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => (
  <div className="min-h-screen bg-[#0A0A1B] text-white relative">
    <AnimatedBackground />
    {children}
  </div>
);
