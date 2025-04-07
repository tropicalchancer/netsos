'use client'

import { useState, useEffect } from "react"
import { CityCardV2 } from "@/components/city-card-v2"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FilterIcon } from "lucide-react"
import { popupCities } from "@/data/popup-cities-v2"
import { CitiesService } from "@/services/cities"
import { Skeleton } from "@/components/ui/skeleton"

type FilterType = 'ALL' | 'ACTIVE' | 'UPCOMING' | 'FINISHED'

export function CitiesGrid() {
  const [mounted, setMounted] = useState(false)
  const [filter, setFilter] = useState<FilterType>('ALL')
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [visibleCount, setVisibleCount] = useState(12)

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
      const getStatusPriority = (status: ReturnType<typeof CitiesService.getStatus>) => {
        switch (status) {
          case 'UPCOMING': return 0;
          case 'ON_NOW': return 1;
          case 'FINISHED': return 2;
          default: return 3;
        }
      };
      
      return getStatusPriority(CitiesService.getStatus(a.dateRange)) - 
             getStatusPriority(CitiesService.getStatus(b.dateRange));
    });

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
          onClick={() => setFilter(filter === 'ALL' ? 'ACTIVE' : 'ALL')}
        >
          <FilterIcon className="h-4 w-4" />
          {filter === 'ALL' ? 'Show Active' : 'Show All'}
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
              <CityCardV2 
                key={`${city.name}-${city.location.city}-${city.location.country}`} 
                city={city}
                onClick={() => {}} // Add proper click handler if needed
              />
            ))}
          </>
        )}
      </div>
      
      {hasMore && !isLoading && (
        <div className="flex justify-center py-4">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}

function CityCardSkeleton() {
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      <Skeleton className="absolute inset-0" />
      <div className="relative h-full p-6 flex flex-col">
        <div className="mb-auto space-y-4">
          <Skeleton className="w-24 h-6 rounded-full" />
          <div className="flex items-center gap-2">
            <Skeleton className="w-32 h-6 rounded" />
          </div>
          <div className="space-y-2">
            <Skeleton className="w-48 h-8 rounded" />
            <Skeleton className="w-full h-4 rounded" />
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Skeleton className="w-36 h-4 rounded" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="w-32 h-4 rounded" />
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
        <Skeleton className="h-9 rounded-md w-[300px]" />
        <Skeleton className="h-9 rounded-md w-[100px]" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array(12).fill(0).map((_, i) => (
          <CityCardSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}