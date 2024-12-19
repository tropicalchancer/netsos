export interface PopupCity {
    name: string
    status: "ON NOW" | "UPCOMING" | "FINISHED"
    brand: string
    year: number
    dateRange: string
    websiteUrl: string | null
    twitterUrl: string | null
    description: string
    oneLiner: string
    location: {
      city: string
      country: string
      latitude: number
      longitude: number
    }
  }