import React from 'react';
import { Language } from '../types';

interface StickyBottomBarProps {
  lang: Language;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ lang }) => {
  return (
    <aside className="sticky bottom-4 z-40 max-w-4xl mx-auto px-4 w-full pointer-events-none transition-all">
      <div className="pointer-events-auto bg-[#002f76]/95 backdrop-blur-md text-white p-3 sm:px-6 rounded-xl shadow-2xl flex items-center justify-between gap-4 border border-white/20">
        <div className="flex items-center gap-3 min-w-0">
          <span className="w-3 h-3 rounded-full bg-[#008000] animate-ping shrink-0" />
          <div className="flex flex-col truncate">
            <span className="text-[13px] sm:text-[14px] text-white font-bold truncate">
              {lang === 'th' ? 'ห้องเย็น NS Cold Storage พร้อมรับฝากสินค้า' : 'NS Cold Storage Ready for Inbound Cargo'}
            </span>
            <span className="text-[11px] sm:text-[12px] text-[#dee9ff] truncate">
              {lang === 'th' ? 'รักษาอุณหภูมิ -25°C ถึง -40°C มาตรฐาน GMP & HACCP' : 'Thermal SLA -25°C to -40°C • GMP & HACCP Certified'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="tel:0897377236"
            className="px-3 py-2 rounded bg-white/20 text-white text-[12px] sm:text-[13px] font-semibold hover:bg-white/30 transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[16px]">call</span>
            <span className="hidden sm:inline">{lang === 'th' ? 'โทรทันที' : 'Call Now'}</span>
          </a>
          <a
            href="#quote-form"
            className="px-4 py-2 rounded bg-[#2a6fe7] text-white text-[12px] sm:text-[13px] font-bold hover:bg-[#0056c6] transition-all shadow-md"
          >
            {lang === 'th' ? 'ขอใบเสนอราคา' : 'Get Quote'}
          </a>
        </div>
      </div>
    </aside>
  );
};
