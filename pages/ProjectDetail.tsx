
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, Clock, DollarSign, Ruler, User, AlertCircle, Lightbulb, CheckCircle } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Project Not Found</h2>
          <Link to="/projects" className="text-indigo-600 flex items-center justify-center">
            <ArrowLeft className="mr-2" /> Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/projects" className="inline-flex items-center text-slate-500 hover:text-indigo-600 transition-colors text-sm font-semibold">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Portfolio
        </Link>
      </div>

      {/* Hero Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
        <div>
          <span className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4 block">{project.category}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">{project.name}</h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            {project.description}
          </p>

          <div className="grid grid-cols-2 gap-8 p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <div>
              <div className="flex items-center text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">
                <User className="w-3 h-3 mr-2" /> Client
              </div>
              <div className="text-slate-900 font-bold">{project.client}</div>
            </div>
            <div>
              <div className="flex items-center text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">
                <Clock className="w-3 h-3 mr-2" /> Timeline
              </div>
              <div className="text-slate-900 font-bold">{project.timeline}</div>
            </div>
            <div>
              <div className="flex items-center text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">
                <DollarSign className="w-3 h-3 mr-2" /> Project Value
              </div>
              <div className="text-slate-900 font-bold">{project.value}</div>
            </div>
            <div>
              <div className="flex items-center text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">
                <Ruler className="w-3 h-3 mr-2" /> Size
              </div>
              <div className="text-slate-900 font-bold">{project.size}</div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[400px]">
          <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Detailed Breakdown */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                   <CheckCircle className="text-emerald-500 mr-3" /> Scope of Work
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.scope.map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 text-slate-700 font-medium">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-6">
                    <AlertCircle size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Key Challenges</h3>
                  <p className="text-slate-600 leading-relaxed italic">"{project.challenges}"</p>
                </div>
                <div className="bg-indigo-600 p-10 rounded-3xl shadow-xl shadow-indigo-100 text-white">
                  <div className="w-12 h-12 bg-white/20 text-white rounded-xl flex items-center justify-center mb-6 backdrop-blur-md">
                    <Lightbulb size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Our Solution</h3>
                  <p className="text-indigo-50 leading-relaxed font-medium">"{project.solutions}"</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                 <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Project Status</h3>
                    <div className="flex items-center mb-8">
                       <div className={`w-3 h-3 rounded-full mr-3 ${project.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></div>
                       <span className="font-bold text-slate-800">{project.status}</span>
                    </div>
                    <Link to="/contact" className="w-full block text-center py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all">
                      Inquire About Similar Work
                    </Link>
                 </div>
                 
                 <div className="bg-slate-900 text-white p-8 rounded-3xl overflow-hidden relative">
                    <h3 className="text-lg font-bold mb-4">Gallery</h3>
                    <p className="text-slate-400 text-sm mb-6">Explore the construction progress and final results of this project.</p>
                    <div className="grid grid-cols-2 gap-2">
                       {[1,2,3,4].map(i => (
                         <div key={i} className="aspect-square bg-slate-800 rounded-lg overflow-hidden">
                            <img src={`https://picsum.photos/seed/gall${i}${project.id}/200/200`} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity cursor-pointer" alt="Gallery" />
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
