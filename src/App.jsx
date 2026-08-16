import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Lightbox from './components/Lightbox';
import TrustSection from './components/TrustSection';
import FaqSection from './components/FaqSection';
import BookingModal from './components/BookingModal';
import ContactFooter from './components/ContactFooter';
import MobileSticky from './components/MobileSticky';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxItems, setLightboxItems] = useState([]);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingCategory, setSelectedBookingCategory] = useState('boudoir');

  // Mouse spotlight positioning for subtle atmospheric lighting on desktop
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = `${(e.clientX / window.innerWidth) * 100}%`;
      const y = `${(e.clientY / window.innerHeight) * 100}%`;
      document.documentElement.style.setProperty('--bg-spotlight-x', x);
      document.documentElement.style.setProperty('--bg-spotlight-y', y);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleOpenLightbox = (item, items) => {
    setSelectedImage(item);
    setLightboxItems(items);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  const handleOpenBooking = (category = 'boudoir') => {
    setSelectedBookingCategory(category);
    setBookingModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-cinema-950 text-cinema-100 font-sans selection:bg-gold-500/30 selection:text-gold-300">
      {/* Background Subtle Ambient Light & Noise */}
      <div className="fixed inset-0 pointer-events-none ambient-glow z-0 opacity-60" />
      <div className="fixed inset-0 pointer-events-none bg-grain z-0" />

      {/* Main Page Layout */}
      <div className="relative z-10">
        <Navbar onOpenBooking={() => handleOpenBooking('boudoir')} />
        
        <main>
          <Hero onOpenBooking={() => handleOpenBooking('boudoir')} />
          <Gallery onSelectImage={handleOpenLightbox} />
          <TrustSection />
          <FaqSection />
        </main>

        <ContactFooter onOpenBooking={() => handleOpenBooking('boudoir')} />
        <MobileSticky onOpenBooking={() => handleOpenBooking('boudoir')} />
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <Lightbox
          item={selectedImage}
          items={lightboxItems}
          onClose={handleCloseLightbox}
          onBookCategory={handleOpenBooking}
        />
      )}

      {/* Quick Booking & Consultation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialCategory={selectedBookingCategory}
      />
    </div>
  );
}
