import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const ButtonGlow = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      color: string;
      size: number;
    }> = [];

    const colors = [
      'rgba(139, 92, 246, 0.3)',  // Purple
      'rgba(59, 130, 246, 0.3)',  // Blue
      'rgba(147, 51, 234, 0.3)',  // Violet
    ];

    const createParticle = () => {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.2; // Responsive radius
      const size = Math.random() * 2 + 1; // Varied particle sizes
      
      return {
        x: canvas.width / 2 + Math.cos(angle) * radius,
        y: canvas.height / 2 + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        life: Math.random() * 0.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size,
      };
    };

    const resizeCanvas = () => {
      // Get the button element's dimensions
      const buttonElement = canvas.parentElement?.querySelector('button');
      if (!buttonElement) return;

      const rect = buttonElement.getBoundingClientRect();
      const padding = 40; // Extra space around the button

      // Set canvas size relative to button size
      canvas.width = (rect.width + padding * 2) * window.devicePixelRatio;
      canvas.height = (rect.height + padding * 2) * window.devicePixelRatio;
      
      // Scale context for retina displays
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      
      // Set display size
      canvas.style.width = `${rect.width + padding * 2}px`;
      canvas.style.height = `${rect.height + padding * 2}px`;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new particles
      if (particles.length < 30) { // Reduced particle count for better performance
        particles.push(createParticle());
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.01;

        if (particle.life <= 0) {
          particles.splice(index, 1);
          return;
        }

        // Add glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    // Initial setup
    resizeCanvas();
    animate();

    // Handle resize events
    const handleResize = () => {
      resizeCanvas();
      particles = []; // Reset particles on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        transform: 'translate(-20px, -20px)', // Offset to account for padding
        willChange: 'transform', // Optimize performance
      }}
    />
  );
};
