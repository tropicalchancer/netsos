// src/components/FilterBar.tsx
import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import type { PopupCity, PopupCityStatus, FilterState } from '../types';

interface FilterBarProps {
  onFilterChange: (filters: FilterState) => void;
  cities: PopupCity[];
}

export function FilterBar({ onFilterChange, cities }: FilterBarProps) {
  const [filters, setFilters] = React.useState<FilterState>({
    search: '',
    status: '',
    country: '',
    year: '',
  });

  const uniqueCountries = Array.from(new Set(cities.map(city => city.location.country))).sort();
  const uniqueYears = Array.from(new Set(cities.map(city => city.year))).sort((a, b) => b - a);
  const statusOptions: PopupCityStatus[] = ['UPCOMING', 'ON NOW', 'FINISHED'];

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="space-y-4 mb-6 bg-zinc-800/50 p-4 rounded-lg">
      <div className="flex flex-wrap gap-4">
        <Input
          placeholder="Search cities..."
          value={filters.search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
          className="flex-1 min-w-[200px]"
        />

        <select
          value={filters.status}
          onChange={(e) => handleFilterChange('status', e.target.value)}
          className="h-10 px-3 rounded-md border bg-zinc-800 text-zinc-200 text-sm min-w-[120px]"
        >
          <option value="">Status</option>
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <select
          value={filters.country}
          onChange={(e) => handleFilterChange('country', e.target.value)}
          className="h-10 px-3 rounded-md border bg-zinc-800 text-zinc-200 text-sm min-w-[120px]"
        >
          <option value="">Country</option>
          {uniqueCountries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>

        <select
          value={filters.year}
          onChange={(e) => handleFilterChange('year', e.target.value ? Number(e.target.value) : '')}
          className="h-10 px-3 rounded-md border bg-zinc-800 text-zinc-200 text-sm min-w-[120px]"
        >
          <option value="">Year</option>
          {uniqueYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <Button
          onClick={() => {
            const clearedFilters: FilterState = {
              search: '',
              status: '',
              country: '',
              year: '',
            };
            setFilters(clearedFilters);
            onFilterChange(clearedFilters);
          }}
          className="text-zinc-400 hover:text-white bg-transparent hover:bg-zinc-800"
        >
          Clear filters
        </Button>
      </div>
    </div>
  );
}