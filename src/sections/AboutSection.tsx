import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, BookOpen, Target, ShieldCheck } from 'lucide-react';

interface TabContent {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
}

const tabs: TabContent[] = [
  {
    id: 'story',
    label: 'Our Profile',
    icon: BookOpen,
    title: 'Welcome To Health Gate Wholesale',
    subtitle: 'Committed to Delivering Trusted Healthcare Solutions',
    description:
      'At Health Gate, we specialize in the wholesale distribution of a comprehensive range of healthcare products — from prescription and over-the-counter pharmaceuticals to vitamins, dietary supplements, personal care items, and essential medical supplies. Our mission is to bridge the gap between global healthcare brands and local healthcare networks in Syria.',
    bullets: [
      'Trusted partner for healthcare product distribution across Syria',
      'Tailored solutions meeting the specific needs of pharmacies and hospitals',
      'Advanced logistics backed by certified quality and compliance standards',
    ],
  },
  {
    id: 'mission',
    label: 'Core Mission',
    icon: Target,
    title: 'Connecting Global Brands with Local Needs',
    subtitle: 'Building a Healthier Future Through Efficient Distribution',
    description:
      'Our focus is to provide pharmacies, clinics, and hospitals with uninterrupted, reliable access to premium products. We strive to maintain absolute supply chain integrity while offering excellent logistics support and customized procurement packages for our retail partners.',
    bullets: [
      'Continuous product availability and zero supply-chain downtime',
      'Direct partnerships with global manufacturers for authentic products',
      'Empowering local pharmacists with verified quality and competitive packages',
    ],
  },
  {
    id: 'quality',
    label: 'Quality Standards',
    icon: ShieldCheck,
    title: 'Uncompromised Integrity at Every Step',
    subtitle: 'Strict Compliance & Advanced Temperature Control Logistics',
    description:
      'We operate under global quality guidelines to guarantee that all supplements, OTC drugs, and cosmetics maintain their therapeutic value. Our warehouses use state-of-the-art climate management, and we audit batch codes meticulously.',
    bullets: [
      'Full compliance with local and international regulatory standards',
      'Validated cold-chain systems for temperature-sensitive shipments',
      'Robust trace-and-track processes for every batch we distribute',
    ],
  },
];

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('story');

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section id="about" className="bg-white section-pad relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-20 left-0 w-80 h-80 rounded-full bg-[#00D5FF]/3 glow-blur pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Side — Image Layout (cols: 5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_15px_40px_rgba(9,17,34,0.08)] border border-slate-100 bg-white">
              <img
                src="/brands/logo-1024x544.png"
                alt="Health Gate Corporate Logo"
                className="w-full h-auto object-cover p-8 select-none pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A5C8A]/5 to-transparent pointer-events-none" />
            </div>

            {/* Stat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#0A5C8A] via-[#0A84FF] to-[#00D5FF] text-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(10,92,138,0.2)] border border-white/10"
            >
              <div className="text-3xl font-black leading-none">+500</div>
              <div className="text-[11px] font-bold text-blue-100 mt-1 uppercase tracking-wider">
                Monthly Consultations
              </div>
            </motion.div>

            {/* Geometric Outline Frame */}
            <div className="absolute -top-4 -left-4 w-28 h-28 border-4 border-[#00D5FF]/20 rounded-3xl pointer-events-none -z-10" />
          </motion.div>

          {/* Right Side — Interactive Tabbed Content (cols: 7) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col">
            <span className="inline-block text-xs font-black uppercase tracking-widest text-[#00D5FF] mb-3">
              Corporate Overview
            </span>

            {/* Tab Headers */}
            <div className="flex border-b border-slate-100 mb-8 gap-2 p-1 bg-slate-50/50 rounded-2xl w-fit">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                const isSelected = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-300 ${
                      isSelected ? 'text-[#0A5C8A]' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="activeAboutTab"
                        className="absolute inset-0 bg-white shadow-sm border border-slate-100 rounded-xl"
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <TabIcon size={14} />
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content Panels */}
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-2 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-[#0A5C8A] rounded-full inline-block" />
                    {currentTab.title}
                  </h2>
                  <p className="text-sm font-bold text-[#0A5C8A] mb-5 tracking-tight uppercase">
                    {currentTab.subtitle}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                    {currentTab.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-3.5 mb-8">
                    {currentTab.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm font-semibold leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Call to Action */}
            <motion.div className="mt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary group"
              >
                <span>Explore Services</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
