import React from 'react';
import { ProjectShowcase } from './components/ProjectShowcase';
import { TechStack } from './components/TechStack';
import type { BentoFeature } from './types';

export const bentoConfig: { features: BentoFeature[] } = {
  features: [
    {
      title: "Full-Stack Development",
      description: "Building robust and scalable applications from front to back.",
      content: () => <ProjectShowcase />,
      className: "col-span-1 lg:col-span-4 border-b lg:border-r border-white/10",
    },
    {
      title: "Modern Tech Stack",
      description: "Leveraging cutting-edge technologies for optimal performance.",
      content: () => <TechStack />,
      className: "border-b col-span-1 lg:col-span-2 border-white/10",
    },
    {
      title: "Cloud Architecture",
      description: "Designing scalable cloud solutions with AWS expertise.",
      content: null,
      className: "col-span-1 lg:col-span-3 lg:border-r border-white/10",
    },
    {
      title: "Rapid Deployment",
      description: "Quick and efficient deployment with modern CI/CD practices.",
      content: null,
      className: "col-span-1 lg:col-span-3",
    },
  ],
};
