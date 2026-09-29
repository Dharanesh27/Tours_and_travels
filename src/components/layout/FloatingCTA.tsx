import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { getTelUrl, generateWhatsAppInquiryUrl } from '../../config/businessConfig';

interface FloatingCTAProps {
  onBookClick?: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onBookClick }) => {
  const scrollToBooking = () => {
    if (onBookClick) {
      onBookClick();
    } else {
      const el = document.getElementById('booking');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-3 left-0 right-0 z-40 px-3 sm:px-6 pointer-events-none md:hidden">
      <div className="max-w-md mx-auto bg-slate-950/90 backdrop-blur-md text-white p-2 rounded-2xl shadow-2xl border border-slate-800 flex items-center justify-between gap-2 pointer-events-auto">
        {/* Call Now button */}
        <a
          href={getTelUrl()}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 text-amber-400 font-semibold text-xs border border-slate-700 active:scale-95 transition-transform"
          aria-label="Call cab service directly"
        >
          <Phone className="w-4 h-4 fill-amber-400/20" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={generateWhatsAppInquiryUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-500 active:scale-95 transition-transform shadow-md shadow-emerald-900/30"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white/20" />
          <span>WhatsApp</span>
        </a>

        {/* Book Ride button */}
        <button
          onClick={scrollToBooking}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 active:scale-95 transition-transform shadow-md shadow-amber-500/20"
          aria-label="Open booking form"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Cab</span>
        </button>
      </div>
    </div>
  );
};
