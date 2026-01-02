import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: ReactNode;
  path: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string; // HTML or Markdown string
  author: string;
  tags: string[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface CapabilityItem {
  title: string;
  description?: string;
}

export interface SolveItem {
  title: string;
  description: string;
}

export interface ProcessItem {
  step: string;
  title: string;
  description: string;
}

export interface ServicePageContent {
  id: string;
  title: string;
  subtitle: string;
  strategicOverview: string;
  solves: SolveItem[];
  capabilities: CapabilityItem[];
  outcomes: string[];
  process: ProcessItem[];
}

export interface BookFeature {
  title: string;
  description: string;
}

export interface BookContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  price: string;
  type: string;
  highlights: string[];
  audience: string[];
  features: BookFeature[];
}