'use client'

import { useState, useEffect } from "react"
import { CityCard } from "@/components/city-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FilterIcon } from "lucide-react"
import { popupCities } from "@/data/popup-cities"
import { CitiesService } from "@/services/cities"
import { FilterSidebar } from "@/components/filter-sidebar"

type FilterType = 'ALL' | 'ACTIVE' | 'UPCOMING' | 'FINISHED'

export function CitiesGrid() {
  const [mounted, setMounted] = useState(false)
  const [filter, setFilter] = useState<FilterType>('ALL')
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [visibleCount, setVisibleCount] = useState(12)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Handle scroll events
  useEffect(() => {
    function handleScroll() {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1000) {
        setVisibleCount(prev => prev + 12)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setVisibleCount(12)
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [filter, search])

  // Sort cities by status priority: upcoming -> active -> finished
  const sortedAndFilteredCities = CitiesService.filterCities(popupCities, filter, search)
    .sort((a, b) => {
      const statusOrder = {
        "UPCOMING": 0,
        "ON NOW": 1,
        "FINISHED": 2
      }
      const aStatus = CitiesService.getStatus(a.dateRange)
      const bStatus = CitiesService.getStatus(b.dateRange)
      return statusOrder[aStatus] - statusOrder[bStatus]
    })

  const hasMore = visibleCount < sortedAndFilteredCities.length

  if (!mounted) {
    return <LoadingState />
  }

  return (
    <div className="container space-y-8">
      <div className="flex items-center justify-between gap-4">
        <Input 
          placeholder="Search cities..." 
          className="w-full max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FilterIcon className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          Array(12).fill(0).map((_, i) => (
            <CityCardSkeleton key={i} />
          ))
        ) : (
          <>
            {sortedAndFilteredCities.slice(0, visibleCount).map((city) => (
              <CityCard key={`${city.name}-${city.location.city}-${city.location.country}`} city={city} />
            ))}
          </>
        )}
      </div>
      
      {hasMore && !isLoading && (
        <div className="flex justify-center py-4">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <FilterSidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeFilter={filter}
        onFilterChange={setFilter}
        cities={popupCities}
      />
    </div>
  )
}

function CityCardSkeleton() {
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-muted">
      <div className="absolute inset-0 animate-pulse bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
      
      <div className="relative h-full p-6 flex flex-col">
        <div className="mb-auto space-y-4">
          <div className="w-24 h-6 bg-white/20 rounded-full animate-pulse" />
          
          <div className="flex items-center gap-2">
            <div className="w-32 h-6 bg-white/20 rounded animate-pulse" />
          </div>
          
          <div className="space-y-2">
            <div className="w-48 h-8 bg-white/20 rounded animate-pulse" />
            <div className="w-full h-4 bg-white/20 rounded animate-pulse" />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-36 h-4 bg-white/20 rounded animate-pulse" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-32 h-4 bg-white/20 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}

function LoadingState() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-4">
        <div className="h-9 bg-muted rounded-md animate-pulse w-[300px]" />
        <div className="h-9 bg-muted rounded-md animate-pulse w-[100px]" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array(12).fill(0).map((_, i) => (
          <CityCardSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}