
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { Filter, Search, MapPin, ExternalLink } from 'lucide-react';
import { ProjectCategory } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = React.useState<ProjectCategory | 'All'>('All');
  const [search, setSearch] = React.useState('');

  const filteredProjects = PROJECTS.filter(p => {
    const matchesCategory = filter === 'All' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                          p.location.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
           <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Project Portfolio</h1>
           <p className="text-slate-600">Explore our global footprint of engineering achievements.</p>
        </header>

        {/* Filters */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {['All', 'Commercial', 'Infrastructure', 'Industrial', 'Residential'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  filter === cat 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search projects or locations..."
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white ${
                    project.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <span className="text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>
                <div className="flex items-center text-slate-500 text-sm mb-6">
                  <MapPin className="w-4 h-4 mr-1" /> {project.location}
                </div>
                <Link 
                  to={`/projects/${project.id}`} 
                  className="w-full flex items-center justify-center py-3 bg-slate-50 text-slate-900 rounded-xl font-bold text-sm hover:bg-indigo-600 hover:text-white transition-all group-hover:border-transparent"
                >
                  View Case Study <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <p className="text-slate-500 italic">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
