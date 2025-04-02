import { CitiesGridV2 } from '@/components/cities-grid-v2'
import { popupCities } from '@/data/popup-cities-v2'
import { NavigationLayout } from '@/components/layout/navigation-layout'

export default function Home() {
  const activeCities = popupCities.filter(city => city.status === 'ON_NOW').length
  const upcomingCities = popupCities.filter(city => city.status === 'UPCOMING').length
  const totalCities = popupCities.length

  return (
    <NavigationLayout>
      <div className="text-center py-4 text-muted-foreground">
        {activeCities} cities active now · {upcomingCities} upcoming · {totalCities} items listed
      </div>
      <CitiesGridV2 cities={popupCities} />
    </NavigationLayout>
  )
}