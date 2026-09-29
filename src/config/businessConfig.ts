import type {
  BusinessConfig,
  CabVehicle,
  ServiceItem,
  WhyChooseUsItem,
  HowItWorksStep,
  ServiceAreaRoute,
  TestimonialItem,
  FaqItem,
  BookingFormData
} from '../types';

/**
 * ============================================================================
 * CENTRALIZED CLIENT BUSINESS CONFIGURATION - METTUPALAYAM
 * ============================================================================
 * Tailored for Mettupalayam & Nilgiris / Coimbatore hub operations.
 */

export const BUSINESS_CONFIG: BusinessConfig = {
  // Replace with client business name or brand
  businessName: 'Royalway Cabs Mettupalayam',
  
  // Tagline
  tagline: 'Safe Nilgiris & Coimbatore Rides. Reliable Service. Every Journey.',
  
  // Contact numbers (Formatted for display and raw for tel: links)
  phone: '+91 98765 43210',
  rawPhone: '+919876543210',
  
  // WhatsApp number (include country code without + for API URL)
  whatsappNumber: '+91 98765 43210',
  rawWhatsappNumber: '919876543210',
  
  // Email address
  email: 'bookings@royalwaycabs.com',
  
  // Location and physical address in Mettupalayam
  location: 'Mettupalayam, Coimbatore Dist, Tamil Nadu, India',
  address: 'No. 18, Coimbatore Main Road, Near MTP Railway Station, Mettupalayam - 641301',
  
  // Operating hours
  operatingHours: '24 Hours / 7 Days a Week',
  
  // Hero section content
  hero: {
    headline: 'Your Ride. Your Comfort. Your Way.',
    supportingText:
      'Premier cab services in Mettupalayam for Ooty & Nilgiris hill tours, Coimbatore Airport transfers, local city drops, and outstation journeys with experienced mountain drivers.',
    trustBadges: ['Available 24/7 in Mettupalayam', 'Ghat Road & Nilgiris Specialists', 'Instant WhatsApp Booking'],
  },

  // Social and map links
  socialLinks: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    googleMaps: 'https://maps.google.com/?q=Mettupalayam+Coimbatore+Tamil+Nadu',
  },
};

/**
 * FLEET VEHICLES
 * Perfectly suited for city travel and Nilgiris hill climbs (Sedans, SUVs, Premium Innova/Crysta, Tempo Traveler).
 */
export const FLEET_VEHICLES: CabVehicle[] = [
  {
    id: 'sedan',
    name: 'Sedan (Dzire / Etios)',
    category: 'Sedan',
    tag: 'Budget & Couple Choice',
    description: 'Comfortable, economical air-conditioned ride for city commutes and Coimbatore airport transfers.',
    passengers: 4,
    luggage: 2,
    hasAC: true,
    idealFor: 'Mettupalayam local drops, Coimbatore Airport & Railway station runs',
    baseRateEstimate: 'Economical standard rate',
    features: ['Crisp Air Conditioning', 'Spacious Boot Space', 'Smooth Suspension', 'Careful Driving'],
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Sedan cab in Mettupalayam for city and airport drops',
  },
  {
    id: 'suv',
    name: 'SUV (Innova / Ertiga)',
    category: 'SUV',
    tag: 'Hill & Family Favorite',
    description: 'High ground clearance and powerful performance for Ooty, Coonoor, and Kotagiri hairpin bends.',
    passengers: 6,
    luggage: 4,
    hasAC: true,
    idealFor: 'Ooty hill station tours, Family vacations, Outstation road trips',
    baseRateEstimate: 'Best value for families & ghat trips',
    features: ['Dual AC System', 'Ample Legroom & Luggage', 'Ghat Road Power', 'Music System'],
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Spacious 6-seater SUV for Ooty and Nilgiris tour from Mettupalayam',
  },
  {
    id: 'premium',
    name: 'Premium Innova Crysta',
    category: 'Premium',
    tag: 'Executive & VIP Comfort',
    description: 'Luxury captain seats and whisper-quiet cabin for executive visits, VIP guests, and resort transfers.',
    passengers: 6,
    luggage: 4,
    hasAC: true,
    idealFor: 'Luxury resort stays in Nilgiris, Corporate executives, VIP airport transfers',
    baseRateEstimate: 'Premium luxury tier',
    features: ['Captain Recliner Seats', 'Superior Ride Comfort', 'Experienced Chauffeur', 'Complimentary Water'],
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Luxury Innova Crysta cab in Mettupalayam',
  },
  {
    id: 'van',
    name: 'Tempo Traveler (12-14 Seater)',
    category: 'Van',
    tag: 'Group & Sightseeing',
    description: 'Large passenger carrier for wedding groups, college tours, and Nilgiris sightseeing groups.',
    passengers: 14,
    luggage: 8,
    hasAC: true,
    idealFor: 'Large family tours, Ooty group sightseeing, Wedding transport',
    baseRateEstimate: 'Group package quote',
    features: ['Pushback Reclining Seats', 'Individual AC Vents', 'Overhead Luggage Storage', 'Surround Sound Audio'],
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Tempo traveler for group travel from Mettupalayam',
  },
];

/**
 * CORE SERVICES
 */
export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'ooty-nilgiris-tour',
    title: 'Ooty & Nilgiris Hill Tour',
    shortDescription: 'Dedicated mountain cabs for Ooty, Coonoor, Kotagiri, and Pykara sightseeing.',
    detailedDescription:
      'Experienced ghat-road drivers skilled at navigating the 36 hairpin bends safely. Flexible multi-day packages available.',
    iconName: 'MapPin',
    popularFor: ['Ooty Lake & Botanical Garden', 'Coonoor Tea Gardens', 'Doddabetta Peak'],
    badge: 'Most Popular',
  },
  {
    id: 'airport-transfer',
    title: 'Coimbatore Airport (CJB) Transfer',
    shortDescription: 'Punctual 24/7 pickup and drop-off to Coimbatore International Airport (CJB).',
    detailedDescription:
      'Flight-tracking pickups, doorstep luggage assistance, late-night and early-morning airport transfers from Mettupalayam.',
    iconName: 'Plane',
    popularFor: ['CJB Airport Terminal', '24/7 Red-Eye Flights', 'Expressway Transit'],
    badge: 'On-Time Guarantee',
  },
  {
    id: 'railway-station-transfer',
    title: 'MTP Railway & Toy Train Drops',
    shortDescription: 'Connecting passengers between Mettupalayam Railway Station, Toy Train, and Coimbatore Junction.',
    detailedDescription:
      'Seamless transit for tourists arriving by Nilgiri Mountain Railway (Toy Train) or Nilgiri Express.',
    iconName: 'Navigation',
    popularFor: ['MTP Station Pickup', 'Coimbatore Junction (CBE)', 'Toy Train Connect'],
    badge: '24/7 Station Desk',
  },
  {
    id: 'local-black-thunder',
    title: 'Local Cab & Theme Park Drops',
    shortDescription: 'Prompt local rides in Mettupalayam, Sirumugai, Karamadai, and Black Thunder Theme Park.',
    detailedDescription:
      'Short-distance city trips, shopping, hotel transfers, and family visits with zero surge pricing.',
    iconName: 'Navigation',
    popularFor: ['Black Thunder Rides', 'Karamadai Ranganathar Temple', 'Sirumugai Town'],
  },
  {
    id: 'outstation-trips',
    title: 'Outstation Intercity Trips',
    shortDescription: 'One-way and round trips to Tiruppur, Erode, Salem, Palakkad, Mysore, and Bangalore.',
    detailedDescription:
      'Comfortable highway transit with valid commercial permits, Fastag, and dedicated professional chauffeurs.',
    iconName: 'ArrowRightLeft',
    popularFor: ['Tiruppur Textile City', 'Palakkad / Kerala', 'Mysore via Bandipur'],
    badge: 'Save on 1-Way',
  },
  {
    id: 'corporate-resort-travel',
    title: 'Resort & Corporate Transfers',
    shortDescription: 'Transportation for luxury resorts in Nilgiris, wedding events, and business clients.',
    detailedDescription:
      'Premium fleet management, GST invoice billing, verified chauffeurs, and corporate tie-ups.',
    iconName: 'Building2',
    popularFor: ['Nilgiris Heritage Resorts', 'Wedding Guest Shuttles', 'Corporate Retreats'],
  },
];

/**
 * WHY CHOOSE US
 */
export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'ghat-road-experts',
    title: 'Ghat Road & Nilgiris Experts',
    description: 'Drivers with deep experience navigating Nilgiris hairpin bends, fog conditions, and mountain weather safely.',
    iconName: 'UserCheck',
  },
  {
    id: 'safe-journeys',
    title: 'Safe & Sanitized Vehicles',
    description: 'Well-maintained brakes, crisp tires, clean interiors, and regular vehicle fitness checks for mountain travel.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'clean-vehicles',
    title: 'Spotless AC Cabs',
    description: 'Every vehicle is vacuumed, sanitized, and air-conditioned for maximum passenger comfort.',
    iconName: 'Sparkles',
  },
  {
    id: '24-7-availability',
    title: '24/7 Mettupalayam Dispatch',
    description: 'Round-the-clock availability for emergency travel, early Nilgiri Express arrivals, and midnight airport runs.',
    iconName: 'Clock',
  },
  {
    id: 'transparent-pricing',
    title: 'Zero Surge & Fair Pricing',
    description: 'Clear quotes without peak-hour surge tricks or unexpected return toll extras. Tolls & parking at actuals.',
    iconName: 'Receipt',
  },
  {
    id: 'on-time-service',
    title: 'Punctual Doorstep Pickup',
    description: 'Dedicated advance dispatch so you never miss a flight at CJB Airport or a train at MTP station.',
    iconName: 'Timer',
  },
];

/**
 * HOW IT WORKS
 */
export const HOW_IT_WORKS: HowItWorksStep[] = [
  {
    stepNumber: '01',
    title: 'Enter Your Trip Details',
    description: 'Tell us your pickup in Mettupalayam or surrounding areas, destination (e.g. Ooty, Airport), date, and time.',
    iconName: 'MapPin',
  },
  {
    stepNumber: '02',
    title: 'Confirm Your Ride',
    description: 'Choose your preferred vehicle (Sedan, Innova/SUV, Crysta, or Tempo) and confirm via Website or WhatsApp.',
    iconName: 'CheckCircle2',
  },
  {
    stepNumber: '03',
    title: 'Enjoy Your Journey',
    description: 'Our experienced mountain chauffeur arrives right on time for a comfortable, stress-free journey.',
    iconName: 'Smile',
  },
];

/**
 * SERVICE AREA COVERAGE AROUND METTUPALAYAM
 */
export const SERVICE_AREAS: ServiceAreaRoute[] = [
  {
    id: 'mtp-ooty',
    type: 'local',
    routeName: 'Mettupalayam ➔ Ooty (Udhagamandalam)',
    description: 'Scenic hill climb via Kallar, Burliar, and Coonoor with stops at scenic viewpoints.',
    typicalDuration: '1.5 - 2 hours',
    distance: '51 km',
    popular: true,
  },
  {
    id: 'mtp-coimbatore-airport',
    type: 'airport',
    routeName: 'Mettupalayam ➔ Coimbatore Airport (CJB)',
    description: 'Direct expressway transfer to Coimbatore International Airport via Karamadai & Annur/Thudiyalur.',
    typicalDuration: '50 - 65 mins',
    distance: '39 km',
    popular: true,
  },
  {
    id: 'mtp-coonoor',
    type: 'local',
    routeName: 'Mettupalayam ➔ Coonoor & Kotagiri',
    description: 'Direct route to Tea Gardens, Sim’s Park, Catherine Falls, and Kodanad View Point.',
    typicalDuration: '1 hour 15 mins',
    distance: '35 km',
    popular: true,
  },
  {
    id: 'mtp-cbe-junction',
    type: 'local',
    routeName: 'Mettupalayam ➔ Coimbatore Junction (CBE)',
    description: 'Fast transit between Mettupalayam and Coimbatore Central Railway Station / Gandhipuram.',
    typicalDuration: '45 - 55 mins',
    distance: '36 km',
    popular: true,
  },
  {
    id: 'mtp-black-thunder',
    type: 'nearby',
    routeName: 'Mettupalayam ➔ Black Thunder & Sirumugai',
    description: 'Family water park pickups, local silk saree weavers in Sirumugai, and Karamadai temple drops.',
    typicalDuration: '10 - 20 mins',
    distance: '5 - 12 km',
  },
  {
    id: 'mtp-mysore-bangalore',
    type: 'outstation',
    routeName: 'Mettupalayam ➔ Mysore / Bangalore',
    description: 'Scenic interstate transit through Gudalur, Mudumalai & Bandipur Tiger Reserve.',
    typicalDuration: '5.5 - 7.5 hours',
    distance: '210 - 350 km',
    popular: true,
  },
  {
    id: 'mtp-tiruppur-erode',
    type: 'outstation',
    routeName: 'Mettupalayam ➔ Tiruppur / Erode',
    description: 'Business travel to textile hubs and industrial zones with flexible day wait packages.',
    typicalDuration: '1.5 - 2 hours',
    distance: '65 - 105 km',
  },
  {
    id: 'mtp-palakkad',
    type: 'outstation',
    routeName: 'Mettupalayam ➔ Palakkad / Kerala',
    description: 'Interstate border travel to Palakkad, Thrissur, and Kochi with all valid transport permits.',
    typicalDuration: '2 hours',
    distance: '85 km',
  },
];

/**
 * CUSTOMER REVIEWS (DEVELOPMENT PLACEHOLDER CONTENT)
 * NOTE FOR CLIENT: These are sample template reviews during setup. Replace with verified Google/WhatsApp testimonials.
 */
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'rev-1',
    customerName: 'Karthik S.',
    rating: 5,
    tripType: 'Mettupalayam to Ooty Hill Tour',
    reviewText:
      'Booked an Innova from Mettupalayam to Ooty for a 3-day family holiday. The driver was very skilled on the hairpin bends and drove very smoothly without any car sickness. Excellent service!',
    date: 'Recent Trip',
    isPlaceholder: true,
  },
  {
    id: 'rev-2',
    customerName: 'Deepa Rangarajan',
    rating: 5,
    tripType: 'Coimbatore Airport (CJB) Drop',
    reviewText:
      'Had an early morning 5:30 AM flight from Coimbatore airport. The cab was waiting outside our house in Mettupalayam at 3:15 AM sharp. Punctual, polite, and very safe driving.',
    date: 'Recent Trip',
    isPlaceholder: true,
  },
  {
    id: 'rev-3',
    customerName: 'Venkat Raman',
    rating: 5,
    tripType: 'MTP Railway Station to Coonoor Resort',
    reviewText:
      'Connected from Nilgiri Express directly to our Coonoor tea estate. WhatsApp booking was instantaneous and the driver helped with all our heavy luggage. Highly recommend for Nilgiris travel.',
    date: 'Recent Trip',
    isPlaceholder: true,
  },
];

/**
 * FREQUENTLY ASKED QUESTIONS
 */
export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I book a cab from Mettupalayam to Ooty or Coimbatore Airport?',
    answer:
      'You can submit the booking form on this website or click the "Book via WhatsApp" / "Call Now" buttons. We confirm your driver and vehicle in minutes.',
    category: 'booking',
  },
  {
    id: 'faq-2',
    question: 'Are your drivers experienced with Nilgiris mountain hairpin bends?',
    answer:
      'Yes, all our drivers are local specialists with years of experience driving the ghat roads (Ooty, Coonoor, Kotagiri, and Bandipur routes) under all weather conditions.',
    category: 'service',
  },
  {
    id: 'faq-3',
    question: 'Can I book a cab for early morning Nilgiri Express or Coimbatore flights?',
    answer:
      'Yes! We operate 24/7. For early morning pickups from Mettupalayam, we assign your cab and driver in advance so you never face delays.',
    category: 'service',
  },
  {
    id: 'faq-4',
    question: 'What are the charges for Tolls, Hill Entry, and Parking?',
    answer:
      'Tolls (e.g. Coimbatore bypass or L&T toll) and forest/hill entry permits are billed at actuals for 100% transparent pricing with zero surprise charges.',
    category: 'pricing',
  },
  {
    id: 'faq-5',
    question: 'What payment options do you accept?',
    answer:
      'We accept Google Pay, PhonePe, Paytm, UPI, Direct Cash to driver, and Net Banking.',
    category: 'pricing',
  },
];

/**
 * HELPER UTILITIES FOR WHATSAPP & PHONE INTEGRATION
 */
export const generateWhatsAppBookingUrl = (data: Partial<BookingFormData>): string => {
  const lines: string[] = [
    `*🚕 NEW CAB BOOKING REQUEST - ${BUSINESS_CONFIG.businessName}*`,
    ``,
    `*Customer Name:* ${data.customerName || 'Customer'}`,
    `*Phone:* ${data.phoneNumber || 'Not provided'}`,
    `*Trip Type:* ${data.tripType ? data.tripType.toUpperCase() : 'Not specified'}`,
    `*Pickup Location:* ${data.pickupLocation || 'Mettupalayam'}`,
    `*Drop Location:* ${data.dropLocation || 'Ooty / Coimbatore Airport'}`,
    `*Date:* ${data.date || 'Today'}`,
    `*Time:* ${data.time || 'Immediate'}`,
    ...(data.returnDate ? [`*Return Date:* ${data.returnDate} (${data.returnTime || ''})`] : []),
    `*Passengers:* ${data.passengers || 1}`,
    `*Vehicle Required:* ${data.cabType || 'Sedan'}`,
    ...(data.notes ? [`*Special Notes:* ${data.notes}`] : []),
    ``,
    `_Please reply with quote and vehicle confirmation. Thank you!_`,
  ];

  const message = lines.join('\n');
  return `https://wa.me/${BUSINESS_CONFIG.rawWhatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const generateWhatsAppInquiryUrl = (customMessage?: string): string => {
  const text =
    customMessage ||
    `Hello ${BUSINESS_CONFIG.businessName}, I would like to inquire about cab booking and rates from Mettupalayam.`;
  return `https://wa.me/${BUSINESS_CONFIG.rawWhatsappNumber}?text=${encodeURIComponent(text)}`;
};

export const getTelUrl = (): string => {
  return `tel:${BUSINESS_CONFIG.rawPhone}`;
};

export const getMailtoUrl = (): string => {
  return `mailto:${BUSINESS_CONFIG.email}?subject=Cab%20Booking%20Inquiry%20-%20${encodeURIComponent(
    BUSINESS_CONFIG.businessName
  )}`;
};
