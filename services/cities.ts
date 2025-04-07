// services/cities.ts
import { PopupCity } from '@/types/popup-city-v2'

type FilterType = 'ALL' | 'ACTIVE' | 'UPCOMING' | 'FINISHED'
type CityStatus = 'UPCOMING' | 'ON_NOW' | 'FINISHED'

export class CitiesService {
    static getStatus(startDate: string, endDate: string): CityStatus {
      if (!startDate || !endDate) return "UPCOMING";
      
      const start = new Date(startDate);
      const end = new Date(endDate);
      const now = new Date();
  
      if (now > end) return "FINISHED";
      if (now < start) return "UPCOMING";
      return "ON_NOW";
    }

    static getCityCounts(cities: PopupCity[]) {
      const counts = cities.reduce((acc, city) => {
        acc[city.status] = (acc[city.status] || 0) + 1;
        return acc;
      }, {} as Record<CityStatus, number>);

      return {
        active: counts["ON_NOW"] || 0,
        upcoming: counts["UPCOMING"] || 0,
        total: cities.length
      };
    }

    static filterCities(cities: PopupCity[], filter: FilterType, search: string) {
      return cities.filter(city => {
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