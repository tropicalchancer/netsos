import { experiments } from "@/data/experiments"
import { IndexHeader } from "@/components/ui/index-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export default function ExperimentsPage() {
  return (
    <div>
      <IndexHeader
        title="Popup City Experiments"
        description="Innovative trials and experiments running across our cities"
        count={experiments.length}
      />
      <section className="container py-8 md:py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiments.map((experiment) => (
            <Card key={experiment.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{experiment.name}</CardTitle>
                  <Badge>{experiment.status}</Badge>
                </div>
                <CardDescription>{experiment.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm">Started: {experiment.startDate}</div>
                  {experiment.outcomes && (
                    <div className="space-y-1">
                      <div className="font-medium">Outcomes:</div>
                      <ul className="text-sm list-disc pl-4">
                        {experiment.outcomes.map((outcome, index) => (
                          <li key={index}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

