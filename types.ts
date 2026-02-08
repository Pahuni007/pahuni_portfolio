export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description?: string;
  grade?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period?: string; // Optional if not explicitly provided in content
  details?: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  EDUCATION = 'education',
  EXPERIENCE = 'experience',
  SKILLS = 'skills',
  CONTACT = 'contact',
}