'use client'

import { useState, useEffect } from "react"
import { CityCard } from "@/components/city-card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { popupCities } from "@/data/popup-cities"
import { CitiesService } from "@/services/cities"

export function CitiesGrid() {
  const [mounted, setMounted] = useState(false)
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredCities = CitiesService.filterCities(popupCities, filter, search)

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
        {filteredCities.map((city) => (
          <CityCard key={`${city.name}-${city.year}`} city={city} />
        ))}
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
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-[200px] bg-muted rounded-lg animate-pulse" />
        ))}
      </div>
    </div>
  )
}