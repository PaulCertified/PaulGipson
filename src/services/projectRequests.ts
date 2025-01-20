import { supabase } from '../lib/supabase';
import type { ProjectFormData } from '../types';

export async function submitProjectRequest(data: ProjectFormData) {
  try {
    const { error } = await supabase
      .from('project_requests')
      .insert([{
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        project_type: data.project_type,
        description: data.description
      }]);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error submitting project request:', error);
    return { 
      success: false, 
      error: 'Failed to submit project request. Please try again.' 
    };
  }
}
