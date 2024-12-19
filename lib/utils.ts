// lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Unsplash Types
export interface UnsplashImage {
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