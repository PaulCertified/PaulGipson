import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useCursorPosition } from './hooks/useCursorPosition';
import { useCursorVariant } from './hooks/useCursorVariant';
import { SPRING_CONFIG } from './constants';

export const CursorFollower: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { mouseX, mouseY } = useCursorPosition();
  const { variant, setVariant } = useCursorVariant();
  
  const springX = useSpring(mouseX, SPRING_CONFIG);
  const springY = useSpring(mouseY, SPRING_CONFIG);

  useEffect(() => {
    const handleMouseEnter = () => setVariant('hover');
    const handleMouseLeave = () => setVariant('default');

    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [setVariant]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
        }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          variants={{
            default: { scale: 1 },
            hover: { scale: 1.5 },
          }}
          animate={variant}
        >
          <div className="absolute w-3 h-3 bg-white rounded-full" />
          <div className="absolute w-7 h-7 border border-white rounded-full opacity-50" />
        </motion.div>
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="fixed pointer-events-none z-40"
        style={{
          x: springX,
          y: springY,
          width: 80,
          height: 80,
          backgroundColor: 'rgba(147, 51, 234, 0.1)',
          borderRadius: '50%',
          filter: 'blur(20px)',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};
