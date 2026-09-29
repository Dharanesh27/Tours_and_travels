import React from 'react';
import { CheckCircle2, MessageCircle, Phone, X, Calendar, MapPin, Users, Car, Clock } from 'lucide-react';
import type { BookingSubmission } from '../../types';
import { BUSINESS_CONFIG, getTelUrl, generateWhatsAppBookingUrl } from '../../config/businessConfig';

interface BookingConfirmationModalProps {
  booking: BookingSubmission | null;
  onClose: () => void;
}

export const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({
  booking,
  onClose,
}) => {
  if (!booking) return null;

  const whatsappUrl = generateWhatsAppBookingUrl(booking);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-slate-900 dark:text-white transition-colors duration-300"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon Header */}
        <div className="flex flex-col items-center text-center space-y-3 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 dark:text-emerald-400 mb-1">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h3 id="modal-headline" className="text-2xl font-bold text-slate-900 dark:text-white">
            Booking Request Received!
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Thank you, <span className="font-semibold text-amber-600 dark:text-amber-400">{booking.customerName}</span>. We have received your trip details. Our dispatch desk will contact you on{' '}
            <span className="font-semibold text-slate-900 dark:text-slate-100">{booking.phoneNumber}</span> to confirm your cab.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono">
            <span>Booking Ref:</span>
            <span className="text-amber-600 dark:text-amber-400 font-bold">{booking.bookingId}</span>
          </div>
        </div>

        {/* Trip Summary Card */}
        <div className="my-5 bg-slate-50 dark:bg-slate-950/60 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 text-xs space-y-2.5">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="text-slate-500 dark:text-slate-400">Pickup:</span>
              <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{booking.pickupLocation}</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="text-slate-500 dark:text-slate-400">Destination:</span>
              <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{booking.dropLocation}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200 dark:border-slate-800/80">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span>{booking.date}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span>{booking.time}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Car className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span>{booking.cabType}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Users className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span>{booking.passengers} Passenger(s)</span>
            </div>
          </div>
        </div>

        {/* Instant Action CTA Buttons */}
        <div className="space-y-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-950/40 text-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Send Copy to WhatsApp for Faster Dispatch</span>
          </a>

          <div className="grid grid-cols-2 gap-2.5">
            <a
              href={getTelUrl()}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span>Call Cab Owner</span>
            </a>

            <button
              onClick={onClose}
              className="py-2.5 px-3 rounded-xl font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs transition-colors cursor-pointer"
            >
              Done / Close
            </button>
          </div>
        </div>

        <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 mt-4">
          Need immediate pickup in Mettupalayam? Call directly at <span className="text-amber-600 dark:text-amber-400 font-medium">{BUSINESS_CONFIG.phone}</span>.
        </p>
      </div>
    </div>
  );
};
