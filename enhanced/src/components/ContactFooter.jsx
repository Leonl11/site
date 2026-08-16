import React from 'react';
import { MapPin, Sparkles, Camera, Heart } from 'lucide-react';
import { InstagramIcon, TelegramIcon } from './Icons';

export default function ContactFooter({ onOpenBooking }) {
  return (
    <footer id="contact" className="relative bg-cinema-950 border-t border-white/5 pt-20 pb-28 md:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Artistic Call to Action Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-cinema-900/90 to-cinema-950 border border-gold-500/20 mb-16 shadow-2xl shadow-black">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-gold-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Готові створити вашу історію?</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-cinema-100 font-normal tracking-tight mb-4">
            Подаруйте собі фотографії, якими ви будете пишатися
          </h2>

          <p className="text-sm sm:text-base text-cinema-300 font-light max-w-xl mx-auto mb-8 leading-relaxed">
            Напишіть мені, щоб обговорити ідею, підібрати студію або просто поставити будь-які запитання щодо зйомки.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://t.me/leonlen11"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 min-h-[48px] rounded-full bg-gold-500 hover:bg-gold-400 text-cinema-950 font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(205,168,81,0.3)] hover:shadow-[0_0_35px_rgba(205,168,81,0.5)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none"
            >
              <TelegramIcon className="w-4 h-4" />
              <span>Telegram: @leonlen11</span>
            </a>

            <a
              href="https://instagram.com/onlyhotphoto.che"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 min-h-[48px] rounded-full border border-white/20 hover:border-gold-400 bg-cinema-900/60 hover:bg-cinema-900 text-cinema-200 hover:text-gold-300 font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none"
            >
              <InstagramIcon className="w-4 h-4 text-gold-400" />
              <span>Instagram: @onlyhotphoto.che</span>
            </a>
          </div>
        </div>

        {/* Brand & Details */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-white/5 text-xs text-cinema-400">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-gold-400" />
            <span className="font-serif text-cinema-200 tracking-wider text-sm">ART NUDE CHERNIHIV</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-gold-500" />
            <span>Чернігів, Україна · Зйомки в студіях та на природі</span>
          </div>

          <div className="flex items-center gap-1.5 text-cinema-400">
            <span>Зроблено з любов'ю до естетики тіла</span>
            <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400/40" />
          </div>
        </div>
      </div>
    </footer>
  );
}
