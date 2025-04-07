export interface Location {
    city: string
    country: string
    latitude: number
    longitude: number
  }
  
  export interface Experiment {
    id: string
    name: string
    tldr: string
    description: string
    location: string
    rates?: {
      name: string
      value: string
    }[]
    retroArticle?: {
      title: string
      url: string
    }
    status: "ACTIVE" | "COMPLETED" | "PLANNED"
    tags: string[]
    startDate: string
    outcomes?: string[]
  }
  
  export interface Benefit {
    id: string
    name: string
    shortDescription: string
    longDescription: string
    category: string
    icon?: string
    partnerLogo?: string
    partnerName: string
    actionUrl?: string
    redemptionDetails: string
  }
  
  export interface Venue {
    id: string
    name: string
    type: "HOTEL" | "RESORT" | "COWORKING" | "OTHER"
    location: Location
    capacity: number
    amenities: string[]
    previousEvents?: string[]
  }
  
  