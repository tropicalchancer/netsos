// app/page.tsx
import { CitiesGrid } from "./cities-grid"
import { popupCities } from "@/data/popup-cities"
import { NavigationLayout } from "@/components/layout/navigation-layout"

export default function Home() {
 const activeCount = popupCities.filter(city => city.status === "ON NOW").length
 const upcomingCount = popupCities.filter(city => city.status === "UPCOMING").length

 return (
   <NavigationLayout>
     <div>
       <div className="text-center py-4 text-muted-foreground">
         {activeCount} cities active now · {upcomingCount} upcoming · {popupCities.length} items listed
       </div>
       <section className="py-8 md:py-12">
         <CitiesGrid />
       </section>
     </div>
   </NavigationLayout>
 )
}