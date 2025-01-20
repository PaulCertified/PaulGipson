import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface ImagePreviewProps {
  imageUrl: string | null;
  isLoading: boolean;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ imageUrl, isLoading }) => {
  if (!imageUrl && !isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative mb-8 rounded-2xl overflow-hidden bg-[#1C1C2E] border border-white/10"
    >
      {isLoading ? (
        <div className="aspect-square flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-8 h-8 animate-spin text-purple-400" />
            <p className="text-gray-400">Generating your image...</p>
          </div>
        </div>
      ) : imageUrl ? (
        <img
          src={imageUrl}
          alt="Generated preview"
          className="w-full aspect-square object-cover"
        />
      ) : null}
    </motion.div>
  );
};
