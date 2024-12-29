export type CityStatus = "ON NOW" | "UPCOMING" | "FINISHED"

export interface PopupCity {
    name: string
    status: CityStatus // Changed this line to use the type
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