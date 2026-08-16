import React, { useState, useEffect } from 'react';
import { Camera, Menu, X, Sparkles } from 'lucide-react';
import { InstagramIcon, TelegramIcon } from './Icons';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Галерея', href: '#gallery' },
    { label: 'Категорії', href: '#categories' },
    { label: 'Конфіденційність', href: '#trust' },
    { label: 'Питання (FAQ)', href: '#faq' },
    { label: 'Контакти', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-cinema-950/85 backdrop-blur-md border-b border-white/5 py-3 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none rounded-xl p-1 -m-1"
        >
          <div className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center bg-cinema-900/80 group-hover:border-gold-400 group-hover:shadow-[0_0_15px_rgba(205,168,81,0.25)] transition-all duration-300">
            <Camera className="w-4 h-4 text-gold-400" />
          </div>
          <div>
            <span className="font-serif text-lg sm:text-xl font-medium tracking-wider text-cinema-100 uppercase block group-hover:text-gold-300 transition-colors">
              ART NUDE
            </span>
            <span className="text-xs tracking-[0.2em] text-cinema-400 uppercase block font-sans">
              Чернігів · Фотограф
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Головна навігація">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest text-cinema-300 hover:text-gold-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300 focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none rounded-md px-1.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://t.me/leonlen11"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full border border-white/10 flex items-center justify-center text-cinema-300 hover:text-gold-300 hover:border-gold-500/40 hover:bg-cinema-900 transition-all focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none"
            aria-label="Telegram фотографа @leonlen11"
            title="Telegram @leonlen11"
          >
            <TelegramIcon className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com/onlyhotphoto.che"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full border border-white/10 flex items-center justify-center text-cinema-300 hover:text-gold-300 hover:border-gold-500/40 hover:bg-cinema-900 transition-all focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none"
            aria-label="Instagram фотографа @onlyhotphoto.che"
            title="Instagram @onlyhotphoto.che"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenBooking}
            className="ml-2 inline-flex items-center gap-2 px-4 py-2 min-h-[40px] rounded-full border border-gold-500/50 bg-gradient-to-r from-gold-500/10 to-gold-500/20 text-gold-300 hover:text-cinema-950 hover:bg-gold-400 hover:border-gold-400 text-xs uppercase tracking-wider font-medium transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(205,168,81,0.3)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Записатися</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle (44px min target) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-white/10 flex items-center justify-center text-cinema-200 hover:text-gold-300 hover:border-gold-500/40 focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none"
          aria-label={mobileMenuOpen ? "Закрити меню" : "Відкрити меню навігації"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Fullscreen Overlay Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden fixed inset-0 top-[60px] bg-cinema-950/98 backdrop-blur-xl border-t border-white/10 z-50 flex flex-col justify-between p-6 animate-in fade-in slide-in-from-top-4 duration-300"
        >
          <div className="flex flex-col gap-6 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-cinema-100 hover:text-gold-300 transition-colors border-b border-white/5 pb-3 focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 pb-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full min-h-[48px] py-3.5 rounded-xl bg-gold-500 text-cinema-950 font-medium text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none"
            >
              <Sparkles className="w-4 h-4" />
              <span>Записатися на зйомку</span>
            </button>

            <div className="flex justify-center gap-4 pt-2">
              <a
                href="https://t.me/leonlen11"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-h-[44px] py-2.5 rounded-lg border border-white/10 bg-cinema-900/60 text-xs text-cinema-200 flex items-center justify-center gap-2 hover:border-gold-500/40 focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none"
                aria-label="Telegram канал фотографа"
              >
                <TelegramIcon className="w-3.5 h-3.5 text-gold-400" />
                <span>@leonlen11</span>
              </a>
              <a
                href="https://instagram.com/onlyhotphoto.che"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-h-[44px] py-2.5 rounded-lg border border-white/10 bg-cinema-900/60 text-xs text-cinema-200 flex items-center justify-center gap-2 hover:border-gold-500/40 focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none"
                aria-label="Instagram профіль фотографа"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-gold-400" />
                <span>@onlyhotphoto.che</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
