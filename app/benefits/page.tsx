import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BenefitsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Member Benefits</h1>
        <p className="text-xl text-muted-foreground">
          Exclusive perks and benefits for popup city residents
        </p>
        <p className="text-muted-foreground">1 benefits available</p>
      </div>

      {/* Benefits List */}
      <div className="grid gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle>Coworking Access</CardTitle>
            <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md font-medium">
              WORKSPACE
            </span>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-lg">
              24/7 access to premium coworking spaces
            </p>
            <p>Available in: All Cities</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}