import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Navigation, 
  Send, 
  CheckCircle2,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { 
  BUSINESS_CONFIG, 
  getTelUrl, 
  generateWhatsAppInquiryUrl, 
  getMailtoUrl 
} from '../../config/businessConfig';
import type { ContactFormData } from '../../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    serviceType: 'Ooty & Nilgiris Hill Tour',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppFromForm = () => {
    const text = `*New Inquiry via Website Form*\n\n*Name:* ${formData.name || 'Not provided'}\n*Phone:* ${formData.phone || 'Not provided'}\n*Email:* ${formData.email || 'Not provided'}\n*Service:* ${formData.serviceType || 'General'}\n*Message:* ${formData.message || 'Cab Booking Inquiry'}`;
    window.open(generateWhatsAppInquiryUrl(text), '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900 dark:bg-slate-950 text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>24/7 Mettupalayam Cab Help & Bookings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact {BUSINESS_CONFIG.businessName}
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Need an urgent cab in Mettupalayam, Ooty sightseeing package, or Coimbatore airport drop? Reach out to us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Action Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="bg-slate-800/90 dark:bg-slate-900 rounded-3xl p-6 border border-slate-700/80 flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Phone Support (24/7)</div>
                  <a
                    href={getTelUrl()}
                    className="text-lg font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    {BUSINESS_CONFIG.phone}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Instant booking & dispatch in MTP</p>
                </div>
              </div>
              <a
                href={getTelUrl()}
                className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors shadow-md"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>Call Now: {BUSINESS_CONFIG.phone}</span>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-slate-800/90 dark:bg-slate-900 rounded-3xl p-6 border border-slate-700/80 flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">WhatsApp Booking & Quotes</div>
                  <div className="text-lg font-bold text-emerald-400">
                    {BUSINESS_CONFIG.whatsappNumber}
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">Get driver details & vehicle confirmation</p>
                </div>
              </div>
              <a
                href={generateWhatsAppInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Address & Hours Card */}
            <div className="bg-slate-800/90 dark:bg-slate-900 rounded-3xl p-6 border border-slate-700/80 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Office & Dispatch Desk</div>
                  <div className="text-sm font-semibold text-slate-200 mt-0.5">{BUSINESS_CONFIG.address}</div>
                  <div className="text-xs text-slate-400">{BUSINESS_CONFIG.location}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-slate-700/60">
                <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Operating Hours</div>
                  <div className="text-sm font-bold text-emerald-400">{BUSINESS_CONFIG.operatingHours}</div>
                  <div className="text-xs text-slate-400">Open 365 Days including Nilgiri holidays</div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-slate-700/60">
                <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email Inquiries</div>
                  <a
                    href={getMailtoUrl()}
                    className="text-sm font-medium text-amber-400 hover:underline"
                  >
                    {BUSINESS_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_CONFIG.socialLinks.googleMaps || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold text-xs transition-colors"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-800 dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-2">Send Us a Direct Message</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill in your details below and our team in Mettupalayam will get back to you immediately.
            </p>

            {submitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-300">
                  Thank you, <strong className="text-white">{formData.name}</strong>. We will contact you at <strong className="text-amber-400">{formData.phone}</strong> shortly.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        message: '',
                        serviceType: 'Ooty & Nilgiris Hill Tour',
                      });
                    }}
                    className="text-xs text-slate-400 hover:text-white underline py-2"
                  >
                    Send another message
                  </button>
                  <button
                    onClick={handleWhatsAppFromForm}
                    className="text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-xl"
                  >
                    Send to WhatsApp Now
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contactName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full bg-slate-900 dark:bg-slate-950 text-white rounded-xl px-4 py-3 text-sm border focus:outline-none focus:ring-2 transition-all placeholder:text-slate-500 ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-400'
                          : 'border-slate-700 focus:ring-amber-400'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contactPhone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Contact Phone Number *
                    </label>
                    <input
                      id="contactPhone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="+91 98765 43210"
                      className={`w-full bg-slate-900 dark:bg-slate-950 text-white rounded-xl px-4 py-3 text-sm border focus:outline-none focus:ring-2 transition-all placeholder:text-slate-500 ${
                        errors.phone
                          ? 'border-red-500 focus:ring-red-400'
                          : 'border-slate-700 focus:ring-amber-400'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label htmlFor="contactEmail" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ramesh@example.com"
                      className="w-full bg-slate-900 dark:bg-slate-950 text-white rounded-xl px-4 py-3 text-sm border border-slate-700 focus:ring-2 focus:ring-amber-400 focus:outline-none placeholder:text-slate-500"
                    />
                  </div>

                  {/* Service Inquiry Type */}
                  <div>
                    <label htmlFor="serviceType" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Service Type
                    </label>
                    <select
                      id="serviceType"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-slate-900 dark:bg-slate-950 text-white rounded-xl px-4 py-3 text-sm border border-slate-700 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    >
                      <option value="Ooty & Nilgiris Hill Tour">Ooty & Nilgiris Hill Tour</option>
                      <option value="Coimbatore Airport (CJB) Drop">Coimbatore Airport (CJB) Drop</option>
                      <option value="MTP Railway Station Connect">MTP Railway Station Connect</option>
                      <option value="Black Thunder Theme Park">Black Thunder Theme Park</option>
                      <option value="Outstation Trip (Tiruppur/Mysore/Salem)">Outstation Trip (Tiruppur/Mysore/Salem)</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contactMessage" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Travel Requirements / Message *
                  </label>
                  <textarea
                    id="contactMessage"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell us about your pickup location in Mettupalayam, dates, destination (e.g. Ooty, Airport), number of passengers..."
                    className={`w-full bg-slate-900 dark:bg-slate-950 text-white rounded-xl px-4 py-3 text-sm border focus:outline-none focus:ring-2 transition-all placeholder:text-slate-500 ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-400'
                        : 'border-slate-700 focus:ring-amber-400'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
                </div>

                {/* Form Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppFromForm}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
