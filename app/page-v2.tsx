import { CitiesGridV2 } from "@/components/cities-grid-v2"
import { popupCities } from "@/data/popup-cities-v2"
import { NavigationLayout } from "@/components/layout/navigation-layout"
import { CitiesService } from '@/services/cities'

export default function HomeV2() {
  const citiesWithStatus = CitiesService.getCitiesWithStatus(popupCities);
  const active = citiesWithStatus.filter(city => city.status === 'ON_NOW').length;
  const upcoming = citiesWithStatus.filter(city => city.status === 'UPCOMING').length;
  const total = popupCities.length;

  return (
    <NavigationLayout>
      <div className="container">
        <div className="text-center py-4 text-muted-foreground">
          {active} cities active now · {upcoming} upcoming · {total} items listed
        </div>
        <CitiesGridV2 cities={popupCities} />
      </div>
    </NavigationLayout>
  )
} 