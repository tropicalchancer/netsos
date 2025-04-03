'use client'

import { useState, useEffect } from 'react'
import { CityCard } from './city-card'
import { FilterSidebar } from './filter-sidebar'
import { CitiesService } from '@/services/cities'
import { PopupCity } from '@/types/popup-city'
import { Button } from './ui/button'
import { SlidersHorizontal } from 'lucide-react'

type FilterType = 'ALL' | 'ACTIVE' | 'UPCOMING' | 'FINISHED'

interface CitiesGridProps {
  cities: PopupCity[]
}

export function CitiesGrid({ cities }: CitiesGridProps) {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('ALL')
  const [filteredCities, setFilteredCities] = useState<PopupCity[]>(cities)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    let filtered = [...cities]
    
    if (selectedFilter !== 'ALL') {
      filtered = cities.filter(city => {
        const status = CitiesService.getStatus(city.dateRange)
        switch (selectedFilter) {
          case 'ACTIVE':
            return status === 'ON NOW'
          case 'UPCOMING':
            return status === 'UPCOMING'
          case 'FINISHED':
            return status === 'FINISHED'
          default:
            return true
        }
      })
    }
    
    // Sort cities by date
    filtered = CitiesService.sortCitiesByDate(filtered)
    setFilteredCities(filtered)
  }, [cities, selectedFilter])

  return (
    <div className="space-y-8">
      {/* Filter Button */}
      <div className="flex justify-end">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCities.map((city) => (
          <CityCard 
            key={`${city.name}-${city.location.city}-${city.location.country}`} 
            city={city} 
          />
        ))}
      </div>

      {/* Slide-out Filter Panel */}
      <FilterSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        cities={cities}
      />
    </div>
  )
} 