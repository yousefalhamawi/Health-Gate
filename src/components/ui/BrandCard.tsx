import React from 'react';
import { motion } from 'framer-motion';

interface BrandCardProps {
  image: string;
  name: string;
  index: number;
}

const BrandCard: React.FC<BrandCardProps> = ({ image, name, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-2xl border border-slate-100/60 shadow-[0_4px_16px_rgba(9,17,34,0.01)] hover:shadow-[0_12px_28px_rgba(10,92,138,0.05)] hover:border-slate-200 transition-all duration-300 p-5 aspect-[4/3] flex items-center justify-center group overflow-hidden cursor-pointer"
    >
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};

export default BrandCard;
