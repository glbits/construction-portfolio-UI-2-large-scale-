
import React from 'react';
import { ShieldCheck, FileText, Globe, Scale, BookOpen } from 'lucide-react';

const Compliance: React.FC = () => {
  const certs = [
    { title: 'ISO 9001:2015', category: 'Quality Management', desc: 'Standardized quality management systems for global engineering excellence.' },
    { title: 'ISO 14001:2015', category: 'Environmental Management', desc: 'Framework for effective environmental performance and sustainability.' },
    { title: 'ISO 45001:2018', category: 'Health & Safety', desc: 'Occupational health and safety management systems to prevent workplace injury.' },
    { title: 'BIM Level 2 Certified', category: 'Technical Compliance', desc: 'Advanced 3D modeling and data management for project collaboration.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
       <section className="bg-white py-24 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="max-w-3xl">
                <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Legal & Quality Validation</h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  We operate with transparency and strict adherence to international safety, environmental, and quality regulations.
                </p>
             </div>
          </div>
       </section>

       <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {certs.map((c, i) => (
               <div key={i} className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <ShieldCheck size={28} />
                  </div>
                  <span className="text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-2 block">{c.category}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{c.title}</h3>
                  <p className="text-slate-600 mb-6">{c.desc}</p>
                  <button className="text-sm font-bold text-slate-400 hover:text-indigo-600 flex items-center">
                    <FileText className="mr-2 w-4 h-4" /> View Verification Document
                  </button>
               </div>
             ))}
          </div>
       </section>

       <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div>
                  <Scale className="text-indigo-400 mb-6" size={40} />
                  <h3 className="text-xl font-bold mb-4">Government Registrations</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Apex is fully registered with national engineering boards and construction authorities in every jurisdiction we operate.
                  </p>
                </div>
                <div>
                  <Globe className="text-indigo-400 mb-6" size={40} />
                  <h3 className="text-xl font-bold mb-4">Environmental Standards</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Committed to the Paris Agreement targets and local environmental impact regulations.
                  </p>
                </div>
                <div>
                  <BookOpen className="text-indigo-400 mb-6" size={40} />
                  <h3 className="text-xl font-bold mb-4">Audit Standards</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Internal and third-party quarterly audits ensure continuous improvement across all operational facets.
                  </p>
                </div>
             </div>
          </div>
       </section>
    </div>
  );
};

export default Compliance;
