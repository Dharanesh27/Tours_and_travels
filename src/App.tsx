import { useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { QuickBooking, type QuickBookingRef } from './components/sections/QuickBooking';
import { Services } from './components/sections/Services';
import { Fleet } from './components/sections/Fleet';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { HowItWorks } from './components/sections/HowItWorks';
import { FareEstimator } from './components/sections/FareEstimator';
import { About } from './components/sections/About';
import { ServiceArea } from './components/sections/ServiceArea';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { FloatingCTA } from './components/layout/FloatingCTA';
import { SEO } from './components/common/SEO';

function MainApp() {
  const bookingRef = useRef<QuickBookingRef>(null);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCab = (cabName: string) => {
    if (bookingRef.current) {
      bookingRef.current.selectCabType(cabName);
    } else {
      scrollToBooking();
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    if (bookingRef.current) {
      bookingRef.current.selectServiceType(serviceTitle);
    } else {
      scrollToBooking();
    }
  };

  const handleSelectRoute = (pickup: string, drop: string) => {
    if (bookingRef.current) {
      bookingRef.current.selectRoute(pickup, drop);
    } else {
      scrollToBooking();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 transition-colors duration-300">
      {/* SEO & Structured Data */}
      <SEO />

      {/* Sticky Navigation */}
      <Navbar onBookClick={scrollToBooking} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onBookClick={scrollToBooking} />

        {/* Quick Booking Form Card (Overlapping Hero) */}
        <QuickBooking ref={bookingRef} />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Vehicle Fleet Section */}
        <Fleet onSelectCab={handleSelectCab} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* How It Works (3 Steps) */}
        <HowItWorks onBookClick={scrollToBooking} />

        {/* Fare Transparency & Package Explorer */}
        <FareEstimator onSelectCabAndTrip={handleSelectCab} />

        {/* About Section */}
        <About />

        {/* Service Area & Route Explorer */}
        <ServiceArea onSelectRoute={handleSelectRoute} />

        {/* Customer Reviews */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Contact Information & Inquiry Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Floating CTA Bar */}
      <FloatingCTA onBookClick={scrollToBooking} />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

export default App;
