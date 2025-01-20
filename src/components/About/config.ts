import { Layout, Server, Cloud, Rocket, Shield, Code } from 'lucide-react';
import type { ExpertiseItem, Service } from './types';

export const expertiseConfig = {
  expertise: [
    {
      icon: Layout,
      title: "Frontend Expertise",
      description: "Skilled in creating dynamic, responsive, and visually appealing user interfaces using React, Next.js, and TailwindCSS.",
    },
    {
      icon: Server,
      title: "Backend Proficiency",
      description: "Experienced in implementing secure, real-time backend services using Supabase for authentication, database management, and serverless functions.",
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "AWS Solutions Architect certified, designing and deploying scalable cloud-based solutions for flawless application performance.",
    },
    {
      icon: Rocket,
      title: "Efficient Deployment",
      description: "Proficient in modern hosting platforms like Vercel and Netlify with CI/CD pipelines for continuous updates.",
    },
  ] as ExpertiseItem[],
  services: [
    {
      icon: Code,
      title: "End-to-end Development",
      description: "Complete website development tailored to your business requirements.",
    },
    {
      icon: Server,
      title: "Backend Solutions",
      description: "Secure and scalable backend development with Supabase.",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "AWS-powered solutions for high availability and performance.",
    },
    {
      icon: Shield,
      title: "Security & Performance",
      description: "SEO-friendly and secure applications with real-time features.",
    },
  ] as Service[],
};
