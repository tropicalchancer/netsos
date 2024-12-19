'use client'

import { useState } from "react"
import { CityCard } from "@/components/city-card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { popupCities } from "@/data/popup-cities"

export function CitiesGrid() {
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")

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

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <Tabs value={filter} onValueChange={setFilter}>
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