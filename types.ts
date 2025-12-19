
export interface Project {
  id: string;
  name: string;
  location: string;
  category: ProjectCategory;
  status: 'Completed' | 'Ongoing';
  client: string;
  value: string;
  size: string;
  timeline: string;
  scope: string[];
  challenges: string;
  solutions: string;
  imageUrl: string;
  description: string;
}

export type ProjectCategory = 'Infrastructure' | 'Commercial' | 'Industrial' | 'Residential';

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  scope: string[];
  industries: string[];
  standards: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  image: string;
}
