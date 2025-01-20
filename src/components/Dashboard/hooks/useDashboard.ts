import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';
import { useStorage } from './useStorage';
import type { Project, ProjectFormData } from '../types';

export const useDashboard = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { uploadImage } = useStorage();

  const fetchProjects = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No authenticated user');

      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch projects');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const addProject = async (data: ProjectFormData) => {
    try {
      if (projects.length >= 4) {
        throw new Error('Maximum of 4 projects allowed');
      }

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No authenticated user');

      const imageUrl = await uploadImage(data.image[0]);

      const { error } = await supabase
        .from('projects')
        .insert([{
          title: data.title,
          description: data.description,
          image_url: imageUrl,
          live_url: data.liveUrl,
          technologies: data.technologies
            .split(',')
            .map(tech => tech.trim())
            .filter(Boolean),
          user_id: user.id
        }]);

      if (error) throw error;
      fetchProjects();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add project');
      throw err;
    }
  };

  const updateProject = async (id: string, data: Partial<Project>) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No authenticated user');

      const { error } = await supabase
        .from('projects')
        .update(data)
        .eq('id', id)
        .eq('user_id', user.id);

      if (error) throw error;
      fetchProjects();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update project');
    }
  };

  const deleteProject = async (id: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No authenticated user');

      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id);

      if (error) throw error;
      fetchProjects();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete project');
    }
  };

  return {
    projects,
    isLoading,
    error,
    addProject,
    updateProject,
    deleteProject,
  };
};
