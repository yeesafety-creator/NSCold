import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { TelemetryBanner } from './components/TelemetryBanner';
import { Hero } from './components/Hero';
import { HighlightsBar } from './components/HighlightsBar';
import { ServicesBento } from './components/ServicesBento';
import { ThermalMatrix } from './components/ThermalMatrix';
import { Certifications } from './components/Certifications';
import { AffiliateGroup } from './components/AffiliateGroup';
import { RfqSection } from './components/RfqSection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('th');
  const [activeSection, setActiveSection] = useState<string>('main-services');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'main-services', elementId: 'services-matrix' },
        { id: 'standards-and-highlights', elementId: 'standards' },
        { id: 'facilities-and-infrastructure', elementId: 'thermal-specs' },
        { id: 'clients-and-industries', elementId: 'affiliates' },
        { id: 'contact-us', elementId: 'quote-form' },
      ];

      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].elementId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9ff] text-[#111c2c] antialiased selection:bg-[#d8e3f9] selection:text-[#002f76]">
      {/* Fixed Header */}
      <Header lang={lang} setLang={setLang} activeSection={activeSection} />

      {/* Main Content Body */}
      <main className="w-full pt-[116px] flex flex-col flex-grow">
        {/* Real-Time Telemetry Bar */}
        <TelemetryBanner lang={lang} />

        {/* Hero Section */}
        <Hero lang={lang} />

        {/* 4 Feature Highlights Row */}
        <HighlightsBar lang={lang} />

        {/* 4 Core Services Bento Grid */}
        <ServicesBento lang={lang} />

        {/* Thermal Specification Matrix Table */}
        <ThermalMatrix lang={lang} />

        {/* International Standards & Certifications */}
        <Certifications lang={lang} />

        {/* Affiliate Group Network */}
        <AffiliateGroup lang={lang} />

        {/* RFQ Form & Operational Hotlines */}
        <RfqSection lang={lang} />

        {/* Sticky Action Strip */}
        <StickyBottomBar lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}
