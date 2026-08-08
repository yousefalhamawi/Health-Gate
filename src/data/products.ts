export type ProductCategory = 'otc' | 'vitamins' | 'cosmetics' | 'medical-supplies';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  description: string;
  longDescription: string;
  features: string[];
  brand: string;
  origin: string;
  icon: string;
  image: string;
}

export const categoryFilters: { key: ProductCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All Products' },
  { key: 'otc', label: 'OTC Medications' },
  { key: 'vitamins', label: 'Vitamins & Supplements' },
  { key: 'cosmetics', label: 'Cosmetics & Personal Care' },
  { key: 'medical-supplies', label: 'Medical Supplies' },
];

export const products: Product[] = [
  // ── OTC Medications ──
  {
    id: 'paracetamol-500',
    name: 'Paracetamol 500mg Tablets',
    category: 'otc',
    categoryLabel: 'OTC Medications',
    description: 'Fast-acting analgesic and antipyretic for headache, fever, and mild pain relief.',
    longDescription:
      'Paracetamol 500mg tablets are a trusted, fast-acting analgesic and antipyretic recommended for the relief of headaches, muscle pain, toothache, cold and flu symptoms, and mild to moderate fever. Widely used across pharmacies, clinics, and hospitals, this formulation delivers effective pain relief with a well-established safety profile when used as directed.',
    features: [
      'Fast onset of action within 15–30 minutes',
      'Suitable for adults and children over 12 years',
      'Well-tolerated with minimal side effects',
      'Available in blister packs for pharmacy dispensing',
      'WHO Essential Medicine listed',
    ],
    brand: 'PharmaCare',
    origin: 'Germany',
    icon: 'Pill',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop',
  },
  {
    id: 'ibuprofen-400',
    name: 'Ibuprofen 400mg Coated Tablets',
    category: 'otc',
    categoryLabel: 'OTC Medications',
    description: 'Non-steroidal anti-inflammatory drug for pain, inflammation, and fever reduction.',
    longDescription:
      'Ibuprofen 400mg coated tablets provide effective relief from inflammation, joint pain, dental pain, menstrual cramps, and fever. The enteric coating ensures gastric protection and improved tolerability. Trusted by healthcare professionals worldwide as a frontline NSAID for ambulatory care.',
    features: [
      'Enteric-coated for gastric protection',
      'Anti-inflammatory and analgesic action',
      'Effective for dental & musculoskeletal pain',
      'Available in 20 & 50 tablet packs',
      'GMP-certified manufacturing',
    ],
    brand: 'MediRelief',
    origin: 'India',
    icon: 'Pill',
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=600&h=400&fit=crop',
  },
  {
    id: 'cetirizine-10',
    name: 'Cetirizine 10mg Antihistamine',
    category: 'otc',
    categoryLabel: 'OTC Medications',
    description: 'Second-generation antihistamine for allergic rhinitis, urticaria, and seasonal allergies.',
    longDescription:
      'Cetirizine 10mg is a second-generation antihistamine that provides 24-hour relief from allergic rhinitis, hay fever, urticaria, and other allergic conditions. Its non-sedating formulation makes it suitable for daytime use, allowing patients to maintain their daily activities without drowsiness.',
    features: [
      '24-hour allergy relief with single dose',
      'Non-sedating formula',
      'Fast-acting — works within 20 minutes',
      'Suitable for adults and children 6+',
      'Film-coated tablets for easy swallowing',
    ],
    brand: 'AllerFree',
    origin: 'Turkey',
    icon: 'Pill',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop',
  },
  {
    id: 'omeprazole-20',
    name: 'Omeprazole 20mg Capsules',
    category: 'otc',
    categoryLabel: 'OTC Medications',
    description: 'Proton pump inhibitor for heartburn, acid reflux, and gastric ulcer management.',
    longDescription:
      'Omeprazole 20mg gastro-resistant capsules are a proven proton pump inhibitor (PPI) used to treat heartburn, gastroesophageal reflux disease (GERD), and gastric ulcers. The delayed-release formulation ensures optimal absorption and sustained acid suppression over a 24-hour period.',
    features: [
      'Delayed-release gastro-resistant capsules',
      '24-hour acid suppression',
      'Treats GERD and peptic ulcers',
      'Well-established safety profile',
      'Available in 14 & 28 capsule packs',
    ],
    brand: 'GastroShield',
    origin: 'Jordan',
    icon: 'Pill',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&h=400&fit=crop',
  },

  // ── Vitamins & Supplements ──
  {
    id: 'vitamin-d3-5000',
    name: 'Vitamin D3 5000 IU Softgels',
    category: 'vitamins',
    categoryLabel: 'Vitamins & Supplements',
    description: 'High-potency cholecalciferol for bone health, immunity, and calcium absorption support.',
    longDescription:
      'Vitamin D3 5000 IU softgels deliver high-potency cholecalciferol in an easy-to-absorb oil-based formulation. Essential for maintaining healthy bones, supporting immune system function, and enhancing calcium absorption. Ideal for individuals with vitamin D deficiency or limited sun exposure.',
    features: [
      'High-potency 5000 IU per softgel',
      'Oil-based for superior absorption',
      'Supports bone density and immune health',
      'Non-GMO and gluten-free',
      'Third-party tested for purity',
    ],
    brand: 'VitaPlus',
    origin: 'USA',
    icon: 'Leaf',
    image: 'https://images.unsplash.com/photo-1616671276441-2f2c277b8bf6?w=600&h=400&fit=crop',
  },
  {
    id: 'omega-3-1000',
    name: 'Omega-3 Fish Oil 1000mg',
    category: 'vitamins',
    categoryLabel: 'Vitamins & Supplements',
    description: 'Purified EPA & DHA omega-3 fatty acids for cardiovascular and cognitive health.',
    longDescription:
      'Omega-3 Fish Oil 1000mg capsules provide a concentrated source of EPA (180mg) and DHA (120mg) essential fatty acids derived from deep-sea fish. Molecularly distilled to remove heavy metals and contaminants, these softgels support heart health, brain function, and joint flexibility.',
    features: [
      'Molecularly distilled for purity',
      '180mg EPA + 120mg DHA per capsule',
      'Supports heart, brain, and joint health',
      'Enteric-coated to prevent fishy aftertaste',
      'Sustainably sourced fish oil',
    ],
    brand: 'NutriOcean',
    origin: 'Norway',
    icon: 'Leaf',
    image: 'https://images.unsplash.com/photo-1577401132921-cb39bb0adcff?w=600&h=400&fit=crop',
  },
  {
    id: 'multivitamin-complete',
    name: 'Complete Daily Multivitamin',
    category: 'vitamins',
    categoryLabel: 'Vitamins & Supplements',
    description: 'Comprehensive daily multivitamin with 23 essential vitamins and minerals.',
    longDescription:
      'The Complete Daily Multivitamin provides a balanced blend of 23 essential vitamins and minerals formulated to fill nutritional gaps and support overall wellness. Designed for adults with active lifestyles, each tablet delivers optimal doses of vitamins A, C, D, E, B-complex, zinc, iron, and more.',
    features: [
      '23 essential vitamins and minerals',
      'One tablet daily convenience',
      'Supports energy, immunity, and vitality',
      'Suitable for men and women',
      'Free from artificial colors and preservatives',
    ],
    brand: 'DailyWell',
    origin: 'Switzerland',
    icon: 'Leaf',
    image: 'https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?w=600&h=400&fit=crop',
  },
  {
    id: 'vitamin-c-1000',
    name: 'Vitamin C 1000mg Effervescent',
    category: 'vitamins',
    categoryLabel: 'Vitamins & Supplements',
    description: 'Effervescent vitamin C tablets for immune support and antioxidant protection.',
    longDescription:
      'Vitamin C 1000mg effervescent tablets dissolve quickly in water to create a refreshing, orange-flavored drink packed with immune-boosting ascorbic acid. Ideal for daily immune support, antioxidant protection, and collagen synthesis. The effervescent format ensures rapid absorption and is gentle on the stomach.',
    features: [
      '1000mg vitamin C per tablet',
      'Refreshing orange flavor',
      'Rapid dissolution and absorption',
      'Gentle on the stomach',
      'Ideal for immune support during seasonal changes',
    ],
    brand: 'ImmuBoost',
    origin: 'France',
    icon: 'Leaf',
    image: 'https://images.unsplash.com/photo-1544991875-5dc1b05f607d?w=600&h=400&fit=crop',
  },

  // ── Cosmetics & Personal Care ──
  {
    id: 'hydrating-serum',
    name: 'Hyaluronic Acid Hydrating Serum',
    category: 'cosmetics',
    categoryLabel: 'Cosmetics & Personal Care',
    description: 'Intensive hydrating serum with multi-weight hyaluronic acid for deep skin moisturization.',
    longDescription:
      'This advanced hydrating serum combines low, medium, and high molecular weight hyaluronic acid to deliver multi-layer moisturization. It penetrates deep into the skin to plump fine lines, restore moisture barrier function, and leave skin feeling silky smooth. Dermatologically tested and suitable for all skin types.',
    features: [
      'Triple-weight hyaluronic acid complex',
      'Dermatologically tested',
      'Suitable for all skin types',
      'Fragrance-free and paraben-free',
      'Visible results in 2 weeks',
    ],
    brand: 'DermaPure',
    origin: 'South Korea',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=400&fit=crop',
  },
  {
    id: 'sunscreen-spf50',
    name: 'Broad Spectrum SPF 50+ Sunscreen',
    category: 'cosmetics',
    categoryLabel: 'Cosmetics & Personal Care',
    description: 'Lightweight, non-greasy sunscreen with UVA/UVB protection for daily skin defense.',
    longDescription:
      'This broad-spectrum SPF 50+ sunscreen provides superior UVA and UVB protection in a lightweight, non-greasy formula. Enriched with vitamin E and niacinamide, it not only protects skin from sun damage but also nourishes and evens skin tone. Water-resistant for up to 80 minutes, making it ideal for daily wear and outdoor activities.',
    features: [
      'SPF 50+ broad spectrum protection',
      'Lightweight, non-greasy texture',
      'Enriched with vitamin E & niacinamide',
      'Water-resistant up to 80 minutes',
      'No white cast formula',
    ],
    brand: 'SunGuard',
    origin: 'Australia',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop',
  },
  {
    id: 'collagen-cream',
    name: 'Marine Collagen Anti-Aging Cream',
    category: 'cosmetics',
    categoryLabel: 'Cosmetics & Personal Care',
    description: 'Luxurious anti-aging cream enriched with marine collagen, retinol, and peptides.',
    longDescription:
      'This premium anti-aging cream harnesses the power of marine collagen, retinol, and bioactive peptides to visibly reduce wrinkles, firm sagging skin, and restore youthful radiance. The rich, non-comedogenic formula absorbs quickly and works overnight to accelerate cell renewal and improve skin elasticity.',
    features: [
      'Marine collagen + retinol + peptides',
      'Visibly reduces wrinkles in 4 weeks',
      'Non-comedogenic formula',
      'Overnight cell renewal activation',
      'Clinically tested on sensitive skin',
    ],
    brand: 'AgeDefy',
    origin: 'France',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=600&h=400&fit=crop',
  },

  // ── Medical Supplies ──
  {
    id: 'surgical-gloves',
    name: 'Nitrile Examination Gloves',
    category: 'medical-supplies',
    categoryLabel: 'Medical Supplies',
    description: 'Powder-free, latex-free nitrile gloves for clinical examination and medical procedures.',
    longDescription:
      'Premium-quality nitrile examination gloves offer superior barrier protection without latex allergens. The textured fingertips ensure excellent grip during clinical examinations and procedures, while the powder-free interior prevents skin irritation. Available in sizes S, M, L, and XL to fit all hand sizes comfortably.',
    features: [
      '100% latex-free and powder-free',
      'Textured fingertips for superior grip',
      'Ambidextrous design fits either hand',
      'Available in S, M, L, XL sizes',
      'Meets medical-grade quality standards',
    ],
    brand: 'SafeHands',
    origin: 'Malaysia',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&h=400&fit=crop',
  },
  {
    id: 'digital-thermometer',
    name: 'Clinical Digital Thermometer',
    category: 'medical-supplies',
    categoryLabel: 'Medical Supplies',
    description: 'Fast-read digital thermometer with high accuracy for oral, axillary, and rectal use.',
    longDescription:
      'This clinical-grade digital thermometer delivers accurate temperature readings in just 10 seconds with ±0.1°C precision. Featuring a flexible tip for patient comfort, waterproof body for easy disinfection, and an auto-shutoff function to preserve battery life. Essential equipment for every pharmacy, clinic, and household.',
    features: [
      'Fast 10-second reading time',
      '±0.1°C measurement accuracy',
      'Flexible tip for patient comfort',
      'Waterproof body for easy cleaning',
      'Auto-shutoff and low battery indicator',
    ],
    brand: 'TempCheck',
    origin: 'Japan',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop',
  },
  {
    id: 'blood-pressure-monitor',
    name: 'Automatic Blood Pressure Monitor',
    category: 'medical-supplies',
    categoryLabel: 'Medical Supplies',
    description: 'Clinically validated automatic upper-arm blood pressure monitor with memory function.',
    longDescription:
      'This clinically validated automatic blood pressure monitor provides accurate, one-touch blood pressure and pulse rate measurements. The large LCD display shows systolic, diastolic, and pulse readings clearly. With 120-reading memory for two users, irregular heartbeat detection, and a universal cuff size, it is ideal for home monitoring and pharmacy health stations.',
    features: [
      'Clinically validated accuracy',
      'Large LCD display with easy reading',
      '120-reading memory for 2 users',
      'Irregular heartbeat detection',
      'Universal cuff fits 22–42cm arms',
    ],
    brand: 'CardioLife',
    origin: 'Germany',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop',
  },
  {
    id: 'first-aid-kit',
    name: 'Professional First Aid Kit',
    category: 'medical-supplies',
    categoryLabel: 'Medical Supplies',
    description: 'Comprehensive 120-piece first aid kit for clinics, pharmacies, and workplace safety.',
    longDescription:
      'This professional-grade 120-piece first aid kit contains everything needed for emergency wound care and basic medical treatment. Includes adhesive bandages, sterile gauze pads, antiseptic wipes, scissors, tweezers, CPR mask, emergency blanket, and more. Organized in a durable, water-resistant carry case with clear compartments for quick access during emergencies.',
    features: [
      '120 pieces of essential medical supplies',
      'Durable, water-resistant carry case',
      'Organized compartments for quick access',
      'Includes CPR mask and emergency blanket',
      'Meets workplace safety compliance standards',
    ],
    brand: 'RescuePro',
    origin: 'USA',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=600&h=400&fit=crop',
  },
];
