"use client"

import { useState, useEffect, useRef } from "react"

// Rate limiter queue
const requestQueue: (() => void)[] = [];
let activeRequests = 0;
const MAX_CONCURRENT_REQUESTS = 3;
const REQUEST_DELAY = 500; // ms between requests

function processQueue() {
  if (requestQueue.length === 0 || activeRequests >= MAX_CONCURRENT_REQUESTS) {
    return;
  }

  const nextRequest = requestQueue.shift();
  if (nextRequest) {
    activeRequests++;
    nextRequest();
    setTimeout(() => {
      activeRequests--;
      processQueue();
    }, REQUEST_DELAY);
  }
}

function queueRequest(request: () => void) {
  return new Promise<void>((resolve) => {
    const wrappedRequest = () => {
      request();
      resolve();
    };
    requestQueue.push(wrappedRequest);
    processQueue();
  });
}

export interface CityImage {
  url: string;
  photographer: {
    name: string;
    username: string;
  };
  source: 'Unsplash' | 'Fallback';
  altDescription?: string;
}

interface CachedImage extends CityImage {
  timestamp: number;
}

const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
const CACHE_KEY = 'netsos_image_cache';

function getCache(): Record<string, CachedImage> {
  if (typeof window === 'undefined') return {};
  try {
    const cache = localStorage.getItem(CACHE_KEY);
    return cache ? JSON.parse(cache) : {};
  } catch (error) {
    console.error('Error reading from cache:', error);
    return {};
  }
}

function setCache(cache: Record<string, CachedImage>) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch (error) {
    console.error('Error writing to cache:', error);
  }
}

function getCacheKey(city: string, country: string): string {
  return `${city.toLowerCase()}-${country.toLowerCase()}`;
}

export function useCityImage(
  city: string,
  country: string,
  fallbackImage: CityImage,
  retryAttempts = 3,
  retryDelay = 1000
) {
  const [image, setImage] = useState<CityImage>(fallbackImage);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mountedRef = useRef(true);
  const initialLoadRef = useRef(true);

  useEffect(() => {
    if (!city || !country) {
      console.log('No city or country provided:', { city, country });
      return;
    }

    let timeoutId: NodeJS.Timeout;

    const fetchImage = async (attempt = 0) => {
      if (!mountedRef.current) return;

      if (initialLoadRef.current) {
        setIsLoading(true);
        initialLoadRef.current = false;
      }

      try {
        const cacheKey = getCacheKey(city, country);
        const cache = getCache();
        const cachedImage = cache[cacheKey];

        // If we have a valid cached image, use it
        if (cachedImage && Date.now() - cachedImage.timestamp < CACHE_DURATION) {
          console.log('Using cached image for:', { city, country });
          setImage(cachedImage);
          setError(null);
          setIsLoading(false);
          return;
        }

        const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
        if (!accessKey) {
          console.error('Unsplash API key not found in environment variables');
          throw new Error('Unsplash API key not found');
        }

        // Queue the API request
        await queueRequest(async () => {
          console.log('Fetching image for:', { city, country, attempt });
          const query = `${city} ${country} cityscape landmark`.trim();
          const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&orientation=landscape&per_page=1`,
            {
              headers: {
                Authorization: `Client-ID ${accessKey}`,
                'Accept-Version': 'v1'
              }
            }
          );

          if (response.status === 429) {
            console.error('Rate limit exceeded for Unsplash API');
            throw new Error('Rate limit exceeded');
          }

          if (!response.ok) {
            console.error('Failed to fetch from Unsplash:', response.status, response.statusText);
            throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
          }

          const data = await response.json();
          console.log('Unsplash API response:', data);

          if (!mountedRef.current) return;

          if (data.results?.[0]) {
            const photo = data.results[0];
            
            // Trigger download tracking
            try {
              await fetch(`https://api.unsplash.com/photos/${photo.id}/download`, {
                headers: {
                  Authorization: `Client-ID ${accessKey}`,
                  'Accept-Version': 'v1'
                }
              });
            } catch (error) {
              console.warn('Download tracking error:', error);
            }

            const newImage: CachedImage = {
              url: photo.urls.regular,
              photographer: {
                name: photo.user.name,
                username: photo.user.username
              },
              source: 'Unsplash',
              altDescription: photo.alt_description || `${city}, ${country}`,
              timestamp: Date.now()
            };

            // Update cache
            cache[cacheKey] = newImage;
            setCache(cache);

            if (mountedRef.current) {
              console.log('Setting new image:', newImage);
              setImage(newImage);
              setError(null);
            }
          } else {
            throw new Error('No images found');
          }
        });
      } catch (error) {
        if (!mountedRef.current) return;
        console.error('Error fetching image:', error);
        
        if (attempt < retryAttempts) {
          console.warn(`Attempt ${attempt + 1} failed, retrying...`);
          timeoutId = setTimeout(() => {
            fetchImage(attempt + 1);
          }, retryDelay * Math.pow(2, attempt));
          return;
        }

        setImage(fallbackImage);
        setError(error instanceof Error ? error.message : 'Failed to fetch image');
      } finally {
        if (mountedRef.current) {
          setIsLoading(false);
        }
      }
    };

    fetchImage();

    return () => {
      mountedRef.current = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [city, country, fallbackImage, retryAttempts, retryDelay]);

  // Log current state for debugging
  useEffect(() => {
    console.log('Current image state:', { image, isLoading, error, city, country });
  }, [image, isLoading, error, city, country]);

  return { image, isLoading, error };
}