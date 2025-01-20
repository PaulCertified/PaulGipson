import { createCanvas, loadImage } from 'canvas';

export const addWatermark = async (imageUrl: string): Promise<string> => {
  // Create a canvas element
  const canvas = createCanvas(1024, 1024);
  const ctx = canvas.getContext('2d');

  // Load and draw the original image
  const image = await loadImage(imageUrl);
  ctx.drawImage(image, 0, 0, 1024, 1024);

  // Configure watermark text
  ctx.font = 'bold 48px Inter';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.textAlign = 'center';
  
  // Add rotation for diagonal watermark
  ctx.save();
  ctx.translate(512, 512);
  ctx.rotate(-Math.PI / 4);
  ctx.fillText('PAUL CERTIFIED', 0, 0);
  ctx.restore();

  // Convert canvas to data URL
  return canvas.toDataURL('image/jpeg', 0.9);
};
