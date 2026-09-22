import React, { useState } from 'react';
import { ASSETS } from '../data/content';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'main-services', href: '#services-matrix', th: 'บริการหลัก', en: 'Core Services' },
    { id: 'standards-and-highlights', href: '#standards', th: 'จุดเด่นและมาตรฐาน', en: 'Standards & Highlights' },
    { id: 'facilities-and-infrastructure', href: '#thermal-specs', th: 'สิ่งอำนวยความสะดวก', en: 'Facilities' },
    { id: 'clients-and-industries', href: '#affiliates', th: 'ลูกค้าและกลุ่มธุรกิจ', en: 'Group & Network' },
    { id: 'contact-us', href: '#quote-form', th: 'ติดต่อเรา', en: 'Contact Us' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#ffffff]/95 backdrop-blur-xl shadow-[0_2px_12px_rgba(8,69,161,0.06)] border-b border-[#D8E0EA]/60">
      {/* Top Utility Bar */}
      <div className="bg-[#F4F6F9] px-4 lg:px-12 py-1 border-b border-[#D8E0EA]/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-label-md text-[12px] text-[#434652]">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <a href="tel:074336990" className="flex items-center gap-1 hover:text-[#002f76] transition-colors">
              <span className="material-symbols-outlined text-[15px] text-[#0845a1]">call</span>
              <span>{lang === 'th' ? 'โทร: 074-336990-1, 089-7377236' : 'Tel: +66 74-336990-1, 089-7377236'}</span>
            </a>
            <span className="hidden md:inline-block text-[#c3c6d4]">|</span>
            <a 
              href="https://line.me/ti/p/~0897377236" 
              target="_blank" 
              rel="noreferrer" 
              className="hidden md:flex items-center gap-1 hover:text-[#002f76] transition-colors"
            >
              <span className="material-symbols-outlined text-[15px] text-[#0845a1]">chat</span>
              <span>LINE ID: @0897377236</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#ffffff] border border-[#D8E0EA] px-1.5 py-0.5 rounded shadow-xs">
              <button
                type="button"
                onClick={() => setLang('th')}
                className={`px-1.5 py-0.5 text-[11px] font-bold rounded transition-colors ${
                  lang === 'th' ? 'bg-[#0845a1] text-white' : 'text-[#434652] hover:text-[#002f76]'
                }`}
                title="Thai"
              >
                TH
              </button>
              <span className="text-[#c3c6d4] px-0.5 text-[11px]">/</span>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-1.5 py-0.5 text-[11px] font-bold rounded transition-colors ${
                  lang === 'en' ? 'bg-[#0845a1] text-white' : 'text-[#434652] hover:text-[#002f76]'
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            <div className="w-7 h-7 rounded-full bg-[#002f76] flex items-center justify-center text-white shadow-xs">
              <span className="material-symbols-outlined text-[16px]">person</span>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1 text-[#002f76] hover:bg-[#e7eeff] rounded"
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="h-20 max-w-7xl mx-auto px-4 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            alt="NS Cold Storage Logo" 
            className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-102" 
            src={ASSETS.logo}
          />
          <div className="flex flex-col">
            <span className="font-headline text-[18px] sm:text-[20px] font-bold text-[#002f76] tracking-tight leading-tight">
              NS COLD STORAGE
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#434652] uppercase tracking-wider font-semibold">
              {lang === 'th' ? 'บริษัท เอ็น เอส โคลด์ สตอเรจ จำกัด' : 'NS COLD STORAGE CO., LTD.'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id || (item.id === 'main-services' && !activeSection);
            return (
              <a
                key={item.id}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg text-[14px] font-semibold transition-all ${
                  isActive 
                    ? 'bg-[#0845a1] text-white shadow-xs' 
                    : 'text-[#434652] hover:text-[#002f76] hover:bg-[#f0f3ff]'
                }`}
              >
                {lang === 'th' ? item.th : item.en}
              </a>
            );
          })}
        </nav>

        {/* Urgent Request CTA */}
        <div className="flex items-center gap-2">
          <a
            href="#quote-form"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded bg-[#0845a1] text-white text-[13px] font-bold hover:bg-[#0056c6] transition-all shadow-[0_2px_6px_rgba(8,69,161,0.2)]"
          >
            <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
            <span>{lang === 'th' ? 'ขอใบเสนอราคา / ติดต่อด่วน' : 'Get Quote / Contact'}</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#D8E0EA] px-4 py-3 shadow-lg flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded text-[14px] font-medium text-[#111c2c] hover:bg-[#f0f3ff] transition-colors"
            >
              {lang === 'th' ? item.th : item.en}
            </a>
          ))}
          <a
            href="#quote-form"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#0845a1] text-white text-[14px] font-bold"
          >
            <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
            <span>{lang === 'th' ? 'ขอใบเสนอราคา / ติดต่อด่วน' : 'Request Quotation'}</span>
          </a>
        </div>
      )}
    </header>
  );
};
