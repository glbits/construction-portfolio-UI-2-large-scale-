
import React from 'react';
import { Briefcase, Send, Users, Star, ArrowRight } from 'lucide-react';

const Careers: React.FC = () => {
  const jobs = [
    { title: 'Senior Structural Engineer', location: 'Dubai, UAE', type: 'Full-time' },
    { title: 'Project Manager - Infrastructure', location: 'New York, USA', type: 'Full-time' },
    { title: 'BIM Coordinator', location: 'London, UK', type: 'Contract' },
    { title: 'Sustainability Consultant', location: 'Singapore', type: 'Full-time' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
       <section className="bg-white py-24 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Join the Apex Team</h1>
                   <p className="text-xl text-slate-600 leading-relaxed mb-8">
                     We are looking for brilliant minds to help us build the future. If you are passionate about structural mastery and innovation, we want to hear from you.
                   </p>
                   <div className="flex space-x-8">
                      <div>
                         <div className="text-3xl font-extrabold text-indigo-600 mb-1">500+</div>
                         <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Global Employees</div>
                      </div>
                      <div>
                         <div className="text-3xl font-extrabold text-indigo-600 mb-1">24</div>
                         <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Countries</div>
                      </div>
                   </div>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl bg-indigo-600 p-12 text-white">
                   <h2 className="text-2xl font-bold mb-6">Company Culture</h2>
                   <p className="mb-6 text-indigo-100 leading-relaxed">
                     At Apex, we foster a culture of mentorship, continuous learning, and radical collaboration. We believe diverse teams make better decisions.
                   </p>
                   <div className="grid grid-cols-2 gap-4">
                      {['Flexible Work', 'Health Benefits', 'Learning Grants', 'Paid Global Travel'].map((b, i) => (
                        <div key={i} className="flex items-center text-sm font-semibold">
                           <Star className="text-white mr-2 w-4 h-4 fill-white" /> {b}
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
       </section>

       <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Current Openings</h2>
          <div className="space-y-4">
             {jobs.map((job, i) => (
               <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between hover:border-indigo-200 transition-colors group">
                  <div className="mb-4 md:mb-0">
                     <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{job.title}</h3>
                     <div className="flex items-center text-slate-500 text-sm mt-1">
                        <Briefcase className="w-4 h-4 mr-2" /> {job.location} • {job.type}
                     </div>
                  </div>
                  <button className="flex items-center text-indigo-600 font-bold text-sm uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
               </div>
             ))}
          </div>
          <div className="mt-12 text-center p-12 bg-white rounded-3xl border border-dashed border-slate-300">
             <h3 className="text-lg font-bold text-slate-900 mb-4">Don't see a relevant role?</h3>
             <p className="text-slate-500 mb-8 max-w-md mx-auto">Upload your resume to our general talent pool and we'll contact you when a fit arises.</p>
             <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold inline-flex items-center hover:bg-slate-800 transition-all">
               <Send className="mr-2 w-4 h-4" /> Send Resume
             </button>
          </div>
       </section>
    </div>
  );
};

export default Careers;
