// src/types/index.ts
export type PopupCityStatus = 'UPCOMING' | 'ON NOW' | 'FINISHED';

export interface PopupCity {
  name: string;
  status: PopupCityStatus;
  brand: string;
  year: number;
  dateRange: string;
  websiteUrl: string;
  twitterUrl: string | null;
  description: string;
  oneLiner: string;
  location: {
    city: string;
    country: string;
  };
}

export interface FilterState {
  search: string;
  status: PopupCityStatus | '';
  country: string;
  year: number | '';
}