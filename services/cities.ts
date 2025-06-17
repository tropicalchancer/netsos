// services/cities.ts
import { PopupCity } from '@/types/popup-city-v2'
import { zonedTimeToUtc, utcToZonedTime } from 'date-fns-tz'

type FilterType = 'ALL' | 'ACTIVE' | 'UPCOMING' | 'FINISHED'
type CityStatus = 'UPCOMING' | 'ON_NOW' | 'FINISHED'

export class CitiesService {
    static getStatus(startDate: string, endDate: string, timezone: string): CityStatus {
      if (!startDate || !endDate) return "UPCOMING";
      
      const now = new Date();
      const start = zonedTimeToUtc(new Date(startDate), timezone);
      const end = zonedTimeToUtc(new Date(endDate), timezone);
      const nowInTimezone = utcToZonedTime(now, timezone);
  
      if (nowInTimezone > end) return "FINISHED";
      if (nowInTimezone < start) return "UPCOMING";
      return "ON_NOW";
    }

    static calculateStatus(city: PopupCity): CityStatus {
      return this.getStatus(city.startDate, city.endDate, city.timezone);
    }

    static getCitiesWithStatus(cities: PopupCity[]): PopupCity[] {
      return cities.map(city => ({
        ...city,
        status: this.calculateStatus(city)
      }));
    }

    static getCityCounts(cities: PopupCity[]) {
      const citiesWithStatus = this.getCitiesWithStatus(cities);
      const counts = citiesWithStatus.reduce((acc, city) => {
        acc[city.status!] = (acc[city.status!] || 0) + 1;
        return acc;
      }, {} as Record<CityStatus, number>);

      return {
        active: counts["ON_NOW"] || 0,
        upcoming: counts["UPCOMING"] || 0,
        total: cities.length
      };
    }

    static filterCities(cities: PopupCity[], filter: FilterType, search: string) {
      const citiesWithStatus = this.getCitiesWithStatus(cities);
      return citiesWithStatus.filter(city => {
        const matchesFilter = filter === 'ALL' || 
                            (filter === 'ACTIVE' && city.status === 'ON_NOW') ||
                            (filter === 'UPCOMING' && city.status === 'UPCOMING') ||
                            (filter === 'FINISHED' && city.status === 'FINISHED');
        
        const matchesSearch = !search || 
                            city.name.toLowerCase().includes(search.toLowerCase()) ||
                            city.location.city.toLowerCase().includes(search.toLowerCase()) ||
                            city.location.country.toLowerCase().includes(search.toLowerCase());
        
        return matchesFilter && matchesSearch;
      });
    }

    static sortCitiesByDate(cities: PopupCity[]): PopupCity[] {
      return [...cities].sort((a, b) => {
        const aDate = new Date(a.startDate);
        const bDate = new Date(b.startDate);
        return bDate.getTime() - aDate.getTime();
      });
    }
}