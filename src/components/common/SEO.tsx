import React, { useEffect } from 'react';
import { BUSINESS_CONFIG } from '../../config/businessConfig';

export const SEO: React.FC = () => {
  useEffect(() => {
    // Dynamic page title
    document.title = `${BUSINESS_CONFIG.businessName} | Safe & Reliable Cab Service in ${BUSINESS_CONFIG.location.split(',')[0]}`;

    // Schema.org LocalBusiness / TaxiService Structured Data
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'TaxiService',
      name: BUSINESS_CONFIG.businessName,
      description: BUSINESS_CONFIG.hero.supportingText,
      telephone: BUSINESS_CONFIG.rawPhone,
      email: BUSINESS_CONFIG.email,
      priceRange: '₹₹',
      openingHours: 'Mo-Su 00:00-24:00',
      areaServed: {
        '@type': 'AdministrativeArea',
        name: BUSINESS_CONFIG.location,
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_CONFIG.address,
        addressLocality: BUSINESS_CONFIG.location.split(',')[0].trim(),
        addressRegion: BUSINESS_CONFIG.location.split(',')[1]?.trim() || '',
        addressCountry: 'IN',
      },
      provider: {
        '@type': 'LocalBusiness',
        name: BUSINESS_CONFIG.businessName,
        telephone: BUSINESS_CONFIG.rawPhone,
      },
    };

    let scriptTag = document.getElementById('taxi-schema-jsonld') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'taxi-schema-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);
  }, []);

  return null;
};
