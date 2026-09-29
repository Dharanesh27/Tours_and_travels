import React from 'react';
import { UserCheck, ShieldCheck, Sparkles, Clock, Receipt, Timer, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_US } from '../../config/businessConfig';
import type { WhyChooseUsItem } from '../../types';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: WhyChooseUsItem['iconName']) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-amber-500 dark:text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-500 dark:text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-500 dark:text-amber-400" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-amber-500 dark:text-amber-400" />;
      case 'Receipt':
        return <Receipt className="w-6 h-6 text-amber-500 dark:text-amber-400" />;
      case 'Timer':
        return <Timer className="w-6 h-6 text-amber-500 dark:text-amber-400" />;
      default:
        return <CheckCircle className="w-6 h-6 text-amber-500 dark:text-amber-400" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-900 dark:bg-slate-950 text-white relative overflow-hidden transition-colors duration-300">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -z-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 -z-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Why Ride With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Reliable Cab Service You Can Count On
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            We focus on what matters most to passengers: punctuality, clean comfortable cars, mountain-experienced drivers, and fair, transparent pricing.
          </p>
        </div>

        {/* 6 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/80 dark:bg-slate-900/80 rounded-3xl p-6 sm:p-7 border border-slate-700/80 hover:border-amber-400/50 hover:bg-slate-800 transition-all duration-300 flex flex-col justify-start group"
            >
              <div className="w-13 h-13 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-400/20 transition-all duration-300">
                {getIcon(item.iconName)}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
