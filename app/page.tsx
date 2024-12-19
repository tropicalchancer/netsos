// app/page.tsx
import { CitiesGrid } from "./cities-grid"
import { IndexHeader } from "@/components/ui/index-header"
import { popupCities } from "@/data/popup-cities"
import { NavigationLayout } from "@/components/layout/navigation-layout";

export default function Home() {
  const activeCount = popupCities.filter(city => city.status === "ON NOW").length
  const upcomingCount = popupCities.filter(city => city.status === "UPCOMING").length

  return (
    <NavigationLayout>
      <div>
        <IndexHeader
          description={`${activeCount} cities active now · ${upcomingCount} upcoming`}
          count={popupCities.length}
        />
        <section className="py-8 md:py-12">
          <CitiesGrid />
        </section>
      </div>
    </NavigationLayout>
  )
}