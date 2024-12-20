'use client';

// components/globe/client-globe.tsx
import dynamic from 'next/dynamic'
import { Card } from '@/components/ui/card'

// Create a loading component that matches the final layout
const GlobeLoading = () => (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="w-full max-w-7xl">
      <h1 className="text-4xl font-bold mb-8">🛖 netso villages 🛖</h1>
      <Card className="w-full h-[600px] relative overflow-hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center">
        <div className="text-muted-foreground">Loading Globe...</div>
      </Card>
    </div>
  </main>
)

// Dynamically import the Globe component with no SSR
const GlobeVisualization = dynamic(
  () => import('./globe-visualization'),
  {
    ssr: false,
    loading: () => <GlobeLoading />
  }
)

export default function ClientGlobe() {
  return <GlobeVisualization />
}