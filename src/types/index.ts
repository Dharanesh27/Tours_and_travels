export interface BusinessConfig {
  businessName: string;
  tagline: string;
  phone: string;
  rawPhone: string;
  whatsappNumber: string;
  rawWhatsappNumber: string;
  email: string;
  location: string;
  address: string;
  operatingHours: string;
  hero: {
    headline: string;
    supportingText: string;
    trustBadges: string[];
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    googleMaps?: string;
  };
}

export interface CabVehicle {
  id: string;
  name: string;
  category: 'Sedan' | 'SUV' | 'Premium' | 'Van' | 'Hatchback';
  tag: string;
  description: string;
  passengers: number;
  luggage: number;
  hasAC: boolean;
  idealFor: string;
  baseRateEstimate?: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: 'MapPin' | 'Plane' | 'Navigation' | 'ArrowRightLeft' | 'Repeat' | 'Building2' | 'Clock';
  popularFor: string[];
  badge?: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: 'ShieldCheck' | 'UserCheck' | 'Sparkles' | 'Clock' | 'Receipt' | 'Timer';
}

export interface HowItWorksStep {
  stepNumber: string;
  title: string;
  description: string;
  iconName: 'MapPin' | 'CheckCircle2' | 'Smile';
}

export interface ServiceAreaRoute {
  id: string;
  type: 'local' | 'airport' | 'outstation' | 'nearby';
  routeName: string;
  description: string;
  typicalDuration?: string;
  distance?: string;
  popular?: boolean;
}

export interface TestimonialItem {
  id: string;
  customerName: string;
  rating: number;
  tripType: string;
  reviewText: string;
  date: string;
  isPlaceholder?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'pricing' | 'service';
}

export interface BookingFormData {
  tripType: 'one-way' | 'round-trip' | 'local' | 'airport';
  pickupLocation: string;
  dropLocation: string;
  date: string;
  time: string;
  returnDate?: string;
  returnTime?: string;
  passengers: number;
  cabType: string;
  customerName: string;
  phoneNumber: string;
  notes?: string;
}

export interface BookingSubmission extends BookingFormData {
  bookingId: string;
  timestamp: string;
  status: 'received' | 'confirmed';
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  serviceType?: string;
}
