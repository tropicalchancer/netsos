'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { RefreshCw } from 'lucide-react'
import { PopupCity } from '@/types/popup-city-v2'

interface CitiesRefreshButtonProps {
  onCitiesUpdate: (cities: PopupCity[]) => void
  className?: string
}

export function CitiesRefreshButton({ onCitiesUpdate, className }: CitiesRefreshButtonProps) {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = async () => {
    try {
      setIsRefreshing(true)
      const response = await fetch('/api/cities')
      
      if (!response.ok) {
        throw new Error('Failed to refresh cities')
      }

      const cities = await response.json()
      onCitiesUpdate(cities)
    } catch (error) {
      console.error('Error refreshing cities:', error)
      // You could add a toast notification here
    } finally {
      setIsRefreshing(false)
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleRefresh}
      disabled={isRefreshing}
      className={className}
    >
      <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
      {isRefreshing ? 'Refreshing...' : 'Refresh'}
    </Button>
  )
} 