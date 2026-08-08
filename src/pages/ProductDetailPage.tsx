import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  Mail,
  Globe,
  Tag,
  Pill,
  Leaf,
  Sparkles,
  ShieldCheck,
  Package,
} from 'lucide-react';
import { products } from '../data/products';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Pill,
  Leaf,
  Sparkles,
  ShieldCheck,
  Package,
};

const categoryColorMap: Record<string, { bg: string; text: string; gradient: string; lightBg: string }> = {
  otc: {
    bg: 'bg-blue-500',
    text: 'text-blue-700',
    gradient: 'from-blue-500/10 via-blue-400/5 to-transparent',
    lightBg: 'bg-blue-50',
  },
  vitamins: {
    bg: 'bg-emerald-500',
    text: 'text-emerald-700',
    gradient: 'from-emerald-500/10 via-emerald-400/5 to-transparent',
    lightBg: 'bg-emerald-50',
  },
  cosmetics: {
    bg: 'bg-purple-500',
    text: 'text-purple-700',
    gradient: 'from-purple-500/10 via-purple-400/5 to-transparent',
    lightBg: 'bg-purple-50',
  },
  'medical-supplies': {
    bg: 'bg-amber-500',
    text: 'text-amber-700',
    gradient: 'from-amber-500/10 via-amber-400/5 to-transparent',
    lightBg: 'bg-amber-50',
  },
};

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = useMemo(() => products.find((p) => p.id === id), [id]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 3);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FAFCFF] flex items-center justify-center">
        <div className="text-center">
          <Package size={64} className="text-slate-300 mx-auto mb-6" />
          <h2 className="text-2xl font-black text-slate-700 mb-3">Product Not Found</h2>
          <p className="text-slate-500 text-sm font-medium mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/products"
            className="btn-primary"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[product.icon] ?? Package;
  const colors = categoryColorMap[product.category] ?? categoryColorMap['otc'];

  return (
    <div className="min-h-screen bg-[#FAFCFF]">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0A5C8A] via-[#1e92d0] to-[#00D5FF]" />

      {/* Breadcrumb + Back */}
      <section className="pt-28 pb-4">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 flex-wrap"
          >
            <button
              onClick={() => navigate('/products')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A5C8A] hover:text-[#063b59] transition-colors duration-200 bg-[#0A5C8A]/5 hover:bg-[#0A5C8A]/10 px-3 py-1.5 rounded-full"
            >
              <ArrowLeft size={13} />
              Back
            </button>
            <nav className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
              <Link to="/" className="hover:text-slate-600 transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link to="/products" className="hover:text-slate-600 transition-colors">Products</Link>
              <ChevronRight size={12} />
              <span className="text-slate-700">{product.name}</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="container-custom pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Product Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative sticky top-28"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-100/60 shadow-[0_20px_60px_rgba(9,17,34,0.06)]">
              {/* Product Image */}
              <div className="relative aspect-[4/3] md:aspect-[3/2] bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback: hide img and show icon
                    (e.target as HTMLImageElement).style.display = 'none';
                    const fallback = document.getElementById('product-img-fallback');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div
                  id="product-img-fallback"
                  className={`absolute inset-0 items-center justify-center bg-gradient-to-br ${colors.gradient}`}
                  style={{ display: 'none' }}
                >
                  <div className={`w-32 h-32 md:w-40 md:h-40 rounded-3xl ${colors.lightBg} flex items-center justify-center shadow-lg`}>
                    <Icon size={64} className={colors.text} />
                  </div>
                </div>
              </div>

              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

              {/* Category badge */}
              <div className="absolute top-5 left-5">
                <span className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm shadow-md ${colors.text}`}>
                  <span className={`w-2 h-2 rounded-full ${colors.bg}`} />
                  {product.categoryLabel}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="pt-2"
          >
            {/* Category */}
            <span className={`inline-block text-[10px] font-black uppercase tracking-widest ${colors.text} mb-3`}>
              {product.categoryLabel}
            </span>

            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              {product.name}
            </h1>

            {/* Divider */}
            <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-[#0A5C8A] via-[#0A84FF] to-[#00D5FF] mb-6" />

            {/* Long Description */}
            <p className="text-slate-600 text-[14px] leading-[1.8] font-medium mb-8">
              {product.longDescription}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider mb-4">
                Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={18} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-[13px] font-medium leading-relaxed">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Meta Info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <div className="flex items-center gap-2 mb-1.5">
                  <Tag size={14} className="text-[#0A5C8A]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Brand</span>
                </div>
                <p className="text-sm font-extrabold text-slate-800">{product.brand}</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <div className="flex items-center gap-2 mb-1.5">
                  <Globe size={14} className="text-[#0A5C8A]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Origin</span>
                </div>
                <p className="text-sm font-extrabold text-slate-800">{product.origin}</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="mailto:Dr.oubada@health-gate.net"
              className="btn-primary w-full sm:w-auto justify-center"
            >
              <Mail size={16} />
              Inquire About This Product
            </a>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-gradient-to-b from-white to-[#FAFCFF] border-t border-slate-100 py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block text-xs font-black uppercase tracking-widest text-[#0A5C8A] mb-3">
                Related Products
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                You May Also Be Interested In
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rp) => {
                const RpIcon = iconMap[rp.icon] ?? Package;
                const rpColors = categoryColorMap[rp.category] ?? categoryColorMap['otc'];
                return (
                  <motion.div
                    key={rp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link
                      to={`/products/${rp.id}`}
                      className="group block bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-[#0A5C8A]/20 shadow-[0_4px_20px_rgba(9,17,34,0.02)] hover:shadow-[0_15px_40px_rgba(10,92,138,0.06)] transition-all duration-400"
                    >
                      {/* Related product image */}
                      <div className="relative h-40 overflow-hidden bg-slate-50">
                        <img
                          src={rp.image}
                          alt={rp.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                        <div className={`absolute inset-0 flex items-center justify-center ${rpColors.lightBg}`} style={{ zIndex: -1 }}>
                          <RpIcon size={32} className={`${rpColors.text} opacity-30`} />
                        </div>
                      </div>
                      <div className="p-5">
                        <h4 className="text-sm font-extrabold text-slate-800 group-hover:text-[#0A5C8A] transition-colors mb-2 tracking-tight">
                          {rp.name}
                        </h4>
                        <p className="text-slate-500 text-xs font-medium line-clamp-2 leading-relaxed">
                          {rp.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailPage;
