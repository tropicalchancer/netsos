// Card View Information
export interface PopupCityCardInfo {
  id: string;
  name: string;
  slug: string;
  status: 'UPCOMING' | 'ON_NOW' | 'FINISHED';
  startDate: string;
  endDate: string;
  brand: string;
  coverImage: {
    url: string;
    attribution: string;
    source: string;
  };
  tagline: string;
  tags: string[];
  location: {
    city: string;
    country: string;
  };
}

// Modal View Additional Information
export interface PopupCityDetailedInfo {
  description: string;
  timezone: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  costs: {
    estimatedTotalMonthlyCost: number;
    currency: string;
    tickets: {
      type: 'FLAT' | 'TIERED';
      options: Array<{
        name: string;
        price: number;
        duration: number;
        available: boolean;
      }>;
    };
    housing: {
      type: 'INCLUDED' | 'SELF_BOOK' | 'ASSISTED' | 'HYBRID';
      details: string;
      estimatedCost?: {
        min: number;
        max: number;
        timeUnit: 'night' | 'week' | 'month';
      };
    };
    monthlyEstimates?: {
      food?: number;
      transport?: number;
      activities?: number;
    };
    lastUpdated: string;
  };
  links: {
    website: string;
    twitter?: string;
    discord?: string;
    telegram?: string;
    farcaster?: string;
    application?: string;
  };
  amenities: string[];
  requirements?: string[];
  capacity?: number;
}

// Common Metadata
export interface PopupCityMetadata {
  createdAt: string;
  updatedAt: string;
  isPublished: boolean;
}

// Combined PopupCity Type
export interface PopupCity extends PopupCityCardInfo, PopupCityDetailedInfo, PopupCityMetadata {}

// Component-specific Types
export type PopupCityCard = PopupCityCardInfo;
export type PopupCityModal = PopupCity; 