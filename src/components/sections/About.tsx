import React from 'react';
import { ShieldCheck, HeartHandshake, MapPin, Clock, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG, getTelUrl } from '../../config/businessConfig';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Area */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80"
                  alt="Cab transportation service in Mettupalayam"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg text-slate-900 dark:text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">Customer-First Service</div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400">Local expertise & dependable support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3 -left-3 bg-slate-900 text-white p-3 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-2 text-xs font-bold">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>24/7 MTP Dispatch</span>
              </div>

            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-400/10 text-amber-900 dark:text-amber-400 border border-amber-200 dark:border-amber-400/20 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>About {BUSINESS_CONFIG.businessName}</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Dedicated to Safe, Reliable, and Hassle-Free Cab Travel in Mettupalayam
              </h2>
            </div>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Welcome to <strong>{BUSINESS_CONFIG.businessName}</strong>, your trusted local cab operator based in <strong>{BUSINESS_CONFIG.location}</strong>. Our mission is to provide passengers with punctual, clean, and comfortable rides at honest, transparent rates.
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether you require early morning drops to Coimbatore International Airport (CJB), memorable mountain road trips to Ooty, Coonoor, or Kotagiri, or intercity highway rides, our experienced chauffeurs prioritize your comfort and safety across every kilometer.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-1">
                  <ShieldCheck className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  <span>Passenger Safety First</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Carefully vetted drivers, regular brake & vehicle inspections, and full trip coordination.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-1">
                  <MapPin className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  <span>Nilgiris Route Mastery</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Deep familiarity with ghat hairpin bends, scenic viewpoints, and Coimbatore airport expressways.
                </p>
              </div>
            </div>

            {/* Client Editable Note & Direct Call */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={getTelUrl()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs transition-colors shadow-md"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Contact Cab Owner: {BUSINESS_CONFIG.phone}</span>
              </a>

              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                <span>Operating 24 Hours, 365 Days a Year</span>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
