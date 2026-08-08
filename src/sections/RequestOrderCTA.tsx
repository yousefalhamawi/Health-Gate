import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ChevronRight, Check } from 'lucide-react';

const volumeTiers = [
  { label: 'Small Batch Retailer', range: 'Under 500 items/mo', desc: 'Ideal for neighborhood pharmacies & local wellness shops.' },
  { label: 'Standard Wholesale Partner', range: '500 – 2,500 items/mo', desc: 'Ideal for larger pharmacies & multi-specialty clinics.' },
  { label: 'Bulk Enterprise', range: '2,500 – 10,000 items/mo', desc: 'Ideal for private hospital chains & regional retail chains.' },
  { label: 'Primary Distributor', range: 'Over 10,000 items/mo', desc: 'Ideal for major medical centers, government supply, & global sub-distributors.' },
];

const productCategories = [
  { id: 'otc', label: 'OTC Pharmaceuticals' },
  { id: 'supplements', label: 'Vitamins & Supplements' },
  { id: 'cosmetics', label: 'Cosmetics & Personal Care' },
  { id: 'supplies', label: 'Medical & Bulk Supplies' },
];

const facilityTypes = ['Pharmacy', 'Clinic', 'Hospital', 'Retailer'];

const RequestOrderCTA: React.FC = () => {
  const [facility, setFacility] = useState<string>('Pharmacy');
  const [selectedCats, setSelectedCats] = useState<string[]>(['otc', 'supplements']);
  const [volumeIndex, setVolumeIndex] = useState<number>(1);

  const toggleCategory = (id: string) => {
    setSelectedCats((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getEmailBody = () => {
    const catsStr = selectedCats
      .map((catId) => productCategories.find((c) => c.id === catId)?.label)
      .filter(Boolean)
      .join(', ');

    const volume = volumeTiers[volumeIndex];

    return `Dear Health Gate Team,%0D%0A%0D%0AI am reaching out from our ${facility} to request a product catalog and wholesale price list.%0D%0A%0D%0AHere are the details of our interest:%0D%0A- Facility Type: ${facility}%0D%0A- Product Categories: ${catsStr}%0D%0A- Estimated Volume Tier: ${volume.label} (${volume.range})%0D%0A%0D%0APlease let us know the next steps for onboarding and verification.%0D%0A%0D%0ABest regards.`;
  };

  const handleInquiryClick = () => {
    const mailtoUrl = `mailto:Dr.oubada@health-gate.net?subject=Wholesale Partnership Inquiry — ${facility}&body=${getEmailBody()}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section className="bg-gradient-to-br from-[#091122] via-[#13213c] to-[#091122] section-pad relative overflow-hidden">
      {/* Ambient glowing circles */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#0A5C8A]/10 glow-blur pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#00D5FF]/8 glow-blur pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column — Context and Header (cols: 5) */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            <span className="inline-block text-xs font-black uppercase tracking-widest text-[#00D5FF] mb-4">
              Wholesale Simulator
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight tracking-tight">
              Request Your Custom Wholesale Proposal
            </h2>
            <p className="text-blue-200/70 text-sm leading-relaxed mb-8 max-w-md">
              Use our interactive simulator to configure your facility type, choose product groups,
              and select your monthly volume. Generate a pre-formatted direct request to connect with our logistics team instantly.
            </p>

            {/* Quick Contact Badges */}
            <div className="flex flex-col gap-4 mt-2">
              <a
                href="tel:+963987350376"
                className="flex items-center gap-4 p-4 rounded-2xl glass-dark hover:bg-white/5 transition-all duration-300 w-fit"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#00D5FF]">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Call Directly</div>
                  <div className="text-sm font-bold text-white">+963 987 350 376</div>
                </div>
              </a>
              <a
                href="mailto:Dr.oubada@health-gate.net"
                className="flex items-center gap-4 p-4 rounded-2xl glass-dark hover:bg-white/5 transition-all duration-300 w-fit"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#0A84FF]">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Office</div>
                  <div className="text-sm font-bold text-white">Dr.oubada@health-gate.net</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column — Interactive Simulator Card (cols: 7) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.25rem] p-6 md:p-8 shadow-[0_30px_60px_rgba(9,17,34,0.3)] border border-slate-100"
            >
              {/* Step 1: Facility Type */}
              <div className="mb-6">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-3">
                  1. Select Facility Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {facilityTypes.map((type) => {
                    const isSelected = facility === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFacility(type)}
                        className={`py-3 px-2 rounded-xl text-xs font-bold transition-all duration-300 border text-center ${
                          isSelected
                            ? 'bg-[#0A5C8A] border-[#0A5C8A] text-white shadow-md shadow-[#0A5C8A]/20 scale-102'
                            : 'border-slate-100 bg-slate-50/50 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Product Categories */}
              <div className="mb-6">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-3">
                  2. Choose Product Lines
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {productCategories.map((cat) => {
                    const isSelected = selectedCats.includes(cat.id);
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => toggleCategory(cat.id)}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-300 ${
                          isSelected
                            ? 'border-[#0A5C8A]/30 bg-[#0A5C8A]/5 text-[#0A5C8A]'
                            : 'border-slate-100 bg-slate-50/50 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all duration-200 ${
                          isSelected
                            ? 'bg-[#0A5C8A] border-[#0A5C8A] text-white'
                            : 'border-slate-300 bg-white'
                        }`}>
                          {isSelected && <Check size={12} strokeWidth={3} />}
                        </div>
                        <span className="text-xs font-bold">{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Volume Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest block">
                    3. Estimated Monthly Volume
                  </label>
                  <span className="text-xs font-black text-[#0A5C8A] bg-[#0A5C8A]/10 px-2.5 py-1 rounded-full">
                    {volumeTiers[volumeIndex].range}
                  </span>
                </div>
                
                {/* Range Slider */}
                <input
                  type="range"
                  min="0"
                  max="3"
                  value={volumeIndex}
                  onChange={(e) => setVolumeIndex(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#0A5C8A] mb-4"
                />

                {/* Selected Tier Description */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100/50">
                  <div className="text-xs font-extrabold text-slate-800 mb-1">
                    {volumeTiers[volumeIndex].label}
                  </div>
                  <div className="text-xs text-slate-500 font-medium leading-relaxed">
                    {volumeTiers[volumeIndex].desc}
                  </div>
                </div>
              </div>

              {/* Generate Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleInquiryClick}
                  className="btn-primary flex-1 justify-center !py-4"
                  disabled={selectedCats.length === 0}
                >
                  <span>Generate Wholesaler Request</span>
                  <ChevronRight size={18} />
                </button>
              </div>

              {selectedCats.length === 0 && (
                <p className="text-[11px] text-red-500 font-bold text-center mt-2.5">
                  ⚠️ Please select at least one product line category.
                </p>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RequestOrderCTA;
