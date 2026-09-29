import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Car, Clock, MapPin, ChevronRight } from 'lucide-react';
import { BUSINESS_CONFIG, getTelUrl, generateWhatsAppInquiryUrl } from '../../config/businessConfig';
import { ThemeToggle } from '../common/ThemeToggle';

interface NavbarProps {
  onBookClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = ['home', 'booking', 'services', 'fleet', 'why-us', 'service-areas', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Fleet', href: '#fleet', id: 'fleet' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Service Areas', href: '#service-areas', id: 'service-areas' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookNow = () => {
    setMobileMenuOpen(false);
    if (onBookClick) {
      onBookClick();
    } else {
      const el = document.getElementById('booking');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification / Quick Contact Bar */}
      <div className="bg-slate-900 text-slate-300 dark:bg-slate-950 dark:text-slate-400 text-xs py-2 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Available 24/7 for Nilgiris & Airport Trips</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{BUSINESS_CONFIG.location}</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={getTelUrl()}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-medium text-slate-200"
              title="Call cab owner"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{BUSINESS_CONFIG.phone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={generateWhatsAppInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-800 py-3'
            : 'bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center text-slate-950 shadow-md group-hover:scale-105 transition-transform duration-200">
              <Car className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors flex items-center gap-1">
                {BUSINESS_CONFIG.businessName}
              </span>
              <span className="text-[10px] text-amber-600 dark:text-amber-400/90 font-medium tracking-wider uppercase -mt-0.5">
                Mettupalayam • Safe • 24/7
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-amber-600 dark:text-amber-400 bg-amber-500/10 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Header Action Buttons & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            <a
              href={getTelUrl()}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-all duration-200 shadow-sm"
              aria-label="Call for cab booking"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span>Call Owner</span>
            </a>

            <button
              onClick={handleBookNow}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all duration-200 shadow-md shadow-amber-500/20 cursor-pointer"
            >
              <span>Book a Cab</span>
              <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
            </button>
          </div>

          {/* Mobile Menu & Quick Triggers */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Theme Toggle for mobile */}
            <ThemeToggle />

            <a
              href={getTelUrl()}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-amber-600 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700"
              aria-label="Call cab owner"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={generateWhatsAppInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30"
              aria-label="WhatsApp cab owner"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200 shadow-xl">
            <div className="flex flex-col space-y-1 mb-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                      isActive
                        ? 'text-amber-600 dark:text-amber-400 bg-amber-500/10 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={handleBookNow}
                className="w-full py-3 px-4 rounded-xl text-center font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all text-sm shadow-md"
              >
                Book a Cab Now
              </button>
              
              <div className="grid grid-cols-2 gap-2 mt-1">
                <a
                  href={getTelUrl()}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  <Phone className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  <span>Call {BUSINESS_CONFIG.phone}</span>
                </a>
                <a
                  href={generateWhatsAppInquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-300 dark:border-emerald-800/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
