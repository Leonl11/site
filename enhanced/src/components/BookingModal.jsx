import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Check, Sparkles, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { InstagramIcon, TelegramIcon } from './Icons';

export default function BookingModal({ isOpen, onClose, initialCategory = 'boudoir' }) {
  const [category, setCategory] = useState(initialCategory);
  const [timeframe, setTimeframe] = useState('найближчим часом');
  const [locationType, setLocationType] = useState('студія в Чернігові');
  const [confidential, setConfidential] = useState(true);
  const [customNote, setCustomNote] = useState('');
  const [copied, setCopied] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory);
    }
  }, [initialCategory]);

  // Keyboard navigation & Focus Trap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categoriesList = [
    { id: 'boudoir', label: 'Boudoir' },
    { id: 'nature', label: 'Природа' },
    { id: 'art_nude', label: 'Арт-ню' },
    { id: 'portrait', label: 'Портрет' },
    { id: 'bw', label: 'Чорно-біле' },
  ];

  const categoryLabel = categoriesList.find((c) => c.id === category)?.label || 'Ню / Будуар';

  // Construct message for Telegram
  const formattedMessage = `Вітаю! Мене цікавить фотосесія в Чернігові:
• Напрямок: ${categoryLabel}
• Бажаний час: ${timeframe}
• Локація: ${locationType}
• Конфіденційність: ${confidential ? 'Так, повністю приватна зйомка' : 'Можлива публікація за домовленістю'}${customNote ? `\n• Примітка: ${customNote}` : ''}`;

  const telegramUrl = `https://t.me/leonlen11?text=${encodeURIComponent(formattedMessage)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        onClick={handleBackdropClick}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cinema-950/90 backdrop-blur-xl"
      >
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-xl bg-cinema-900 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black overflow-y-auto max-h-[90vh]"
        >
          {/* Close button (44px target) */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-cinema-800/80 border border-white/10 hover:border-gold-400 text-cinema-300 hover:text-white flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none"
            aria-label="Закрити модальне вікно"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.2em] text-gold-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Запис на зйомку · Чернігів</span>
            </div>
            <h2 id="booking-modal-title" className="font-serif text-2xl sm:text-3xl text-cinema-100 font-normal">
              Обговорити концепцію зйомки
            </h2>
            <p className="text-xs text-cinema-400 mt-1.5 font-light leading-relaxed">
              Оберіть бажані параметри, щоб відправити готове повідомлення фотографу в Telegram або Instagram.
            </p>
          </div>

          {/* Form Options */}
          <div className="space-y-5">
            {/* Category Select */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-cinema-300 mb-2 font-medium">
                1. Бажаний напрямок
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {categoriesList.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCategory(c.id)}
                    className={`py-2.5 px-3 min-h-[42px] rounded-xl text-xs font-medium transition-all text-center border focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none ${
                      category === c.id
                        ? 'bg-gold-500 text-cinema-950 border-gold-400 font-semibold shadow-md shadow-gold-500/20'
                        : 'bg-cinema-850 text-cinema-300 border-white/5 hover:border-white/20'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeframe */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-cinema-300 mb-2 font-medium">
                2. Орієнтовні терміни
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Найближчим часом', 'На вихідних', 'Цього місяця'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTimeframe(t)}
                    className={`py-2.5 px-2 min-h-[42px] rounded-xl text-xs transition-all text-center border focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none ${
                      timeframe === t
                        ? 'bg-cinema-100 text-cinema-950 border-white font-medium'
                        : 'bg-cinema-850 text-cinema-300 border-white/5 hover:border-white/20'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Location Type */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-cinema-300 mb-2 font-medium">
                3. Бажана локація
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Студія в Чернігові',
                  'Природа (Десна / ліс)',
                ].map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setLocationType(loc)}
                    className={`py-2.5 px-3 min-h-[42px] rounded-xl text-xs transition-all text-center border focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none ${
                      locationType === loc
                        ? 'bg-cinema-100 text-cinema-950 border-white font-medium'
                        : 'bg-cinema-850 text-cinema-300 border-white/5 hover:border-white/20'
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Confidentiality toggle with full clickable label touch target */}
            <label className="flex items-center justify-between p-3.5 min-h-[48px] rounded-xl bg-cinema-850 border border-white/5 hover:border-white/15 cursor-pointer transition-colors">
              <div className="flex items-center gap-2.5 pr-2">
                <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span className="text-xs text-cinema-200">100% Конфіденційна зйомка (без публікацій)</span>
              </div>
              <input
                type="checkbox"
                checked={confidential}
                onChange={(e) => setConfidential(e.target.checked)}
                className="w-5 h-5 rounded accent-gold-500 cursor-pointer focus-visible:ring-2 focus-visible:ring-gold-400"
              />
            </label>

            {/* Optional note */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-cinema-400 mb-1.5 font-medium">
                Ваші побажання або запитання (необов'язково)
              </label>
              <input
                type="text"
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder="Наприклад: чи можна взяти подругу, або зйомка на світанку..."
                className="w-full px-3.5 py-3 rounded-xl bg-cinema-850 border border-white/10 text-xs text-cinema-100 placeholder-cinema-400 focus:outline-none focus:border-gold-400 focus-visible:ring-2 focus-visible:ring-gold-400"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-cinema-950 font-medium text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-gold-500/25 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none"
            >
              <TelegramIcon className="w-4 h-4" />
              <span>Надіслати запит у Telegram</span>
            </a>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="flex-1 min-h-[44px] py-2.5 rounded-xl border border-white/10 bg-cinema-850 hover:bg-cinema-800 text-xs text-cinema-300 hover:text-cinema-100 flex items-center justify-center gap-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Sparkles className="w-3.5 h-3.5 text-gold-400" />}
                <span>{copied ? 'Скопійовано!' : 'Скопіювати текст'}</span>
              </button>

              <a
                href="https://instagram.com/onlyhotphoto.che"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-h-[44px] py-2.5 rounded-xl border border-white/10 bg-cinema-850 hover:bg-cinema-800 text-xs text-cinema-300 hover:text-cinema-100 flex items-center justify-center gap-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:outline-none"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-gold-400" />
                <span>Instagram Direct</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
