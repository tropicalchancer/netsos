import { CitiesGridV2 } from '@/components/cities-grid-v2'
import { popupCities } from '@/data/popup-cities-v2'
import { NavigationLayout } from '@/components/layout/navigation-layout'
import { CitiesService } from '@/services/cities'

export default function Home() {
  const citiesWithStatus = CitiesService.getCitiesWithStatus(popupCities);
  const activeCities = citiesWithStatus.filter(city => city.status === 'ON_NOW').length;
  const upcomingCities = citiesWithStatus.filter(city => city.status === 'UPCOMING').length;
  const totalCities = popupCities.length;

  return (
    <NavigationLayout>
      <div className="text-center py-4 text-muted-foreground">
        {activeCities} cities active now · {upcomingCities} upcoming · {totalCities} items listed
      </div>
      <CitiesGridV2 cities={popupCities} />
    </NavigationLayout>
  )
}