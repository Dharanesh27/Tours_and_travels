import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Plane, ArrowRight, Compass, Sparkles, ExternalLink } from 'lucide-react';
import { SERVICE_AREAS, BUSINESS_CONFIG } from '../../config/businessConfig';
import type { ServiceAreaRoute } from '../../types';

interface ServiceAreaProps {
  onSelectRoute: (pickup: string, drop: string) => void;
}

export const ServiceArea: React.FC<ServiceAreaProps> = ({ onSelectRoute }) => {
  const [filterType, setFilterType] = useState<string>('all');

  const filteredRoutes = SERVICE_AREAS.filter((route) => {
    if (filterType === 'all') return true;
    return route.type === filterType;
  });

  const handleRouteBook = (route: ServiceAreaRoute) => {
    let pickup = 'Mettupalayam';
    let drop = route.routeName.replace('Mettupalayam ➔ ', '');
    if (route.type === 'airport') {
      pickup = 'Your Address in Mettupalayam';
      drop = 'Coimbatore Airport (CJB)';
    }
    onSelectRoute(pickup, drop);
  };

  const tabs = [
    { id: 'all', label: 'All Routes' },
    { id: 'local', label: 'Ooty & Nilgiris Hill' },
    { id: 'airport', label: 'Coimbatore Airport (CJB)' },
    { id: 'outstation', label: 'Outstation Intercity' },
    { id: 'nearby', label: 'Local & Nearby' },
  ];

  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-slate-900 dark:bg-slate-950 text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Coverage & Destinations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Serving Mettupalayam, Nilgiris & Coimbatore Regions
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Prompt doorstep pickups across Mettupalayam, Karamadai, Sirumugai, dedicated Ooty ghat road trips, and 24/7 Coimbatore airport shuttles.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterType(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filterType === tab.id
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Routes Grid & Interactive Map Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Route Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredRoutes.map((route) => (
              <div
                key={route.id}
                className="bg-slate-800/90 dark:bg-slate-900 rounded-2xl p-5 border border-slate-700/80 hover:border-amber-400/60 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950 text-amber-400 border border-slate-700">
                      {route.type}
                    </span>
                    {route.popular && (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        <Sparkles className="w-3 h-3" />
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-amber-400 transition-colors">
                    {route.routeName}
                  </h3>

                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    {route.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400 pb-2">
                    {route.typicalDuration && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400" />
                        {route.typicalDuration}
                      </span>
                    )}
                    {route.distance && (
                      <span className="flex items-center gap-1">
                        <Navigation className="w-3 h-3 text-emerald-400" />
                        {route.distance}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => handleRouteBook(route)}
                  className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-950 hover:bg-amber-400 text-slate-200 hover:text-slate-950 text-xs font-bold transition-all border border-slate-700 hover:border-amber-400 cursor-pointer"
                >
                  <span>Book this Route</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>

          {/* Right: Map Visualizer Component (5 cols) */}
          <div className="lg:col-span-5 bg-slate-800 dark:bg-slate-900 rounded-3xl p-6 border border-slate-700 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg font-bold text-white">Central Hub & Coverage Map</h3>
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-medium">
                  Active 24/7
                </span>
              </div>

              <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                Our cabs are strategically stationed near <strong>Mettupalayam Railway Station & Bus Stand</strong> to reach you within minutes.
              </p>

              {/* Map Placeholder Graphic */}
              <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 flex flex-col items-center justify-center p-4 text-center">
                {/* Visual grid background */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#f59e0b 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}
                />

                {/* Simulated Radar Pulsing Rings */}
                <div className="relative flex items-center justify-center mb-3">
                  <div className="absolute w-24 h-24 rounded-full border border-amber-400/20 animate-ping" />
                  <div className="absolute w-16 h-16 rounded-full border border-amber-400/40" />
                  <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-lg shadow-amber-400/40 z-10">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="text-xs font-bold text-white mb-0.5">{BUSINESS_CONFIG.businessName} Dispatch Hub</div>
                  <div className="text-[11px] text-amber-400 font-medium">{BUSINESS_CONFIG.address}</div>
                </div>

                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-[10px] text-slate-400 px-2 py-1 bg-slate-900/80 rounded-lg">
                  <span className="flex items-center gap-1">
                    <Plane className="w-3 h-3 text-amber-400" /> CJB Airport Drops
                  </span>
                  <span className="flex items-center gap-1">
                    <Navigation className="w-3 h-3 text-emerald-400" /> Ooty Hill Tour
                  </span>
                </div>
              </div>

              {/* Quick Details */}
              <div className="mt-5 space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-700/60">
                  <span className="text-slate-400">Head Office:</span>
                  <span className="font-medium text-white">{BUSINESS_CONFIG.location}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-700/60">
                  <span className="text-slate-400">Service Radius:</span>
                  <span className="font-medium text-white">Mettupalayam + Nilgiris + All-India</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-400">Operating Hours:</span>
                  <span className="font-medium text-emerald-400">{BUSINESS_CONFIG.operatingHours}</span>
                </div>
              </div>
            </div>

            {/* Map Action link */}
            <a
              href={BUSINESS_CONFIG.socialLinks.googleMaps || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold transition-colors"
            >
              <span>View On Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
