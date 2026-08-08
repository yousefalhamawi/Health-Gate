export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'otc',
    icon: 'Pill',
    title: 'OTC Products Distribution',
    description:
      'Reliable distribution of over-the-counter medications across pharmacies and healthcare outlets, ensuring consistent availability and compliance.',
  },
  {
    id: 'vitamins',
    icon: 'Leaf',
    title: 'Vitamins & Dietary Supplements',
    description:
      'A comprehensive range of vitamins, minerals, and dietary supplements sourced from certified global manufacturers to support everyday health.',
  },
  {
    id: 'cosmetics',
    icon: 'Sparkles',
    title: 'Cosmetics & Personal Care',
    description:
      'Premium personal care and cosmetic products distributed with strict quality controls, serving pharmacies, clinics, and wellness retailers.',
  },
  {
    id: 'logistics',
    icon: 'Truck',
    title: 'Bulk Procurement & Logistics',
    description:
      'End-to-end bulk procurement solutions backed by advanced cold-chain logistics and warehousing to guarantee product integrity on delivery.',
  },
  {
    id: 'regulatory',
    icon: 'ShieldCheck',
    title: 'Regulatory Support & Market Access',
    description:
      'Expert guidance through regulatory approval processes and market-entry strategies, helping brands reach the Syrian healthcare market efficiently.',
  },
];
