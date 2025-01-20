import { useState } from 'react';
import { supabase } from '../../../../lib/supabase';
import type { ProjectFormData } from '../../types';

export function useProjectForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (formData: ProjectFormData) => {
    try {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      const { error } = await supabase
        .from('project_requests')
        .insert([{
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          project_type: formData.project_type,
          description: formData.description
        }]);

      if (error) throw error;

      setSubmitStatus('success');
      return true;
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitStatus('error');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitStatus,
    handleSubmit
  };
}
