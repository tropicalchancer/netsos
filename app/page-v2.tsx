import { CitiesGridV2 } from "@/components/cities-grid-v2"
import { NavigationLayout } from "@/components/layout/navigation-layout"
import { CitiesService } from '@/services/cities'

export default async function HomeV2() {
  const cities = await CitiesService.fetchCities()
  const citiesWithStatus = CitiesService.getCitiesWithStatus(cities)
  const active = citiesWithStatus.filter(city => city.status === 'ON_NOW').length
  const upcoming = citiesWithStatus.filter(city => city.status === 'UPCOMING').length
  const total = cities.length

  return (
    <NavigationLayout>
      <div className="container">
        <div className="text-center py-4 text-muted-foreground">
          {active} cities active now · {upcoming} upcoming · {total} items listed
        </div>
        <CitiesGridV2 cities={cities} />
      </div>
    </NavigationLayout>
  )
} 