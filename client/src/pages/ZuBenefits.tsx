import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Benefit {
  title: string;
  description: string;
  category: string;
  eligibility: string;
}

const benefits: Benefit[] = [
  {
    title: "Travel insurance",
    description: "10% of travel insurance for Zupass holders",
    category: "Network",
    eligibility: "All Zupasses"
  },
  {
    title: "E-sim company",
    description: "10% of e-sim purchases for Zupass holders",
    category: "Network",
    eligibility: "All Zupasses"
  },
  {
    title: "Zanzalu 2 discount",
    description: "50% of Zanzalu access pass price for those who went to Zanzalu 1 and have a Zupass credential.",
    category: "Network",
    eligibility: "Zanzalu 1 Zupass holders"
  }
];

export function ZuBenefits() {
  return (
    <div className="min-h-screen bg-zinc-900 p-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-light text-white mb-6">ZuBenefits</h1>
        <p className="text-zinc-300 mb-8">
          An experiment to coordinate sufficiently to get discount and benefits for people in the Zuzalu ecosystem using Zupass. 
          
        </p>
        <div className="grid gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-zinc-800/50 border-zinc-700">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-light text-white">{benefit.title}</h2>
                  <Badge className="bg-blue-500/20 text-blue-300">
                    {benefit.category}
                  </Badge>
                </div>
                <p className="text-zinc-300 mb-4">{benefit.description}</p>
                <div className="flex items-center">
                  <Badge variant="outline" className="text-zinc-400 border-zinc-700">
                    {benefit.eligibility}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}