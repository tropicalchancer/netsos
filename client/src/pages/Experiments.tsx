import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Experiment {
  title: string;
  description: string;
  status: 'Active' | 'Completed' | 'Upcoming';
  tags: string[];
  link?: string;
}

const experiments: Experiment[] = [
  {
    title: "Coliving Spaces",
    description: "Experimental living arrangements combining work and community life, testing new models of shared spaces and resources.",
    status: "Active",
    tags: ["housing", "community", "lifestyle"],
    link: "#"
  },
  {
    title: "Knowledge Sharing Networks",
    description: "Decentralized learning communities focusing on peer-to-peer education and skill sharing.",
    status: "Active",
    tags: ["education", "networking", "collaboration"],
    link: "#"
  },
  {
    title: "Temporary Governance Models",
    description: "Testing various governance structures for temporary communities, including voting systems and decision-making processes.",
    status: "Upcoming",
    tags: ["governance", "community", "systems"],
    link: "#"
  }
];

export function Experiments() {
  return (
    <div className="min-h-screen bg-zinc-900 p-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-light text-white mb-6">Experiments</h1>
        <div className="space-y-6">
          {experiments.map((experiment, index) => (
            <Card key={index} className="bg-zinc-800/50 border-zinc-700">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-light text-white">{experiment.title}</h2>
                  <Badge 
                    className={
                      experiment.status === 'Active' ? 'bg-green-500/20 text-green-300' :
                      experiment.status === 'Upcoming' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-zinc-500/20 text-zinc-300'
                    }
                  >
                    {experiment.status}
                  </Badge>
                </div>
                <p className="text-zinc-300 mb-4">{experiment.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experiment.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-zinc-400 border-zinc-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}