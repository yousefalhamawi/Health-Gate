import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navLinks } from '../../data/navLinks';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 30); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  const go = (href: string, isRoute?: boolean) => { setIsOpen(false); if (isRoute) { navigate(href); return; } const id = href.slice(1); if (location.pathname !== '/') { navigate('/'); setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80); } else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  return <>
    <motion.header className="fixed left-0 right-0 z-50 px-4 md:px-6" animate={{ top: scrolled ? 12 : 0, paddingTop: scrolled ? 0 : '1rem' }}>
      <motion.div className="mx-auto" animate={scrolled ? { maxWidth: '76rem', borderRadius: '9999px', backgroundColor: 'rgba(255,255,255,0.75)', boxShadow: '0 8px 32px rgba(9,17,34,0.08)', padding: '0.375rem 1.5rem' } : { maxWidth: '100%', borderRadius: '0px', backgroundColor: 'rgba(255,255,255,0)', padding: '0.25rem 0.5rem' }}>
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center"><img src="/logo/hg.png" alt="Health Gate Logo" className="w-auto" style={{ height: scrolled ? 36 : 44 }} /></Link>
          <nav className="hidden md:flex items-center gap-1">{navLinks.map(link => <button key={link.label} onClick={() => go(link.href, link.isRoute)} className="px-4 py-2 text-sm font-semibold rounded-full text-slate-600 hover:text-slate-900">{link.label}</button>)}</nav>
          <div className="flex items-center gap-3"><button className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-slate-100/60 text-slate-600 text-xs font-semibold"><Globe size={14}/> EN</button><a href="mailto:Dr.oubada@health-gate.net" className="hidden md:flex btn-primary !py-2 !px-5 !text-xs !shadow-sm">Get In Touch</a><button onClick={() => setIsOpen(!isOpen)} className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#0A5C8A] text-white" aria-label="Toggle menu">{isOpen ? <X size={18}/> : <Menu size={18}/>}</button></div>
        </div>
      </motion.div>
      <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white/95 backdrop-blur-xl rounded-2xl mt-3 overflow-hidden border border-slate-100 shadow-xl max-w-3xl mx-auto"><div className="p-5 flex flex-col gap-2">{navLinks.map(link => <button key={link.label} onClick={() => go(link.href, link.isRoute)} className="text-left text-sm font-semibold py-2.5 px-4 rounded-xl text-slate-700 hover:bg-slate-50">{link.label}</button>)}<a href="mailto:Dr.oubada@health-gate.net" className="btn-primary text-center justify-center !py-3 w-full mt-2">Get In Touch</a></div></motion.div>}</AnimatePresence>
    </motion.header>
  </>;
};
export default Navbar;
