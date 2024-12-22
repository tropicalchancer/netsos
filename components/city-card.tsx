'use client'

import Image from "next/image"
import { Building2, Calendar, Globe, MapPin, Twitter } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PopupCity } from "@/types/popup-city"
import { useUnsplashImage } from "@/lib/hooks"
import { getUnsplashUrl } from "@/lib/utils"

interface CityCardProps {
  city: PopupCity
}

export function CityCard({ city }: CityCardProps) {
  const { image } = useUnsplashImage(city.location.city, city.location.country)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ON NOW":
        return "bg-green-500/80 text-white"
      case "UPCOMING":
        return "bg-blue-500/80 text-white"
      case "FINISHED":
        return "bg-gray-500/80 text-white"
      default:
        return "bg-gray-500/80 text-white"
    }
  }

  return (
    <Card className="relative w-full h-[400px] group overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0">
        {image ? (
          <Image
            src={image.url}
            alt={image.altDescription}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-muted" />
        )}
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col text-white">
        {/* Top Section */}
        <div className="mb-auto">
          <Badge 
            variant="secondary" 
            className={`mb-4 ${getStatusColor(city.status)}`}
          >
            {city.status}
          </Badge>
          
          <div className="flex items-center gap-2 mb-2 opacity-90">
            <Building2 className="h-5 w-5" />
            <span className="text-lg">{city.brand}</span>
          </div>
          
          <h3 className="text-3xl font-bold mb-2">{city.name}</h3>
          
          <p className="text-sm text-white/80 mb-4">{city.oneLiner}</p>
        </div>

        {/* Bottom Section */}
        <div className="space-y-3">
          {city.dateRange && (
            <div className="flex items-center gap-2 text-white/90">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{city.dateRange}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{city.location.city}, {city.location.country}</span>
          </div>
          
          {/* Links */}
          <div className="flex gap-3 mt-4">
            {city.websiteUrl && (
              <a 
                href={city.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm">Website</span>
              </a>
            )}
            {city.twitterUrl && (
              <a
                href={city.twitterUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Twitter className="h-4 w-4" />
                <span className="text-sm">Twitter</span>
              </a>
            )}
          </div>
        </div>

        {/* Unsplash Attribution */}
        {image && (
          <div className="absolute bottom-2 right-2 text-[10px] text-white/50">
            Photo by{' '}
            <a 
              href={getUnsplashUrl(image.photographerUrl, true)}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70"
            >
              {image.photographer}
            </a>
            {' / '}
            <a 
              href={getUnsplashUrl('https://unsplash.com')}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70"
            >
              Unsplash
            </a>
          </div>
        )}
      </div>
    </Card>
  )
}