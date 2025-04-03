import { PopupCity } from '../types/popup-city-v2';

export const popupCities: PopupCity[] = [
  {
    // Card Info
    id: "zuitzerland-2025",
    name: "Zuitzerland",
    slug: "zuitzerland-2025",
    status: "UPCOMING",
    startDate: "2025-05-03",
    endDate: "2025-06-18",
    brand: "ZUITZERLAND",
    coverImage: {
      url: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99",
      photographer: {
        name: "John Doe",
        username: "johndoe"
      },
      source: "Unsplash"
    },
    tagline: "Two month zuzalu event in Interlaken Switzerland",
    tags: ["d/acc", "governance", "biotech"],
    location: {
      city: "secret location",
      country: "SWITZERLAND"
    },

    // Detailed Info
    description: "Two month zuzalu event in Interlaken Switzerland, in May and June 2025, partnering with the local community, hosting 200-300 people in our amazing zuvillage.",
    timezone: "Europe/Zurich",
    coordinates: {
      latitude: 46.6863,
      longitude: 7.8632
    },
    notes: {
      description: "Full experience tickets (45 days) are around $6,000, which includes shared chalet accommodation. Additional monthly costs for food, transport, and activities typically range from $2,000-3,000. Accommodation is provided in shared chalets in Interlaken with all utilities and amenities included. The event will host 200 participants.",
      lastUpdated: "2024-03-19",
      estimatedRange: {
        min: 6000,
        max: 9000,
        currency: "USD",
        timeUnit: "total"
      }
    },
    links: {
      website: "https://www.zuitzerland.ch/",
      twitter: "https://x.com/zuitzerland",
      telegram: "https://t.me/zuitzerland",
      application: "https://apply.zuitzerland.ch"
    },
    amenities: [
      "Coworking Space",
      "High-speed Internet",
      "Shared Kitchen",
      "Mountain Views",
      "Community Events"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  }
]; 