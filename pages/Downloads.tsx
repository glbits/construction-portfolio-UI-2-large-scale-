
import React from 'react';
import { Download, FileText, Shield, FileCheck } from 'lucide-react';

const Downloads: React.FC = () => {
  const assets = [
    { name: 'Company Brochure 2024', size: '12.4 MB', type: 'PDF', icon: FileText },
    { name: 'Project Capabilities Statement', size: '8.1 MB', type: 'PDF', icon: Shield },
    { name: 'ISO Certifications Package', size: '4.2 MB', type: 'ZIP', icon: FileCheck },
    { name: 'Safety & Environmental Policy', size: '1.5 MB', type: 'PDF', icon: FileText },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-24">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-16 text-center">
             <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Corporate Assets</h1>
             <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Download our latest brochures, project profiles, and technical certificates for your records.
             </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {assets.map((asset, i) => (
               <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm group hover:shadow-xl hover:-translate-y-2 transition-all">
                  <div className="w-14 h-14 bg-slate-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                     <asset.icon size={32} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{asset.name}</h3>
                  <div className="flex justify-between items-center text-xs text-slate-400 font-bold uppercase tracking-widest mb-6">
                     <span>{asset.type}</span>
                     <span>{asset.size}</span>
                  </div>
                  <button className="w-full flex items-center justify-center py-3 border-2 border-slate-100 text-slate-600 rounded-xl font-bold text-sm hover:border-indigo-600 hover:text-indigo-600 transition-all">
                     Download <Download className="ml-2 w-4 h-4" />
                  </button>
               </div>
             ))}
          </div>
       </div>
    </div>
  );
};

export default Downloads;
