
import React from 'react';
import { LEADERSHIP } from '../constants';
import { Target, Eye, Shield, Globe2, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const About: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-3xl">
            <h1 className="text-5xl font-extrabold mb-6 tracking-tight uppercase">Our Indian Legacy</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Founded in Mumbai with a vision to revolutionize structural integrity, Vishwa has evolved from a premier domestic firm into a globally recognized titan of engineering excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div {...fadeInUp} className="bg-slate-50 p-12 rounded-3xl">
              <div className="w-14 h-14 bg-indigo-700 text-white rounded-2xl flex items-center justify-center mb-8">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To be the most trusted global engineering partner from Bharat, redefining the possibilities of modern construction through innovation, safety, and indigenous wisdom.
              </p>
            </motion.div>
            <motion.div {...fadeInUp} className="bg-indigo-700 p-12 rounded-3xl text-white shadow-xl shadow-indigo-100">
              <div className="w-14 h-14 bg-white text-indigo-700 rounded-2xl flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-indigo-100 leading-relaxed text-lg">
                To deliver world-class infrastructure that stands the test of time, prioritizing quality craftsmanship while empowering the local communities we build in across the globe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight uppercase">Three Decades of Engineering Bharat</h2>
           </div>
           <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 hidden md:block"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                 {[
                   { year: '1994', event: 'Vishwa Founded in Mumbai' },
                   { year: '2005', event: 'Landmark SEZ Projects in India' },
                   { year: '2015', event: 'Global Expansion to Middle East & US' },
                   { year: '2024', event: 'Leading India\'s Green Building Tech' }
                 ].map((t, i) => (
                   <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="relative z-10 flex flex-col items-center">
                      <div className="w-12 h-12 bg-white border-4 border-indigo-700 rounded-full flex items-center justify-center mb-6 shadow-sm">
                        <div className="w-3 h-3 bg-indigo-700 rounded-full"></div>
                      </div>
                      <div className="text-center">
                        <span className="text-indigo-700 font-bold text-xl block mb-2">{t.year}</span>
                        <p className="text-sm text-slate-600 font-semibold">{t.event}</p>
                      </div>
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Geographic Presence */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Bharat to the World</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Operating across major global continents, we bring Indian precision to large-scale infrastructure. Our offices in Mumbai, Delhi, Bengaluru, and Singapore serve as our primary innovation nerve centers.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 {['Global HQ: Mumbai', 'Regional Hub: New Delhi', 'Tech Hub: Bengaluru', 'APAC HQ: Singapore'].map((loc, i) => (
                    <div key={i} className="flex items-center space-x-2 text-slate-800 font-semibold">
                       <Globe2 className="text-indigo-700 w-5 h-5" />
                       <span>{loc}</span>
                    </div>
                 ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden shadow-2xl bg-indigo-50 p-4">
               <img 
                 src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                 alt="Vishwa Engineering Global Map" 
                 className="w-full h-auto rounded-2xl grayscale"
               />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
