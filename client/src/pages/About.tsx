import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <div className="min-h-screen bg-zinc-900 p-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-light text-white mb-6">About Popup Cities</h1>
        <Card className="bg-zinc-800/50 border-zinc-700">
          <CardContent className="p-6">
            <div className="prose prose-invert">
              <p className="text-zinc-300 leading-relaxed mb-6">
                Netsos (network societies). Will fill in rest later.
              </p>
              
              <h2 className="text-2xl font-light text-white mt-8 mb-4">Our Mission</h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Mission text here. Support ecosystem. Make it easier to navigate. Support organizers, contributors and technologists. 
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}