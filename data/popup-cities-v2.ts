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
    brand: "🏙️✨ ZUITZERLAND",
    coverImage: {
      url: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99",
      attribution: "Unsplash",
      source: "John Doe"
    },
    tagline: "Two month zuzalu event in Interlaken Switzerland",
    tags: ["crypto", "community", "innovation"],
    location: {
      city: "Interlaken",
      country: "SWITZERLAND"
    },

    // Detailed Info
    description: "Two month zuzalu event in Interlaken Switzerland, in May and June 2025, partnering with the local community, hosting 200-300 people in our amazing zuvillage.",
    timezone: "Europe/Zurich",
    coordinates: {
      latitude: 46.6863,
      longitude: 7.8632
    },
    costs: {
      estimatedTotalMonthlyCost: 8000,
      currency: "USD",
      tickets: {
        type: "TIERED",
        options: [
          {
            name: "Full Experience",
            duration: 45,
            price: 6000,
            available: true
          },
          {
            name: "Two Week Pass",
            duration: 14,
            price: 3000,
            available: false
          }
        ]
      },
      housing: {
        type: "INCLUDED",
        details: "Accommodation provided in shared chalets in Interlaken. All utilities and amenities included."
      },
      monthlyEstimates: {
        food: 800,
        transport: 200,
        activities: 1000
      },
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.zuitzerland.ch/",
      twitter: "https://x.com/zuitzerland",
      discord: "https://discord.gg/zuitzerland",
      application: "https://apply.zuitzerland.ch"
    },
    amenities: [
      "Coworking Space",
      "High-speed Internet",
      "Shared Kitchen",
      "Mountain Views",
      "Community Events"
    ],
    requirements: [
      "Application Required",
      "Proof of Work/Contribution"
    ],
    capacity: 300,

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  }
]; 