'use client'

import MapboxMap from '@/components/map/map'

export default function MapPage() {
  return (
    <div className="h-[calc(100vh-4rem)]">
      <MapboxMap className="h-full" />
    </div>
  )
}