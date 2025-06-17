// Card View Information
export interface PopupCityCardInfo {
  id: string;
  name: string;
  slug: string;
  status?: "UPCOMING" | "ON_NOW" | "FINISHED";
  startDate: string;
  endDate: string;
  brand: string;
  coverImage?: {
    url: string;
    photographer: {
      name: string;
      username: string;
    };
    source: 'Unsplash';
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
  notes?: {
    description: string;
    lastUpdated: string;
    estimatedRange?: {
      min: number;
      max: number;
      currency: string;
      timeUnit: 'total' | 'day' | 'week' | 'month';
    };
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