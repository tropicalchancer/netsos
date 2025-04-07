"use client";

import { experiments } from "@/data/experiments"
import { ExperimentCard } from "@/components/ui/experiment-card"

export default function ExperimentsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Popup City Experiments</h1>
        <p className="text-xl text-muted-foreground">
          Experiments and projects from the popup village realm, both past and present.
        </p>
        <p className="text-muted-foreground">{experiments.length} experiments available</p>
      </div>

      {/* Experiments Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experiments.map((experiment) => (
          <ExperimentCard key={experiment.id} experiment={experiment} />
        ))}
      </div>
    </div>
  )
}

