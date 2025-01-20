import { useState, useCallback } from 'react';

type CursorVariant = 'default' | 'hover';

export const useCursorVariant = () => {
  const [variant, setVariant] = useState<CursorVariant>('default');

  const updateVariant = useCallback((newVariant: CursorVariant) => {
    setVariant(newVariant);
  }, []);

  return { variant, setVariant: updateVariant };
};
