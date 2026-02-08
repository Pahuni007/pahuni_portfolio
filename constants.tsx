import React from 'react';
import { 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  Code2, 
  PenTool, 
  Mic, 
  Layout, 
  Globe, 
  Award,
  Users,
  Briefcase,
  Terminal
} from 'lucide-react';
import { TimelineItem, ExperienceItem } from './types';

export const SOCIAL_LINKS = [
  { platform: 'LinkedIn', url: '#', icon: <Linkedin className="w-5 h-5" /> },
  { platform: 'Instagram', url: '#', icon: <Instagram className="w-5 h-5" /> },
];

export const EDUCATION_DATA: TimelineItem[] = [
  {
    year: '2025–2029',
    title: 'University School of Information, Communication and Technology, New Delhi',
    subtitle: 'Bachelor of Technology – Computer Science (AI)',
    description: 'Pursuing undergraduate degree with a focus on Artificial Intelligence technologies.',
  },
  {
    year: '2024–2025',
    title: 'Madhavrao Scindia Public School, Bareilly',
    subtitle: 'Senior Secondary Education – CBSE',
    grade: '97.6%',
  },
  {
    year: '2022–2023',
    title: 'Madhavrao Scindia Public School, Bareilly',
    subtitle: 'Secondary Education – CBSE',
    grade: '98.4%',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Campus Ambassador',
    organization: "Tryst'26 | IIT Delhi",
    details: 'Representing the institute and coordinating events.',
  },
  {
    role: 'Active Member',
    organization: 'Technical & Professional Societies | USICT',
    details: 'Engaging in technical workshops and community building.',
  },
  {
    role: 'Volunteer',
    organization: "Anugoonj'26 Sponsorship Team",
    details: 'Assisted in securing sponsorships and managing corporate relations.',
  },
  {
    role: 'Participant',
    organization: 'Smart India Hackathon 2025 & UIDAI Data Hackathon 2026',
    details: 'Solved real-world problems through intensive coding and innovation.',
  },
  {
    role: 'Freelancer',
    organization: 'Content Writing',
    details: 'Exploring creative and technical content writing opportunities.',
  },
];

export const SKILLS_DATA = [
  { title: 'Python Programming & Data Analysis', icon: <Terminal className="w-6 h-6" /> },
  { title: 'Content Writing & Editing', icon: <PenTool className="w-6 h-6" /> },
  { title: 'Public Speaking', icon: <Mic className="w-6 h-6" /> },
  { title: 'Presentation & Design Tools', icon: <Layout className="w-6 h-6" /> },
];

export const LANGUAGES = ['English', 'Hindi'];

export const CONTACT_INFO = {
  phone: '+91 9411970085',
  email: 'contact@pahunibartaria.com', // Placeholder implied
};