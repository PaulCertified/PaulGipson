import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CircuitRevealProps {
  isActive: boolean;
}

export const CircuitReveal: React.FC<CircuitRevealProps> = ({ isActive }) => {
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

    const drawCircuit = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!isActive) return;

      const points = [];
      const numPoints = 50;
      const spacing = canvas.width / 10;

      // Generate points
      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          connections: [],
        });
      }

      // Connect nearby points
      points.forEach((point, i) => {
        points.forEach((otherPoint, j) => {
          if (i !== j) {
            const distance = Math.hypot(point.x - otherPoint.x, point.y - otherPoint.y);
            if (distance < spacing) {
              point.connections.push(j);
            }
          }
        });
      });

      // Draw connections with gradient
      points.forEach((point) => {
        point.connections.forEach((connectionIndex) => {
          const otherPoint = points[connectionIndex];
          const gradient = ctx.createLinearGradient(
            point.x, point.y,
            otherPoint.x, otherPoint.y
          );
          gradient.addColorStop(0, 'rgba(139, 92, 246, 0.15)');
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0.15)');

          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(otherPoint.x, otherPoint.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      });

      // Draw points
      points.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139, 92, 246, 0.3)';
        ctx.fill();
      });
    };

    resizeCanvas();
    const interval = setInterval(drawCircuit, 50);
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
