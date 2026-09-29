import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { 
  MapPin, 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  Car, 
  User, 
  Phone, 
  Send, 
  MessageCircle, 
  ArrowRight,
  Sparkles,
  Info,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { BookingFormData, BookingSubmission } from '../../types';
import { FLEET_VEHICLES, generateWhatsAppBookingUrl, BUSINESS_CONFIG } from '../../config/businessConfig';
import { BookingConfirmationModal } from '../ui/BookingConfirmationModal';

export interface QuickBookingRef {
  selectCabType: (cabName: string) => void;
  selectServiceType: (serviceTitle: string) => void;
  selectRoute: (pickup: string, drop: string) => void;
}

export const QuickBooking = forwardRef<QuickBookingRef, { className?: string }>((_, ref) => {
  // Get today's date in YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingFormData>({
    tripType: 'one-way',
    pickupLocation: '',
    dropLocation: '',
    date: today,
    time: '10:00',
    returnDate: '',
    returnTime: '18:00',
    passengers: 4,
    cabType: 'Sedan (Dzire / Etios)',
    customerName: '',
    phoneNumber: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingSubmission | null>(null);

  // Expose helper methods to parent via ref
  useImperativeHandle(ref, () => ({
    selectCabType: (cabName: string) => {
      setFormData((prev) => ({ ...prev, cabType: cabName }));
      scrollToSelf();
    },
    selectServiceType: (serviceTitle: string) => {
      if (serviceTitle.toLowerCase().includes('airport')) {
        setFormData((prev) => ({ ...prev, tripType: 'airport', dropLocation: 'Coimbatore Airport (CJB)' }));
      } else if (serviceTitle.toLowerCase().includes('round') || serviceTitle.toLowerCase().includes('tour')) {
        setFormData((prev) => ({ ...prev, tripType: 'round-trip', dropLocation: 'Ooty Sightseeing' }));
      } else if (serviceTitle.toLowerCase().includes('outstation')) {
        setFormData((prev) => ({ ...prev, tripType: 'one-way' }));
      }
      scrollToSelf();
    },
    selectRoute: (pickup: string, drop: string) => {
      setFormData((prev) => ({
        ...prev,
        pickupLocation: pickup,
        dropLocation: drop,
      }));
      scrollToSelf();
    },
  }));

  const scrollToSelf = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Please enter pickup location in Mettupalayam or nearby';
    }
    if (!formData.dropLocation.trim()) {
      newErrors.dropLocation = 'Please enter destination (e.g. Ooty, Airport, etc.)';
    }
    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Please enter your name';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter contact phone number';
    } else if (formData.phoneNumber.replace(/[^0-9]/g, '').length < 10) {
      newErrors.phoneNumber = 'Enter a valid 10-digit phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'passengers' ? Number(value) : value,
    }));

    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const submission: BookingSubmission = {
        ...formData,
        bookingId: 'MTP-' + Math.floor(100000 + Math.random() * 900000),
        timestamp: new Date().toISOString(),
        status: 'received',
      };

      setConfirmedBooking(submission);
      setIsSubmitting(false);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#10b981', '#3b82f6', '#ffffff'],
        });
      } catch {
        // Fallback silently if confetti library unavailable
      }
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    if (!formData.pickupLocation || !formData.dropLocation) {
      setErrors((prev) => ({
        ...prev,
        pickupLocation: !formData.pickupLocation ? 'Pickup needed for WhatsApp' : undefined,
        dropLocation: !formData.dropLocation ? 'Drop location needed for WhatsApp' : undefined,
      }));
    }
    const url = generateWhatsAppBookingUrl(formData);
    window.open(url, '_blank');
  };

  const tripTypes = [
    { id: 'one-way', label: 'One-Way Trip' },
    { id: 'round-trip', label: 'Round Trip / Hill Tour' },
    { id: 'local', label: 'Local Mettupalayam' },
    { id: 'airport', label: 'Coimbatore Airport (CJB)' },
  ];

  const quickPickupSuggestions = ['MTP Railway Station', 'Mettupalayam Bus Stand', 'Black Thunder Area', 'Karamadai'];
  const quickDropSuggestions = ['Ooty (Charring Cross)', 'Coimbatore Airport (CJB)', 'Coonoor Tea Estate', 'Coimbatore Junction'];

  return (
    <section id="booking" className="relative -mt-10 sm:-mt-14 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700/80 p-5 sm:p-8 lg:p-10 text-slate-900 dark:text-white transition-colors duration-300">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Cab Booking • Mettupalayam</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Request Your Ride in Seconds
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Experienced Nilgiris mountain drivers, 24/7 Coimbatore airport transfers, and sanitized cabs.
            </p>
          </div>

          {/* Direct WhatsApp Callout Pill */}
          <div className="flex items-center gap-3 self-start md:self-auto bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 px-3.5 py-2 rounded-2xl">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-slate-600 dark:text-slate-300">
              Prefer WhatsApp? <strong className="text-slate-900 dark:text-white">Instant reply in 2 mins</strong>
            </span>
          </div>
        </div>

        {/* Trip Type Selector Pills */}
        <div className="flex flex-wrap gap-2 pt-6 pb-6">
          {tripTypes.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, tripType: tab.id as BookingFormData['tripType'] }))}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                formData.tripType === tab.id
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Row 1: Pickup & Drop Locations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Pickup Location */}
            <div>
              <label htmlFor="pickupLocation" className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  <span>Pickup Location (in/around Mettupalayam) *</span>
                </span>
              </label>
              <div className="relative">
                <input
                  id="pickupLocation"
                  type="text"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  placeholder="e.g. Mettupalayam Railway Station, Karamadai, Sirumugai..."
                  className={`w-full bg-slate-50 dark:bg-slate-800/90 text-slate-900 dark:text-white rounded-xl px-4 py-3 text-sm border focus:outline-none focus:ring-2 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 ${
                    errors.pickupLocation
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-slate-300 dark:border-slate-700 focus:ring-amber-400 focus:border-amber-400'
                  }`}
                />
              </div>
              {errors.pickupLocation && (
                <p className="text-[11px] text-red-500 dark:text-red-400 mt-1">{errors.pickupLocation}</p>
              )}
              
              {/* Quick suggestions */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {quickPickupSuggestions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, pickupLocation: item }))}
                    className="text-[10px] bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-300 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700 transition-colors"
                  >
                    + {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Drop Location */}
            <div>
              <label htmlFor="dropLocation" className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  <span>Destination / Drop Location *</span>
                </span>
              </label>
              <div className="relative">
                <input
                  id="dropLocation"
                  type="text"
                  name="dropLocation"
                  value={formData.dropLocation}
                  onChange={handleChange}
                  placeholder="e.g. Ooty, Coonoor, Coimbatore Airport (CJB), Kotagiri..."
                  className={`w-full bg-slate-50 dark:bg-slate-800/90 text-slate-900 dark:text-white rounded-xl px-4 py-3 text-sm border focus:outline-none focus:ring-2 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 ${
                    errors.dropLocation
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-slate-300 dark:border-slate-700 focus:ring-amber-400 focus:border-amber-400'
                  }`}
                />
              </div>
              {errors.dropLocation && (
                <p className="text-[11px] text-red-500 dark:text-red-400 mt-1">{errors.dropLocation}</p>
              )}

              {/* Quick drop suggestions */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {quickDropSuggestions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, dropLocation: item }))}
                    className="text-[10px] bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700 transition-colors"
                  >
                    + {item}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Row 2: Date, Time, Passengers, Cab Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Date */}
            <div>
              <label htmlFor="pickupDate" className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                <CalendarIcon className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>Pickup Date *</span>
              </label>
              <input
                id="pickupDate"
                type="date"
                name="date"
                min={today}
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-slate-50 dark:bg-slate-800/90 text-slate-900 dark:text-white rounded-xl px-3.5 py-2.5 text-sm border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              />
            </div>

            {/* Time */}
            <div>
              <label htmlFor="pickupTime" className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                <Clock className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>Pickup Time *</span>
              </label>
              <input
                id="pickupTime"
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full bg-slate-50 dark:bg-slate-800/90 text-slate-900 dark:text-white rounded-xl px-3.5 py-2.5 text-sm border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              />
            </div>

            {/* Passenger Count */}
            <div>
              <label htmlFor="passengers" className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                <Users className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>Passengers</span>
              </label>
              <select
                id="passengers"
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
                className="w-full bg-slate-50 dark:bg-slate-800/90 text-slate-900 dark:text-white rounded-xl px-3.5 py-2.5 text-sm border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              >
                <option value={1}>1 Passenger</option>
                <option value={2}>2 Passengers</option>
                <option value={3}>3 Passengers</option>
                <option value={4}>4 Passengers (Standard Sedan)</option>
                <option value={5}>5 Passengers (SUV)</option>
                <option value={6}>6 Passengers (Innova / Crysta)</option>
                <option value={12}>12-14 Passengers (Tempo Traveler)</option>
              </select>
            </div>

            {/* Cab Type */}
            <div>
              <label htmlFor="cabType" className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                <Car className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>Cab Type</span>
              </label>
              <select
                id="cabType"
                name="cabType"
                value={formData.cabType}
                onChange={handleChange}
                className="w-full bg-slate-50 dark:bg-slate-800/90 text-slate-900 dark:text-white rounded-xl px-3.5 py-2.5 text-sm border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-amber-400 focus:outline-none font-medium"
              >
                {FLEET_VEHICLES.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.name}>
                    {vehicle.name} ({vehicle.passengers} seats, AC)
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Conditional Return Details for Round Trip */}
          {formData.tripType === 'round-trip' && (
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/80 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-200">
              <div>
                <label htmlFor="returnDate" className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 mb-1.5">
                  <CalendarIcon className="w-3.5 h-3.5" />
                  <span>Return Date</span>
                </label>
                <input
                  id="returnDate"
                  type="date"
                  name="returnDate"
                  min={formData.date || today}
                  value={formData.returnDate}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl px-3.5 py-2 text-sm border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="returnTime" className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 mb-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Return Time</span>
                </label>
                <input
                  id="returnTime"
                  type="time"
                  name="returnTime"
                  value={formData.returnTime}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl px-3.5 py-2 text-sm border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* Row 3: Customer Name & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2 border-t border-slate-200 dark:border-slate-800">
            
            {/* Customer Name */}
            <div>
              <label htmlFor="customerName" className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                <User className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>Your Name *</span>
              </label>
              <input
                id="customerName"
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full bg-slate-50 dark:bg-slate-800/90 text-slate-900 dark:text-white rounded-xl px-4 py-3 text-sm border focus:outline-none focus:ring-2 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 ${
                  errors.customerName
                    ? 'border-red-500 focus:ring-red-400'
                    : 'border-slate-300 dark:border-slate-700 focus:ring-amber-400 focus:border-amber-400'
                }`}
              />
              {errors.customerName && (
                <p className="text-[11px] text-red-500 dark:text-red-400 mt-1">{errors.customerName}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                <Phone className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>Phone Number (For Booking Confirmation) *</span>
              </label>
              <input
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full bg-slate-50 dark:bg-slate-800/90 text-slate-900 dark:text-white rounded-xl px-4 py-3 text-sm border focus:outline-none focus:ring-2 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 ${
                  errors.phoneNumber
                    ? 'border-red-500 focus:ring-red-400'
                    : 'border-slate-300 dark:border-slate-700 focus:ring-amber-400 focus:border-amber-400'
                }`}
              />
              {errors.phoneNumber && (
                <p className="text-[11px] text-red-500 dark:text-red-400 mt-1">{errors.phoneNumber}</p>
              )}
            </div>

          </div>

          {/* Form Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            
            {/* Primary Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:flex-1 py-4 px-6 rounded-2xl font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] transition-all duration-200 shadow-xl shadow-amber-400/20 text-base flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  <span>Processing Booking...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Request a Cab</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Direct WhatsApp Action Button */}
            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="w-full sm:flex-1 py-4 px-6 rounded-2xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] transition-all duration-200 shadow-xl shadow-emerald-950/40 text-base flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Book via WhatsApp</span>
            </button>

          </div>

          {/* Trust note */}
          <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 gap-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
              <span>No advance booking fees required • Pay after ride completion</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
              <Info className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span>Direct dispatch from {BUSINESS_CONFIG.businessName}</span>
            </div>
          </div>

        </form>

      </div>

      {/* Confirmation Modal */}
      <BookingConfirmationModal
        booking={confirmedBooking}
        onClose={() => setConfirmedBooking(null)}
      />
    </section>
  );
});

QuickBooking.displayName = 'QuickBooking';
