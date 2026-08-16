import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faqData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-gold-400 mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Відповіді на запитання</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-cinema-100 font-normal tracking-tight mb-4">
          Часті запитання
        </h2>
        <p className="text-sm sm:text-base text-cinema-400 font-light max-w-lg mx-auto">
          Все, що важливо знати перед першою ню або будуарною фотосесією в Чернігові.
        </p>
      </div>

      <div className="space-y-4">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-cinema-900/90 border-gold-500/40 shadow-lg shadow-black/40'
                  : 'bg-cinema-900/40 border-white/5 hover:border-white/15'
              }`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-lg sm:text-xl text-cinema-100 font-normal">
                  {item.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-gold-400 text-cinema-950' : 'bg-cinema-800 text-cinema-300'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-cinema-300 font-light leading-relaxed border-t border-white/5">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
