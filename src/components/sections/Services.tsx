import React from 'react';
import { 
  Navigation, 
  Plane, 
  MapPin, 
  ArrowRightLeft, 
  Repeat, 
  Building2, 
  ArrowRight, 
  Check, 
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { SERVICES_LIST, generateWhatsAppInquiryUrl } from '../../config/businessConfig';
import type { ServiceItem } from '../../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'Navigation':
        return <Navigation className="w-6 h-6 text-amber-500" />;
      case 'Plane':
        return <Plane className="w-6 h-6 text-amber-500" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-amber-500" />;
      case 'ArrowRightLeft':
        return <ArrowRightLeft className="w-6 h-6 text-amber-500" />;
      case 'Repeat':
        return <Repeat className="w-6 h-6 text-amber-500" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-amber-500" />;
      default:
        return <Navigation className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950/70 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-400/10 text-amber-900 dark:text-amber-400 border border-amber-200 dark:border-amber-400/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Comprehensive Cab Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tailored Cab Services for Every Journey
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Whether it is an Ooty hill tour, early morning flight to Coimbatore airport (CJB), or outstation travel, we provide safe, sanitized, and punctual cabs with transparent pricing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon and Badge Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-amber-50 dark:bg-amber-400/10 border border-amber-200/60 dark:border-amber-400/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-400/20 transition-all duration-300">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="text-[11px] font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                  {service.shortDescription}
                </p>

                {/* Detailed Description */}
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                  {service.detailedDescription}
                </p>

                {/* Popular Tags */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800 mb-6">
                  {service.popularFor.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-amber-400 text-white dark:hover:text-slate-950 text-xs font-bold transition-all shadow-sm cursor-pointer group-hover:bg-amber-500 group-hover:text-slate-950"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={generateWhatsAppInquiryUrl(`Hello, I would like to inquire about *${service.title}* cab service rates from Mettupalayam.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800/60 transition-colors"
                  title="Ask quote on WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Get Quote</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
