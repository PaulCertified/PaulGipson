import { LucideIcon } from 'lucide-react';

export interface Technology {
  name: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  liveUrl: string;
}
