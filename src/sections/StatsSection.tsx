import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '../components/ui/StatCard';
import { stats } from '../data/stats';

const StatsSection: React.FC = () => {
  return (
    <section className="gradient-dark section-pad relative overflow-hidden">
      {/* High-fidelity background glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#00D5FF]/10 glow-blur" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#0A5C8A]/15 glow-blur" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#A5F3FC] text-xs font-black uppercase tracking-widest mb-3 block">
            Our Performance Metrics
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Reflecting Our Corporate Commitment
          </h2>
          <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-[#00D5FF] via-[#0A84FF] to-emerald-400 mx-auto mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
