import React, { useState } from 'react';
import { Edit2, Trash2, X, Check } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onUpdate: (id: string, data: Partial<Project>) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onUpdate,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(project.title);

  const handleUpdate = async () => {
    await onUpdate(project.id, { title: editedTitle });
    setIsEditing(false);
  };

  return (
    <div className="bg-white/5 p-4 rounded-lg flex items-center justify-between group">
      <div className="flex items-center gap-4">
        <img
          src={project.image_url}
          alt={project.title}
          className="w-16 h-16 rounded object-cover"
        />
        
        <div>
          {isEditing ? (
            <input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="bg-white/5 border border-white/10 rounded px-2 py-1"
            />
          ) : (
            <h3 className="font-medium">{project.title}</h3>
          )}
          <p className="text-sm text-gray-400">{project.description}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {isEditing ? (
          <>
            <button
              onClick={handleUpdate}
              className="p-2 hover:bg-green-500/20 rounded-full"
            >
              <Check className="w-4 h-4 text-green-400" />
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="p-2 hover:bg-red-500/20 rounded-full"
            >
              <X className="w-4 h-4 text-red-400" />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 hover:bg-blue-500/20 rounded-full"
            >
              <Edit2 className="w-4 h-4 text-blue-400" />
            </button>
            <button
              onClick={() => onDelete(project.id)}
              className="p-2 hover:bg-red-500/20 rounded-full"
            >
              <Trash2 className="w-4 h-4 text-red-400" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
