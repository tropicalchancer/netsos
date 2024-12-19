import { CitiesGrid } from "./cities-grid"
import { IndexHeader } from "@/components/ui/index-header"
import { popupCities } from "@/data/popup-cities"

export default function Home() {
  const activeCount = popupCities.filter(city => city.status === "ON NOW").length
  const upcomingCount = popupCities.filter(city => city.status === "UPCOMING").length

  return (
    <div>
      <IndexHeader
        title="Discover Popup Cities Worldwide"
        description={`${activeCount} cities active now · ${upcomingCount} upcoming`}
        count={popupCities.length}
      />
      <section className="container py-8 md:py-12">
        <CitiesGrid />
      </section>
    </div>
  )
}

