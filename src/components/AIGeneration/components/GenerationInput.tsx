import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface GenerationInputProps {
  value: string;
  onChange: (value: string) => void;
  onGenerate?: (prompt: string) => void;
  isGenerating?: boolean;
}

export const GenerationInput: React.FC<GenerationInputProps> = ({ 
  value, 
  onChange, 
  onGenerate,
  isGenerating = false,
}) => {
  const handleGenerate = () => {
    if (value.trim() && onGenerate && !isGenerating) {
      onGenerate(value);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative mb-8"
    >
      <div className="relative rounded-2xl bg-[#1C1C2E] border border-white/10 overflow-hidden">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="What would you like me to build for you?"
          className="w-full bg-transparent text-white placeholder-gray-400 p-6 pb-20 h-32 resize-none focus:outline-none"
          style={{ overflowY: 'auto' }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-[#1C1C2E] flex items-center justify-end">
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !value.trim()}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate'
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
