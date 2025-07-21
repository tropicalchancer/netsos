'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { RefreshCw, AlertCircle } from 'lucide-react'
import { PopupCity } from '@/types/popup-city-v2'

interface CitiesRefreshButtonProps {
  onCitiesUpdate: (cities: PopupCity[]) => void
  className?: string
}

export function CitiesRefreshButton({ onCitiesUpdate, className }: CitiesRefreshButtonProps) {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleRefresh = async () => {
    try {
      setIsRefreshing(true)
      setError(null)
      
      const response = await fetch('/api/cities')
      
      if (!response.ok) {
        throw new Error(`Failed to refresh cities: ${response.status} ${response.statusText}`)
      }

      const cities = await response.json()
      
      if (!Array.isArray(cities)) {
        throw new Error('Invalid response format from server')
      }
      
      onCitiesUpdate(cities)
    } catch (error) {
      console.error('Error refreshing cities:', error)
      setError(error instanceof Error ? error.message : 'Failed to refresh cities')
      
      // Auto-clear error after 5 seconds
      setTimeout(() => setError(null), 5000)
    } finally {
      setIsRefreshing(false)
    }
  }

  return (
    <div className="flex items-center gap-2">
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
      
      {error && (
        <div className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
} 