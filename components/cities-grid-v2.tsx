'use client'

import { useState, useEffect } from 'react'
import { CityCardV2 } from './city-card-v2'
import { CityModal } from './city-modal'
import { FilterSidebarV2 } from './filter-sidebar-v2'
import { PopupCity, PopupCityCard } from '@/types/popup-city-v2'
import { Button } from './ui/button'
import { SlidersHorizontal } from 'lucide-react'
import { CitiesService } from '@/services/cities'

type FilterType = 'ALL' | 'ACTIVE' | 'UPCOMING' | 'FINISHED'

interface CitiesGridProps {
  cities: PopupCity[]
}

export function CitiesGridV2({ cities }: CitiesGridProps) {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('ALL')
  const [filteredCities, setFilteredCities] = useState<PopupCity[]>(cities)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState<PopupCity | null>(null)

  useEffect(() => {
    let filtered = [...cities]
    
    if (selectedFilter !== 'ALL') {
      filtered = cities.filter(city => {
        switch (selectedFilter) {
          case 'ACTIVE':
            return city.status === 'ON_NOW'
          case 'UPCOMING':
            return city.status === 'UPCOMING'
          case 'FINISHED':
            return city.status === 'FINISHED'
          default:
            return true
        }
      })
    }
    
    // Use CitiesService for sorting
    filtered = CitiesService.sortCitiesByDate(filtered)
    setFilteredCities(filtered)
  }, [cities, selectedFilter])

  const handleCityClick = (city: PopupCityCard) => {
    const fullCityData = cities.find(c => c.id === city.id)
    if (fullCityData) {
      setSelectedCity(fullCityData)
    }
  }

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