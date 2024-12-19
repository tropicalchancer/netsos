'use client'

import { useState, useEffect } from "react"
import { CityCard } from "@/components/city-card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { popupCities } from "@/data/popup-cities"

export function CitiesGrid() {
  const [mounted, setMounted] = useState(false)
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")

  // Add mounting check
  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredCities = popupCities.filter(city => {
    const matchesFilter = 
      filter === "all" || 
      (filter === "active" && city.status === "ON NOW") ||
      (filter === "upcoming" && city.status === "UPCOMING") ||
      (filter === "finished" && city.status === "FINISHED")

    const matchesSearch = 
      city.name.toLowerCase().includes(search.toLowerCase()) ||
      city.location.city.toLowerCase().includes(search.toLowerCase()) ||
      city.location.country.toLowerCase().includes(search.toLowerCase())

    return matchesFilter && matchesSearch
  })

  // Return null or loading state until mounted
  if (!mounted) {
    return <div className="space-y-8">
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
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <Tabs defaultValue="all" value={filter} onValueChange={setFilter}>
          <TabsList>
            <TabsTrigger value="all">All Cities</TabsTrigger>
            <TabsTrigger value="active">Active Now</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="finished">Finished</TabsTrigger>
          </TabsList>
        </Tabs>
        <Input 
          placeholder="Search cities..." 
          className="max-w-xs"
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