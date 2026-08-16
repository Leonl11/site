import React from 'react';
import { ArrowDown, Send, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background cinematic photograph with vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Художня фотографія Чернігів"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.4] contrast-[1.1] transition-transform duration-1000 ease-out"
        />
        {/* Soft dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-950 via-cinema-950/70 to-cinema-950/40" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
        <div className="absolute inset-0 bg-grain" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Location & category pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-cinema-900/60 backdrop-blur-md mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-gold-300">
            Художня та Ню Фотографія · Чернігів
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-cinema-100 leading-[1.08] mb-6 max-w-4xl"
        >
          Мистецтво світла, <br className="hidden sm:inline" />
          <span className="italic font-light text-gold-300/95">тіні та чуттєвості</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-cinema-300 max-w-2xl font-light leading-relaxed mb-8 px-2"
        >
          Індивідуальні будуарні та арт-ню фотосесії в Чернігові. 
          Простір абсолютної безпеки, щирості та розкриття вашої природної краси.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
        >
          <a
            href="#gallery"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-cinema-950 font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(205,168,81,0.25)] hover:shadow-[0_0_35px_rgba(205,168,81,0.45)] active:scale-[0.98] text-center"
          >
            Переглянути галерею
          </a>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/20 hover:border-gold-400/60 bg-cinema-900/50 hover:bg-cinema-900/80 backdrop-blur-sm text-cinema-200 hover:text-gold-300 font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <Send className="w-4 h-4 text-gold-400" />
            <span>Написати в Telegram</span>
          </button>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl border-t border-white/5 pt-8"
        >
          <div className="flex items-center justify-center gap-2 text-xs text-cinema-300/80 py-1">
            <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>100% Конфіденційність</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-cinema-300/80 py-1">
            <Heart className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>Допомога з позуванням</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-cinema-300/80 py-1">
            <Sparkles className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>Затишні студії та природа</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#gallery"
        aria-label="Прокрутити до галереї"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cinema-400 hover:text-gold-400 transition-colors p-2 animate-bounce flex flex-col items-center gap-1"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] text-cinema-500">Гортати</span>
        <ArrowDown className="w-3.5 h-3.5" />
      </a>
    </section>
  );
}
