"use client";

import { AuthProtection } from "@/components/auth/auth-protection";
import { BenefitCard } from "@/components/ui/benefit-card";
import { benefits } from "@/data/benefits";

export default function BenefitsPage() {
  return (
    <AuthProtection>
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Benefits</h1>
          <p className="text-xl text-muted-foreground">
            Perks and benefits for popup village residents
          </p>
          <p className="text-muted-foreground">{benefits.length} benefits available</p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </div>
    </AuthProtection>
  );
}