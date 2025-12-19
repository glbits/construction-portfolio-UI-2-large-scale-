
import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';

const Clients: React.FC = () => {
  return (
    <div className="bg-white">
       <section className="bg-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h1 className="text-5xl font-extrabold mb-6">Global Partnerships</h1>
             <p className="text-xl text-slate-400 max-w-2xl mx-auto">
               We take pride in our long-term relationships with industry giants and government bodies worldwide.
             </p>
          </div>
       </section>

       {/* Logos Grid */}
       <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 grayscale group">
             {[1,2,3,4,5,6,7,8].map(i => (
                <div key={i} className="flex flex-col items-center justify-center p-12 border border-slate-100 rounded-3xl hover:grayscale-0 hover:opacity-100 hover:border-indigo-200 transition-all">
                  <div className="w-16 h-16 bg-slate-200 rounded-lg mb-4"></div>
                  <span className="font-bold text-slate-600">CLIENT {i}</span>
                </div>
             ))}
          </div>
       </section>

       {/* Testimonials */}
       <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Partners Say</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                  { name: 'James Wilson', role: 'Head of Infrastructure, GDC', text: 'Apex delivered the Trans-Continental project with unmatched precision and foresight.' },
                  { name: 'Sarah Chen', role: 'Director, Chen Properties', text: 'Their dedication to safety and structural integrity sets a new benchmark in the industry.' },
                  { name: 'Ahmed Al-Sayed', role: 'Principal, Dubai Urban Planning', text: 'Innovative solutions to complex architectural challenges. Truly world-class engineering.' }
                ].map((t, i) => (
                  <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative">
                     <Quote className="text-indigo-100 absolute top-6 right-6" size={48} />
                     <p className="text-slate-600 italic mb-8 relative z-10">"{t.text}"</p>
                     <div>
                        <div className="font-bold text-slate-900">{t.name}</div>
                        <div className="text-xs text-indigo-600 font-bold uppercase tracking-widest">{t.role}</div>
                     </div>
                  </div>
                ))}
             </div>
          </div>
       </section>

       {/* Long-term clients stats */}
       <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <div className="max-w-3xl mx-auto bg-indigo-600 text-white p-12 rounded-[3rem] shadow-2xl">
                <h2 className="text-3xl font-bold mb-6">Our Commitment to Longevity</h2>
                <div className="grid grid-cols-2 gap-8 text-indigo-100">
                   <div>
                      <div className="text-4xl font-extrabold mb-2">85%</div>
                      <div className="text-sm uppercase tracking-widest font-bold">Repeat Client Rate</div>
                   </div>
                   <div>
                      <div className="text-4xl font-extrabold mb-2">15+</div>
                      <div className="text-sm uppercase tracking-widest font-bold">Years Avg. Relationship</div>
                   </div>
                </div>
             </div>
          </div>
       </section>
    </div>
  );
};

export default Clients;
