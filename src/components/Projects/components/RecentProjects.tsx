import React from 'react';
import { motion } from 'framer-motion';
import { useRecentProjects } from '../../../hooks/useRecentProjects';
import { ProjectCard } from './ProjectCard';
import { Loader2 } from 'lucide-react';

export const RecentProjects = () => {
  const { projects, isLoading, error } = useRecentProjects();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-purple-400" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-400 text-center py-12">
        Failed to load projects
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-gray-400 text-center py-12">
        No projects yet
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </div>
  );
};
