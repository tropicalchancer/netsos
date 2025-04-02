'use client'

import { useState, useEffect } from "react"
import { CityCard } from "@/components/city-card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { popupCities } from "@/data/popup-cities"
import { CitiesService } from "@/services/cities"
import { Building2, Calendar, MapPin } from "lucide-react"

export function CitiesGrid() {
  const [mounted, setMounted] = useState(false)
  const [filter, setFilter] = useState("all")
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

  const filteredCities = CitiesService.filterCities(popupCities, filter, search)
  const hasMore = visibleCount < filteredCities.length

  if (!mounted) {
    return <LoadingState />
  }

  return (
    <div className="container space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="w-full max-w-2xl">
          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList>
              <TabsTrigger value="all">All Cities</TabsTrigger>
              <TabsTrigger value="on_now">Active Now</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="finished">Finished</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <Input 
          placeholder="Search cities..." 
          className="w-full sm:w-[240px]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          Array(12).fill(0).map((_, i) => (
            <CityCardSkeleton key={i} />
          ))
        ) : (
          <>
            {filteredCities.slice(0, visibleCount).map((city) => (
              <CityCard key={`${city.name}-${city.year}`} city={city} />
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
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-muted">
      <div className="absolute inset-0 animate-pulse bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
      
      <div className="relative h-full p-6 flex flex-col">
        <div className="mb-auto space-y-4">
          <div className="w-24 h-6 bg-white/20 rounded-full animate-pulse" />
          
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-white/50" />
            <div className="w-32 h-6 bg-white/20 rounded animate-pulse" />
          </div>
          
          <div className="space-y-2">
            <div className="w-48 h-8 bg-white/20 rounded animate-pulse" />
            <div className="w-full h-4 bg-white/20 rounded animate-pulse" />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-white/50" />
            <div className="w-36 h-4 bg-white/20 rounded animate-pulse" />
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-white/50" />
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
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="h-10 bg-muted rounded-md animate-pulse w-[300px]" />
        <div className="h-9 bg-muted rounded-md animate-pulse w-[200px]" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array(12).fill(0).map((_, i) => (
          <CityCardSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}