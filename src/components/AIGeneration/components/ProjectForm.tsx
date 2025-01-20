import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle } from 'lucide-react';

interface ProjectFormProps {
  onSubmit: (data: any) => void;
  submitted: boolean;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({ onSubmit, submitted }) => {
  const [formData, setFormData] = useState({
    projectType: '',
    description: '',
    timeline: '',
    budget: '',
    name: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="relative rounded-2xl bg-[#1C1C2E] border border-white/10 overflow-hidden p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Project Type
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full bg-[#0F0F23] text-white rounded-lg border border-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="">Select project type</option>
              <option value="website">Website Development</option>
              <option value="webapp">Web Application</option>
              <option value="ecommerce">E-commerce Platform</option>
              <option value="custom">Custom Solution</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Timeline
            </label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full bg-[#0F0F23] text-white rounded-lg border border-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="">Select timeline</option>
              <option value="1-2">1-2 weeks</option>
              <option value="2-4">2-4 weeks</option>
              <option value="4-8">1-2 months</option>
              <option value="8+">2+ months</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Project Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your project requirements..."
              className="w-full bg-[#0F0F23] text-white rounded-lg border border-white/10 p-3 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#0F0F23] text-white rounded-lg border border-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#0F0F23] text-white rounded-lg border border-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            disabled={submitted}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {submitted ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Submitted!
              </>
            ) : (
              <>
                Send Request
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </motion.form>
  );
};
