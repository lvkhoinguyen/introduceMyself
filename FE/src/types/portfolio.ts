export interface Profile {
  id?: number;
  fullName?: string;
  role?: string;
  avatarUrl?: string;
  githubUrl?: string;
  bio?: string;
  points?: string[];
}

export interface Project {
  id?: number;
  title: string;
  description: string;
  tags: string[];
  accent?: string;
  githubUrl?: string;
  demoUrl?: string;
  sortOrder?: number;
}

export interface Experience {
  id?: number;
  title: string;
  meta: string;
  period: string;
  description: string;
  iconType?: string;
  sortOrder?: number;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillGroup {
  id?: number;
  title: string;
  iconType?: string;
  description: string;
  sortOrder?: number;
  skills: SkillItem[];
}
