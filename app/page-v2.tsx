import { CitiesGridV2 } from "@/components/cities-grid-v2"
import { NavigationLayout } from "@/components/layout/navigation-layout"
import { CitiesService } from '@/services/cities'
import { ErrorMessage } from '@/components/ui/error-message'

export default async function HomeV2() {
  try {
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
  } catch (error) {
    console.error('Failed to load cities:', error)
    
    return (
      <NavigationLayout>
        <div className="container">
          <ErrorMessage 
            message={
              error instanceof Error 
                ? error.message 
                : "Failed to load popup cities. Please check your internet connection and try again."
            }
            onRetry={() => window.location.reload()}
          />
        </div>
      </NavigationLayout>
    )
  }
} 