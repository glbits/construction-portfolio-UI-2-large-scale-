
import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2, ShieldCheck, Factory, HardHat, Building, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 }
};

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl font-extrabold text-slate-900 mb-6"
          >
            Specialized Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            From foundation design to high-performance skyscrapers, we provide end-to-end engineering and construction capabilities.
          </motion.p>
        </div>
      </header>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        {SERVICES.map((service, index) => (
          <motion.section 
            key={service.id} 
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
          >
            <div className="w-full lg:w-1/2">
              <motion.div 
                whileInView={{ scale: [1, 1.1, 1] }}
                className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-2xl mb-8 shadow-xl shadow-indigo-100"
              >
                {service.id === 's1' && <Building size={32} />}
                {service.id === 's2' && <HardHat size={32} />}
                {service.id === 's3' && <Factory size={32} />}
                {service.id === 's4' && <Leaf size={32} />}
              </motion.div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{service.title}</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                {service.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                    <CheckCircle2 className="text-indigo-600 mr-2 w-5 h-5" /> Scope of Work
                  </h3>
                  <ul className="space-y-3">
                    {service.scope.map((item, i) => (
                      <li key={i} className="text-slate-500 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                    <ShieldCheck className="text-indigo-600 mr-2 w-5 h-5" /> Compliance & Standards
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.standards.map((std, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-[10px] font-bold uppercase rounded-full">
                        {std}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="w-full lg:w-1/2 relative"
            >
               <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img src={`https://picsum.photos/seed/${service.id}/800/600`} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
               </div>
               <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden sm:block"
               >
                  <div className="text-indigo-600 font-extrabold text-2xl">100%</div>
                  <div className="text-slate-500 text-xs font-bold uppercase">Compliance Rate</div>
               </motion.div>
            </motion.div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default Services;
