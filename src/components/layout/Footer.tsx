import React from 'react';
import { 
  Car, 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowUp
} from 'lucide-react';
import { BUSINESS_CONFIG, getTelUrl, generateWhatsAppInquiryUrl, getMailtoUrl } from '../../config/businessConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center text-slate-950 shadow-md">
                <Car className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  {BUSINESS_CONFIG.businessName}
                </span>
                <span className="text-[10px] text-amber-400 font-medium tracking-wider uppercase">
                  {BUSINESS_CONFIG.tagline}
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Your premier cab partner for safe, reliable, and punctual travel. Specialized in city transit, airport transfers, corporate transport, and outstation tours.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_CONFIG.socialLinks.facebook || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-slate-400 flex items-center justify-center transition-all border border-slate-800"
                aria-label="Facebook link"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={BUSINESS_CONFIG.socialLinks.instagram || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-slate-400 flex items-center justify-center transition-all border border-slate-800"
                aria-label="Instagram link"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={BUSINESS_CONFIG.socialLinks.twitter || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-slate-400 flex items-center justify-center transition-all border border-slate-800"
                aria-label="X / Twitter link"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-amber-400 transition-colors">Vehicle Fleet</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">Customer Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Our Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Cab Services</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Local City Cab</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Airport Pickup & Drop</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Outstation Trips</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">One-Way Drops</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Round-Trip Rental</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Corporate Travel Solutions</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">24/7 Dispatch Desk</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href={getTelUrl()} className="flex items-center gap-2 hover:text-amber-400 transition-colors text-white font-semibold">
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{BUSINESS_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={generateWhatsAppInquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>WhatsApp: {BUSINESS_CONFIG.whatsappNumber}</span>
                </a>
              </li>
              <li>
                <a href={getMailtoUrl()} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{BUSINESS_CONFIG.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{BUSINESS_CONFIG.operatingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>
              &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.businessName}. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-600">Built for Client Quality & Fast Dispatch</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border border-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
