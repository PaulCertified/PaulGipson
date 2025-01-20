import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TechBadge } from './TechBadge';
import type { Project } from '../types';

export const ProjectCard: React.FC<Project> = ({
  title,
  description,
  image_url,
  technologies,
  live_url,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white/5 p-6 backdrop-blur-sm">
      <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-6">
        <img
          src={image_url}
          alt={title}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/800x450?text=Image+Not+Found';
          }}
        />
      </div>

      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech) => (
          <span 
            key={tech} 
            className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {live_url && (
        <a
          href={live_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          Check Live Site
          <ArrowUpRight className="w-4 h-4" />
        </a>
      )}
    </div>
  );
};
