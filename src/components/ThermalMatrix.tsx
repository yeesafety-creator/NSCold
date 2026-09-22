import React, { useState } from 'react';
import { THERMAL_DATA } from '../data/content';
import { Language } from '../types';

interface ThermalMatrixProps {
  lang: Language;
}

export const ThermalMatrix: React.FC<ThermalMatrixProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'frozen' | 'dock'>('all');
  const rows = THERMAL_DATA[lang];

  const filteredRows = rows.filter((row, idx) => {
    if (filter === 'frozen') return idx === 0 || idx === 1;
    if (filter === 'dock') return idx === 2 || idx === 3;
    return true;
  });

  return (
    <section className="w-full py-12 bg-[#F4F6F9] border-y border-[#D8E0EA]" id="thermal-specs">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-[#D8E0EA]">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#D8E0EA]/60">
            <div>
              <span className="text-[12px] font-bold text-[#0056c6] uppercase tracking-wider">
                THERMAL CAPABILITY MATRIX
              </span>
              <h3 className="font-headline text-[22px] sm:text-[26px] font-bold text-[#002f76] mt-0.5">
                {lang === 'th' ? 'ตารางข้อมูลและช่วงอุณหภูมิควบคุมตามมาตรฐาน' : 'Thermal Specifications & Control Thresholds'}
              </h3>
            </div>
            
            <div className="flex items-center gap-3 flex-wrap">
              <div className="inline-flex rounded-lg border border-[#D8E0EA] p-0.5 bg-[#f9f9ff] text-[12px]">
                <button
                  type="button"
                  onClick={() => setFilter('all')}
                  className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                    filter === 'all' ? 'bg-[#0845a1] text-white shadow-xs' : 'text-[#434652] hover:text-[#002f76]'
                  }`}
                >
                  {lang === 'th' ? 'ทั้งหมด' : 'All Zones'}
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('frozen')}
                  className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                    filter === 'frozen' ? 'bg-[#0845a1] text-white shadow-xs' : 'text-[#434652] hover:text-[#002f76]'
                  }`}
                >
                  {lang === 'th' ? 'แช่เยือกแข็ง & ห้องเย็น' : 'Deep Freeze & Storage'}
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('dock')}
                  className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                    filter === 'dock' ? 'bg-[#0845a1] text-white shadow-xs' : 'text-[#434652] hover:text-[#002f76]'
                  }`}
                >
                  {lang === 'th' ? 'คัดขนาด & จุดเทียบโหลด' : 'Packing & Dock'}
                </button>
              </div>

              <span className="px-3 py-1 bg-[#E8F2FF] text-[#002f76] rounded font-bold text-[11px] border border-[#c3c6d4]/50 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#008000] animate-pulse"></span>
                CALIBRATED SENSORS ACTIVE
              </span>
            </div>
          </div>

          {/* Matrix Table */}
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left text-[13px] sm:text-[14px]">
              <thead>
                <tr className="bg-[#f0f3ff] text-[#002f76] font-headline text-[14px] border-b border-[#D8E0EA]">
                  <th className="p-3.5 font-bold">
                    {lang === 'th' ? 'โซนการทำงาน / บริการ' : 'Operating Zone / Service'}
                  </th>
                  <th className="p-3.5 font-bold">
                    {lang === 'th' ? 'ช่วงอุณหภูมิเป้าหมาย' : 'Target Temperature'}
                  </th>
                  <th className="p-3.5 font-bold">
                    {lang === 'th' ? 'ประเภทสินค้าที่รองรับ' : 'Supported Goods'}
                  </th>
                  <th className="p-3.5 font-bold">
                    {lang === 'th' ? 'การตรวจสอบ & ระบบควบคุม' : 'Monitoring & Control System'}
                  </th>
                  <th className="p-3.5 font-bold">
                    {lang === 'th' ? 'สถานะความพร้อม' : 'Status'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D8E0EA]/50">
                {filteredRows.map((row, index) => {
                  const isZebra = index % 2 === 1;
                  return (
                    <tr 
                      key={index} 
                      className={`transition-colors ${isZebra ? 'bg-[#F4F6F9]' : 'bg-white'} hover:bg-[#F0F7FA]`}
                    >
                      <td className="p-3.5 font-semibold text-[#111c2c] whitespace-nowrap">
                        {row.zone}
                      </td>
                      <td className="p-3.5 text-[#002f76] font-bold font-mono whitespace-nowrap">
                        {row.targetTemp}
                      </td>
                      <td className="p-3.5 text-[#434652]">
                        {row.supportedProducts}
                      </td>
                      <td className="p-3.5 text-[#434652]">
                        {row.monitoringMethod}
                      </td>
                      <td className="p-3.5 whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded bg-[#E8F2FF] text-[#002f76] text-[11px] font-bold border border-[#c3c6d4]/50">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-3 border-t border-[#D8E0EA]/50 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[#434652] gap-2">
            <span>* รายงานบันทึกอุณหภูมิ (Temperature Datalogger Logs) สามารถดึงข้อมูลส่งมอบเพื่อประกอบการส่งออกได้ทุก Lot</span>
            <a href="#quote-form" className="text-[#0056c6] font-bold hover:underline flex items-center gap-1">
              <span>{lang === 'th' ? 'สอบถามข้อกำหนดเฉพาะสำหรับสินค้าของคุณ' : 'Inquire specific temperature SLA for your product'}</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
