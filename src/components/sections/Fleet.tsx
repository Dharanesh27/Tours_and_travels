import React from 'react';
import { Users, Briefcase, Snowflake, CheckCircle2, ArrowRight, MessageCircle, Sparkles, Shield } from 'lucide-react';
import { FLEET_VEHICLES, generateWhatsAppInquiryUrl } from '../../config/businessConfig';

interface FleetProps {
  onSelectCab: (cabName: string) => void;
}

export const Fleet: React.FC<FleetProps> = ({ onSelectCab }) => {
  return (
    <section id="fleet" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-400/10 text-amber-900 dark:text-amber-400 border border-amber-200 dark:border-amber-400/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Modern & Sanitized Mountain Fleet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Choose the Perfect Vehicle for Your Ride
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            All vehicles in our fleet are rigorously sanitized, air-conditioned, and driven by courteous, experienced mountain chauffeurs.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FLEET_VEHICLES.map((cab) => (
            <div
              key={cab.id}
              className="bg-slate-50 dark:bg-slate-800/80 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Vehicle Image Container */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={cab.imageUrl}
                    alt={cab.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Category / Popular Tag */}
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-amber-400 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-slate-700">
                    {cab.tag}
                  </div>

                  {/* AC badge */}
                  {cab.hasAC && (
                    <div className="absolute top-3 right-3 bg-emerald-950/90 text-emerald-300 text-[11px] font-semibold px-2 py-1 rounded-lg border border-emerald-800 flex items-center gap-1">
                      <Snowflake className="w-3 h-3 text-cyan-300" />
                      <span>AC</span>
                    </div>
                  )}

                  {/* Vehicle Name Banner */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <h3 className="text-lg font-bold drop-shadow-md">
                      {cab.name}
                    </h3>
                    <span className="text-xs text-amber-400 font-semibold bg-slate-950/80 px-2 py-0.5 rounded">
                      {cab.category}
                    </span>
                  </div>
                </div>

                {/* Specs & Capacity Badges */}
                <div className="p-5 pb-3">
                  <div className="grid grid-cols-2 gap-2 py-2.5 px-3 bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{cab.passengers} Passengers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{cab.luggage} Bags</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
                    {cab.description}
                  </p>

                  {/* Ideal For */}
                  <div className="text-[11px] text-amber-900 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 p-2.5 rounded-xl border border-amber-200/80 dark:border-amber-800/40 mb-4 font-medium">
                    <span className="font-bold">Ideal for:</span> {cab.idealFor}
                  </div>

                  {/* Features List */}
                  <div className="space-y-1.5 mb-2">
                    {cab.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 space-y-2">
                <button
                  onClick={() => onSelectCab(cab.name)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-amber-400 text-white dark:hover:text-slate-950 font-bold text-xs group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <span>Book This Cab</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={generateWhatsAppInquiryUrl(`Hello, I would like to check availability and rate for the *${cab.name} (${cab.category})* vehicle from Mettupalayam.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-300 hover:text-emerald-800 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Fleet Integrity Note */}
        <div className="mt-12 bg-slate-100 dark:bg-slate-800 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2.5 font-medium">
            <Shield className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Vehicles are sanitized before every dispatch. Extra luggage carrier available on advance request for Ooty family tours.</span>
          </div>
          <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px] shrink-0">
            * Exact vehicle models depend on real-time booking confirmation.
          </span>
        </div>

      </div>
    </section>
  );
};
