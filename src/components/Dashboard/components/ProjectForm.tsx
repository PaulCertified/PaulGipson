import React from 'react';
import { useForm } from 'react-hook-form';
import { Loader2, Plus, Image as ImageIcon } from 'lucide-react';
import type { ProjectFormData } from '../types';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { cn } from '../../../utils/cn';

interface ProjectFormProps {
  onSubmit: (data: ProjectFormData) => Promise<void>;
  initialData?: ProjectFormData;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({ onSubmit, initialData }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm<ProjectFormData>({
    defaultValues: initialData,
  });

  const imageFile = watch('image');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white/5 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-6 text-white">
        {initialData ? 'Edit Project' : 'Add New Project'}
      </h2>

      <div className="space-y-6">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            {...register('title', { required: 'Title is required' })}
            className="w-full"
          />
          {errors.title && (
            <p className="text-red-400 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <textarea
            {...register('description', { required: 'Description is required' })}
            className={cn(
              "w-full rounded-md px-3 py-2 text-sm min-h-[100px]",
              "bg-[#1C1C2E] text-white border border-white/10",
              "focus:outline-none focus:ring-2 focus:ring-purple-400",
              "resize-none"
            )}
          />
          {errors.description && (
            <p className="text-red-400 text-sm mt-1">{errors.description.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="image">Project Image</Label>
          <div className="mt-2">
            <label className={cn(
              "relative block w-full h-64",
              "border-2 border-dashed rounded-lg cursor-pointer",
              "border-white/10 bg-[#1C1C2E] hover:bg-[#252538]",
              "transition-colors duration-200"
            )}>
              {imageFile?.[0] ? (
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={URL.createObjectURL(imageFile[0])} 
                    alt="Preview" 
                    className="w-full h-full object-contain rounded-lg p-2"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <ImageIcon className="w-8 h-8 mb-4 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-400">PNG, JPG or WEBP (MAX. 4MB)</p>
                </div>
              )}
              <input
                type="file"
                className="hidden"
                accept="image/*"
                {...register('image', { 
                  required: 'Project image is required',
                  validate: {
                    fileSize: (files) => !files?.[0] || files[0].size <= 4000000 || 'Image must be less than 4MB',
                    fileType: (files) => 
                      !files?.[0] || 
                      ['image/jpeg', 'image/png', 'image/webp'].includes(files[0].type) || 
                      'Only PNG, JPG and WEBP files are allowed'
                  }
                })}
              />
            </label>
          </div>
          {errors.image && (
            <p className="text-red-400 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="technologies">Technologies (comma-separated)</Label>
          <Input
            {...register('technologies')}
            placeholder="React, TypeScript, Tailwind"
            className="w-full"
          />
        </div>

        <div>
          <Label htmlFor="liveUrl">Live URL (optional)</Label>
          <Input
            {...register('liveUrl')}
            placeholder="https://example.com"
            className="w-full"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full bg-purple-500 hover:bg-purple-600 text-white rounded-md p-2",
            "flex items-center justify-center gap-2",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              {initialData ? 'Update Project' : 'Add Project'}
            </>
          )}
        </button>
      </div>
    </form>
  );
};
