import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ClipboardCheck, Truck } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const steps = [
  {
    number: '01',
    icon: ShoppingCart,
    title: 'Place Your Order',
    description:
      "Reach out to our team via phone or email to discuss your requirements. We'll guide you through our product catalog and find exactly what your facility needs.",
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Order Processing & Confirmation',
    description:
      'Our team verifies your order, confirms product availability, applies quality checks, and prepares all necessary documentation for a seamless process.',
  },
  {
    number: '03',
    icon: Truck,
    title: 'Delivery & Ongoing Support',
    description:
      'We ensure fast, reliable delivery directly to your location, followed by dedicated after-sale support to keep your supply chain running without interruption.',
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white section-pad">
      <div className="container-custom">
        <SectionTitle
          eyebrow="The Process"
          title="Your Path to Better Health, One Step at a Time"
          subtitle="A streamlined, transparent process designed to make healthcare procurement simple, fast, and reliable."
        />

        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 w-[60%] h-0.5 bg-gradient-to-r from-transparent via-[#00B4D8] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center relative"
                >
                  {/* Number + Icon bubble */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0A5C8A] to-[#00B4D8] flex items-center justify-center shadow-lg">
                      <Icon size={36} className="text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#2D9E6B] text-white text-xs font-black flex items-center justify-center shadow">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0D1B2A] mb-3">{step.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed max-w-xs">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
