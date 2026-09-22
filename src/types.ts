export type Language = 'th' | 'en';

export interface ServiceItem {
  id: string;
  badge: string;
  subTitle: string;
  title: string;
  description: string;
  imageUrl?: string;
  metrics: {
    label: string;
    value: string;
    highlight?: boolean;
    success?: boolean;
  }[];
  features?: string[];
  footerNote: string;
  actionText: string;
}

export interface ThermalRow {
  zone: string;
  targetTemp: string;
  supportedProducts: string;
  monitoringMethod: string;
  status: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  badgeColor?: string;
}

export interface AffiliateCompany {
  code: string;
  name: string;
  subName: string;
  colorClass: string;
}

export interface RfqFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  serviceType: string;
  volume: string;
  details: string;
  urgentContact: boolean;
}
