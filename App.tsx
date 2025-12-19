
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Instagram, 
  MapPin, 
  ArrowRight,
  ChevronDown,
  Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Clients from './pages/Clients';
import Compliance from './pages/Compliance';
import Sustainability from './pages/Sustainability';
import Careers from './pages/Careers';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Downloads from './pages/Downloads';
import Legal from './pages/Legal';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Compliance', path: '/compliance' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div 
              whileHover={{ rotate: 180 }}
              className="w-10 h-10 bg-indigo-700 rounded-lg flex items-center justify-center transition-transform"
            >
              <span className="text-white font-bold text-xl">V</span>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 tracking-tight leading-none uppercase">Vishwa</span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase">Engineering & Const.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 relative group ${
                  location.pathname === link.path ? 'text-indigo-600' : 'text-slate-600'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600" />
                )}
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact" 
                className="bg-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-800 transition-all shadow-md hover:shadow-indigo-200"
              >
                Request Quote
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 shadow-xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-slate-700 py-2 border-b border-slate-50"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 grid grid-cols-2 gap-2">
               <Link to="/sustainability" onClick={() => setIsOpen(false)} className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">Sustainability</Link>
               <Link to="/clients" onClick={() => setIsOpen(false)} className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">Clients</Link>
               <Link to="/careers" onClick={() => setIsOpen(false)} className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">Careers</Link>
               <Link to="/downloads" onClick={() => setIsOpen(false)} className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">Downloads</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold tracking-tight uppercase">VISHWA</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Indian-rooted global leaders in structural engineering. Shaping Bharat's skyline and delivering high-performance infrastructure worldwide with integrity and innovation.
            </p>
            <div className="flex space-x-4">
              <motion.a whileHover={{ y: -3 }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></motion.a>
              <motion.a whileHover={{ y: -3 }} href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter"><Twitter size={20} /></motion.a>
              <motion.a whileHover={{ y: -3 }} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram"><Instagram size={20} /></motion.a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Vishwa</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Expertise</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Our Portfolio</Link></li>
              <li><Link to="/clients" className="hover:text-white transition-colors">Partnerships</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Join the Team</Link></li>
              <li><Link to="/media" className="hover:text-white transition-colors">Newsroom</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Trust & Standards</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/compliance" className="hover:text-white transition-colors">Certifications</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors">Environment</Link></li>
              <li><Link to="/downloads" className="hover:text-white transition-colors">Brochures</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Legal Terms</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="text-indigo-500 mt-1 shrink-0" size={18} />
                <span>BKC Innovation Square, Tower A<br />Mumbai, Maharashtra 400051</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-indigo-500 shrink-0" size={18} />
                <a href="tel:+912255501234" className="hover:text-white transition-colors">+91 (22) 5550-1234</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-indigo-500 shrink-0" size={18} />
                <a href="mailto:info@vishwa-eng.com" className="hover:text-white transition-colors">info@vishwa-eng.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2024 Vishwa Engineering & Construction Pvt Ltd. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
             <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
             <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
             <Link to="/cookies" className="hover:text-slate-300 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/privacy" element={<Legal type="privacy" />} />
          <Route path="/terms" element={<Legal type="terms" />} />
          <Route path="/cookies" element={<Legal type="cookies" />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
