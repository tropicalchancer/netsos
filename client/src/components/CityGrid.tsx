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

    // Group cities by year and status
    const groupedByYear = citiesWithCurrentStatus.reduce((acc, city) => {
      const year = city.year;
      const status = city.currentStatus;
      
      if (!acc[year]) {
        acc[year] = {
          'ON NOW': [],
          'UPCOMING': [],
          'FINISHED': []
        };
      }
      
      acc[year][status].push(city);
      return acc;
    }, {} as Record<number, Record<PopupCityStatus, PopupCity[]>>);

    // Sort within each year and status group
    Object.keys(groupedByYear).forEach(year => {
      Object.keys(groupedByYear[Number(year)]).forEach(status => {
        groupedByYear[Number(year)][status as PopupCityStatus].sort((a, b) => {
          const dateA = getStartDate(a.dateRange);
          const dateB = getStartDate(b.dateRange);
          return status === 'FINISHED' 
            ? dateB.getTime() - dateA.getTime()
            : dateA.getTime() - dateB.getTime();
        });
      });
    });

    // Flatten the grouped cities while maintaining year and status order
    const sortedCities: PopupCity[] = [];
    Object.keys(groupedByYear)
      .sort((a, b) => Number(b) - Number(a))
      .forEach(year => {
        sortedCities.push(
          ...groupedByYear[Number(year)]['ON NOW'],
          ...groupedByYear[Number(year)]['UPCOMING'],
          ...groupedByYear[Number(year)]['FINISHED']
        );
      });

    return sortedCities;
  };

  const [filteredCities, setFilteredCities] = React.useState<PopupCity[]>(
    sortCities(cities)
  );

  useEffect(() => {
    const resortInterval = setInterval(() => {
      setFilteredCities(currentCities => sortCities(currentCities));
    }, 60000);

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

  // Group cities by year for display
  const citiesByYear = React.useMemo(() => {
    const grouped: Record<number, PopupCity[]> = {};
    filteredCities.forEach(city => {
      if (!grouped[city.year]) {
        grouped[city.year] = [];
      }
      grouped[city.year].push(city);
    });
    return Object.entries(grouped).sort(([yearA], [yearB]) => Number(yearB) - Number(yearA));
  }, [filteredCities]);

  return (
    <div className="min-h-screen bg-zinc-900 p-6">
      <div className="container mx-auto">
        <FilterBar onFilterChange={handleFilterChange} cities={cities} />
        <div className="space-y-12">
          {citiesByYear.map(([year, yearCities]) => (
            <div key={year}>
              <h2 className="text-3xl font-light text-white/80 mb-6 border-b border-zinc-700 pb-2">
                {year}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {yearCities.map(city => (
                  <CityCard 
                    key={`${city.name}-${city.location.city}`} 
                    city={{
                      ...city,
                      status: calculateStatus(city.dateRange)
                    }} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}