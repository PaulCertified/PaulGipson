import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-colors">
      <div className="relative z-10">
        <Icon className="w-8 h-8 text-purple-400 mb-4" />
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};
