
import React from 'react';
import { Project, Service, TeamMember, NewsItem } from './types';
import { 
  Building2, 
  HardHat, 
  Warehouse, 
  Home, 
  ShieldCheck, 
  Award, 
  Globe, 
  Zap,
  Leaf,
  Users
} from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'Metropolis Business Center',
    location: 'Dubai, UAE',
    category: 'Commercial',
    status: 'Completed',
    client: 'Al-Futtaim Group',
    value: '$450 Million',
    size: '1.2 Million Sqft',
    timeline: '2020 - 2023',
    scope: ['Architecture', 'Structural Engineering', 'MEP', 'Façade Engineering'],
    challenges: 'High-speed wind resistance requirement and complex cantilever structure.',
    solutions: 'Implemented tuned mass dampers and advanced 3D BIM modeling for structural precision.',
    imageUrl: 'https://images.unsplash.com/photo-1765267708354-aec1ab57db8b?q=80&w=1105&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A landmark commercial hub featuring state-of-the-art energy-efficient glazing and sustainable HVAC systems.'
  },
  {
    id: 'p2',
    name: 'Trans-Continental Bridge',
    location: 'Istanbul, Turkey',
    category: 'Infrastructure',
    status: 'Ongoing',
    client: 'Ministry of Transport',
    value: '$2.1 Billion',
    size: '3.4km Span',
    timeline: '2022 - 2026',
    scope: ['Civil Engineering', 'Foundation Works', 'Seismic Design'],
    challenges: 'Active fault line proximity and deep underwater pylon placement.',
    solutions: 'Utilized deep-sea pile driving technology and lead-rubber seismic isolators.',
    imageUrl: 'https://images.unsplash.com/photo-1688064727834-02a4ce4b7cc4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A critical infrastructure project connecting two continents with advanced seismic resilience features.'
  },
  {
    id: 'p3',
    name: 'GreenValley Eco-Village',
    location: 'Austin, TX',
    category: 'Residential',
    status: 'Completed',
    client: 'SustainBuild Developers',
    value: '$120 Million',
    size: '45 Acres',
    timeline: '2019 - 2022',
    scope: ['Green Construction', 'Urban Planning', 'Smart Home Integration'],
    challenges: 'Achieving zero-net energy across 200 units.',
    solutions: 'Community-wide micro-grid and greywater recycling systems.',
    imageUrl: 'https://images.unsplash.com/photo-1681208137363-cb614b6833da?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'The premier sustainable living community in the southern US, focusing on carbon-neutral construction.'
  },
  {
    id: 'p4',
    name: 'Hyper-Logistics Hub',
    location: 'Frankfurt, Germany',
    category: 'Industrial',
    status: 'Ongoing',
    client: 'Global Logistics Corp',
    value: '$800 Million',
    size: '2.5 Million Sqft',
    timeline: '2023 - 2025',
    scope: ['Industrial Design', 'Automation Housing', 'Heavy Flooring'],
    challenges: 'Requirement for absolute precision in floor leveling for robotics.',
    solutions: 'Laser-guided screeding technology and high-strength concrete composites.',
    imageUrl: 'https://images.unsplash.com/photo-1589152608305-be9699ea9a31?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A massive automated logistics center designed for peak efficiency and heavy-duty operations.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Civil & Structural Engineering',
    icon: 'Building2',
    description: 'Comprehensive structural analysis and design for complex architectural visions.',
    scope: ['High-rise Design', 'Seismic Retrofitting', 'Bridge Engineering', 'Deep Foundation Systems'],
    industries: ['Public Infrastructure', 'Commercial Real Estate', 'Oil & Gas'],
    standards: ['AISC', 'Eurocodes', 'ASCE 7', 'ISO 9001']
  },
  {
    id: 's2',
    title: 'Project Management',
    icon: 'HardHat',
    description: 'Expert oversight ensuring projects are delivered on time, within budget, and to the highest standards.',
    scope: ['Risk Assessment', 'Resource Planning', 'Stakeholder Management', 'BIM Implementation'],
    industries: ['Industrial', 'Healthcare', 'Educational'],
    standards: ['PMBOK', 'PRINCE2', 'ISO 21500']
  },
  {
    id: 's3',
    title: 'Industrial Construction',
    icon: 'Warehouse',
    description: 'Specialized construction for manufacturing plants, refineries, and logistics hubs.',
    scope: ['Modular Construction', 'Piping Systems', 'Heavy Machinery Foundation', 'Process Plant Erecting'],
    industries: ['Manufacturing', 'Energy', 'Automotive'],
    standards: ['ASME', 'API', 'OSHA']
  },
  {
    id: 's4',
    title: 'Sustainable Building',
    icon: 'Leaf',
    description: 'Green construction methods that minimize environmental impact and maximize energy efficiency.',
    scope: ['LEED Certification', 'Carbon Footprint Analysis', 'Renewable Integration', 'Smart Building Tech'],
    industries: ['Hospitality', 'Residential', 'Retail'],
    standards: ['LEED', 'BREEAM', 'WELL', 'ISO 14001']
  }
];

export const LEADERSHIP: TeamMember[] = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Chief Executive Officer',
    image: 'https://picsum.photos/seed/ceo/300/300',
    bio: 'With over 25 years in structural engineering, Sarah leads Apex with a focus on innovation and global expansion.'
  },
  {
    name: 'Marcus Thorne',
    role: 'Director of Operations',
    image: 'https://picsum.photos/seed/ops/300/300',
    bio: 'Marcus oversees all project lifecycles, ensuring operational excellence and strict safety adherence.'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Sustainability',
    image: 'https://picsum.photos/seed/sus/300/300',
    bio: 'Elena is a pioneer in carbon-neutral construction and leads our environmental compliance initiatives.'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Apex Wins International Excellence Award',
    date: 'Oct 15, 2024',
    category: 'Award',
    summary: 'Recognized for the structural innovation of the Metropolis Business Center.',
    image: 'https://picsum.photos/seed/news1/400/250'
  },
  {
    id: 'n2',
    title: 'Expansion into Southeast Asia Markets',
    date: 'Sep 22, 2024',
    category: 'Expansion',
    summary: 'Opening new offices in Singapore and Ho Chi Minh City to serve growing infrastructure needs.',
    image: 'https://picsum.photos/seed/news2/400/250'
  },
  {
    id: 'n3',
    title: 'New Safety Record: 5 Million Man-Hours LTI Free',
    date: 'Aug 10, 2024',
    category: 'Safety',
    summary: 'Our commitment to safety has reached a significant milestone across all ongoing projects.',
    image: 'https://picsum.photos/seed/news3/400/250'
  }
];
