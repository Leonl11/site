import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Lightbox({ item, items, onClose, onBookCategory }) {
  const [currentIndex, setCurrentIndex] = useState(() => {
    const idx = items.findIndex((i) => i.id === item.id);
    return idx !== -1 ? idx : 0;
  });

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const currentItem = items[currentIndex] || item;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [items.length]);

  // Touch swipe handling for smartphones
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        handleNext(); // swipe left -> next
      } else {
        handlePrev(); // swipe right -> prev
      }
    }
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-cinema-950/95 backdrop-blur-2xl p-2 sm:p-6 select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Control Bar */}
        <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono tracking-widest text-gold-300 bg-cinema-900/80 border border-gold-500/30">
              {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </span>
            <span className="hidden sm:inline text-xs uppercase tracking-widest text-cinema-400">
              {currentItem.categoryName}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-cinema-900/80 border border-white/10 hover:border-gold-400 text-cinema-300 hover:text-white flex items-center justify-center transition-all duration-200"
            aria-label="Закрити"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Desktop Prev Button */}
        <button
          onClick={handlePrev}
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-cinema-900/80 border border-white/10 hover:border-gold-400 text-cinema-200 hover:text-gold-300 items-center justify-center transition-all duration-200"
          aria-label="Попереднє фото"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Desktop Next Button */}
        <button
          onClick={handleNext}
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-cinema-900/80 border border-white/10 hover:border-gold-400 text-cinema-200 hover:text-gold-300 items-center justify-center transition-all duration-200"
          aria-label="Наступне фото"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Lightbox Content */}
        <div className="relative max-w-5xl w-full h-full max-h-[88vh] flex flex-col md:flex-row items-center justify-center gap-6 p-2">
          {/* Active Image with transition */}
          <div className="relative flex-1 h-full max-h-[60vh] md:max-h-[82vh] w-full flex items-center justify-center overflow-hidden rounded-xl">
            <motion.img
              key={currentItem.id}
              src={currentItem.src}
              alt={currentItem.title}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Details Sidebar / Bottom Panel */}
          <motion.div
            key={`info-${currentItem.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full md:w-80 flex flex-col justify-between p-4 sm:p-6 bg-cinema-900/80 backdrop-blur-md rounded-2xl border border-white/10 flex-shrink-0"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-sans uppercase tracking-[0.2em] text-gold-400 mb-2">
                <Sparkles className="w-3 h-3" />
                <span>{currentItem.categoryName}</span>
              </div>

              <h3 className="font-serif text-2xl text-cinema-100 font-normal mb-2">
                {currentItem.title}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-cinema-400 mb-4">
                <MapPin className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                <span>{currentItem.location}</span>
              </div>

              <p className="text-xs sm:text-sm text-cinema-300/90 font-light leading-relaxed mb-6">
                {currentItem.story}
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookCategory(currentItem.category);
              }}
              className="w-full py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-cinema-950 font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-gold-500/20 active:scale-[0.98]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Хочу таку зйомку</span>
            </button>
          </motion.div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-cinema-500 tracking-wider uppercase">
          Свайпайте вліво / вправо для гортання
        </div>
      </div>
    </AnimatePresence>
  );
}
