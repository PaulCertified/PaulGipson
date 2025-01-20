import React from "react";
import { PinContainer } from "../../ui/3d-pin";
import type { Project } from "../types";

interface ProjectPinProps {
  project: Project;
}

export const ProjectPin: React.FC<ProjectPinProps> = ({ project }) => {
  return (
    <PinContainer
      title={project.title}
      href={project.live_url}
      className="relative w-full h-[30rem] rounded-xl bg-[#1C1C2E] border border-white/[0.08] overflow-hidden"
    >
      <div className="flex flex-col p-6 h-full">
        <div className="flex-1 relative">
          <img
            src={project.image_url}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1C1C2E]" />
        </div>
        
        <div className="relative z-10 mt-4">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </PinContainer>
  );
};
