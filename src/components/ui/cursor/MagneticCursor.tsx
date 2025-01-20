import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useCursorPosition } from './hooks/useCursorPosition';
import { SPRING_CONFIG, PARTICLE_COLORS } from './constants';

export const MagneticCursor: React.FC = () => {
  const { mouseX, mouseY } = useCursorPosition();
  const cursorSize = useMotionValue(8);
  const cursorOpacity = useMotionValue(1);
  
  const springX = useSpring(mouseX, SPRING_CONFIG);
  const springY = useSpring(mouseY, SPRING_CONFIG);

  // Generate particles
  const particles = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    const radius = useTransform(cursorSize, [8, 32], [20, 50]);
    
    return {
      x: useTransform(springX, (x) => x + Math.cos(angle) * radius.get()),
      y: useTransform(springY, (y) => y + Math.sin(angle) * radius.get()),
      color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
      scale: useSpring(1, { stiffness: 200, damping: 10 }),
    };
  });

  useEffect(() => {
    const handleMouseEnter = () => {
      cursorSize.set(32);
      cursorOpacity.set(0.8);
      particles.forEach(particle => particle.scale.set(1.5));
    };

    const handleMouseLeave = () => {
      cursorSize.set(8);
      cursorOpacity.set(1);
      particles.forEach(particle => particle.scale.set(1));
    };

    const elements = document.querySelectorAll('a, button, [role="button"]');
    elements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorSize, cursorOpacity, particles]);

  return (
    <>
      {/* Magnetic field particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-50"
          style={{
            x: particle.x,
            y: particle.y,
            scale: particle.scale,
            backgroundColor: particle.color,
            width: 4,
            height: 4,
            borderRadius: '50%',
            opacity: 0.6,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Core cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          x: springX,
          y: springY,
          width: cursorSize,
          height: cursorSize,
          backgroundColor: '#fff',
          borderRadius: '50%',
          opacity: cursorOpacity,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Magnetic field glow */}
      <motion.div
        className="fixed pointer-events-none z-40 mix-blend-screen"
        style={{
          x: springX,
          y: springY,
          width: 120,
          height: 120,
          background: 'radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(79,70,229,0.1) 50%, transparent 70%)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};
