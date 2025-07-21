// services/cities.ts
import { PopupCity } from '@/types/popup-city-v2'
// @ts-expect-error - date-fns-tz has typing issues
import { zonedTimeToUtc, utcToZonedTime } from 'date-fns-tz'
import { GOOGLE_APPS_SCRIPT_URL } from '@/lib/constants'

type FilterType = 'ALL' | 'ACTIVE' | 'UPCOMING' | 'FINISHED'
type CityStatus = 'UPCOMING' | 'ON_NOW' | 'FINISHED'

// Cache for fetched cities data
let citiesCache: PopupCity[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 60 * 1000; // 60 seconds

export class CitiesService {
    // Method to fetch cities from Google Apps Script API
    static async fetchCities(): Promise<PopupCity[]> {
        // Check if we have valid cached data
        const now = Date.now();
        if (citiesCache && (now - cacheTimestamp) < CACHE_DURATION) {
            return citiesCache;
        }

        // If API URL is not configured, throw an error
        if (GOOGLE_APPS_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
            throw new Error('Google Apps Script URL not configured. Please set NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL in your environment variables.');
        }

        try {
            // Use a cache-busting query parameter instead of no-store
            const cacheBuster = process.env.NODE_ENV === 'development' ? `?_cb=${Date.now()}` : '';
            const response = await fetch(`${GOOGLE_APPS_SCRIPT_URL}${cacheBuster}`);
            
            if (!response.ok) {
                throw new Error(`Failed to fetch cities: ${response.status} ${response.statusText}`);
            }

            const cities = await response.json();
            
            // Validate that the response is an array
            if (!Array.isArray(cities)) {
                throw new Error('Invalid response format: expected array of cities');
            }

            // Update cache
            citiesCache = cities;
            cacheTimestamp = now;

            return cities;
        } catch (error) {
            console.error('Error fetching cities:', error);
            
            // Return cached data if available, even if expired
            if (citiesCache) {
                console.warn('Using expired cache due to fetch error');
                return citiesCache;
            }
            
            // Re-throw the error if no cache available
            throw new Error(`Failed to fetch cities data: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }

    // Method to clear cache (useful for testing or manual refresh)
    static clearCache(): void {
        citiesCache = null;
        cacheTimestamp = 0;
    }

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