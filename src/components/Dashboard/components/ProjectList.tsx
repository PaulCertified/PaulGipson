import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../types';

interface ProjectListProps {
  projects: Project[];
  isLoading: boolean;
  onUpdate: (id: string, data: Partial<Project>) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  isLoading,
  onUpdate,
  onDelete,
}) => {
  if (isLoading) {
    return <div>Loading projects...</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
      
      <div className="grid gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard
              project={project}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
