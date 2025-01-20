import React from "react";
import { motion } from "framer-motion";
import { ProjectPin } from "./ProjectPin";
import { useRecentProjects } from "../../../hooks/useRecentProjects";
import { Loader2 } from "lucide-react";

export const ProjectGrid = () => {
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <ProjectPin project={project} />
        </motion.div>
      ))}
    </div>
  );
};
