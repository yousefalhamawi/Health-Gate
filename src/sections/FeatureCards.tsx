import React from 'react';
import FeatureCard from '../components/ui/FeatureCard';

const features = [
  {
    icon: 'ShieldCheck',
    title: 'Certified Care',
    description:
      'Every product in our portfolio meets strict quality certifications and regulatory compliance standards for safe healthcare distribution.',
    accentColor: '#0A5C8A',
  },
  {
    icon: 'HeartPulse',
    title: 'Healthy Advice',
    description:
      'Our expert team provides professional guidance to help pharmacies and healthcare providers make informed product decisions.',
    accentColor: '#2D9E6B',
  },
  {
    icon: 'Clock',
    title: '24/7 Support',
    description:
      'Dedicated round-the-clock support to ensure your orders, queries, and urgent healthcare needs are handled without delay.',
    accentColor: '#00B4D8',
  },
];

const FeatureCards: React.FC = () => {
  return (
    <section className="bg-white pb-12 pt-0 relative z-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-8 relative z-10">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
