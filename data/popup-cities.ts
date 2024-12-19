import { PopupCity } from '../types/popup-city'

export const popupCities: PopupCity[] = [
  {
    name: "Edge Esmeralda 2",
    status: "UPCOMING",
    brand: "🏙️✨ EDGE CITY",
    year: 2025,
    dateRange: "May 24, 2025 → June 21, 2025",
    websiteUrl: "https://blog.edgeesmeralda.com/p/save-the-date-for-edge-esmeralda",
    twitterUrl: "https://x.com/JoinEdgeCity",
    description: "It will be a place for people who believe the future can be better & are actively working to make it happen.",
    oneLiner: "A community for those who believe in a brighter future and are actively creating it.",
    location: {
      city: "Healdsburg",
      country: "USA",
      latitude: 38.6103,
      longitude: -122.8692
    }
  },
  {
    name: "ARC Austin",
    status: "UPCOMING",
    brand: "🏙️✨ ARC",
    year: 2025,
    dateRange: "March 1, 2025",
    websiteUrl: "https://www.xn--2ca.city/",
    twitterUrl: null,
    description: "Ârc builds cities that allow great people to do great things.",
    oneLiner: "Ârc: Cities designed for greatness to thrive.",
    location: {
      city: "Austin",
      country: "USA",
      latitude: 30.2672,
      longitude: -97.7431
    }
  },
  // ... rest of your popup cities data
]

