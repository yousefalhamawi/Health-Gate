import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, CheckCircle, Shield, Award } from 'lucide-react';





/* ─── Main Component ─── */
const HeroSection: React.FC = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen gradient-hero flex items-center overflow-hidden pt-24 pb-16">
      {/* Background blobs for high-end ambient design */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full bg-[#00D5FF]/6 glow-blur pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-[#0A5C8A]/5 glow-blur pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-emerald-500/3 glow-blur pointer-events-none" />

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#0A5C8A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-160px)]">

          {/* Left Column — Text Content (cols: 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-white border border-slate-100/80 rounded-full p-1.5 pr-4 mb-6 w-fit shadow-[0_4px_18px_rgba(9,17,34,0.03)]"
            >
              <span className="flex items-center justify-center bg-[#0A5C8A]/10 text-[#0A5C8A] text-[10px] font-black tracking-wider uppercase rounded-full px-2.5 py-1">
                ⭐ TOP RATED
              </span>
              <span className="text-xs font-bold text-slate-800">Direct wholesale distributor</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-600">Active supply chain</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] mb-6 tracking-tight"
            >
              Trusted Medical{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A5C8A] via-[#1e92d0] to-[#00D5FF]">
                Distribution
              </span>{' '}
              &amp; Quality Healthcare
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-slate-500 leading-relaxed mb-8 max-w-xl font-normal"
            >
              Delivering high-quality pharmaceuticals, supplements, and personal care products
              with reliable logistics and dedicated customer support. Partnering with global
              brands to ensure your healthcare needs are met with excellence.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <button
                onClick={() => handleScroll('about')}
                className="btn-primary"
              >
                Get Started <ArrowRight size={18} />
              </button>
              <a
                href="tel:+963987350376"
                className="btn-outline flex items-center gap-2 group"
              >
                <Phone size={18} className="text-[#0A5C8A] group-hover:scale-110 transition-transform duration-200" />
                <span>Call Us Now</span>
              </a>
            </motion.div>

            {/* Trust Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-8 mt-12 border-t border-slate-100/80 pt-8"
            >
              {[
                { value: '15+', label: 'Years of Experience', icon: Award },
                { value: '3.1k+', label: 'Fulfilled Clients', icon: CheckCircle },
                { value: '17+', label: 'Global Brands', icon: Shield },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100/50 flex items-center justify-center text-[#0A5C8A]">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-xl font-black text-slate-900 leading-none mb-1">{item.value}</div>
                      <div className="text-xs text-slate-400 font-semibold">{item.label}</div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column — Premium Media (cols: 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
            style={{ perspective: 1200 }}
          >
            <div className="relative w-full max-w-md">
              {/* Overlapping Background Card Design */}
              <div className="absolute inset-0 bg-[#0A5C8A]/5 rounded-[2.5rem] transform translate-x-4 translate-y-4 -z-10" />

              {/* Main Image Container with 3D Hover Effect */}
              <motion.div
                whileHover={{ rotateY: 6, rotateX: -4, scale: 1.01 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative rounded-[2.25rem] overflow-hidden shadow-[0_20px_50px_rgba(9,17,34,0.1)] border border-white/60 bg-white"
              >
                <img
                  src="/brands/Pharmaceutical-Wholesale-Dealer (1).jpg"
                  alt="Health Gate — Medical Distribution"
                  className="w-full h-auto object-cover min-h-[350px] select-none pointer-events-none"
                />
                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Floating Badge 1: Certified Quality */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-[0_12px_30px_rgba(9,17,34,0.08)] border border-slate-100 flex items-center gap-3.5"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <CheckCircle size={22} />
                </div>
                <div>
                  <div className="text-sm font-black text-slate-800">ISO Certified</div>
                  <div className="text-[11px] font-semibold text-slate-400">Strict Quality Standards</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Real-time Stats */}
              <motion.div
                animate={{ y: [-10, 0, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-[0_12px_30px_rgba(9,17,34,0.08)] border border-slate-100"
              >
                <div className="text-center">
                  <div className="text-2xl font-black text-[#0A5C8A] leading-none mb-1">500+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Monthly Orders
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="#FAFCFF"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
