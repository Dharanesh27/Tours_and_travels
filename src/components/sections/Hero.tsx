import React from 'react';
import { Phone, Calendar, ShieldCheck, Clock, CheckCircle2, ChevronRight, Sparkles, Navigation } from 'lucide-react';
import { BUSINESS_CONFIG, getTelUrl } from '../../config/businessConfig';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative bg-slate-900 text-white dark:bg-slate-950 overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 transition-colors duration-300">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            
            {/* 24/7 & Trust pill badge */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-400 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Available 24/7 in Mettupalayam</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">Nilgiris Ghat Specialists</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Your Ride. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                Your Comfort.
              </span>{' '}
              <br className="hidden sm:inline" />
              Your Way.
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {BUSINESS_CONFIG.hero.supportingText}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-200 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-200 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Safe • Reliable • Comfortable</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-200 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Clean & Sanitized</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all duration-200 shadow-xl shadow-amber-400/20 text-base group cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-slate-950" />
                <span>Book a Cab</span>
                <ChevronRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={getTelUrl()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 active:scale-95 transition-all duration-200 text-base"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Call Now: {BUSINESS_CONFIG.phone}</span>
              </a>
            </div>

            {/* Key feature bullets */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 text-center sm:text-left">
              <div>
                <div className="text-amber-400 font-bold text-base sm:text-lg">0% Surge</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Fixed & Fair Rates</div>
              </div>
              <div>
                <div className="text-amber-400 font-bold text-base sm:text-lg">Ghat Experts</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Nilgiris Mountain Drivers</div>
              </div>
              <div>
                <div className="text-amber-400 font-bold text-base sm:text-lg">Airport 24/7</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Coimbatore (CJB) Drops</div>
              </div>
            </div>

          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Container with subtle glow border */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/60 shadow-2xl bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1000&q=80"
                  alt="Professional cab in Mettupalayam for Ooty and Coimbatore travel"
                  className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center text-amber-400">
                      <Navigation className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Doorstep Pickup</div>
                      <div className="text-[11px] text-slate-400">MTP, Karamadai & Sirumugai</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 text-xs font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>24/7 Active</span>
                  </div>
                </div>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 p-3 rounded-2xl shadow-xl flex items-center gap-2.5 font-bold text-xs">
                <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
                <div className="leading-tight">
                  <div>100% Safe &</div>
                  <div>Comfortable Rides</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
