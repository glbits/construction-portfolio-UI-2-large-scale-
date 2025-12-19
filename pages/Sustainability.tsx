
import React from 'react';
import { Shield, Leaf, Wind, Sun, Zap, CheckCircle } from 'lucide-react';

const Sustainability: React.FC = () => {
  return (
    <div className="bg-white">
       {/* Hero */}
       <section className="relative h-[60vh] flex items-center bg-emerald-950">
          <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-30" alt="Sustainability" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
             <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Responsibility Built-In</h1>
             <p className="text-xl text-emerald-100 max-w-2xl leading-relaxed">
               We believe structural integrity goes hand-in-hand with environmental stewardship and worker wellbeing.
             </p>
          </div>
       </section>

       {/* Safety Policies */}
       <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative">
                   <div className="aspect-square bg-slate-900 rounded-[3rem] overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-70" alt="Safety" />
                   </div>
                   <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-3xl shadow-2xl border border-slate-100">
                      <div className="text-rose-600 font-extrabold text-4xl mb-1">ZERO</div>
                      <div className="text-slate-500 text-sm font-bold uppercase">Target LTIs</div>
                   </div>
                </div>
                <div>
                   <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8">
                      <Shield size={32} />
                   </div>
                   <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">Safety First, Always.</h2>
                   <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                     Our on-site safety practices are rigorous. Every team member undergoes mandatory hazard training, and real-time site monitoring ensures compliance with OSHA and global OSH standards.
                   </p>
                   <ul className="space-y-4">
                      {['Daily Toolbox Talks', 'Real-time Site Monitoring', 'Mandatory PPE Compliance', 'Regular Safety Audits'].map((item, i) => (
                        <li key={i} className="flex items-center text-slate-700 font-medium">
                           <CheckCircle className="text-indigo-600 mr-3 w-5 h-5" /> {item}
                        </li>
                      ))}
                   </ul>
                </div>
             </div>
          </div>
       </section>

       {/* Sustainability Goals */}
       <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Green Construction Methods</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { title: 'Carbon Neutrality', desc: 'Targeting 100% carbon neutral project delivery by 2040.', icon: Leaf },
                  { title: 'Waste Management', desc: 'Implementing circular economy practices with 90% waste diversion.', icon: Zap },
                  { title: 'Renewable Materials', desc: 'Prioritizing low-embodied carbon concrete and sustainable steel.', icon: Sun },
                ].map((item, i) => (
                  <div key={i} className="text-center p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all">
                     <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl mb-6">
                        <item.icon size={32} />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                     <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
       </section>

       {/* Environmental Initiatives */}
       <section className="py-24 bg-emerald-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
             <Wind className="mx-auto mb-8 text-emerald-400" size={48} />
             <h2 className="text-4xl font-bold mb-8">Our Sustainability Pledge</h2>
             <p className="text-xl text-emerald-100 mb-10 italic leading-relaxed">
               "We don't just build for today; we build for the generations that will inherit this planet. Every project is an opportunity to reduce footprints and restore ecosystems."
             </p>
             <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm font-bold uppercase tracking-widest text-emerald-300">
                <span>REDUCE</span>
                <span>REUSE</span>
                <span>RECYCLE</span>
                <span>RESTORE</span>
             </div>
          </div>
       </section>
    </div>
  );
};

export default Sustainability;
