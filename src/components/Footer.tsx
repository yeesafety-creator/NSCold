import React from 'react';
import { ASSETS } from '../data/content';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="w-full bg-[#263142] text-[#ebf1ff] pt-16 pb-12 border-t border-[#434652]">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#434652]/60">
          
          {/* Brand Info Col */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <img
                  alt="NS Cold Storage Logo"
                  className="h-8 w-auto object-contain"
                  src={ASSETS.logo}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-[18px] font-bold text-white leading-tight">
                  NS COLD STORAGE
                </span>
                <span className="text-[11px] text-[#9eb9ff]">
                  {lang === 'th' ? 'เอ็น เอส โคลด์ สตอเรจ' : 'NS Cold Storage Co., Ltd.'}
                </span>
              </div>
            </div>

            <p className="text-[13px] text-[#cfdaf1] leading-relaxed">
              {lang === 'th' ? (
                <>
                  ผู้ให้บริการคลังสินค้าห้องเย็นมาตรฐานระดับอุตสาหกรรม การบริหารจัดการอุณหภูมิระดับติดลบที่แม่นยำ พร้อมโครงสร้างพื้นฐานรองรับอุตสาหกรรมอาหารทะเล เกษตรแปรรูป และโลจิสติกส์โซ่ความเย็นครบวงจรในภาคใต้
                </>
              ) : (
                <>
                  Industrial-grade sub-zero cold storage and blast freezing provider. Full infrastructure catering to seafood processing, agriculture, and export cold supply chains in Southern Thailand.
                </>
              )}
            </p>

            <div className="flex flex-wrap gap-2 mt-1">
              <span className="px-2.5 py-1 rounded bg-[#00535a] text-[#87f3ff] text-[10px] font-bold flex items-center gap-1 border border-[#00535a]">
                <span className="material-symbols-outlined text-[13px]">verified</span> HACCP CERTIFIED
              </span>
              <span className="px-2.5 py-1 rounded bg-[#00535a] text-[#87f3ff] text-[10px] font-bold flex items-center gap-1 border border-[#00535a]">
                <span className="material-symbols-outlined text-[13px]">verified</span> GMP AUDITED
              </span>
              <span className="px-2.5 py-1 rounded bg-[#00535a] text-[#87f3ff] text-[10px] font-bold flex items-center gap-1 border border-[#00535a]">
                <span className="material-symbols-outlined text-[13px]">verified</span> ISO 22000
              </span>
            </div>
          </div>

          {/* Contact & Location Col */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            <span className="font-headline text-[16px] font-bold text-white tracking-wide mb-1">
              {lang === 'th' ? 'สำนักงานและคลังสินค้า' : 'Office & Warehouse Facility'}
            </span>
            <div className="flex items-start gap-2.5 text-[#cfdaf1] text-[13px]">
              <span className="material-symbols-outlined text-[#d9e2ff] shrink-0 text-[18px]">location_on</span>
              <span>150/2 หมู่ 3 ต.เขารูปช้าง อ.เมืองสงขลา จ.สงขลา 90000</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#cfdaf1] text-[13px]">
              <span className="material-symbols-outlined text-[#d9e2ff] shrink-0 text-[18px]">phone</span>
              <span>{lang === 'th' ? 'โทรศัพท์:' : 'Phone:'} 074-336990-1 / 089-7377236</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#cfdaf1] text-[13px]">
              <span className="material-symbols-outlined text-[#d9e2ff] shrink-0 text-[18px]">mail</span>
              <span>{lang === 'th' ? 'อีเมล:' : 'Email:'} mk_nscold@nscold.com</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#cfdaf1] text-[13px]">
              <span className="material-symbols-outlined text-[#d9e2ff] shrink-0 text-[18px]">chat</span>
              <span>LINE Official: @0897377236 (0897377236)</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#cfdaf1] text-[13px]">
              <span className="material-symbols-outlined text-[#d9e2ff] shrink-0 text-[18px]">schedule</span>
              <span>
                {lang === 'th'
                  ? 'เวลาทำการ: จันทร์ - เสาร์ 08:00 - 17:00 น. (ระบบควบคุมคลังทำงาน 24 ชั่วโมง)'
                  : 'Office: Mon - Sat 08:00 - 17:00 (Facility operations 24/7)'}
              </span>
            </div>
          </div>

          {/* Affiliate Col */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <span className="font-headline text-[16px] font-bold text-white tracking-wide mb-1">
              {lang === 'th' ? 'กลุ่มบริษัทในเครือ (Affiliate Group)' : 'Affiliate Group'}
            </span>
            <p className="text-[12px] text-[#cfdaf1]">
              {lang === 'th'
                ? 'เครือข่ายธุรกิจอุตสาหกรรมแปรรูป การเพาะเลี้ยงสัตว์น้ำ และโลจิสติกส์'
                : 'Seafood farming, marine processing and cold logistics alliance.'}
            </p>
            <div className="flex flex-col gap-1 text-[13px] text-[#cfdaf1] mt-1">
              <div className="flex items-center gap-2 py-0.5">
                <span className="w-2 h-2 rounded-full bg-[#d9e2ff]"></span>
                <span>ManA (มานะฟู้ดส์ / มานะกรุ๊ป)</span>
              </div>
              <div className="flex items-center gap-2 py-0.5">
                <span className="w-2 h-2 rounded-full bg-[#b0c6ff]"></span>
                <span>NS Cold Storage (เอ็น เอส โคลด์ สตอเรจ)</span>
              </div>
              <div className="flex items-center gap-2 py-0.5">
                <span className="w-2 h-2 rounded-full bg-[#87f3ff]"></span>
                <span>ManA Aqua (มานะ อควา)</span>
              </div>
              <div className="flex items-center gap-2 py-0.5">
                <span className="w-2 h-2 rounded-full bg-[#dee9ff]"></span>
                <span>PC (บริษัทในเครือ พีซี)</span>
              </div>
              <div className="flex items-center gap-2 py-0.5">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span>Paechae (แพแช่)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[#9eb9ff] text-[12px]">
          <div>
            © 2025 บริษัท เอ็น เอส โคลด์ สตอเรจ จำกัด (NS COLD STORAGE CO., LTD.) สงวนลิขสิทธิ์
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <a href="#standards" className="hover:text-white transition-colors">
              {lang === 'th' ? 'นโยบายความเป็นส่วนตัว' : 'Privacy Policy'}
            </a>
            <a href="#quote-form" className="hover:text-white transition-colors">
              {lang === 'th' ? 'ข้อกำหนดการใช้บริการ' : 'Terms of Service'}
            </a>
            <a href="#thermal-specs" className="hover:text-white transition-colors">
              {lang === 'th' ? 'รายงานความปลอดภัยและอุณหภูมิ' : 'Temperature & Audit Reports'}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
