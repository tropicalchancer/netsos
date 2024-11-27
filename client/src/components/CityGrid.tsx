// src/components/CityGrid.tsx
import React from 'react';
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

  const sortCities = (cityArray: PopupCity[]) => {
    // First, group cities by status
    const grouped = cityArray.reduce((acc, city) => {
      if (!acc[city.status]) {
        acc[city.status] = [];
      }
      acc[city.status].push(city);
      return acc;
    }, {} as Record<PopupCityStatus, PopupCity[]>);

    // Sort each group by date
    Object.keys(grouped).forEach(status => {
      grouped[status as PopupCityStatus].sort((a, b) => {
        const dateA = getStartDate(a.dateRange);
        const dateB = getStartDate(b.dateRange);
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

  const handleFilterChange = (filters: FilterState) => {
    const filtered = cities.filter(city => {
      const searchMatch = !filters.search || 
        city.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        city.location.city.toLowerCase().includes(filters.search.toLowerCase()) ||
        city.description.toLowerCase().includes(filters.search.toLowerCase());
      
      const statusMatch = !filters.status || city.status === filters.status;
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
            <CityCard key={`${city.name}-${city.location.city}`} city={city} />
          ))}
        </div>
      </div>
    </div>
  );
}