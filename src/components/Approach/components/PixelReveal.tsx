import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface PixelRevealProps {
  isActive: boolean;
  colorScheme: 'purple' | 'blue' | 'cyan';
}

const COLOR_SCHEMES = {
  purple: {
    primary: 'rgba(168, 85, 247, 0.15)',
    secondary: 'rgba(139, 92, 246, 0.15)',
  },
  blue: {
    primary: 'rgba(59, 130, 246, 0.15)',
    secondary: 'rgba(96, 165, 250, 0.15)',
  },
  cyan: {
    primary: 'rgba(34, 211, 238, 0.15)',
    secondary: 'rgba(45, 212, 191, 0.15)',
  },
};

export const PixelReveal: React.FC<PixelRevealProps> = ({ isActive, colorScheme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colors = COLOR_SCHEMES[colorScheme];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pixelSize = 4;
    const cols = Math.ceil(canvas.width / pixelSize);
    const rows = Math.ceil(canvas.height / pixelSize);

    const drawMatrix = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!isActive) return;

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, colors.primary);
      gradient.addColorStop(1, colors.secondary);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const density = j / rows; // Increase density towards bottom
          if (Math.random() > 0.6 + density * 0.3) {
            ctx.fillStyle = gradient;
            ctx.globalAlpha = Math.max(0.1, density);
            ctx.fillRect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
          }
        }
      }

      // Add overlay gradient
      ctx.globalCompositeOperation = 'soft-light';
      ctx.fillStyle = gradient;
      ctx.globalAlpha = 0.3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    resizeCanvas();
    drawMatrix();

    const interval = setInterval(drawMatrix, 50);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isActive, colorScheme, colors]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full transition-opacity duration-500"
      style={{ opacity: isActive ? 0.8 : 0 }}
    />
  );
};
