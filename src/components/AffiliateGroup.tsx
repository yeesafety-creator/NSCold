import React from 'react';
import { AFFILIATES } from '../data/content';
import { Language } from '../types';

interface AffiliateGroupProps {
  lang: Language;
}

export const AffiliateGroup: React.FC<AffiliateGroupProps> = ({ lang }) => {
  return (
    <section className="w-full py-12 bg-[#F4F6F9] border-b border-[#D8E0EA]" id="affiliates">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-[12px] font-bold text-[#0056c6] uppercase tracking-wider">
              STRONG INTEGRATED ECOSYSTEM
            </span>
            <h2 className="font-headline text-[24px] sm:text-[28px] font-bold text-[#002f76] mt-0.5">
              {lang === 'th' ? 'กลุ่มบริษัทในเครือ (Affiliate Group)' : 'Affiliate Group Ecosystem'}
            </h2>
            <p className="text-[14px] text-[#434652] mt-1">
              {lang === 'th'
                ? 'ความแข็งแกร่งของห่วงโซ่อุปทานอาหารทะเลและการเพาะเลี้ยงสัตว์น้ำแบบครบวงจร'
                : 'Synergistic seafood supply chain network spanning aquaculture, harvest, processing, and multi-temperature logistics.'}
            </p>
          </div>
          <span className="text-[12px] text-[#434652] font-medium">
            {lang === 'th' ? 'เครือข่ายพันธมิตรอุตสาหกรรมปลาและสัตว์น้ำ' : 'Integrated Marine Industry Alliance'}
          </span>
        </div>

        {/* 5 Companies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
          {AFFILIATES.map((comp, idx) => (
            <div
              key={idx}
              className={`bg-white p-4 rounded-xl border border-[#D8E0EA] shadow-xs flex flex-col items-center justify-center text-center gap-1.5 hover:bg-[#F0F7FA] hover:border-[#0845a1]/40 transition-all ${
                idx === 4 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-[15px] ${comp.colorClass} shadow-xs`}>
                {comp.code}
              </div>
              <span className="font-headline text-[15px] text-[#002f76] font-bold mt-1">
                {comp.name}
              </span>
              <span className="text-[11px] text-[#434652]">
                {comp.subName}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
