import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface WaveRevealProps {
  isActive: boolean;
}

export const WaveReveal: React.FC<WaveRevealProps> = ({ isActive }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    let time = 0;
    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!isActive) return;

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(34, 211, 238, 0.15)');
      gradient.addColorStop(1, 'rgba(45, 212, 191, 0.15)');

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x <= canvas.width; x += 10) {
          const y = canvas.height * 0.5 +
            Math.sin(x * 0.01 + time + i) * 50 +
            Math.sin(x * 0.02 + time * 1.5) * 20;
          
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = 0.1;
        ctx.fill();
      }

      time += 0.02;
    };

    resizeCanvas();
    const interval = setInterval(drawWaves, 1000 / 60);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isActive]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    />
  );
};
