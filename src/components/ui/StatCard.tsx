import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, UserCheck, Package } from 'lucide-react';

const iconMap = [Award, Users, UserCheck, Package];

interface StatCardProps {
  value: string;
  label: string;
  description: string;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, description, index }) => {
  const Icon = iconMap[index] ?? Award;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass-dark rounded-[2rem] p-8 text-center flex flex-col items-center justify-center relative overflow-hidden group shadow-xl border border-white/5"
    >
      {/* Decorative ambient light */}
      <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#00D5FF]/10 rounded-full blur-2xl group-hover:bg-[#00D5FF]/20 transition-all duration-500 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-[#0A5C8A]/10 rounded-full blur-2xl group-hover:bg-[#0A5C8A]/20 transition-all duration-500 pointer-events-none" />

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-[#00D5FF] mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-white/10">
        <Icon size={24} />
      </div>

      {/* Value */}
      <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight select-none">
        {value}
      </div>

      {/* Label & Description */}
      <div className="text-xs font-extrabold text-[#A5F3FC] mb-2 uppercase tracking-widest">{label}</div>
      <div className="text-xs text-blue-200/60 leading-relaxed font-medium max-w-[220px]">{description}</div>
    </motion.div>
  );
};

export default StatCard;
