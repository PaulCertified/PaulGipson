import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  content?: React.ReactNode;
  image?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  content,
  image,
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white/5 p-8 backdrop-blur-sm">
      <div className="relative z-10">
        <div className="mb-4">{icon}</div>
        {title}
        {content}
      </div>
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
      )}
    </div>
  );
};
