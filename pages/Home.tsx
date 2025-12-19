import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, SERVICES } from '../constants';
import { ArrowRight, Building2, HardHat, Warehouse, Home as HomeIcon, CheckCircle2, Award, Globe, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

// Fixed transition ease type by using 'as const' to prevent inference as a generic string
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

const Home: React.FC = () => {
  return (
    <div className="space-y-0 overflow-x-hidden">
      {/* Hero Banner */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-slate-900">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Vishwa Engineering Site"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent z-[1]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="max-w-2xl"
          >
            <motion.span 
              variants={{ initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 } }}
              className="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full mb-6 uppercase tracking-widest"
            >
              Bharat's Engineering Pride
            </motion.span>
            <motion.h1 
              variants={{ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
            >
              Engineering <span className="text-indigo-400">Vishwa</span> Into Reality.
            </motion.h1>
            <motion.p 
              variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
              className="text-xl text-slate-300 mb-10 leading-relaxed"
            >
              Building India's world-class infrastructure, high-performance commercial landmarks, and smart industrial parks. Engineering the foundations of a global future.
            </motion.p>
            <motion.div 
              variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link to="/contact" className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold flex items-center justify-center hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30">
                Get Expert Advice <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/projects" className="px-8 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full font-bold flex items-center justify-center hover:bg-white/20 transition-all">
                Our Impact
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'Years in India', value: '30+', icon: Award },
              { label: 'Iconic Projects', value: '450+', icon: CheckCircle2 },
              { label: 'Built Space (M Sqft)', value: '120+', icon: Warehouse },
              { label: 'Global Offices', value: '15+', icon: Globe },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                variants={{
                  initial: { opacity: 0, scale: 0.9 },
                  whileInView: { opacity: 1, scale: 1 }
                }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={24} />
                </div>
                <div className="text-4xl font-extrabold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-16"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Capabilities That Shape Nations</h2>
              <p className="text-slate-600 text-lg">Vishwa offers comprehensive engineering services, from urban master planning to high-complexity structural design.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center text-indigo-600 font-bold hover:text-indigo-700 mt-4 md:mt-0 transition-all group">
              Explore All Verticals <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {SERVICES.map((service) => (
              <motion.div 
                key={service.id} 
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  {service.id === 's1' && <Building2 size={32} />}
                  {service.id === 's2' && <HardHat size={32} />}
                  {service.id === 's3' && <Warehouse size={32} />}
                  {service.id === 's4' && <HomeIcon size={32} />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/services" className="text-indigo-600 text-sm font-bold inline-flex items-center hover:underline">
                  Our Scope <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div {...fadeInUp} className="mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Landmarks of Excellence</h2>
              <p className="text-slate-600 text-lg">A showcase of Vishwa's structural milestones across Bharat and beyond.</p>
           </motion.div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {PROJECTS.slice(0, 2).map((project, idx) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Link to={`/projects/${project.id}`} className="group relative rounded-3xl overflow-hidden block shadow-lg">
                    <div className="aspect-[16/9]">
                      <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                      <span className="text-white/60 text-sm font-medium mb-1 uppercase tracking-wider">{project.category}</span>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                      <div className="flex items-center text-white/80 text-sm">
                        <MapPin className="w-4 h-4 mr-1" /> {project.location}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
           </div>
           <motion.div {...fadeInUp} className="mt-12 text-center">
              <Link to="/projects" className="inline-flex items-center px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-md">
                Browse Full Portfolio
              </Link>
           </motion.div>
        </div>
      </section>

      {/* Primary CTA */}
      <section className="py-24 bg-indigo-700 text-white relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-indigo-800 rounded-full blur-3xl"
        ></motion.div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
           <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Ready to build your Vishwa?</motion.h2>
           <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-indigo-100 mb-10 leading-relaxed"
           >
             Our expert consultants are ready to provide technical feasibility studies and comprehensive project quotes for your next landmark.
           </motion.p>
           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-white text-indigo-700 rounded-full font-extrabold text-lg shadow-2xl hover:bg-indigo-50 transition-all">
              Initiate Consultation <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
           </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
