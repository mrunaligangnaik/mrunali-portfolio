/**
 * Types and interfaces for Mrunali Gangnaik's Portfolio
 */

export interface SecureBrief {
  id?: string;
  fullName: string;
  email: string;
  collaborationType: 'Internship' | 'Junior Developer' | 'Contract';
  message: string;
  createdAt?: string;
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface SoftSkill {
  id: string;
  name: string;
}

export interface ToolkitCategory {
  title: string;
  items: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  bullets: string[];
  imageUrl: string;
  role: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  score?: string;
  duration?: string;
  details: string;
}
