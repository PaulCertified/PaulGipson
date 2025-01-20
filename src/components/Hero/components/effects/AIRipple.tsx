import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const AIRipple = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let ripples: Array<{
      x: number;
      y: number;
      radius: number;
      life: number;
      maxRadius: number;
    }> = [];

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    const createRipple = () => {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 30;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      ripples.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        radius: 2,
        life: 1,
        maxRadius: 15 + Math.random() * 10,
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (ripples.length < 5 && Math.random() < 0.2) {
        createRipple();
      }

      ripples.forEach((ripple, index) => {
        ripple.radius += 0.5;
        ripple.life -= 0.02;

        if (ripple.life <= 0 || ripple.radius >= ripple.maxRadius) {
          ripples.splice(index, 1);
          return;
        }

        const gradient = ctx.createRadialGradient(
          ripple.x, ripple.y, 0,
          ripple.x, ripple.y, ripple.radius
        );
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0)');
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${ripple.life * 0.2})`);
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    />
  );
};
