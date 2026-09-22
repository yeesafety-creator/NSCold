import { ThermalRow, CertificationItem, AffiliateCompany } from '../types';

export const ASSETS = {
  logo: "https://lh3.googleusercontent.com/aida/AEtjO1XAO8NT5YOqGnybSxUCq0Rz87yiBXBZdeCxlaiqYveRJzR_1My1JHkGGTiSu9GY2VMW1GyVqNcfmxTB3svwccu1GeYRajJr5ap2rHpUlekwpF_ajj80WnesIHmmsYYAlmBZr1CFS3XwijAI9jbm2-SFKMGdL5kThB1VfiFCYoK1u9Z4fR78j6PEavL7h3j2YoYtzPaKYReMBjnl-6FdqHkC2LYX84hc_axiL14KzbjMdRrTLm-YhCUJsc4t",
  heroWarehouse: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfLMCHq-C-wV2jw5bPG79wnpwHYLPlMB7FjaS8zdTQSPAhLCaEvdVhGjAZ-ShhkHGOA7qN4HE7lLr_KOirNhFbQRZLparRWq6QmezSHIZr8Pr4BWh42Hhd4m9VKYNTEwlQm29sIUzmhC_iSjzcPx57x6TkADaBXLD2cp_vnQIObuLeGMbntJW_H2veJfTFCdfgxqSfDrhefn_sx-vya0Gn_9UwptS2X6BDqb7PMwTkd1nXf7z-h-lHAw",
  airBlast: "https://lh3.googleusercontent.com/aida-public/AB6AXuBY1ToSCsIchWtgL9OtjvNY7sO0cFCXuArXdgM6K4mhOsMH-oNT5G_0UT2ibAl-KmyffceHLySktJJshxvnuCMm9_LEnsBgK6gC0OV3GbklB37uXJ7_VQCz8jaSOmxlhgNNe511y4afCM-ld-SbWcmcrvOPk_MJ2P8mh2Ju0_jkyTcf10XcC0q0FtLExE4ICvsTgFp6vOYP4u4rw8QayJX8gmkavhNnWWG0UmDl5ovKO3iMiQsd8zTVLw",
  coldWarehouse: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfLMCHq-C-wV2jw5bPG79wnpwHYLPlMB7FjaS8zdTQSPAhLCaEvdVhGjAZ-ShhkHGOA7qN4HE7lLr_KOirNhFbQRZLparRWq6QmezSHIZr8Pr4BWh42Hhd4m9VKYNTEwlQm29sIUzmhC_iSjzcPx57x6TkADaBXLD2cp_vnQIObuLeGMbntJW_H2veJfTFCdfgxqSfDrhefn_sx-vya0Gn_9UwptS2X6BDqb7PMwTkd1nXf7z-h-lHAw",
  fishSizing: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPOwBxkK6mcPSZ6jJdFq_fhGqtDsdBIjubSU5lZTk1dabQrpxTfLvErftPfgueP-ZiN7p1RLaaZv78z_b46XPlKCYklQoKw4qIY-RBz6mRKT9s1Wfe8hMq3vvWP4sbtwM8Cox31khTPhgu09R7L_1abMFZXDhYh2EUEacrq1k9C6OieD219i8TCHdvMNmIYCzrV6BuOCl8AdkBE5Xdx3I76-ZLta2PUQxzEwyFOlwfGq36VP4TwsNlpg",
  mapSnapshot: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2gheRzL6UG4LvGC7NTofYBkJ_cEEwuWer_kKFJsrxy214TbxS7DGwRD7c6xlQpluSqm7Ee8YCX_NQVgVSYoCw2-hy1SI5KROvvTSihLOTDPQFreBXA0HwguHInAlHwrfIa1ecms0EGOfi0at4LV2QZ4aU6k2N7W5SNkHNzi5vs-GueZvro8FnvjrSzcujQua8xxuek_OOzLe-4llbXv-upxIZQPM1CYHh0h5zAYFnJkrOmfUUD83mrw"
};

export const THERMAL_DATA: Record<'th' | 'en', ThermalRow[]> = {
  th: [
    {
      zone: "ห้องแช่แข็งด่วน (Air Blast Freezing)",
      targetTemp: "-35°C ถึง -40°C",
      supportedProducts: "ปลาทูน่าสด, กุ้ง, ปลาหมึก, เนื้อสัตว์, เนื้อผลไม้",
      monitoringMethod: "Core Temperature Probe ตรวจแกนกลางทุก Lot",
      status: "เปิดรับฝากทันที"
    },
    {
      zone: "คลังฝากเก็บสินค้าห้องเย็น (Deep Storage)",
      targetTemp: "-20°C ถึง -25°C",
      supportedProducts: "อาหารทะเลแปรรูปแช่แข็ง, สินค้าพาเลทส่งออก",
      monitoringMethod: "Continuous Data Logger ตรวจวัด 24 ชั่วโมง",
      status: "มีพื้นที่ว่าง"
    },
    {
      zone: "ห้องคัดเกรด & บรรจุ (Sizing & Packing Room)",
      targetTemp: "+10°C ถึง +15°C (Chilled)",
      supportedProducts: "สัตว์น้ำสด, วัตถุดิบรอการแช่แข็ง, ชิ้นส่วนปลา",
      monitoringMethod: "Clean Air Positive Pressure พร้อมระบบบำบัดน้ำ",
      status: "จองคิวล่วงหน้า"
    },
    {
      zone: "จุดเทียบรถและกระจายสินค้า (Cold Dock)",
      targetTemp: "+0°C ถึง +5°C (Dock Seal)",
      supportedProducts: "ตู้คอนเทนเนอร์ 20/40 ฟุต, รถบรรทุกห้องเย็น",
      monitoringMethod: "ซีลยางปิดรอบคัน ป้องกันความชื้นและไอความร้อน",
      status: "พร้อมเทียบ 24 ชม."
    }
  ],
  en: [
    {
      zone: "Air Blast Freezing Room",
      targetTemp: "-35°C to -40°C",
      supportedProducts: "Fresh Tuna, Shrimp, Squid, Meat, Fruit Flesh",
      monitoringMethod: "Core Temperature Probe inspection per batch/lot",
      status: "Available Now"
    },
    {
      zone: "Cold Storage Warehouse (Deep Storage)",
      targetTemp: "-20°C to -25°C",
      supportedProducts: "Processed frozen seafood, export palletized goods",
      monitoringMethod: "Continuous 24/7 Automated Data Logger",
      status: "Space Available"
    },
    {
      zone: "Sizing & Packing Room",
      targetTemp: "+10°C to +15°C (Chilled)",
      supportedProducts: "Fresh catches, raw materials for freezing, fish loins",
      monitoringMethod: "Positive Pressure Clean Air & Wastewater Treatment",
      status: "Advance Booking"
    },
    {
      zone: "Cold Dock & Logistics Bay",
      targetTemp: "+0°C to +5°C (Dock Seal)",
      supportedProducts: "20ft/40ft Reefer Containers, Refrigerated Trucks",
      monitoringMethod: "Inflatable perimeter seals preventing thermal leaks",
      status: "24/7 Active"
    }
  ]
};

export const CERTIFICATIONS: Record<'th' | 'en', CertificationItem[]> = {
  th: [
    {
      id: "gmp",
      name: "GMP",
      icon: "verified",
      description: "Good Manufacturing Practice สำหรับกระบวนการคัดบรรจุและสุขาภิบาล",
      badgeColor: "text-safety-success"
    },
    {
      id: "haccp",
      name: "HACCP",
      icon: "shield",
      description: "การวิเคราะห์อันตรายและจุดวิกฤตที่ต้องควบคุมด้านความเย็น",
      badgeColor: "text-safety-success"
    },
    {
      id: "smeta",
      name: "SMETA",
      icon: "groups",
      description: "มาตรฐานจริยธรรมการค้า ความปลอดภัยแรงงาน และสิ่งแวดล้อม",
      badgeColor: "text-secondary"
    },
    {
      id: "halal",
      name: "HALAL",
      icon: "local_police",
      description: "มาตรฐานรับรองกระบวนการจัดเก็บถูกต้องตามหลักการศาสนาอิสลาม",
      badgeColor: "text-primary"
    },
    {
      id: "fisheries",
      name: "กรมประมง",
      icon: "phishing",
      description: "ขึ้นทะเบียนและผ่านการตรวจรับรองจากกรมประมงแห่งประเทศไทย",
      badgeColor: "text-secondary"
    }
  ],
  en: [
    {
      id: "gmp",
      name: "GMP",
      icon: "verified",
      description: "Good Manufacturing Practice for packing, handling and sanitation",
      badgeColor: "text-safety-success"
    },
    {
      id: "haccp",
      name: "HACCP",
      icon: "shield",
      description: "Hazard Analysis & Critical Control Points for thermal chain safety",
      badgeColor: "text-safety-success"
    },
    {
      id: "smeta",
      name: "SMETA",
      icon: "groups",
      description: "Sedex Members Ethical Trade Audit for labor, safety & environment",
      badgeColor: "text-secondary"
    },
    {
      id: "halal",
      name: "HALAL",
      icon: "local_police",
      description: "Certified halal storage compliant with Islamic regulatory standards",
      badgeColor: "text-primary"
    },
    {
      id: "fisheries",
      name: "Fisheries Dept",
      icon: "phishing",
      description: "Registered & certified by Department of Fisheries Thailand",
      badgeColor: "text-secondary"
    }
  ]
};

export const AFFILIATES: AffiliateCompany[] = [
  {
    code: "M",
    name: "ManA",
    subName: "มานะฟู้ดส์ / มานะกรุ๊ป",
    colorClass: "bg-primary-fixed text-primary"
  },
  {
    code: "NS",
    name: "NS Cold Storage",
    subName: "คลังสินค้าและห้องเย็น",
    colorClass: "bg-secondary-fixed text-secondary"
  },
  {
    code: "MA",
    name: "ManA Aqua",
    subName: "มานะ อควา สัตว์น้ำ",
    colorClass: "bg-tertiary-fixed text-tertiary"
  },
  {
    code: "PC",
    name: "PC Group",
    subName: "บริษัทในเครือ พีซี",
    colorClass: "bg-primary-fixed-dim text-primary"
  },
  {
    code: "P",
    name: "Paechae",
    subName: "แพแช่ อาหารทะเลสด",
    colorClass: "bg-surface-container-high text-primary"
  }
];
