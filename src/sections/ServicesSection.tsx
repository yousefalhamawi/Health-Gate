import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/ui/ServiceCard';
import { services } from '../data/services';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative section-pad bg-gradient-to-b from-[#FAFCFF] via-slate-50/70 to-white overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#00D5FF]/3 glow-blur pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full bg-[#0A5C8A]/3 glow-blur pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Wholesale & Logistics"
          title="Comprehensive Medical Distribution Services"
          subtitle="From registered OTC pharmaceuticals to regulatory support — we provide end-to-end healthcare distribution solutions tailored for pharmacies, clinics, and hospitals."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.id} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
