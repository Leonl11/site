import React from 'react';
import { Sparkles } from 'lucide-react';
import { InstagramIcon, TelegramIcon } from './Icons';

export default function MobileSticky({ onOpenBooking }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-cinema-950/90 backdrop-blur-lg border-t border-white/10 shadow-[0_-10px_25px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="https://t.me/leonlen11"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[44px] py-3 px-3 rounded-xl bg-cinema-900 border border-white/10 text-cinema-200 flex items-center justify-center gap-2 text-xs font-medium active:scale-95 transition-transform focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none"
          aria-label="Написати фотографу в Telegram"
        >
          <TelegramIcon className="w-4 h-4 text-gold-400" />
          <span>Telegram</span>
        </a>

        <a
          href="https://instagram.com/onlyhotphoto.che"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 min-h-[44px] py-3 rounded-xl bg-cinema-900 border border-white/10 text-cinema-200 flex items-center justify-center active:scale-95 transition-transform focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none"
          aria-label="Instagram фотографа @onlyhotphoto.che"
        >
          <InstagramIcon className="w-4 h-4 text-gold-400" />
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 min-h-[44px] py-3 px-3 rounded-xl bg-gold-500 text-cinema-950 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider shadow-md shadow-gold-500/20 active:scale-95 transition-transform focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Запис</span>
        </button>
      </div>
    </div>
  );
}
