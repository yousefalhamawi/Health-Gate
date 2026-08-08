import React from 'react';
import { motion } from 'framer-motion';
import {
  Pill,
  Leaf,
  Sparkles,
  Truck,
  ShieldCheck,
  Package,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Pill,
  Leaf,
  Sparkles,
  Truck,
  ShieldCheck,
  Package,
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  const Icon = iconMap[icon] ?? Package;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl p-7 shadow-[0_10px_35px_rgba(9,17,34,0.02)] hover:shadow-[0_20px_45px_rgba(10,92,138,0.06)] border border-slate-100/80 hover:border-[#0A5C8A]/20 transition-all duration-300 group cursor-default relative overflow-hidden"
    >
      {/* Accent glow corner */}
      <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#0A5C8A]/5 rounded-full blur-xl group-hover:bg-[#0A5C8A]/10 transition-all duration-300 pointer-events-none" />

      {/* Floating visual bar on the left */}
      <div className="absolute top-8 bottom-8 left-0 w-1 bg-transparent group-hover:bg-[#0A5C8A] transition-all duration-300 rounded-r-md" />

      {/* Icon Wrapper */}
      <div className="w-14 h-14 rounded-2xl bg-[#0A5C8A]/5 flex items-center justify-center mb-6 group-hover:bg-[#0A5C8A] group-hover:text-white transition-all duration-300 border border-[#0A5C8A]/10 shadow-[0_4px_10px_rgba(10,92,138,0.02)]">
        <Icon size={24} className="text-[#0A5C8A] group-hover:text-white transition-colors duration-300" />
      </div>

      {/* Title & Description */}
      <h3 className="text-lg font-black text-slate-800 mb-2.5 group-hover:text-[#0A5C8A] transition-colors duration-300 tracking-tight">
        {title}
      </h3>
      <p className="text-slate-500 text-[13px] leading-relaxed font-medium">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
