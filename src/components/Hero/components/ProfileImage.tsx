import React from 'react';
import { motion } from 'framer-motion';
import { useProfileImage } from '../hooks/useProfileImage';
import { PROFILE_IMAGE_URL } from '../constants';

// Import the image directly for better bundling and optimization
import profileImage from '../../../assets/images/profile.jpg';

export const ProfileImage = () => {
  const { handleImageError } = useProfileImage();

  return (
    <div className="relative w-48 h-48 mx-auto mb-8">
      {/* Octagon Border Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[2rem] rotate-45 blur-xl opacity-20 animate-pulse" />
      
      {/* Octagon Shape Container */}
      <motion.div
        className="relative w-full h-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Octagon Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-[2rem] rotate-45" />
        
        {/* Inner Octagon with Image */}
        <div className="absolute inset-[2px] bg-[#0A0A1B] rounded-[2rem] rotate-45 overflow-hidden">
          <div className="absolute inset-0 rotate-[-45deg]">
            <img
              src={profileImage}
              alt="Paul Certified - Chief AI Solutions Architect"
              className="w-full h-full object-cover transform scale-[1.2] hover:scale-[1.3] transition-transform duration-500"
              loading="eager"
              onError={handleImageError}
            />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-[2.5rem] rotate-45 blur-xl" />
      </motion.div>

      {/* Ambient Light Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl scale-150" />
    </div>
  );
};
