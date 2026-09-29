# Cab Business Website — Client Project

A modern, production-grade, high-converting cab booking and business website built with **React**, **TypeScript**, **Tailwind CSS**, and **Lucide React**.

---

## 🌟 Key Features

- 🚕 **Instant Quick Booking Card**: Complete trip request form with Pickup & Drop locations, Date/Time pickers, Passenger count, Cab type selector, Name, and Phone number.
- 💬 **One-Click WhatsApp Booking**: Automatically generates pre-formatted WhatsApp booking messages with all customer trip parameters encoded directly to the owner's WhatsApp number.
- 📞 **Direct Call Integration**: One-tap phone calling from the Navbar, Hero section, Contact area, Footer, and Mobile Floating Action Bar.
- 🚘 **Fleet Showcase**: Sedan, SUV, Premium, and Maxi Van cards displaying passenger and luggage capacities, Air Conditioning tags, and one-click "Book This Cab" selection.
- 🛎️ **Comprehensive Services Grid**: Local City Cab, Airport Transfer, Outstation Trips, One-Way Drops, Round Trips, and Corporate Travel.
- 📍 **Interactive Service Area & Coverage**: Route explorer with Local, Airport, and Outstation routes plus an interactive Dispatch Hub map card.
- 💎 **Transparent Fare & Package Explorer**: Upfront package guides with zero hidden fees and no surge multipliers.
- 📱 **Mobile-First & Floating CTA Bar**: Sticky bottom Call, WhatsApp, and Booking action buttons designed specifically for mobile users.
- 🔍 **SEO & Schema.org Structured Data**: Pre-configured `TaxiService` JSON-LD schema markup, OpenGraph tags, and meta tags for search engines.

---

## ⚙️ How to Customize for a New Client

All business details, phone numbers, fleet data, and services are centralized in **one single file**:

📁 [`src/config/businessConfig.ts`](file:///c:/Users/dhara/Maideen/src/config/businessConfig.ts)

### Editable Fields:
```typescript
export const BUSINESS_CONFIG = {
  businessName: 'Your Cab Business Name',
  tagline: 'Safe Rides. Reliable Service. Every Journey.',
  phone: '+91 98765 43210',             // Displayed on website
  rawPhone: '+919876543210',            // Used for tel: links
  whatsappNumber: '+91 98765 43210',   // Displayed on website
  rawWhatsappNumber: '919876543210',    // Used for WhatsApp API (country code + number)
  email: 'bookings@yourbusiness.com',
  location: 'Bangalore, Karnataka, India',
  address: 'Shop 12, Main Road, City, State - PIN',
  operatingHours: '24 Hours / 7 Days a Week',
  // ...
};
```

---

## 🚀 Getting Started

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Architecture

```text
src/
├── config/
│   └── businessConfig.ts          # Central client configuration (Single Source of Truth)
├── types/
│   └── index.ts                   # TypeScript interfaces & types
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx             # Sticky responsive navigation with mobile drawer
│   │   ├── Footer.tsx             # Comprehensive footer with quick links & 24/7 contacts
│   │   └── FloatingCTA.tsx        # Mobile floating Call & WhatsApp bar
│   ├── sections/
│   │   ├── Hero.tsx               # Hero banner with trust badges and quick CTAs
│   │   ├── QuickBooking.tsx       # Interactive booking card with validation
│   │   ├── Services.tsx           # 6 core transportation services
│   │   ├── Fleet.tsx              # Vehicle fleet cards with capacity badges
│   │   ├── WhyChooseUs.tsx        # 6 genuine service advantages
│   │   ├── HowItWorks.tsx         # 3-step connected timeline
│   │   ├── FareEstimator.tsx      # Upfront rate & package transparency
│   │   ├── About.tsx              # Company background & safety commitment
│   │   ├── ServiceArea.tsx        # Route explorer & coverage map card
│   │   ├── Testimonials.tsx       # Customer reviews with client edit flags
│   │   ├── FAQ.tsx                # Accordion FAQ answers
│   │   └── Contact.tsx            # Contact information & direct inquiry form
│   ├── ui/
│   │   └── BookingConfirmationModal.tsx  # Confirmation modal with WhatsApp sync
│   └── common/
│       └── SEO.tsx                # Schema.org JSON-LD structured data injector
├── App.tsx                        # Master layout with cross-component ref wiring
└── index.css                      # Tailwind CSS v4 setup & custom animations
```
