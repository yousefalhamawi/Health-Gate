import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import BrandCard from '../components/ui/BrandCard';
import { brands } from '../data/brands';
import { ArrowRight } from 'lucide-react';

const BrandsSection: React.FC = () => {
  return (
    <section id="brands" className="bg-white section-pad relative overflow-hidden">
      {/* Dynamic ambient background blobs */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] rounded-full bg-[#00D5FF]/2 glow-blur pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-[#0A5C8A]/2 glow-blur pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Global Partnerships"
          title="Healthcare & Wellness Brands We Distribute"
          subtitle="We partner with leading global pharmaceutical and wellness manufacturers to bring certified, high-quality products to the Syrian market."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 lg:gap-6 mb-12">
          {brands.map((brand, i) => (
            <BrandCard key={brand.id} {...brand} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="mailto:Dr.oubada@health-gate.net" className="btn-primary group">
            <span>Inquire About Partnerships</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;
