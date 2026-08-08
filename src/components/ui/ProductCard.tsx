import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Pill, Leaf, Sparkles, ShieldCheck, Package } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Pill,
  Leaf,
  Sparkles,
  ShieldCheck,
  Package,
};

const categoryColorMap: Record<string, { bg: string; text: string; badge: string }> = {
  otc: { bg: 'bg-blue-50', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-700' },
  vitamins: { bg: 'bg-emerald-50', text: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-700' },
  cosmetics: { bg: 'bg-purple-50', text: 'text-purple-700', badge: 'bg-purple-100 text-purple-700' },
  'medical-supplies': { bg: 'bg-amber-50', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-700' },
};

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  description: string;
  icon: string;
  image: string;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  category,
  categoryLabel,
  description,
  icon,
  image,
  index,
}) => {
  const Icon = iconMap[icon] ?? Package;
  const colors = categoryColorMap[category] ?? categoryColorMap['otc'];
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100/80 hover:border-[#0A5C8A]/20 shadow-[0_4px_25px_rgba(9,17,34,0.02)] hover:shadow-[0_20px_50px_rgba(10,92,138,0.08)] transition-all duration-500"
    >
      {/* Product Image */}
      <Link to={`/products/${id}`} className="block relative overflow-hidden">
        <div className="relative h-52 overflow-hidden bg-slate-50">
          {!imgError ? (
            <img
              src={image}
              alt={name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div className={`w-full h-full flex items-center justify-center ${colors.bg}`}>
              <Icon size={48} className={`${colors.text} opacity-40`} />
            </div>
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Category badge */}
          <span className={`absolute top-4 left-4 inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${colors.badge} backdrop-blur-sm shadow-sm`}>
            {categoryLabel}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="px-6 pt-5 pb-6">
        {/* Name */}
        <Link to={`/products/${id}`}>
          <h3 className="text-[16px] font-extrabold text-slate-800 group-hover:text-[#0A5C8A] transition-colors duration-300 tracking-tight leading-snug mb-2">
            {name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-slate-500 text-[13px] leading-relaxed font-medium line-clamp-2 mb-5">
          {description}
        </p>

        {/* Action */}
        <Link
          to={`/products/${id}`}
          className="inline-flex items-center gap-2 text-[13px] font-bold text-[#0A5C8A] group-hover:text-[#1e92d0] transition-colors duration-300"
        >
          View Details
          <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
