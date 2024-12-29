import { CitiesGrid } from "./cities-grid"
import { popupCities } from "@/data/popup-cities"
import { NavigationLayout } from "@/components/layout/navigation-layout"
import { CitiesService } from "@/services/cities"

export default function Home() {
  const { active, upcoming, total } = CitiesService.getCityCounts(popupCities)

  return (
    <NavigationLayout>
      <div>
        <div className="text-center py-4 text-muted-foreground">
          {active} cities active now · {upcoming} upcoming · {total} items listed
        </div>
        <section className="py-8 md:py-12">
          <CitiesGrid />
        </section>
      </div>
    </NavigationLayout>
  )
}