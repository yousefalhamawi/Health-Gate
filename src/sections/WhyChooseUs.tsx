import React from 'react';
import { motion } from 'framer-motion';
import { Award, Package, ShieldCheck } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const reasons = [
  {
    icon: Award,
    title: 'Certified & Trusted Partnerships',
    description:
      'We work exclusively with globally certified manufacturers and brand principals, ensuring every product in our portfolio meets the highest safety and quality benchmarks.',
  },
  {
    icon: Package,
    title: 'Comprehensive Portfolio',
    description:
      'From prescription pharmaceuticals and vitamins to personal care and medical supplies, our broad catalog means you get everything your facility needs from a single source.',
  },
  {
    icon: ShieldCheck,
    title: 'Commitment to Quality & Safety',
    description:
      'Our end-to-end quality control processes, cold-chain logistics, and regulatory expertise guarantee that every order you receive is safe, compliant, and delivered on time.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#FAFCFF] section-pad relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#00D5FF]/3 glow-blur pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0A5C8A]/3 glow-blur pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Why Health Gate"
          title="Your Preferred Healthcare Distribution Partner"
          subtitle="Three core pillars that define our service standard and set us apart in the medical wholesale market."
        />

        {/* Dynamic Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0A5C8A] via-[#0A84FF] to-[#00D5FF] text-white rounded-full px-7 py-3.5 shadow-lg border border-white/10 select-none">
            <span className="text-2xl font-black leading-none">99.8%</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span className="text-xs font-bold uppercase tracking-wider">Order Accuracy &amp; Client Satisfaction</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] p-8 border border-slate-100/80 shadow-[0_10px_35px_rgba(9,17,34,0.02)] hover:shadow-[0_20px_45px_rgba(10,92,138,0.06)] hover:border-[#0A5C8A]/10 transition-all duration-300 group cursor-default relative overflow-hidden"
              >
                {/* Glow border corner */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#0A5C8A]/5 rounded-full blur-xl group-hover:bg-[#0A5C8A]/10 transition-all duration-300 pointer-events-none" />

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0A5C8A] to-[#00D5FF] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300 shadow-md">
                  <Icon size={26} className="text-white" />
                </div>
                
                <h3 className="text-lg font-black text-slate-800 mb-3 group-hover:text-[#0A5C8A] transition-colors duration-300 tracking-tight">
                  {r.title}
                </h3>
                <p className="text-slate-500 text-[13px] leading-relaxed font-medium">
                  {r.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
