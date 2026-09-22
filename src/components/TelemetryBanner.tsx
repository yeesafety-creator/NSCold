import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface TelemetryBannerProps {
  lang: Language;
}

export const TelemetryBanner: React.FC<TelemetryBannerProps> = ({ lang }) => {
  const [currentTemp, setCurrentTemp] = useState(-25.4);

  useEffect(() => {
    const interval = setInterval(() => {
      // Subtle realistic oscillation between -25.2°C and -25.6°C
      const delta = (Math.random() * 0.4 - 0.2);
      setCurrentTemp(prev => {
        const next = -25.4 + delta;
        return Number(next.toFixed(1));
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#F0F7FA] border-b border-[#D8E0EA]/50 py-1.5 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-[12px]">
        {/* Left Telemetry Feed */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8F2FF] text-[#002f76] font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#008000] animate-pulse"></span>
            REAL-TIME TELEMETRY ACTIVE
          </span>
          <span className="text-[#434652] font-medium">
            {lang === 'th' 
              ? `คลังสินค้าสงขลา: อุณหภูมิเฉลี่ย ${currentTemp.toFixed(1)}°C | สภาพห้องเย็นปกติ 100%`
              : `Songkhla Cold Storage: Avg Temp ${currentTemp.toFixed(1)}°C | Systems Normal 100%`
            }
          </span>
        </div>

        {/* Right Status Credentials */}
        <div className="flex items-center gap-3 text-[#002f76] font-semibold">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-[#0056c6]">verified_user</span>
            <span>GMP / HACCP / SMETA COMPLIANT</span>
          </span>
          <span className="hidden md:inline-block text-[#c3c6d4]">|</span>
          <a href="tel:0897377236" className="hidden md:flex items-center gap-1 hover:text-[#0056c6] transition-colors">
            <span className="material-symbols-outlined text-[16px] text-[#0845a1]">support_agent</span>
            <span>{lang === 'th' ? 'ฝ่ายขายบริการคลัง: 089-737-7236' : 'Sales Hotline: +66 89-737-7236'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
