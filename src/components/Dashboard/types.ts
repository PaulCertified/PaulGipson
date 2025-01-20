export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  live_url?: string;
  technologies: string[];
  created_at: string;
  updated_at: string;
  user_id: string;
}

export interface ProjectFormData {
  title: string;
  description: string;
  image: FileList;
  liveUrl?: string;
  technologies: string;
}

export interface ProjectResponse {
  id: string;
  image_url: string;
}
