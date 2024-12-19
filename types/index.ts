export interface Location {
    city: string
    country: string
    latitude: number
    longitude: number
  }
  
  export interface PopupCity {
    name: string
    status: "UPCOMING" | "ON NOW" | "FINISHED"
    brand: string
    year: number
    dateRange: string
    websiteUrl: string
    twitterUrl: string | null
    description: string
    oneLiner: string
    location: Location
  }
  
  export interface Experiment {
    id: string
    name: string
    description: string
    status: "ACTIVE" | "COMPLETED" | "PLANNED"
    startDate: string
    endDate?: string
    outcomes?: string[]
  }
  
  export interface Benefit {
    id: string
    name: string
    description: string
    category: "HOUSING" | "WORKSPACE" | "COMMUNITY" | "OTHER"
    availability: "ALL_CITIES" | "SELECTED_CITIES"
    cities?: string[]
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
  
  