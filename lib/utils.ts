import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useState, useEffect } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Unsplash Types
interface UnsplashImage {
  url: string
  photographer: string
  photographerUrl: string
  altDescription: string
}

// Simple function to create Unsplash attribution URLs
export function getUnsplashUrl(url: string, isPhotographer = false) {
  const params = new URLSearchParams({
    utm_source: 'netsos',
    utm_medium: 'referral',
    utm_campaign: isPhotographer ? 'photographer-credit' : 'api-credit'
  })
  return `${url}?${params.toString()}`
}

// Hook to fetch and manage Unsplash images
export function useUnsplashImage(city: string, country: string) {
  const [image, setImage] = useState<UnsplashImage | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchImage = async () => {
      if (!city || !country) {
        setIsLoading(false)
        return
      }

      try {
        const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
        if (!accessKey) {
          console.error('Unsplash API key not found')
          setIsLoading(false)
          return
        }

        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(city)}&orientation=landscape&per_page=1`,
          {
            headers: {
              Authorization: `Client-ID ${accessKey}`,
              'Accept-Version': 'v1'
            }
          }
        )

        if (!response.ok) throw new Error('Failed to fetch image')

        const data = await response.json()
        if (data.results?.[0]) {
          const photo = data.results[0]
          
          // Trigger download tracking
          await fetch(`https://api.unsplash.com/photos/${photo.id}/download`, {
            headers: {
              Authorization: `Client-ID ${accessKey}`,
              'Accept-Version': 'v1'
            }
          }).catch(error => console.error('Download tracking error:', error))

          setImage({
            url: photo.urls.regular,
            photographer: photo.user.name,
            photographerUrl: photo.user.links.html,
            altDescription: photo.alt_description || `${city}, ${country}`
          })
        }
      } catch (error) {
        console.error('Error fetching image:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchImage()
  }, [city, country])

  return { image, isLoading }
}