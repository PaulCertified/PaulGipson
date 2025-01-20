import { RefObject } from 'react';

export const useScroll = (ref: RefObject<HTMLDivElement>) => {
  const scroll = (direction: 'left' | 'right') => {
    if (!ref.current) return;

    const scrollAmount = ref.current.offsetWidth;
    ref.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return {
    scrollLeft: () => scroll('left'),
    scrollRight: () => scroll('right'),
  };
};
