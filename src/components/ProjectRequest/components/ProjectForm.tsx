import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { cn } from "../../../utils/cn";
import { supabase } from "../../../lib/supabase";
import { Loader2 } from "lucide-react";

export const ProjectForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    
    // Validate required fields
    const data = {
      first_name: formData.get('firstname')?.toString().trim(),
      last_name: formData.get('lastname')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
      project_type: formData.get('projectType')?.toString(),
      description: formData.get('description')?.toString().trim(),
    };

    // Check if any required field is missing
    if (!data.first_name || !data.last_name || !data.email || !data.project_type || !data.description) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('project_requests')
        .insert([data]);

      if (error) throw error;

      setSubmitStatus('success');
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#1C1C2E] border border-white/10">
      <h2 className="font-bold text-xl text-white mb-2">
        Start Your Project
      </h2>
      <p className="text-neutral-300 text-sm max-w-sm mb-8">
        Fill out the form below to get started on your next project
      </p>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
          Thank you! Your project request has been submitted successfully.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
          Please fill out all required fields and try again.
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name *</Label>
            <Input 
              id="firstname" 
              name="firstname" 
              placeholder="John" 
              type="text" 
              required 
              minLength={2}
              maxLength={50}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name *</Label>
            <Input 
              id="lastname" 
              name="lastname" 
              placeholder="Doe" 
              type="text" 
              required
              minLength={2}
              maxLength={50}
            />
          </LabelInputContainer>
        </div>
        
        <LabelInputContainer>
          <Label htmlFor="email">Email Address *</Label>
          <Input 
            id="email" 
            name="email" 
            placeholder="you@example.com" 
            type="email" 
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="projectType">Project Type *</Label>
          <select
            id="projectType"
            name="projectType"
            required
            className={cn(
              "flex h-10 w-full rounded-md px-3 py-2 text-sm",
              "bg-[#0F0F23] text-white border border-white/10",
              "focus:outline-none focus:ring-2 focus:ring-purple-500"
            )}
          >
            <option value="">Select project type</option>
            <option value="website">Website</option>
            <option value="webapp">Web Application</option>
            <option value="ecommerce">E-commerce</option>
            <option value="other">Other</option>
          </select>
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="description">Project Description *</Label>
          <textarea
            id="description"
            name="description"
            placeholder="Tell us about your project..."
            required
            minLength={10}
            maxLength={1000}
            className={cn(
              "flex w-full rounded-md px-3 py-2 text-sm min-h-[100px]",
              "bg-[#0F0F23] text-white border border-white/10",
              "focus:outline-none focus:ring-2 focus:ring-purple-500",
              "resize-none"
            )}
          />
        </LabelInputContainer>

        <button
          className={cn(
            "bg-gradient-to-br relative group/btn from-purple-500 to-blue-500",
            "block w-full text-white rounded-md h-10 font-medium",
            "shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </span>
          ) : (
            "Submit Project Request →"
          )}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
