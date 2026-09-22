import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/content';
import { Language } from '../types';

interface CertificationsProps {
  lang: Language;
}

export const Certifications: React.FC<CertificationsProps> = ({ lang }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const certs = CERTIFICATIONS[lang];

  return (
    <section className="w-full py-16 bg-[#f9f9ff]" id="standards">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[12px] font-bold text-[#0056c6] uppercase tracking-wider">
            INTERNATIONAL CERTIFICATION &amp; FOOD SAFETY
          </span>
          <h2 className="font-headline text-[28px] sm:text-[34px] font-bold text-[#002f76] mt-1 leading-tight">
            {lang === 'th' ? 'มาตรฐานสากลที่ได้รับการรับรองระดับโลก' : 'Internationally Accredited Quality Standards'}
          </h2>
          <p className="text-[15px] text-[#434652] mt-2 leading-relaxed">
            {lang === 'th' ? (
              <>
                สร้างความมั่นใจสูงสุดแก่คู่ค้าและโรงงานแปรรูปอาหารเพื่อการส่งออก การันตีด้วยใบรับรองคุณภาพจากหน่วยงานตรวจรับรองชั้นนำ
              </>
            ) : (
              <>
                Guaranteeing total compliance for global seafood supply chains, verified by international audit boards and national authorities.
              </>
            )}
          </p>
        </div>

        {/* 5 Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="bg-white p-5 rounded-xl border border-[#D8E0EA] shadow-xs flex flex-col items-center text-center gap-2 hover:shadow-md hover:border-[#0845a1]/40 transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-[#e7eeff] flex items-center justify-center text-[#002f76] mb-1 group-hover:scale-105 transition-transform">
                <span className={`material-symbols-outlined text-[32px] ${cert.badgeColor}`}>
                  {cert.icon}
                </span>
              </div>
              <span className="font-headline text-[18px] font-bold text-[#002f76]">
                {cert.name}
              </span>
              <span className="text-[12px] text-[#434652] leading-snug">
                {cert.description}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Quote Strip */}
        <div className="mt-8 p-5 sm:p-6 bg-[#E8F2FF] border border-[#c3c6d4]/60 rounded-xl flex flex-col md:flex-row items-center justify-between gap-5 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#002f76] text-white flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">health_and_safety</span>
            </div>
            <div>
              <div className="font-headline text-[16px] sm:text-[17px] font-bold text-[#002f76]">
                {lang === 'th' 
                  ? 'ความปลอดภัยทางชีวภาพและการควบคุมสารปนเปื้อน' 
                  : 'Biological Safety & Contamination Control'}
              </div>
              <div className="text-[13px] sm:text-[14px] text-[#434652] mt-0.5">
                {lang === 'th' 
                  ? 'ระบบบันทึก Log และการตรวจสอบย้อนกลับ (Traceability) พร้อมรายงานอุณหภูมิตามข้อกำหนดสากล'
                  : 'Full traceability logging with digital thermal records compliant with export audit protocols'}
              </div>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#002f76] text-white rounded-lg text-[13px] font-bold hover:bg-[#0056c6] transition-colors shadow-xs"
            >
              <span>{lang === 'th' ? 'ขอดูเอกสารรับรองมาตรฐาน' : 'Request Certificates'}</span>
              <span className="material-symbols-outlined text-[16px]">file_download</span>
            </button>
          </div>
        </div>

        {/* Modal for Certificate Preview / Request */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#002f76]/40 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl border border-[#D8E0EA] max-w-md w-full p-6 relative">
              <button 
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-[#434652] hover:text-[#002f76] p-1 rounded-lg"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#E8F2FF] text-[#002f76] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">verified</span>
                </div>
                <div>
                  <h4 className="font-headline text-[18px] font-bold text-[#002f76]">
                    {lang === 'th' ? 'เอกสารรับรองมาตรฐาน NS Cold Storage' : 'NS Cold Storage Certifications'}
                  </h4>
                  <p className="text-[12px] text-[#434652]">GMP • HACCP • SMETA • HALAL • กรมประมง</p>
                </div>
              </div>
              <p className="text-[13px] text-[#434652] mb-4">
                {lang === 'th'
                  ? 'เอกสารฉบับทางการและผลตรวจประเมินทางจุลชีววิทยาสามารถขอรับได้ผ่านฝ่ายทะเบียนและการส่งออก กรุณากรอกแบบฟอร์มด้านล่างเพื่อรับเอกสารทางอีเมลทันที'
                  : 'Official audit copies and microbiology laboratory evaluation reports can be requested directly via our export documentation desk.'}
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="#quote-form"
                  onClick={() => setModalOpen(false)}
                  className="w-full text-center py-2.5 px-4 rounded-lg bg-[#0845a1] text-white font-bold text-[13px] hover:bg-[#0056c6] transition-colors"
                >
                  {lang === 'th' ? 'ไปที่แบบฟอร์มขอเอกสาร' : 'Go to Inquiry Form'}
                </a>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="w-full py-2 text-center text-[13px] text-[#434652] hover:text-[#002f76]"
                >
                  {lang === 'th' ? 'ปิดหน้าต่าง' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
