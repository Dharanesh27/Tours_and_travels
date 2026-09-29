import React, { useState } from 'react';
import { Calculator, ShieldCheck, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { FLEET_VEHICLES, generateWhatsAppInquiryUrl } from '../../config/businessConfig';

interface FareEstimatorProps {
  onSelectCabAndTrip: (cabName: string) => void;
}

export const FareEstimator: React.FC<FareEstimatorProps> = ({ onSelectCabAndTrip }) => {
  const [selectedCabId, setSelectedCabId] = useState('suv');
  const [selectedTripCategory, setSelectedTripCategory] = useState<'hill' | 'airport' | 'local'>('hill');

  const activeCab = FLEET_VEHICLES.find((c) => c.id === selectedCabId) || FLEET_VEHICLES[0];

  const pricingDetails = {
    hill: {
      title: 'Ooty & Nilgiris Hill Tour Package',
      info: 'Experienced mountain driver, sightseeing stops, and flexible waiting time.',
      includes: ['Ghat road mountain driver', 'Sightseeing & photo stops', 'No hidden fuel charges', 'Safe return descent'],
    },
    airport: {
      title: 'Coimbatore Airport (CJB) Express Drop',
      info: 'Fixed flat rates with flight delay tracking and doorstep pickup in Mettupalayam.',
      includes: ['Expressway transit', 'Flight status monitoring', 'Luggage handling', 'Free 30 mins wait time'],
    },
    local: {
      title: 'Local & Outstation Packages',
      info: 'Point-to-point drops or full day packages for Black Thunder, Tiruppur, and Mysore.',
      includes: ['Zero surge pricing', 'Crisp AC comfort', 'Multiple stop flexibility', 'Transparent billing'],
    },
  };

  const currentPackage = pricingDetails[selectedTripCategory];

  return (
    <section className="py-16 sm:py-20 bg-slate-900 dark:bg-slate-950 text-white relative border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Honest & Transparent Fare Policy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Transparent Pricing with Zero Surge
          </h2>
          <p className="text-base text-slate-300 mt-2">
            No unpredictable price surges during holiday season or rain. Clear quotes provided upfront.
          </p>
        </div>

        {/* Pricing Explorer Card */}
        <div className="bg-slate-800/90 dark:bg-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700 max-w-4xl mx-auto shadow-2xl">
          
          {/* Trip Selector Buttons */}
          <div className="grid grid-cols-3 gap-2 pb-6 border-b border-slate-700">
            {[
              { id: 'hill', label: 'Ooty & Nilgiris Tour' },
              { id: 'airport', label: 'Coimbatore Airport (CJB)' },
              { id: 'local', label: 'Local & Outstation' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedTripCategory(cat.id as any)}
                className={`py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                  selectedTripCategory === cat.id
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Vehicle Selector Pills */}
          <div className="pt-6">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Select Vehicle Tier:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {FLEET_VEHICLES.map((cab) => (
                <button
                  key={cab.id}
                  onClick={() => setSelectedCabId(cab.id)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedCabId === cab.id
                      ? 'border-amber-400 bg-amber-400/10 text-white shadow-md'
                      : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <div className="text-sm font-bold">{cab.name}</div>
                  <div className="text-[11px] text-amber-400 font-medium">{cab.category}</div>
                  <div className="text-[10px] text-slate-400 mt-1">{cab.passengers} Seats • AC</div>
                </button>
              ))}
            </div>
          </div>

          {/* Rate Estimate Card */}
          <div className="mt-8 bg-slate-950/70 rounded-2xl p-6 border border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero Hidden Extras Guarantee</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                {currentPackage.title} ({activeCab.name})
              </h3>
              <p className="text-xs text-slate-300">
                {currentPackage.info}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {currentPackage.includes.map((inc, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col justify-center space-y-3 pt-4 md:pt-0 md:border-l md:border-slate-800 md:pl-6 text-center md:text-left">
              <div>
                <div className="text-xs text-slate-400">Estimate Pricing:</div>
                <div className="text-2xl font-black text-amber-400 mt-0.5">
                  Honest Custom Quote
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Direct from Mettupalayam dispatch desk
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <button
                  onClick={() => onSelectCabAndTrip(activeCab.name)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors shadow-md cursor-pointer"
                >
                  <span>Book {activeCab.name} Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={generateWhatsAppInquiryUrl(`Hello, I would like a custom quote for ${currentPackage.title} with a ${activeCab.name} from Mettupalayam.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-700/50 hover:bg-emerald-600 text-emerald-200 hover:text-white text-xs font-semibold border border-emerald-600/40 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Ask Quote on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
