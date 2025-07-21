'use client'

import { useState, useEffect } from 'react'
import { PopupCity } from '@/types/popup-city-v2'
import { CitiesService } from '@/services/cities'
import { CityCardV2 } from './city-card-v2'
import { CityModal } from './city-modal'
import { FilterSidebarV2 } from './filter-sidebar-v2'
import { ErrorBoundary } from './ui/error-boundary'
import { Button } from './ui/button'
import { SlidersHorizontal } from 'lucide-react'

type FilterType = 'ALL' | 'ACTIVE' | 'UPCOMING' | 'FINISHED'

interface CitiesGridProps {
  cities: PopupCity[]
}

function CitiesGridContent({ cities: initialCities }: CitiesGridProps) {
  const [cities, setCities] = useState<PopupCity[]>(initialCities)
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('ALL')
  const [filteredCities, setFilteredCities] = useState<PopupCity[]>([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState<PopupCity | null>(null)

  // Update cities when prop changes (server-side data)
  useEffect(() => {
    setCities(initialCities)
  }, [initialCities])

  useEffect(() => {
    // Use the service to get cities with current status
    const citiesWithStatus = CitiesService.getCitiesWithStatus(cities);
    let filtered = CitiesService.filterCities(citiesWithStatus, selectedFilter, '');
    filtered = CitiesService.sortCitiesByDate(filtered);
    setFilteredCities(filtered);
  }, [cities, selectedFilter]);

  const handleCityClick = (city: PopupCity) => {
    setSelectedCity(city)
  }

  return (
    <div className="space-y-8">
      {/* Filter Controls */}
      <div className="flex justify-end items-center">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsSidebarOpen(true)}
          className="flex items-center gap-2"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </Button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredCities.map((city) => (
          <CityCardV2 
            key={city.id}
            city={city}
            onClick={handleCityClick}
          />
        ))}
      </div>

      {/* Modal */}
      <CityModal
        city={selectedCity}
        isOpen={!!selectedCity}
        onClose={() => setSelectedCity(null)}
      />

      {/* Slide-out Filter Panel */}
      <FilterSidebarV2
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        cities={cities}
      />
    </div>
  )
}

export function CitiesGridV2(props: CitiesGridProps) {
  return (
    <ErrorBoundary>
      <CitiesGridContent {...props} />
    </ErrorBoundary>
  )
} 