
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white min-h-screen">
       <section className="bg-slate-50 py-24 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
                <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight uppercase">Connect with Vishwa</h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                   Looking for high-performance structural expertise in India or abroad? Our specialist engineers are ready to consult on your next vision.
                </p>
             </motion.div>
          </div>
       </section>

       <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             {/* Contact Info */}
             <div>
                <div className="space-y-12">
                   <div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-tight">Our Nerve Centers</h2>
                      <div className="space-y-8">
                         {[
                           { city: 'Mumbai (Global HQ)', addr: 'BKC Innovation Square, Tower A, 400051', phone: '+91 22 5550 1234' },
                           { city: 'New Delhi', addr: 'Vishwa Bhawan, Level 10, Connaught Place, 110001', phone: '+91 11 4440 9876' },
                           { city: 'Bengaluru', addr: 'Vishwa Tech Park, Whitefield, 560066', phone: '+91 80 6660 5555' }
                         ].map((loc, i) => (
                           <motion.div key={i} whileHover={{ x: 10 }} className="flex space-x-4">
                              <div className="w-12 h-12 bg-white border border-slate-100 shadow-sm rounded-xl flex items-center justify-center shrink-0">
                                 <MapPin className="text-indigo-700" size={20} />
                              </div>
                              <div>
                                 <h3 className="font-bold text-slate-900">{loc.city}</h3>
                                 <p className="text-slate-500 text-sm mb-1">{loc.addr}</p>
                                 <p className="text-indigo-700 text-sm font-bold">{loc.phone}</p>
                              </div>
                           </motion.div>
                         ))}
                      </div>
                   </div>

                   <div className="p-8 bg-slate-950 rounded-3xl text-white">
                      <h3 className="text-lg font-bold mb-4 uppercase tracking-widest text-indigo-400">Corporate Reach</h3>
                      <div className="space-y-4">
                         <div className="flex items-center space-x-3">
                            <Mail className="text-indigo-400" size={18} />
                            <span className="text-slate-300">info@vishwa-eng.com</span>
                         </div>
                         <div className="flex items-center space-x-3">
                            <MessageCircle className="text-indigo-400" size={18} />
                            <span className="text-slate-300">WhatsApp Consultation: +91 999 555 1234</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Form */}
             <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 relative">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 uppercase tracking-tight">Consultation Request</h2>
                
                {submitted ? (
                  <div className="h-[400px] flex flex-col items-center justify-center text-center">
                     <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                        <Send size={40} />
                     </motion.div>
                     <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                     <p className="text-slate-500 font-medium">Thank you. A Vishwa structural consultant will reach out within 1 business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                           <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                           <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20" placeholder="e.g. Arjun Mehta" />
                        </div>
                        <div>
                           <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email ID</label>
                           <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20" placeholder="arjun@enterprise.in" />
                        </div>
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Structural Category</label>
                        <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
                           <option>Infrastructure (Bridges/Tunnels)</option>
                           <option>Commercial Towers</option>
                           <option>Industrial Complexes</option>
                           <option>Smart Residential Townships</option>
                           <option>Retrofitting & Restoration</option>
                        </select>
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Project Brief</label>
                        <textarea required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 h-32" placeholder="Briefly describe your engineering requirements..."></textarea>
                     </div>
                     <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-5 bg-indigo-700 text-white rounded-2xl font-extrabold text-lg shadow-xl shadow-indigo-100 hover:bg-indigo-800 transition-all">
                        Submit for Review
                     </motion.button>
                  </form>
                )}
             </motion.div>
          </div>
       </section>

       {/* Visual Placeholder for India Map Presence */}
       <section className="h-[400px] bg-slate-200 relative">
          <div className="absolute inset-0 grayscale opacity-40">
            <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1500" className="w-full h-full object-cover" alt="Vishwa India Map" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="p-4 bg-white rounded-full shadow-2xl animate-bounce">
                <MapPin className="text-indigo-700" size={32} />
             </div>
          </div>
       </section>
    </div>
  );
};

export default Contact;
