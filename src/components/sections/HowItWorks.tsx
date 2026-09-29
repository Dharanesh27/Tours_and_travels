import React from 'react';
import { MapPin, CheckCircle2, Smile, ArrowRight, Sparkles } from 'lucide-react';
import { HOW_IT_WORKS } from '../../config/businessConfig';

interface HowItWorksProps {
  onBookClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onBookClick }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MapPin className="w-6 h-6 text-amber-500" />;
      case 1:
        return <CheckCircle2 className="w-6 h-6 text-amber-500" />;
      case 2:
        return <Smile className="w-6 h-6 text-amber-500" />;
      default:
        return <MapPin className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/60 relative border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-400/10 text-amber-900 dark:text-amber-400 border border-amber-200 dark:border-amber-400/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Fast & Effortless</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How It Works in 3 Simple Steps
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Booking a cab from Mettupalayam should never be complicated. Request your ride in under 60 seconds.
          </p>
        </div>

        {/* 3 Step Connected Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line on Desktop */}
          <div className="hidden md:block absolute top-1/2 left-[18%] right-[18%] -translate-y-8 h-0.5 border-t-2 border-dashed border-amber-300 dark:border-amber-400/40 z-0" />

          {HOW_IT_WORKS.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="relative z-10 bg-white dark:bg-slate-900 rounded-3xl p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-amber-400/60 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Step Number Badge */}
              <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 font-extrabold text-lg flex items-center justify-center shadow-md shadow-amber-400/30 mb-5 group-hover:scale-110 transition-transform">
                {step.stepNumber}
              </div>

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-slate-800 flex items-center justify-center mb-4">
                {getStepIcon(idx)}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 text-center">
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all duration-200 shadow-xl shadow-amber-400/20 text-sm cursor-pointer"
          >
            <span>Book Your Ride Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
