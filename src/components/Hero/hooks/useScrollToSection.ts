import { useCallback } from 'react';

export const useScrollToSection = (sectionId: string) => {
  return useCallback(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionId]);
};
