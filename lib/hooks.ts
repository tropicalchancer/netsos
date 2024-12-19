"use client"

import { useState, useEffect } from "react"
import type { UnsplashImage } from "./utils"

const FALLBACK_IMAGE: UnsplashImage = {
  url: '/images/fallback-cityscape.jpg',
  photographer: 'Fallback Image',
  photographerUrl: '',
  altDescription: 'Fallback cityscape image'
}

export function useUnsplashImage(
  city: string, 
  country: string, 
  retryAttempts = 3,
  retryDelay = 1000
) {
  const [image, setImage] = useState<UnsplashImage | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    const fetchImage = async (attempt = 0) => {
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

        // Handle rate limiting specifically
        if (response.status === 429) {
          throw new Error('Rate limit exceeded')
        }

        if (!response.ok) {
          throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        if (data.results?.[0]) {
          const photo = data.results[0]
          
          // Trigger download tracking
          try {
            await fetch(`https://api.unsplash.com/photos/${photo.id}/download`, {
              headers: {
                Authorization: `Client-ID ${accessKey}`,
                'Accept-Version': 'v1'
              }
            })
          } catch (error) {
            console.warn('Download tracking error:', error)
            // Don't throw here - tracking failure shouldn't affect the user experience
          }

          if (isMounted) {
            setImage({
              url: photo.urls.regular,
              photographer: photo.user.name,
              photographerUrl: photo.user.links.html,
              altDescription: photo.alt_description || `${city}, ${country}`
            })
          }
        } else {
          throw new Error('No images found')
        }
      } catch (error) {
        console.error('Error fetching image:', error)
        
        if (attempt < retryAttempts && isMounted) {
          console.warn(`Attempt ${attempt + 1} failed, retrying...`)
          // Exponential backoff
          setTimeout(() => {
            fetchImage(attempt + 1)
          }, retryDelay * Math.pow(2, attempt))
        } else if (isMounted) {
          // After all retries failed, use fallback
          setImage(FALLBACK_IMAGE)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchImage()

    return () => {
      isMounted = false
    }
  }, [city, country, retryAttempts, retryDelay])

  return { image, isLoading }
}