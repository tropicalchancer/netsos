import { venues } from "@/data/venues"
import { IndexHeader } from "@/components/ui/index-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from 'lucide-react'

export default function VenuesPage() {
  return (
    <div>
      <IndexHeader
        title="Venue Partners"
        description="Our carefully selected venues around the world"
        count={venues.length}
      />
      <section className="container py-8 md:py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {venues.map((venue) => (
            <Card key={venue.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{venue.name}</CardTitle>
                  <Badge>{venue.type}</Badge>
                </div>
                <CardDescription className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {venue.location.city}, {venue.location.country}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm">Capacity: {venue.capacity} people</div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Amenities:</div>
                    <div className="flex flex-wrap gap-1">
                      {venue.amenities.map((amenity, index) => (
                        <Badge key={index} variant="secondary">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

