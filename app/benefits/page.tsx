// app/benefits/page.tsx
"use client"

import type { Benefit } from "@/types"
import { benefits } from "@/data/benefits"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AuthProtection } from "@/components/auth/auth-protection"

interface PageHeaderProps {
  title: string
  description: string
  count: number
}

function PageHeader({ title, description, count }: PageHeaderProps) {
  return (
    <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground mt-2">{description}</p>
        <p className="text-sm text-muted-foreground mt-1">{count} benefits available</p>
      </div>
    </div>
  )
}

export default function BenefitsPage() {
  return (
    <AuthProtection>
      <div>
        <PageHeader
          title="Member Benefits"
          description="Exclusive perks and benefits for popup city residents"
          count={benefits.length}
        />
        <section className="container py-8 md:py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit: Benefit) => (
              <Card key={benefit.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{benefit.name}</CardTitle>
                    <Badge>{benefit.category}</Badge>
                  </div>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm">
                    Available in: {benefit.availability === "ALL_CITIES" ? "All Cities" : "Selected Cities"}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </AuthProtection>
  )
}