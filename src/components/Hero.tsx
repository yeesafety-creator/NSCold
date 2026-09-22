import React from 'react';
import { ASSETS } from '../data/content';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f9f9ff] to-[#F4F6F9] pb-16 pt-8">
      {/* Ambient Radial Lighting Effects */}
      <div className="absolute -top-32 right-10 w-96 h-96 bg-[#002f76]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00535a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Compliance Verification Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded bg-[#e7eeff] text-[#002f76] font-semibold text-[13px] border border-[#c3c6d4]/50 shadow-xs">
              <span className="material-symbols-outlined text-[18px] text-[#008000]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              <span>
                {lang === 'th' 
                  ? 'มาตรฐานสากล GMP • HACCP • SMETA • รับรองคุณภาพและความสดใหม่ 100%' 
                  : 'International Standard GMP • HACCP • SMETA • 100% Quality & Freshness'
                }
              </span>
            </div>

            {/* Main Impact Headline */}
            <h1 className="font-headline text-[32px] sm:text-[40px] lg:text-[44px] text-[#002f76] font-bold tracking-tight leading-[1.15]">
              {lang === 'th' ? (
                <>บริการคลังสินค้าห้องเย็น และรับฝากเก็บอาหารทะเลแช่แข็งมาตรฐานสากล</>
              ) : (
                <>Industrial Cold Storage & International Standard Frozen Seafood Warehousing</>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-[16px] sm:text-[17px] text-[#434652] max-w-2xl leading-relaxed">
              {lang === 'th' ? (
                <>
                  ผู้นำด้านการแช่เยือกแข็งด่วน (Blast Freezing & IQF) รับฝากเก็บ และคัดแยกขนาดอาหารทะเล สัตว์น้ำ และสินค้าเกษตรแปรรูปในภาคใต้ ควบคุมอุณหภูมิติดลบแม่นยำตลอด 24 ชั่วโมง ด้วยเทคโนโลยีรักษาความสดระดับพรีเมียม
                </>
              ) : (
                <>
                  Leading provider of Blast Freezing & IQF, deep cold warehousing, and sizing services for marine seafood and agricultural products in Southern Thailand. 24/7 sub-zero precision thermal monitoring.
                </>
              )}
            </p>

            {/* Core Value Micro-Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <div className="bg-white p-3 rounded-lg border border-[#D8E0EA] shadow-xs flex flex-col">
                <span className="text-[10px] text-[#434652] uppercase font-bold tracking-wider">
                  {lang === 'th' ? 'ความจุจัดเก็บรวม' : 'Total Capacity'}
                </span>
                <span className="font-headline text-[20px] font-bold text-[#002f76]">10,000+ ตัน</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-[#D8E0EA] shadow-xs flex flex-col">
                <span className="text-[10px] text-[#434652] uppercase font-bold tracking-wider">
                  {lang === 'th' ? 'อุณหภูมิต่ำสุด' : 'Lowest Temp'}
                </span>
                <span className="font-headline text-[20px] font-bold text-[#0056c6]">-40°C</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-[#D8E0EA] shadow-xs flex flex-col">
                <span className="text-[10px] text-[#434652] uppercase font-bold tracking-wider">
                  {lang === 'th' ? 'ระบบตรวจวัด' : 'Monitoring'}
                </span>
                <span className="font-headline text-[20px] font-bold text-[#002f76]">24/7 Data Log</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-[#D8E0EA] shadow-xs flex flex-col">
                <span className="text-[10px] text-[#434652] uppercase font-bold tracking-wider">
                  {lang === 'th' ? 'รองรับการค้า' : 'Compliance'}
                </span>
                <span className="font-headline text-[20px] font-bold text-[#008000]">Export Ready</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0845a1] text-white font-semibold text-[14px] hover:bg-[#0056c6] transition-all shadow-[0_4px_12px_rgba(8,69,161,0.2)]"
              >
                <span className="material-symbols-outlined text-[20px]">request_quote</span>
                <span>{lang === 'th' ? 'ขอใบเสนอราคา / ปรึกษาฟรี' : 'Request Quotation / Consult'}</span>
              </a>
              <a
                href="#services-matrix"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#E8F2FF] text-[#002f76] font-semibold text-[14px] border border-[#c3c6d4]/60 hover:bg-[#d8e3f9] transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">warehouse</span>
                <span>{lang === 'th' ? 'ดูรายละเอียดบริการทั้งหมด' : 'Explore All Services'}</span>
              </a>
            </div>

            {/* Fast Contact Snippet */}
            <div className="flex items-center gap-3 text-[#434652] text-[13px] pt-1 flex-wrap">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="material-symbols-outlined text-[16px] text-[#0056c6]">phone</span> 074-336990-1
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="material-symbols-outlined text-[16px] text-[#0056c6]">chat</span> LINE: @0897377236
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="material-symbols-outlined text-[16px] text-[#0056c6]">location_on</span> {lang === 'th' ? 'สงขลา (ใกล้ท่าเรือ)' : 'Songkhla (Near Port)'}
              </span>
            </div>
          </div>

          {/* Right Hero Image Montage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#002f76] border-2 border-white/80 group">
              <img
                alt="NS Cold Storage Automated High-Bay Cold Warehouse"
                className="w-full h-[420px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                src={ASSETS.heroWarehouse}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002f76]/90 via-transparent to-transparent pointer-events-none" />

              {/* Live Temperature Locked Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-lg shadow-md border border-[#D8E0EA] flex items-center gap-3">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0056c6] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0056c6]"></span>
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-[#434652] tracking-wider">TARGET TEMP</span>
                  <span className="font-headline text-[15px] font-bold text-[#002f76]">-25.0°C LOCKED</span>
                </div>
              </div>

              {/* In-facility Automated Racking Metric Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-lg shadow-lg border border-[#D8E0EA] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#dee9ff] flex items-center justify-center text-[#002f76] shrink-0">
                    <span className="material-symbols-outlined text-[24px]">conveyor_belt</span>
                  </div>
                  <div>
                    <div className="font-headline text-[15px] font-bold text-[#111c2c]">
                      {lang === 'th' ? 'ระบบคลังอัตโนมัติ' : 'Automated Cold Racks'}
                    </div>
                    <div className="text-[11px] text-[#434652]">Selective & Drive-In Racking System</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-[#E8F2FF] text-[#002f76] text-[11px] font-bold rounded shrink-0 border border-[#c3c6d4]/50">
                  24H DOCKING
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
