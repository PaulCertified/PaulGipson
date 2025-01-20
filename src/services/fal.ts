import * as fal from '@fal-ai/serverless-client';

if (!import.meta.env.VITE_FAL_KEY) {
  throw new Error('FAL_KEY environment variable is not set');
}

fal.config({
  credentials: import.meta.env.VITE_FAL_KEY,
});

export const generateImage = async (prompt: string): Promise<string> => {
  try {
    const result = await fal.subscribe('fal-ai/ideogram/v2', {
      input: {
        prompt: `${prompt} | with small red circular badge watermark saying "PAUL CERTIFIED" in top right corner, white text, professional looking`,
        style_name: 'photographic',
        width: 1024,
        height: 1024,
      },
      pollInterval: 1000,
      onQueueUpdate: (update) => {
        console.log('Queue update:', update);
      },
    });

    return result.images[0].url;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
};
