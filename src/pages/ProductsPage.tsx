import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Package, Filter } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { products, categoryFilters } from '../data/products';
import type { ProductCategory } from '../data/products';

const ProductsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProductCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
      const matchesSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAFCFF]">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#091122] via-[#0A3655] to-[#0A5C8A]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptLTQgOHYyaC0ydi0yaDJ6bTAgLTR2MmgtMnYtMmgyem0wLTR2MmgtMnYtMmgyem0tNCA0djJoLTJ2LTJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />

        {/* Glow blobs */}
        <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-[#00D5FF]/8 rounded-full glow-blur pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#0A5C8A]/10 rounded-full glow-blur pointer-events-none" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-6">
              <Package size={14} className="text-[#00D5FF]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#00D5FF]">
                Our Products
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-5">
              Premium Healthcare{' '}
              <span className="bg-gradient-to-r from-[#00D5FF] to-[#A5F3FC] bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            <p className="text-blue-200/60 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive range of pharmaceuticals, vitamins, personal care products,
              and medical supplies — all sourced from certified global manufacturers.
            </p>
          </motion.div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 30C1440 30 1200 0 720 0C240 0 0 30 0 30L0 60Z" fill="#FAFCFF" />
          </svg>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="container-custom -mt-4 relative z-20 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(9,17,34,0.04)] border border-slate-100/80 p-5 md:p-6"
        >
          <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A5C8A]/20 focus:border-[#0A5C8A]/30 transition-all duration-300"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={14} className="text-slate-400 mr-1 hidden sm:block" />
              {categoryFilters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                    activeFilter === filter.key
                      ? 'bg-[#0A5C8A] text-white shadow-md shadow-[#0A5C8A]/20'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="container-custom pb-24">
        {/* Results count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-8"
        >
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
        </motion.p>

        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key={activeFilter + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product, i) => (
                <ProductCard key={product.id} {...product} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-20"
            >
              <Package size={48} className="text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-500 mb-2">No products found</h3>
              <p className="text-sm text-slate-400 font-medium">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default ProductsPage;
