import React, { useState } from 'react';
import { ASSETS } from '../data/content';
import { Language, RfqFormData } from '../types';

interface RfqSectionProps {
  lang: Language;
}

export const RfqSection: React.FC<RfqSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState<RfqFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceType: '',
    volume: '',
    details: '',
    urgentContact: false,
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const generatedRef = 'RFQ-NS-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedRef(generatedRef);
      setLoading(false);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      phone: '',
      email: '',
      serviceType: '',
      volume: '',
      details: '',
      urgentContact: false,
    });
    setSubmittedRef(null);
  };

  return (
    <section className="w-full py-16 bg-[#f9f9ff]" id="quote-form">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Left Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-[#D8E0EA]">
            <div className="mb-6">
              <span className="text-[12px] font-bold text-[#0056c6] uppercase tracking-wider">
                ONLINE RFQ &amp; RESERVATION
              </span>
              <h2 className="font-headline text-[26px] sm:text-[30px] font-bold text-[#002f76] mt-0.5 leading-tight">
                {lang === 'th' ? 'ขอใบเสนอราคาและสอบถามบริการทันที' : 'Request Quotation & Space Reservation'}
              </h2>
              <p className="text-[13px] sm:text-[14px] text-[#434652] mt-1.5 leading-relaxed">
                {lang === 'th' ? (
                  <>
                    กรอกข้อมูลความต้องการจัดเก็บหรือแช่แข็ง เจ้าหน้าที่ฝ่ายบริการลูกค้าระดับอุตสาหกรรมจะติดต่อกลับพร้อมใบเสนอราคาภายใน 2 ชั่วโมงทำการ
                  </>
                ) : (
                  <>
                    Submit your storage and freezing requirements. Our commercial accounts team will respond with a tailored quote within 2 business hours.
                  </>
                )}
              </p>
            </div>

            {submittedRef ? (
              <div className="p-6 bg-[#E8F2FF] border border-[#0845a1]/30 rounded-xl flex flex-col gap-4 text-[#002f76] animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#008000] text-white flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[28px]">check_circle</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-[18px] font-bold">
                      {lang === 'th' ? 'บันทึกข้อมูลและส่งคำขอเรียบร้อยแล้ว!' : 'RFQ Successfully Received!'}
                    </h4>
                    <p className="text-[13px] text-[#434652]">
                      {lang === 'th' ? `หมายเลขอ้างอิง: ` : `Reference ID: `}
                      <span className="font-bold text-[#002f76] font-mono">{submittedRef}</span>
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-[#D8E0EA] text-[13px] text-[#434652] space-y-1">
                  <div><strong>{lang === 'th' ? 'ผู้ติดต่อ:' : 'Contact:'}</strong> {formData.fullName} ({formData.companyName})</div>
                  <div><strong>{lang === 'th' ? 'เบอร์โทร:' : 'Phone:'}</strong> {formData.phone}</div>
                  <div><strong>{lang === 'th' ? 'บริการ:' : 'Service:'}</strong> {formData.serviceType || '-'}</div>
                  {formData.volume && <div><strong>{lang === 'th' ? 'ปริมาณ:' : 'Volume:'}</strong> {formData.volume}</div>}
                  {formData.urgentContact && (
                    <div className="text-[#008000] font-bold flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-[16px]">bolt</span>
                      <span>{lang === 'th' ? 'เลือกติดต่อกลับด่วนภายใน 30 นาที' : 'Requested 30-minute urgent callback'}</span>
                    </div>
                  )}
                </div>

                <p className="text-[13px] text-[#434652]">
                  {lang === 'th'
                    ? 'เจ้าหน้าที่ฝ่ายบริการ NS Cold Storage กำลังจัดทำใบเสนอราคาและจะติดต่อกลับทางโทรศัพท์หรืออีเมลโดยเร็วที่สุด'
                    : 'Our logistics and refrigeration specialists are preparing your customized quote.'}
                </p>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-fit px-4 py-2 bg-[#002f76] text-white rounded text-[13px] font-bold hover:bg-[#0056c6] transition-colors"
                >
                  {lang === 'th' ? 'ส่งคำขอรายการใหม่' : 'Submit Another RFQ'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] text-[#111c2c] mb-1 font-semibold">
                      {lang === 'th' ? 'ชื่อ-นามสกุล ผู้ติดต่อ' : 'Contact Name'} <span className="text-[#ba1a1a]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={lang === 'th' ? 'เช่น สมชาย วงศ์วิวัฒน์' : 'e.g., Alex Johnson'}
                      className="w-full px-3.5 py-2.5 rounded bg-[#f9f9ff] border border-[#D8E0EA] text-[#111c2c] text-[14px] focus:outline-none focus:border-[#0056c6] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] text-[#111c2c] mb-1 font-semibold">
                      {lang === 'th' ? 'ชื่อบริษัท / ฟาร์ม / ธุรกิจ' : 'Company / Entity'} <span className="text-[#ba1a1a]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder={lang === 'th' ? 'เช่น บริษัท สงขลา ซีฟู้ดส์ จำกัด' : 'e.g., Global Marine Exports Co.'}
                      className="w-full px-3.5 py-2.5 rounded bg-[#f9f9ff] border border-[#D8E0EA] text-[#111c2c] text-[14px] focus:outline-none focus:border-[#0056c6] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] text-[#111c2c] mb-1 font-semibold">
                      {lang === 'th' ? 'เบอร์โทรศัพท์ติดต่อ' : 'Phone Number'} <span className="text-[#ba1a1a]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="089-XXXXXXX หรือ 074-XXXXXX"
                      className="w-full px-3.5 py-2.5 rounded bg-[#f9f9ff] border border-[#D8E0EA] text-[#111c2c] text-[14px] focus:outline-none focus:border-[#0056c6] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] text-[#111c2c] mb-1 font-semibold">
                      {lang === 'th' ? 'อีเมลติดต่อกลับ' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 rounded bg-[#f9f9ff] border border-[#D8E0EA] text-[#111c2c] text-[14px] focus:outline-none focus:border-[#0056c6] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] text-[#111c2c] mb-1 font-semibold">
                      {lang === 'th' ? 'ประเภทบริการที่สนใจ' : 'Service Type'} <span className="text-[#ba1a1a]">*</span>
                    </label>
                    <select
                      required
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#f9f9ff] border border-[#D8E0EA] text-[#111c2c] text-[14px] focus:outline-none focus:border-[#0056c6] focus:bg-white transition-all"
                    >
                      <option value="">{lang === 'th' ? '-- เลือกประเภทบริการ --' : '-- Select Service Category --'}</option>
                      <option value="blast-freeze">บริการแช่แข็งด่วน (Air Blast / IQF)</option>
                      <option value="cold-storage">บริการรับฝากเก็บห้องเย็น (-20°C ถึง -25°C)</option>
                      <option value="fish-sizing">บริการคัดขนาดและคัดเกรดปลา / สัตว์น้ำ</option>
                      <option value="cold-dock">บริการโหลดสินค้าและโลจิสติกส์โซ่ความเย็น</option>
                      <option value="package-all">บริการแบบครบวงจร (แช่แข็ง + ฝากเก็บ + ส่งมอบ)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[13px] text-[#111c2c] mb-1 font-semibold">
                      {lang === 'th' ? 'ปริมาณสินค้าโดยประมาณ (ตัน / วัน หรือ เดือน)' : 'Estimated Volume (Tons)'}
                    </label>
                    <input
                      type="text"
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      placeholder={lang === 'th' ? 'เช่น 20 ตัน / สัปดาห์' : 'e.g., 25 tons / week'}
                      className="w-full px-3.5 py-2.5 rounded bg-[#f9f9ff] border border-[#D8E0EA] text-[#111c2c] text-[14px] focus:outline-none focus:border-[#0056c6] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] text-[#111c2c] mb-1 font-semibold">
                    {lang === 'th' ? 'รายละเอียดสินค้าและข้อกำหนดอุณหภูมิเพิ่มเติม' : 'Product Specifics & Thermal SLA'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder={
                      lang === 'th'
                        ? 'ระบุประเภทสินค้า เช่น ปลาทูน่าแช่แข็ง, กุ้งขาว, อุณหภูมิที่ต้องการ, กำหนดการนำสินค้าเข้า...'
                        : 'Specify cargo type, requested temperature (-18°C / -25°C / -40°C), expected intake schedule...'
                    }
                    className="w-full px-3.5 py-2.5 rounded bg-[#f9f9ff] border border-[#D8E0EA] text-[#111c2c] text-[14px] focus:outline-none focus:border-[#0056c6] focus:bg-white transition-all"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="urgentContact"
                    checked={formData.urgentContact}
                    onChange={(e) => setFormData({ ...formData, urgentContact: e.target.checked })}
                    className="w-4 h-4 rounded text-[#002f76] border-[#D8E0EA] focus:ring-[#002f76]"
                  />
                  <label htmlFor="urgentContact" className="text-[13px] text-[#434652] cursor-pointer">
                    {lang === 'th' ? 'ต้องการให้เจ้าหน้าที่ติดต่อกลับด่วนภายใน 30 นาที' : 'Prioritize urgent callback within 30 minutes'}
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-lg bg-[#0845a1] text-white font-bold text-[14px] hover:bg-[#0056c6] transition-all shadow-md flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {loading ? 'hourglass_top' : 'send'}
                  </span>
                  <span>
                    {loading 
                      ? (lang === 'th' ? 'กำลังส่งข้อมูล...' : 'Submitting...')
                      : (lang === 'th' ? 'ส่งข้อมูลขอใบเสนอราคา (Request Quotation)' : 'Submit Quotation Request')
                    }
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Form Right Column: Direct Hotlines & Location */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Primary Navy Hotline Card */}
            <div className="bg-[#002f76] text-white p-6 sm:p-8 rounded-xl shadow-lg flex flex-col justify-between border border-[#002f76]">
              <div>
                <div className="flex items-center gap-2 text-[#87f3ff] text-[12px] font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[18px]">contact_support</span>
                  <span>{lang === 'th' ? 'สายด่วนติดต่อฝ่ายปฏิบัติการคลัง' : 'Warehouse Operations Hotline'}</span>
                </div>
                <h3 className="font-headline text-[22px] sm:text-[24px] font-bold text-white mt-2 leading-snug">
                  {lang === 'th' ? 'ติดต่อทีมงาน NS Cold Storage' : 'Contact NS Cold Storage Team'}
                </h3>
                <p className="text-[13px] text-[#dee9ff] mt-2 leading-relaxed">
                  {lang === 'th' ? (
                    <>
                      พร้อมให้คำปรึกษาการบริหารจัดการโซ่ความเย็น การวางแผนจัดเก็บสินค้าตามมาตรฐาน อย. และการส่งออกสินค้าสัตว์น้ำ
                    </>
                  ) : (
                    <>
                      Direct consultation on cold chain logistics, blast freezing schedules, and FDA/export compliance.
                    </>
                  )}
                </p>
              </div>

              <div className="flex flex-col gap-3 my-6">
                <a
                  href="tel:074336990"
                  className="flex items-center gap-3.5 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-white text-[#002f76] flex items-center justify-center shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-[22px]">phone</span>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#dee9ff] font-medium">
                      {lang === 'th' ? 'เบอร์โทรศัพท์สำนักงาน' : 'Office Landline'}
                    </div>
                    <div className="font-headline text-[16px] sm:text-[18px] font-bold text-white">074-336990-1</div>
                  </div>
                </a>

                <a
                  href="tel:0897377236"
                  className="flex items-center gap-3.5 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-white text-[#002f76] flex items-center justify-center shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-[22px]">smartphone</span>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#dee9ff] font-medium">
                      {lang === 'th' ? 'เบอร์โทรศัพท์มือถือ / ด่วน' : 'Direct Mobile / Urgent'}
                    </div>
                    <div className="font-headline text-[16px] sm:text-[18px] font-bold text-white">089-7377236</div>
                  </div>
                </a>

                <a
                  href="https://line.me/ti/p/~0897377236"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-white text-[#002f76] flex items-center justify-center shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-[22px]">chat</span>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#dee9ff] font-medium">LINE Official ID</div>
                    <div className="font-headline text-[16px] sm:text-[17px] font-bold text-white">
                      @0897377236 (0897377236)
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:mk_nscold@nscold.com"
                  className="flex items-center gap-3.5 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-white text-[#002f76] flex items-center justify-center shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-[22px]">mail</span>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#dee9ff] font-medium">
                      {lang === 'th' ? 'อีเมลสำหรับติดต่อธุรกิจ' : 'Corporate Email'}
                    </div>
                    <div className="text-[15px] font-semibold text-white font-mono">mk_nscold@nscold.com</div>
                  </div>
                </a>
              </div>

              <div className="text-[#dee9ff] text-[12px] pt-1 border-t border-white/15">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#87f3ff]">schedule</span>
                  <span>{lang === 'th' ? 'เวลาเปิดรับโหลดสินค้า: บริการ 24 ชั่วโมง (ตามนัดหมายล่วงหน้า)' : 'Docking Intake: 24/7 (By advance booking)'}</span>
                </span>
              </div>
            </div>

            {/* Location Snapshot Box */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-[#D8E0EA]">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[#0056c6] text-[22px]">location_on</span>
                <span className="font-headline text-[17px] font-bold text-[#002f76]">
                  {lang === 'th' ? 'ที่ตั้งศูนย์คลังสินค้าห้องเย็น' : 'Cold Warehouse Location'}
                </span>
              </div>
              <p className="text-[13px] text-[#434652] leading-relaxed">
                {lang === 'th' ? (
                  <>
                    150/2 หมู่ 3 ตำบลเขารูปช้าง อำเภอเมืองสงขลา จังหวัดสงขลา 90000<br />
                    <span className="text-[#002f76] font-semibold">ทำเลยุทธศาสตร์:</span> ใกล้ถนนสายหลัก เชื่อมโยงท่าเรือสงขลา ท่าอากาศยานหาดใหญ่ และเส้นทางโลจิสติกส์สู่ประเทศมาเลเซีย
                  </>
                ) : (
                  <>
                    150/2 Moo 3, Khao Rup Chang, Mueang Songkhla, Songkhla 90000, Thailand<br />
                    <span className="text-[#002f76] font-semibold">Strategic Location:</span> Quick access to Songkhla Deep Sea Port, Hat Yai Airport, and the southern highway corridor to Malaysia.
                  </>
                )}
              </p>
              
              <div 
                className="w-full h-44 bg-cover bg-center rounded-lg mt-4 shadow-sm border border-[#D8E0EA] relative overflow-hidden group"
                style={{ backgroundImage: `url('${ASSETS.mapSnapshot}')` }}
              >
                <div className="absolute inset-0 bg-[#002f76]/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-2 left-2 bg-white/95 px-2.5 py-1 rounded text-[11px] font-bold text-[#002f76] shadow-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-[#ba1a1a]">pin_drop</span>
                  <span>Songkhla Cold Hub</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
