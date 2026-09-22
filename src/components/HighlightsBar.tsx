import React from 'react';
import { Language } from '../types';

interface HighlightsBarProps {
  lang: Language;
}

export const HighlightsBar: React.FC<HighlightsBarProps> = ({ lang }) => {
  const items = [
    {
      icon: 'ac_unit',
      thTitle: 'การควบคุมความเย็นสม่ำเสมอ',
      enTitle: 'Consistent Thermal Control',
      thDesc: 'เซ็นเซอร์กระจายทั่วห้องเย็น ตรวจจับความผันผวนของอุณหภูมิแบบเรียลไทม์',
      enDesc: 'Sensors distributed across deep chambers monitor thermal shifts in real-time.',
    },
    {
      icon: 'inventory_2',
      thTitle: 'ระบบ WMS ระบุพิกัดแม่นยำ',
      enTitle: 'Accurate WMS Tracking',
      thDesc: 'เช็คสต็อก เข้า-ออก รวดเร็ว ผ่านระบบบาร์โค้ด ตรวจสอบย้อนกลับได้ทันที',
      enDesc: 'High-speed barcode in/out inventory check with instant lot traceability.',
    },
    {
      icon: 'sanitizer',
      thTitle: 'สุขอนามัยมาตรฐานสากล',
      enTitle: 'International Hygiene',
      thDesc: 'ห้องควบคุมปลอดเชื้อ ป้องกันการปนเปื้อนข้ามสายพันธุ์อาหารอย่างเคร่งครัด',
      enDesc: 'Strict sanitation protocol preventing cross-contamination across all food categories.',
    },
    {
      icon: 'local_shipping',
      thTitle: 'จุดโหลดสินค้าแอร์ล็อค',
      enTitle: 'Air-Lock Cold Docks',
      thDesc: 'ช่องโหลดปิดผนึก Cold Dock ไม่ให้อากาศภายนอกสัมผัสตัวสินค้าขณะขนถ่าย',
      enDesc: 'Sealed inflatable cold docks preventing ambient air infiltration during transfer.',
    },
  ];

  return (
    <section className="w-full bg-white py-6 border-y border-[#D8E0EA] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#F4F6F9] border border-[#D8E0EA] hover:border-[#0845a1]/40 transition-colors"
            >
              <div className="p-2.5 bg-[#E8F2FF] text-[#002f76] rounded-lg shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-headline text-[15px] font-bold text-[#002f76] leading-tight">
                  {lang === 'th' ? item.thTitle : item.enTitle}
                </h3>
                <p className="text-[13px] text-[#434652] mt-1 leading-normal">
                  {lang === 'th' ? item.thDesc : item.enDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
