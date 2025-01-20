import React, { useEffect, useRef } from 'react';

interface PixelMatrixProps {
  variant?: 'purple' | 'blue' | 'cyan';
  size?: number;
  opacity?: number;
}

const VARIANT_COLORS = {
  purple: {
    primary: 'rgba(216, 180, 254, 0.15)',   // Softer purple
    secondary: 'rgba(192, 132, 252, 0.15)',  // Lighter purple
    text: 'rgba(255, 255, 255, 0.9)',       // High contrast text
  },
  blue: {
    primary: 'rgba(147, 197, 253, 0.15)',    // Softer blue
    secondary: 'rgba(96, 165, 250, 0.15)',   // Lighter blue
    text: 'rgba(255, 255, 255, 0.9)',       // High contrast text
  },
  cyan: {
    primary: 'rgba(165, 243, 252, 0.15)',    // Softer cyan
    secondary: 'rgba(34, 211, 238, 0.15)',   // Lighter cyan
    text: 'rgba(255, 255, 255, 0.9)',       // High contrast text
  },
};

export const PixelMatrix: React.FC<PixelMatrixProps> = ({
  variant = 'purple',
  size = 4,
  opacity = 0.2, // Reduced default opacity
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colors = VARIANT_COLORS[variant];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pixelSize = size;
    const cols = Math.ceil(canvas.width / pixelSize);
    const rows = Math.ceil(canvas.height / pixelSize);

    const drawMatrix = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create a more subtle gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, colors.primary);
      gradient.addColorStop(1, colors.secondary);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (Math.random() > 0.6) { // Reduced density of pixels
            const verticalPosition = j / rows;
            const horizontalPosition = i / cols;
            const fadeOpacity = Math.max(0, 1 - (verticalPosition + horizontalPosition) * 0.9);
            
            ctx.fillStyle = colors.primary;
            ctx.globalAlpha = fadeOpacity * opacity;
            ctx.fillRect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
            ctx.globalAlpha = 1;
          }
        }
      }

      // Apply a softer overlay
      ctx.globalCompositeOperation = 'overlay';
      ctx.fillStyle = gradient;
      ctx.globalAlpha = 0.3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
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
  }, [variant, size, opacity, colors]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-80"
      style={{ mixBlendMode: 'plus-lighter' }}
    />
  );
};
