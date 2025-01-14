'use client'

import dynamic from 'next/dynamic'

// Import MapboxMap dynamically to prevent SSR issues
const MapboxMap = dynamic(() => import('@/components/map/map'), {
  ssr: false
})

export default function MapPage() {
  return (
    <div className="h-[calc(100vh-4rem)]">
      <MapboxMap />
    </div>
  )
}