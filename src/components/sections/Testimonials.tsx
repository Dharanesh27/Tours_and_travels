import React from 'react';
import { Star, MessageSquareQuote, Info, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../../config/businessConfig';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-400/10 text-amber-900 dark:text-amber-400 border border-amber-200 dark:border-amber-400/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 fill-amber-500" />
            <span>Passenger Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Real commitment to punctual pickups, sanitized vehicles, and courteous mountain drivers on every journey.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-slate-300 dark:text-slate-600" />
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed mb-6">
                  "{review.reviewText}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {review.customerName}
                  </div>
                  <div className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                    {review.tripType}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-100 dark:border-emerald-800/60">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Ride</span>
                </div>
              </div>

              {/* Internal Developer/Client Placeholder Notice Flag */}
              {review.isPlaceholder && (
                <div className="mt-3 pt-2 text-[10px] text-slate-400 dark:text-slate-500 border-t border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span>Sample Client Review Template</span>
                  <span className="font-mono">ID: {review.id}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Client Customization Notice Box */}
        <div className="mt-10 max-w-2xl mx-auto bg-amber-50/60 dark:bg-slate-800/80 border border-amber-200/70 dark:border-slate-700 rounded-2xl p-3.5 text-center text-xs text-amber-900 dark:text-amber-300 flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <span>
            <strong>Client Note:</strong> Ready to connect your live Google Business Reviews or WhatsApp passenger feedback in <code>businessConfig.ts</code>.
          </span>
        </div>

      </div>
    </section>
  );
};
