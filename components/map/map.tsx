'use client'

import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Card } from '@/components/ui/card'
import { popupCities } from '@/data/popup-cities'
import type { PopupCity } from '@/types/popup-city'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

if (!MAPBOX_TOKEN) {
  throw new Error('Mapbox token is required')
}

interface MapboxMapProps {
  className?: string
  height?: string
}

interface CityWithOffset extends PopupCity {
  adjustedLocation: {
    latitude: number
    longitude: number
  }
}

class CitiesService {
  static getStatus(dateRange: string): "ON NOW" | "UPCOMING" | "FINISHED" {
    const [start, end] = dateRange.split("→").map(d => new Date(d.trim()))
    const now = new Date()
    
    if (now < start) return "UPCOMING"
    if (now > end) return "FINISHED"
    return "ON NOW"
  }
}

const MapboxMap = ({ className = '', height = 'h-screen min-h-96' }: MapboxMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const markers = useRef<mapboxgl.Marker[]>([])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'UPCOMING':
        return '#ffd700' // gold
      case 'ON NOW':
        return '#00ff00' // green
      case 'FINISHED':
        return '#808080' // gray
      default:
        return '#ff0000' // red
    }
  }

  const offsetMarkersAtSameLocation = (cities: PopupCity[]): CityWithOffset[] => {
    // Group cities by their location
    const cityGroups = cities.reduce<Record<string, PopupCity[]>>((groups, city) => {
      const key = `${city.location.latitude},${city.location.longitude}`
      if (!groups[key]) {
        groups[key] = []
      }
      groups[key].push(city)
      return groups
    }, {})

    // Calculate offsets for each city in a group
    return cities.map(city => {
      const locationKey = `${city.location.latitude},${city.location.longitude}`
      const citiesAtLocation = cityGroups[locationKey]
      
      if (citiesAtLocation.length > 1) {
        // Find index of current city in the group
        const index = citiesAtLocation.findIndex(c => c.name === city.name)
        const angle = (2 * Math.PI * index) / citiesAtLocation.length
        
        // Calculate offset based on zoom level
        const offsetDistance = 0.005 // roughly 500 meters
        const offsetLng = Math.cos(angle) * offsetDistance
        const offsetLat = Math.sin(angle) * offsetDistance

        return {
          ...city,
          adjustedLocation: {
            latitude: city.location.latitude + offsetLat,
            longitude: city.location.longitude + offsetLng
          }
        }
      }
      
      return {
        ...city,
        adjustedLocation: {
          latitude: city.location.latitude,
          longitude: city.location.longitude
        }
      }
    })
  }

  useEffect(() => {
    if (!mapContainer.current || map.current) return

    mapboxgl.accessToken = MAPBOX_TOKEN as string
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [0, 20],
      zoom: 1.5,
      projection: 'globe'
    })

    const nav = new mapboxgl.NavigationControl()
    map.current.addControl(nav, 'top-right')

    // Add popup cities after map loads
    map.current.on('load', () => {
      const citiesWithOffsets = offsetMarkersAtSameLocation(popupCities)

      citiesWithOffsets.forEach(city => {
        const status = CitiesService.getStatus(city.dateRange)
        
        // Create custom marker element
        const el = document.createElement('div')
        el.className = 'marker'
        el.style.width = '24px'
        el.style.height = '24px'
        el.style.borderRadius = '50%'
        el.style.border = '3px solid ' + getStatusColor(status)
        el.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        el.style.cursor = 'pointer'

        // Create popup
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div style="color: black;">
            <h3 style="font-weight: bold; margin-bottom: 8px;">${city.name}</h3>
            <p style="margin-bottom: 4px;">${city.brand}</p>
            <p style="margin-bottom: 4px;">${city.location.city}, ${city.location.country}</p>
            <p style="margin-bottom: 4px;">Status: ${status}</p>
            <p style="margin-bottom: 4px;">${city.dateRange}</p>
            <p style="font-style: italic;">${city.oneLiner || ''}</p>
          </div>
        `)

        // Add marker with popup using adjusted coordinates
        const marker = new mapboxgl.Marker(el)
          .setLngLat([city.adjustedLocation.longitude, city.adjustedLocation.latitude])
          .setPopup(popup)
          .addTo(map.current!)

        markers.current.push(marker)
      })
    })

    return () => {
      markers.current.forEach(marker => marker.remove())
      markers.current = []
      map.current?.remove()
      map.current = null
    }
  }, [])

  return (
    <Card className={`w-full ${className}`}>
      <div 
        ref={mapContainer} 
        className={`w-full ${height} rounded-lg overflow-hidden`}
      />
    </Card>
  )
}

export default MapboxMap