import React, { useEffect } from 'react';
import type { PopupCity, PopupCityStatus, FilterState } from '../types';
import { CityCard } from './CityCard';
import { FilterBar } from './FilterBar';

const monthMap: Record<string, number> = {
  'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
  'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
};

export function CityGrid({ cities }: { cities: PopupCity[] }) {
  const getStartDate = (dateStr: string) => {
    const currentYear = new Date().getFullYear();
    const yearMatch = dateStr.match(/\d{4}/);
    const year = yearMatch ? parseInt(yearMatch[0]) : currentYear;

    const dateparts = dateStr.split('-')[0].trim();
    const monthMatch = dateparts.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/);
    const dayMatch = dateparts.match(/\d+/);

    if (!monthMatch) return new Date(year, 0);

    const month = monthMap[monthMatch[0]];
    const day = dayMatch ? parseInt(dayMatch[0]) : 1;

    return new Date(year, month, day);
  };

  const getEndDate = (dateStr: string) => {
    const currentYear = new Date().getFullYear();
    const yearMatch = dateStr.match(/\d{4}/);
    const year = yearMatch ? parseInt(yearMatch[0]) : currentYear;

    const parts = dateStr.split('→');
    if (parts.length < 2) return getStartDate(dateStr);

    const dateparts = parts[1].trim();
    const monthMatch = dateparts.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/);
    const dayMatch = dateparts.match(/\d+/);

    if (!monthMatch) return new Date(year, 11, 31);

    const month = monthMap[monthMatch[0]];
    const day = dayMatch ? parseInt(dayMatch[0]) : 1;

    return new Date(year, month, day);
  };

  const calculateStatus = (dateRange: string): PopupCityStatus => {
    const now = new Date();
    const startDate = getStartDate(dateRange);
    const endDate = getEndDate(dateRange);
    
    if (now < startDate) return 'UPCOMING';
    if (now > endDate) return 'FINISHED';
    return 'ON NOW';
  };

  const sortCities = (cityArray: PopupCity[]) => {
    // First, calculate current status for each city
    const citiesWithCurrentStatus = cityArray.map(city => ({
      ...city,
      currentStatus: calculateStatus(city.dateRange)
    }));

    // Group cities by their current status
    const grouped = citiesWithCurrentStatus.reduce((acc, city) => {
      const status = city.currentStatus;
      if (!acc[status]) {
        acc[status] = [];
      }
      acc[status].push(city);
      return acc;
    }, {} as Record<PopupCityStatus, PopupCity[]>);

    // Sort each group by date
// Sort each group by date
Object.keys(grouped).forEach(status => {
  grouped[status as PopupCityStatus].sort((a, b) => {
    const dateA = getStartDate(a.dateRange);
    const dateB = getStartDate(b.dateRange);
    // Reverse sort for FINISHED cities (newest first)
    if (status === 'FINISHED') {
      return dateB.getTime() - dateA.getTime();
    }
    // Normal sort for other statuses (oldest first)
    return dateA.getTime() - dateB.getTime();
  });
});

    // Combine groups in priority order
    const sorted = [
      ...(grouped['ON NOW'] || []),
      ...(grouped['UPCOMING'] || []),
      ...(grouped['FINISHED'] || [])
    ];

    return sorted;
  };

  const [filteredCities, setFilteredCities] = React.useState<PopupCity[]>(
    sortCities(cities)
  );

  // Periodically resort cities to update statuses
  useEffect(() => {
    const resortInterval = setInterval(() => {
      setFilteredCities(currentCities => sortCities(currentCities));
    }, 60000); // Check every minute

    return () => clearInterval(resortInterval);
  }, []);

  const handleFilterChange = (filters: FilterState) => {
    const filtered = cities.filter(city => {
      const searchMatch = !filters.search || 
        city.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        city.location.city.toLowerCase().includes(filters.search.toLowerCase()) ||
        city.description.toLowerCase().includes(filters.search.toLowerCase());
      
      const statusMatch = !filters.status || calculateStatus(city.dateRange) === filters.status;
      const countryMatch = !filters.country || city.location.country === filters.country;
      const yearMatch = !filters.year || city.year === filters.year;

      return searchMatch && statusMatch && countryMatch && yearMatch;
    });

    setFilteredCities(sortCities(filtered));
  };

  return (
    <div className="min-h-screen bg-zinc-900 p-6">
      <div className="container mx-auto">
        <FilterBar onFilterChange={handleFilterChange} cities={cities} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCities.map(city => (
            <CityCard 
              key={`${city.name}-${city.location.city}`} 
              city={{
                ...city,
                status: calculateStatus(city.dateRange) // Ensure status is current
              }} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}