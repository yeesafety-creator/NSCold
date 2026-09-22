import React from 'react';
import { ASSETS } from '../data/content';
import { Language } from '../types';

interface ServicesBentoProps {
  lang: Language;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ lang }) => {
  return (
    <section className="w-full py-16 bg-[#f9f9ff]" id="services-matrix">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[12px] font-bold text-[#0056c6] uppercase tracking-wider">
              COMPREHENSIVE COLD CHAIN SOLUTIONS
            </span>
            <h2 className="font-headline text-[28px] sm:text-[34px] font-bold text-[#002f76] mt-1 leading-tight">
              {lang === 'th' ? 'บริการหลักของเรา (Core Services)' : 'Our Core Cold Chain Services'}
            </h2>
            <p className="text-[15px] text-[#434652] mt-2 max-w-2xl leading-relaxed">
              {lang === 'th' ? (
                <>
                  ออกแบบโครงสร้างบริการเพื่อรองรับผู้ประกอบการแปรรูปอาหารทะเล อุตสาหกรรมส่งออก โรงงานอาหารแช่แข็ง และผู้กระจายสินค้าปศุสัตว์อย่างครบวงจร
                </>
              ) : (
                <>
                  Engineered for seafood processors, export food conglomerates, commercial fisheries, and cold chain distributors across Southern Thailand and international routes.
                </>
              )}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 bg-[#e7eeff] border border-[#c3c6d4]/50 rounded-lg text-[12px] text-[#002f76] font-bold shadow-xs">
              {lang === 'th' ? '4 เสาหลักบริการอุตสาหกรรม' : '4 Industrial Service Pillars'}
            </span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Service 1: Blast Freeze & IQF Services (Large Bento) */}
          <div className="lg:col-span-7 bg-white rounded-xl shadow-md border border-[#D8E0EA] overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-shadow">
            <div className="relative h-72 sm:h-80 overflow-hidden bg-[#002f76]">
              <img
                alt="Air Blast Freezing and IQF Seafood Tunnel"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                src={ASSETS.airBlast}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002f76] via-[#002f76]/40 to-transparent opacity-95 pointer-events-none" />
              
              <div className="absolute top-4 left-4 bg-[#E8F2FF] px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm border border-[#c3c6d4]/60">
                <span className="material-symbols-outlined text-[18px] text-[#0056c6]">mode_fan</span>
                <span className="text-[12px] text-[#002f76] font-bold">AIR BLAST &amp; IQF FACILITY</span>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[#d9e2ff] text-[11px] font-bold uppercase tracking-wider">
                  {lang === 'th' ? 'บริการที่ 1 • QUICK FREEZING' : 'SERVICE 1 • QUICK FREEZING'}
                </span>
                <h3 className="font-headline text-[22px] sm:text-[24px] font-bold text-white mt-0.5 leading-snug">
                  {lang === 'th' ? 'บริการแช่แข็งด่วน (Air Blast Freezer & IQF)' : 'Rapid Blast Freezing & IQF Services'}
                </h3>
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow gap-4">
              <p className="text-[14px] sm:text-[15px] text-[#434652] leading-relaxed">
                {lang === 'th' ? (
                  <>
                    บริการแช่เยือกแข็งด่วนด้วยเทคโนโลยี Air Blast Freezer และ IQF (Individual Quick Freezing) สามารถลดอุณหภูมิแกนกลางของอาหารได้รวดเร็ว ช่วยรักษาโครงสร้างผลึกน้ำแข็งขนาดเล็ก ไม่ทำลายเนื้อเยื่อ คงความสด รสสัมผัสธรรมชาติ และคุณค่าทางโภชนาการได้สูงสุด รองรับปลาทูน่า กุ้ง ปลาหมึก หอย สัตว์น้ำทุกชนิด และผักผลไม้แช่แข็ง
                  </>
                ) : (
                  <>
                    Rapid sub-zero deep freezing via Air Blast Freezer and IQF tunnels. Swiftly brings core temperature down to -40°C, preserving micro-crystalline structures, moisture, and natural texture without drip loss. Suitable for whole tuna, shrimp, squid, shellfish, and frozen value-added produce.
                  </>
                )}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="bg-[#F4F6F9] p-3 rounded-lg border border-[#D8E0EA] flex flex-col">
                  <span className="text-[10px] text-[#434652] font-semibold">
                    {lang === 'th' ? 'ช่วงอุณหภูมิทำงาน' : 'Operating Temp'}
                  </span>
                  <span className="font-headline text-[18px] font-bold text-[#002f76]">-35°C ถึง -40°C</span>
                </div>
                <div className="bg-[#F4F6F9] p-3 rounded-lg border border-[#D8E0EA] flex flex-col">
                  <span className="text-[10px] text-[#434652] font-semibold">
                    {lang === 'th' ? 'กำลังการผลิตต่อวัน' : 'Daily Throughput'}
                  </span>
                  <span className="font-headline text-[18px] font-bold text-[#002f76]">High Output Rate</span>
                </div>
                <div className="bg-[#F4F6F9] p-3 rounded-lg border border-[#D8E0EA] flex flex-col">
                  <span className="text-[10px] text-[#434652] font-semibold">
                    {lang === 'th' ? 'การรักษาเนื้อสัมผัส' : 'Cell Integrity'}
                  </span>
                  <span className="font-headline text-[18px] font-bold text-[#008000]">Zero Drip Loss</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-[#D8E0EA]/60">
                <div className="flex items-center gap-2 text-[#434652] text-[12px]">
                  <span className="w-2 h-2 rounded-full bg-[#0056c6] shrink-0"></span>
                  <span>
                    {lang === 'th' 
                      ? 'เหมาะสำหรับ: โรงงานแปรรูปส่งออก • เรือประมงพาณิชย์ • ผู้นำเข้าอาหารทะเล'
                      : 'Ideal for: Exporters • Commercial Fleets • Marine Importers'
                    }
                  </span>
                </div>
                <a
                  href="#quote-form"
                  className="inline-flex items-center gap-1 text-[13px] text-[#0056c6] font-bold hover:text-[#002f76] transition-colors shrink-0"
                >
                  <span>{lang === 'th' ? 'จองคิวแช่แข็ง' : 'Book Freezing Slot'}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Service 2: Cold Storage Warehousing */}
          <div className="lg:col-span-5 bg-white rounded-xl shadow-md border border-[#D8E0EA] overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-shadow">
            <div className="relative h-64 overflow-hidden bg-[#002f76]">
              <img
                alt="Cold Storage Warehouse Racks"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                src={ASSETS.coldWarehouse}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002f76] via-[#002f76]/40 to-transparent opacity-95 pointer-events-none" />
              
              <div className="absolute top-4 left-4 bg-[#E8F2FF] px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm border border-[#c3c6d4]/60">
                <span className="material-symbols-outlined text-[18px] text-[#002f76]">warehouse</span>
                <span className="text-[12px] text-[#002f76] font-bold">WAREHOUSE CAPACITY</span>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[#d9e2ff] text-[11px] font-bold uppercase tracking-wider">
                  {lang === 'th' ? 'บริการที่ 2 • COLD STORAGE' : 'SERVICE 2 • COLD STORAGE'}
                </span>
                <h3 className="font-headline text-[22px] font-bold text-white mt-0.5 leading-snug">
                  {lang === 'th' ? 'บริการรับฝากเก็บสินค้าห้องเย็น' : 'Deep Cold Storage Warehousing'}
                </h3>
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow gap-4">
              <p className="text-[14px] sm:text-[15px] text-[#434652] leading-relaxed">
                {lang === 'th' ? (
                  <>
                    คลังสินค้าห้องเย็นอุณหภูมิคงที่สม่ำเสมอ -20°C ถึง -25°C พร้อมโครงสร้าง Selective Racking และ Drive-In Racking ที่แข็งแกร่ง ป้องกันสินค้าเสียหาย ควบคุมการไหลเวียนของลมเย็นอย่างทั่วถึง และบันทึกข้อมูลอุณหภูมิอัตโนมัติ
                  </>
                ) : (
                  <>
                    Consistent sub-zero warehousing locked at -20°C to -25°C. Features heavy-duty Selective and Drive-In Racking systems, laminar airflow, and automated temperature logs ensuring zero heat spots.
                  </>
                )}
              </p>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2.5 p-2 rounded bg-[#f0f3ff] text-[13px] text-[#111c2c]">
                  <span className="material-symbols-outlined text-[#008000] text-[20px] shrink-0">check_circle</span>
                  <span>
                    {lang === 'th' 
                      ? 'ระบบ WMS ตรวจสอบตำแหน่งสต็อกและ Lot ผลิต Real-Time' 
                      : 'WMS inventory control with real-time pallet & lot location'
                    }
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded bg-[#f0f3ff] text-[13px] text-[#111c2c]">
                  <span className="material-symbols-outlined text-[#008000] text-[20px] shrink-0">check_circle</span>
                  <span>
                    {lang === 'th' 
                      ? 'ระบบแยกจัดเก็บ ป้องกันกลิ่นปนเปื้อน (Cross-Contamination Free)' 
                      : 'Isolated chambers preventing aroma and flavor contamination'
                    }
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded bg-[#f0f3ff] text-[13px] text-[#111c2c]">
                  <span className="material-symbols-outlined text-[#008000] text-[20px] shrink-0">check_circle</span>
                  <span>
                    {lang === 'th' 
                      ? 'ระบบไฟฟ้าสำรองฉุกเฉิน 100% พร้อมระบบดับเพลิงมาตรฐานสากล' 
                      : '100% emergency backup power generators & FM fire safety'
                    }
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#D8E0EA]/60">
                <span className="font-headline text-[18px] font-bold text-[#002f76]">-20°C ถึง -25°C</span>
                <a
                  href="#quote-form"
                  className="inline-flex items-center gap-1 text-[13px] text-[#0056c6] font-bold hover:text-[#002f76] transition-colors"
                >
                  <span>{lang === 'th' ? 'เช็คพื้นที่ว่าง' : 'Check Space Availability'}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Service 3: Fish Sizing & Grading Services */}
          <div className="lg:col-span-6 bg-white rounded-xl shadow-md border border-[#D8E0EA] overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-shadow">
            <div className="relative h-64 overflow-hidden bg-[#002f76]">
              <img
                alt="Fish Sizing and Manual Grading Line"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                src={ASSETS.fishSizing}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002f76] via-[#002f76]/40 to-transparent opacity-95 pointer-events-none" />
              
              <div className="absolute top-4 left-4 bg-[#E8F2FF] px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm border border-[#c3c6d4]/60">
                <span className="material-symbols-outlined text-[18px] text-[#002f76]">scale</span>
                <span className="text-[12px] text-[#002f76] font-bold">PROCESSING &amp; GRADING</span>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[#d9e2ff] text-[11px] font-bold uppercase tracking-wider">
                  {lang === 'th' ? 'บริการที่ 3 • SIZING & PACKING' : 'SERVICE 3 • SIZING & PACKING'}
                </span>
                <h3 className="font-headline text-[22px] font-bold text-white mt-0.5 leading-snug">
                  {lang === 'th' ? 'บริการคัดขนาดและแปรรูปเบื้องต้น' : 'Grading, Sizing & Pre-Processing'}
                </h3>
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow gap-4">
              <p className="text-[14px] sm:text-[15px] text-[#434652] leading-relaxed">
                {lang === 'th' ? (
                  <>
                    พื้นที่คัดเกรด ขนาด และชั่งน้ำหนักอาหารทะเล เช่น ปลาทูน่า ปลาทู ปลาหมึก และสัตว์น้ำ ด้วยระบบสายพานลำเลียงสเตนเลสเกรดอาหาร (Food Grade Conveyor) โดยทีมงานชำนาญการที่ผ่านการฝึกอบรมสุขอนามัยขั้นสูง พร้อมบริการชั่ง บรรจุถุง กล่อง และติดฉลากบาร์โค้ด
                  </>
                ) : (
                  <>
                    Hygienic sorting, weighing, and sizing facilities equipped with food-grade stainless steel conveyor systems. Experienced operators handle sorting of tuna, mackerel, squid, and shrimp, along with bagging, boxing, and barcode labeling.
                  </>
                )}
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#F4F6F9] p-3 rounded-lg border border-[#D8E0EA] flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0056c6] text-[24px]">precision_manufacturing</span>
                  <div>
                    <div className="text-[10px] text-[#434652] font-semibold">{lang === 'th' ? 'ความแม่นยำสูง' : 'Precision'}</div>
                    <div className="font-headline text-[16px] font-bold text-[#002f76]">±0.5% Tolerance</div>
                  </div>
                </div>
                <div className="bg-[#F4F6F9] p-3 rounded-lg border border-[#D8E0EA] flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#008000] text-[24px]">health_and_safety</span>
                  <div>
                    <div className="text-[10px] text-[#434652] font-semibold">{lang === 'th' ? 'เกณฑ์สุขาภิบาล' : 'Sanitary Zone'}</div>
                    <div className="font-headline text-[16px] font-bold text-[#002f76]">GMP Clean Zone</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-[#D8E0EA]/60">
                <span className="text-[12px] text-[#434652]">
                  {lang === 'th' ? 'รองรับทั้งปลาสดน้ำแข็ง และสินค้าแช่แข็ง' : 'Supports fresh iced catches & frozen raw material'}
                </span>
                <a
                  href="#quote-form"
                  className="inline-flex items-center gap-1 text-[13px] text-[#0056c6] font-bold hover:text-[#002f76] transition-colors shrink-0"
                >
                  <span>{lang === 'th' ? 'สอบถามรอบคัดขนาด' : 'Inquire Sizing Schedule'}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Service 4: Cold Chain Distribution & Logistics Support */}
          <div className="lg:col-span-6 bg-white rounded-xl shadow-md border border-[#D8E0EA] overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-shadow">
            <div className="relative h-64 overflow-hidden bg-[#0845a1] p-6 flex flex-col justify-between text-white">
              <div className="flex items-center justify-between">
                <div className="bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-white/20">
                  <span className="material-symbols-outlined text-[18px] text-[#87f3ff]">rv_hookup</span>
                  <span className="text-[12px] text-white font-bold">COLD DOCK &amp; LOGISTICS</span>
                </div>
                <span className="text-[11px] text-[#9eb9ff] font-bold uppercase tracking-wider">
                  MULTI-PORT CONNECTIVITY
                </span>
              </div>
              <div>
                <span className="text-[#d9e2ff] text-[11px] font-bold uppercase tracking-wider">
                  {lang === 'th' ? 'บริการที่ 4 • SEAMLESS SUPPLY CHAIN' : 'SERVICE 4 • SEAMLESS SUPPLY CHAIN'}
                </span>
                <h3 className="font-headline text-[22px] font-bold text-white mt-0.5 leading-snug">
                  {lang === 'th' ? 'บริการขนถ่ายและส่งมอบแบบ Cold Chain' : 'Cold Chain Docking & Multi-Modal Logistics'}
                </h3>
                <p className="text-[13px] text-[#d8e3f9] mt-2 leading-relaxed">
                  {lang === 'th' ? (
                    <>
                      ระบบสะพานปรับระดับและประตูปิดผนึกฉนวน (Inflatable Dock Seals) เพื่อเชื่อมต่อตู้คอนเทนเนอร์ Reefer Container และรถบรรทุกห้องเย็นโดยไม่มีรอยรั่วของอุณหภูมิ
                    </>
                  ) : (
                    <>
                      Equipped with hydraulic dock levelers and inflatable perimeter dock seals to load 20/40ft Reefer containers with zero temperature leakage.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow gap-4">
              <p className="text-[14px] sm:text-[15px] text-[#434652] leading-relaxed">
                {lang === 'th' ? (
                  <>
                    NS Cold Storage มีจุดโหลดสินค้ามาตรฐานอุตสาหกรรม รองรับรถเทรลเลอร์ 40 ฟุต และรถบรรทุกห้องเย็นพร้อมกันหลายคัน พร้อมบริการจัดการพาเลท ยึดฟิล์มยืด (Stretch Wrap) ตรวจนับสต็อก และประสานงานด้านเอกสารสุขอนามัยสำหรับส่งออกทางท่าเรือสงขลาและเครือข่ายภาคใต้
                  </>
                ) : (
                  <>
                    Multi-bay cold loading docks supporting 40ft refrigerated trailers. Includes stretch wrap palletizing, real-time dispatch inventory verification, and health certification assistance for shipments through Songkhla Port.
                  </>
                )}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3 rounded bg-[#f0f3ff] flex items-center gap-2.5 border border-[#D8E0EA]/50">
                  <span className="material-symbols-outlined text-[#0056c6] text-[22px] shrink-0">dock</span>
                  <span className="text-[13px] text-[#111c2c] font-semibold">
                    {lang === 'th' ? 'จุดเทียบโหลดสินค้าปรับอุณหภูมิ' : 'Temperature-Controlled Docks'}
                  </span>
                </div>
                <div className="p-3 rounded bg-[#f0f3ff] flex items-center gap-2.5 border border-[#D8E0EA]/50">
                  <span className="material-symbols-outlined text-[#0056c6] text-[22px] shrink-0">description</span>
                  <span className="text-[13px] text-[#111c2c] font-semibold">
                    {lang === 'th' ? 'รองรับเอกสารตรวจรับส่งออกครบวงจร' : 'Export Documentation Support'}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-[#D8E0EA]/60">
                <span className="text-[12px] text-[#434652]">
                  {lang === 'th' ? 'เชื่อมต่อโครงข่ายขนส่งด่วนภาคใต้' : 'Strategic Southern Logistics Hub'}
                </span>
                <a
                  href="#quote-form"
                  className="inline-flex items-center gap-1 text-[13px] text-[#0056c6] font-bold hover:text-[#002f76] transition-colors shrink-0"
                >
                  <span>{lang === 'th' ? 'ประสานงานขนถ่ายสินค้า' : 'Coordinate Logistics'}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
