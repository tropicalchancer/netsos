// services/cities.ts
import { PopupCity, CityStatus } from '@/types/popup-city'

type FilterType = 'ALL' | 'ACTIVE' | 'UPCOMING' | 'FINISHED'

export class CitiesService {
    static getStatus(dateRange: string): CityStatus {
      if (!dateRange) return "UPCOMING";
      
      const [startStr, endStr] = dateRange.split("→").map(d => d.trim());
      
      // Remove ordinal indicators (st, nd, rd, th) before parsing
      const cleanStartStr = startStr.replace(/(st|nd|rd|th),?/, '');
      const cleanEndStr = endStr?.replace(/(st|nd|rd|th),?/, '');
      
      const start = new Date(cleanStartStr + (cleanStartStr.includes("202") ? "" : ", 2025"));
      const end = cleanEndStr 
        ? new Date(cleanEndStr + (cleanEndStr.includes("202") ? "" : ", 2025"))
        : new Date(start.getTime());
  
      // Set times to beginning/end of day
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);
      
      const now = new Date();
      now.setHours(0, 0, 0, 0);
  
      if (now > end) return "FINISHED";
      if (now < start) return "UPCOMING";
      return "ON NOW";
    }


  static getCityCounts(cities: PopupCity[]) {
    const counts = cities.reduce((acc, city) => {
      const status = this.getStatus(city.dateRange);
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {} as Record<CityStatus, number>);

    return {
      active: counts["ON NOW"] || 0,
      upcoming: counts["UPCOMING"] || 0,
      total: cities.length
    };
  }

  static filterCities(cities: PopupCity[], filter: FilterType, search: string) {
    return cities.filter(city => {
      const status = this.getStatus(city.dateRange);
      const matchesFilter = filter === 'ALL' || 
                          (filter === 'ACTIVE' && status === 'ON NOW') ||
                          (filter === 'UPCOMING' && status === 'UPCOMING') ||
                          (filter === 'FINISHED' && status === 'FINISHED');
      
      const matchesSearch = !search || 
                          city.name.toLowerCase().includes(search.toLowerCase()) ||
                          city.location?.city?.toLowerCase().includes(search.toLowerCase()) ||
                          city.location?.country?.toLowerCase().includes(search.toLowerCase());
      
      return matchesFilter && matchesSearch;
    });
  }

  static sortCitiesByDate(cities: PopupCity[]): PopupCity[] {
    return [...cities].sort((a, b) => {
      const [aStartStr] = a.dateRange.split('→').map(d => d.trim());
      const [bStartStr] = b.dateRange.split('→').map(d => d.trim());
      
      // Remove ordinal indicators and handle year
      const cleanAStartStr = aStartStr.replace(/(st|nd|rd|th),?/, '') + (aStartStr.includes("202") ? "" : ", 2025");
      const cleanBStartStr = bStartStr.replace(/(st|nd|rd|th),?/, '') + (bStartStr.includes("202") ? "" : ", 2025");
      
      const aDate = new Date(cleanAStartStr);
      const bDate = new Date(cleanBStartStr);
      
      return bDate.getTime() - aDate.getTime();
    });
  }
}