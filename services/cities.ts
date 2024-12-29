import { PopupCity, CityStatus } from '@/types/popup-city'

export class CitiesService {
  static getStatus(dateRange: string): CityStatus {
    const [start, end] = dateRange.split("→").map(d => new Date(d.trim()))
    const now = new Date()
    
    if (now < start) return "UPCOMING"
    if (now > end) return "FINISHED"
    return "ON NOW"
  }

  static filterCities(cities: PopupCity[], filter: string, search: string) {
    return cities.filter(city => {
      const status = this.getStatus(city.dateRange)
      const matchesFilter = filter === "all" || status === filter.toUpperCase()
      const matchesSearch = city.name.toLowerCase().includes(search.toLowerCase()) ||
                          city.location.city.toLowerCase().includes(search.toLowerCase()) ||
                          city.location.country.toLowerCase().includes(search.toLowerCase())
      
      return matchesFilter && matchesSearch
    })
  }
}