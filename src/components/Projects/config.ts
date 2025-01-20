import {
  Atom,
  Waves,
  FileCode,
  Play,
  Monitor,
  Database,
  Shield,
  Cloud,
  Layout,
  Brain,
  Bot,
  Cpu,
  Terminal,
  Webhook
} from 'lucide-react';
import type { Project } from './types';

export const projectsConfig: { projects: Project[] } = {
  projects: [
    {
      title: 'AI-Powered Virtual Assistant Platform',
      description: 'Built an enterprise-grade conversational AI platform using OpenAI GPT-4 and LangChain. Features include context-aware responses, multi-turn conversations, knowledge base integration, and real-time learning from user interactions. Achieved 92% accuracy in intent recognition and reduced customer response time by 75%.',
      image: 'https://images.unsplash.com/photo-1676299081847-5bb9967bee0e?auto=format&fit=crop&q=80&w=2070',
      technologies: [
        { name: 'Next.js', icon: Atom },
        { name: 'TypeScript', icon: FileCode },
        { name: 'OpenAI', icon: Brain },
        { name: 'LangChain', icon: Bot },
        { name: 'Redis', icon: Database },
        { name: 'WebSocket', icon: Webhook },
        { name: 'Docker', icon: Cloud },
      ],
      liveUrl: '#',
    },
    // ... rest of the projects remain unchanged
  ],
};
