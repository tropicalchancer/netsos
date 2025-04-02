import { DateRange } from "./date-range"

export interface City {
  id: string
  name: string
  country: string
  description: string
  dateRange: DateRange
  imageUrl: string
  link?: string
} 