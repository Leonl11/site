import React, { useState, useMemo } from 'react';
import { CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';
import { Maximize2, MapPin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery({ onSelectImage }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-gold-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Портфоліо</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-cinema-100 font-normal tracking-tight mb-4">
          Художні серії та напрямки
        </h2>
        <p className="text-sm sm:text-base text-cinema-400 font-light max-w-xl mx-auto">
          Оберіть категорію для перегляду робіт. Кожен кадр — це історія світла, ліній та індивідуального настрою.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12" id="categories">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                isActive
                  ? 'text-cinema-950 bg-gold-400 shadow-[0_0_20px_rgba(205,168,81,0.3)]'
                  : 'text-cinema-300 hover:text-gold-300 bg-cinema-900/60 border border-white/5 hover:border-gold-500/30'
              }`}
            >
              <span className="relative z-10">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Masonry / Responsive Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectImage(item, filteredItems)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-cinema-900 border border-white/5 hover:border-gold-500/40 transition-all duration-500 shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-cinema-950">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center filter brightness-[0.9] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cinema-950 via-cinema-950/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-sans tracking-widest uppercase bg-cinema-950/80 backdrop-blur-md text-gold-300 border border-gold-500/20">
                    {item.categoryName}
                  </span>
                </div>

                {/* Top Right Zoom Icon */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-cinema-950/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-cinema-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Maximize2 className="w-4 h-4 text-gold-400" />
                </div>

                {/* Bottom Content Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-xl sm:text-2xl text-cinema-100 font-normal mb-1 group-hover:text-gold-200 transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 text-xs text-cinema-400 mb-2">
                    <MapPin className="w-3 h-3 text-gold-500 flex-shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>

                  <p className="text-xs text-cinema-300/80 line-clamp-2 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.story}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
