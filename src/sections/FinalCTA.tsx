import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="bg-[#091122] section-pad relative overflow-hidden border-t border-white/5">
      {/* Decorative gradient glowing spheres */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A5C8A]/10 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#00D5FF]/5 glow-blur pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#0A84FF]/5 glow-blur pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4.5 py-2 mb-8 shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-blue-200/80 font-extrabold uppercase tracking-widest">Accepting New Partners</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-6 leading-[1.2] tracking-tight"
          >
            Take the First Step Toward{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5FF] via-[#0A84FF] to-emerald-400">
              Reliable Medical Distribution
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-blue-200/60 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto font-medium"
          >
            Partner with Health Gate to access trusted pharmaceuticals, vitamins, and
            personal care products — delivered with speed, care, and unwavering quality.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="mailto:Dr.oubada@health-gate.net"
              className="btn-primary group"
            >
              <span>Contact Us Now</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+963987350376" className="btn-white flex items-center gap-2 group">
              <Phone size={18} className="text-[#0A5C8A] group-hover:scale-105 transition-transform" />
              <span>+963 987 350 376</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
