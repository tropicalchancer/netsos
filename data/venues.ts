import type { Venue } from "@/types"


export const venues: Venue[] = [
  {
    id: "ven-1",
    name: "Mountain View Resort",
    type: "RESORT",
    location: {
      city: "Interlaken",
      country: "SWITZERLAND",
      latitude: 46.6863,
      longitude: 7.8632
    },
    capacity: 300,
    amenities: ["Coworking Space", "Conference Rooms", "Pool", "Gym"]
  }
  // Add more venues as needed
]

