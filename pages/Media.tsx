
import React from 'react';
import { NEWS } from '../constants';
import { Newspaper, Radio, Megaphone, Trophy, ArrowRight } from 'lucide-react';

const Media: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       <section className="bg-slate-50 py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Media Center</h1>
             <p className="text-xl text-slate-600 max-w-2xl mx-auto">
               Latest news, press releases, and insights from the heart of the construction industry.
             </p>
          </div>
       </section>

       <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
             {NEWS.map((item) => (
               <div key={item.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm group hover:shadow-xl transition-all">
                  <div className="aspect-video relative overflow-hidden">
                     <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                        {item.category}
                     </div>
                  </div>
                  <div className="p-8">
                     <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2 block">{item.date}</span>
                     <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                     <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.summary}</p>
                     <button className="text-indigo-600 font-bold text-sm flex items-center">
                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                     </button>
                  </div>
               </div>
             ))}
          </div>
       </section>

       {/* Media Assets */}
       <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex space-x-4">
                   <Megaphone className="text-indigo-400 shrink-0" size={32} />
                   <div>
                      <h3 className="font-bold text-lg mb-2">Press Releases</h3>
                      <p className="text-slate-400 text-sm">Download official statements and corporate announcements.</p>
                   </div>
                </div>
                <div className="flex space-x-4">
                   <Newspaper className="text-indigo-400 shrink-0" size={32} />
                   <div>
                      <h3 className="font-bold text-lg mb-2">In the News</h3>
                      <p className="text-slate-400 text-sm">See how Apex is featured in major global engineering publications.</p>
                   </div>
                </div>
                <div className="flex space-x-4">
                   <Trophy className="text-indigo-400 shrink-0" size={32} />
                   <div>
                      <h3 className="font-bold text-lg mb-2">Awards</h3>
                      <p className="text-slate-400 text-sm">A history of excellence recognized by international bodies.</p>
                   </div>
                </div>
             </div>
          </div>
       </section>
    </div>
  );
};

export default Media;
