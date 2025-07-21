import { CitiesGridV2 } from '@/components/cities-grid-v2'
import { NavigationLayout } from '@/components/layout/navigation-layout'
import { CitiesService } from '@/services/cities'
import { ErrorMessage } from '@/components/ui/error-message'

export default async function Home() {
  try {
    const cities = await CitiesService.fetchCities()
    const citiesWithStatus = CitiesService.getCitiesWithStatus(cities)
    const activeCities = citiesWithStatus.filter(city => city.status === 'ON_NOW').length
    const upcomingCities = citiesWithStatus.filter(city => city.status === 'UPCOMING').length
    const totalCities = cities.length

    return (
      <NavigationLayout>
        <div className="text-center py-4 text-muted-foreground">
          {activeCities} cities active now · {upcomingCities} upcoming · {totalCities} items listed
        </div>
        <CitiesGridV2 cities={cities} />
      </NavigationLayout>
    )
  } catch (error) {
    console.error('Failed to load cities:', error)
    
    return (
      <NavigationLayout>
        <ErrorMessage 
          message={
            error instanceof Error 
              ? error.message 
              : "Failed to load popup cities. Please check your internet connection and try again."
          }
          onRetry={() => window.location.reload()}
        />
      </NavigationLayout>
    )
  }
}