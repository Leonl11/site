import React from 'react';
import { ShieldCheck, HeartHandshake, Home, Sparkles, Lock, EyeOff, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrustSection() {
  const trustCards = [
    {
      icon: Lock,
      title: 'Абсолютна конфіденційність',
      desc: 'Зйомка може бути на 100% приватною. Жодне фото ніколи не потрапить у мережу без вашого попереднього письмового погодження.',
    },
    {
      icon: HeartHandshake,
      title: 'Дбайливе позування',
      desc: 'Вам не потрібен модельний досвід. Я м\'яко проводжу вас через увесь процес, підказуючи вигідні ракурси, дихання та рухи.',
    },
    {
      icon: Home,
      title: 'Затишні простори Чернігова',
      desc: 'Ми знімаємо в перевірених теплих студіях міста, де гарантовані повна приватність, закриті двері та комфортна температура.',
    },
    {
      icon: Sparkles,
      title: 'Індивідуальний мудборд',
      desc: 'Перед зйомкою ми разом обираємо настрій, кольори, білизну та деталі, щоб результат перевершив усі ваші очікування.',
    },
  ];

  return (
    <section id="trust" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background container */}
      <div className="relative rounded-3xl bg-cinema-900/60 border border-white/5 p-6 sm:p-10 lg:p-14 overflow-hidden backdrop-blur-md">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Manifesto */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-gold-400 mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Безпека та комфорт</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cinema-100 font-normal tracking-tight mb-6">
              Простір вашої свободи та впевненості
            </h2>

            <div className="border-l-2 border-gold-500/40 pl-5 mb-8">
              <p className="font-serif italic text-lg sm:text-xl text-cinema-200 leading-relaxed">
                «Ню фотографія — це не про оголеність. Це про відчуття власної жіночності, гармонію з тілом та мистецтво бачити себе по-справжньому красивою.»
              </p>
              <span className="text-xs tracking-wider uppercase text-cinema-400 block mt-3 font-sans">
                — Ваш фотограф, Чернігів
              </span>
            </div>

            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-cinema-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Підписання згоди на конфіденційність за вашим бажанням</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Можливість взяти з собою подругу для підтримки</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Зручний темп зйомки без поспіху та тиску</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {trustCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-cinema-850/80 border border-white/5 hover:border-gold-500/30 transition-all duration-300 group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-cinema-900 border border-white/10 flex items-center justify-center text-gold-400 mb-4 group-hover:border-gold-400/50 group-hover:scale-105 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-cinema-100 mb-2 font-normal">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cinema-400 font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
