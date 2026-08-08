import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Clock } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  ShieldCheck,
  HeartPulse,
  Clock,
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
  accentColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  index,
  accentColor = '#0A5C8A',
}) => {
  const Icon = iconMap[icon] ?? ShieldCheck;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl p-7 border border-slate-100/80 shadow-[0_10px_35px_rgba(9,17,34,0.02)] hover:shadow-[0_20px_45px_rgba(10,92,138,0.06)] hover:border-slate-200/80 transition-all duration-300 flex items-start gap-5 group cursor-default relative overflow-hidden"
    >
      {/* Decorative accent top line */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: accentColor }}
      />

      {/* Icon Wrapper */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
        style={{ backgroundColor: `${accentColor}12`, color: accentColor }}
      >
        <Icon size={26} className="[color:inherit]" />
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <h3 className="font-extrabold text-slate-800 text-base mb-1.5 tracking-tight group-hover:text-[#0A5C8A] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-500 text-[13px] leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
