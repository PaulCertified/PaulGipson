import React from 'react';
import type { Technology } from '../types';

export const TechBadge: React.FC<Technology> = ({ name, icon: Icon }) => (
  <div className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 rounded-full text-sm">
    <Icon className="w-4 h-4" />
    {name}
  </div>
);
