import { useCallback } from 'react';
import { FALLBACK_IMAGE_URL } from '../constants';

export const useProfileImage = () => {
  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    img.onerror = null; // Prevent infinite loop
    img.src = FALLBACK_IMAGE_URL;
  }, []);

  return { handleImageError };
};
