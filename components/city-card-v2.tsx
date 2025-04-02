'use client'

import Image from "next/image"
import { Building2, Calendar, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PopupCityCard } from "@/types/popup-city-v2"

interface CityCardProps {
  city: PopupCityCard;
  onClick: (city: PopupCityCard) => void;
}

export function CityCardV2({ city, onClick }: CityCardProps) {
  const getStatusColor = (status: PopupCityCard['status']): string => {
    switch (status) {
      case "ON_NOW":
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
    <Card 
      className="relative w-full h-[400px] group overflow-hidden cursor-pointer"
      onClick={() => onClick(city)}
    >
      <div className="absolute inset-0">
        <Image
          src={city.coverImage.url}
          alt={city.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
      </div>

      <div className="relative h-full p-6 flex flex-col text-white">
        <div className="mb-auto">
          <Badge 
            variant="secondary" 
            className={`mb-4 ${getStatusColor(city.status)}`}
          >
            {city.status.replace('_', ' ')}
          </Badge>
          
          <div className="flex items-center gap-2 mb-2 opacity-90">
            <Building2 className="h-5 w-5" />
            <span className="text-lg">{city.brand}</span>
          </div>
          
          <h3 className="text-3xl font-bold mb-2">{city.name}</h3>
          
          <p className="text-sm text-white/80 mb-4">{city.tagline}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {city.tags.map(tag => (
              <Badge key={tag} variant="outline" className="text-white/80 border-white/20">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white/90">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">
              {new Date(city.startDate).toLocaleDateString()} → {new Date(city.endDate).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{city.location.city}, {city.location.country}</span>
          </div>
        </div>

        <div className="absolute bottom-2 right-2 text-[10px] text-white/50">
          Photo by{' '}
          <a 
            href={`https://unsplash.com/@${city.coverImage.attribution}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/70"
            onClick={e => e.stopPropagation()}
          >
            {city.coverImage.attribution}
          </a>
          {' / '}
          <a 
            href="https://unsplash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/70"
            onClick={e => e.stopPropagation()}
          >
            {city.coverImage.source}
          </a>
        </div>
      </div>
    </Card>
  )
} 