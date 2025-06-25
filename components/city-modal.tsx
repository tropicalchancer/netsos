'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { PopupCityModal } from "@/types/popup-city-v2"
import { Building2, Calendar, Globe, MapPin, X, MessageSquare, Send } from "lucide-react"
import { formatDateRange } from "@/lib/date-utils"
import { useCityImage } from "@/lib/hooks"
import { DEFAULT_CITY_IMAGE } from "@/lib/constants"

interface CityModalProps {
  city: PopupCityModal | null
  isOpen: boolean
  onClose: () => void
}

export function CityModal({ city, isOpen, onClose }: CityModalProps) {
  const { image } = useCityImage(
    city?.location.city || '',
    city?.location.country || '',
    city?.coverImage || DEFAULT_CITY_IMAGE
  );

  if (!city) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{city.name}</DialogTitle>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Building2 className="h-4 w-4" />
            <span>{city.brand}</span>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Status and Tags */}
          <div className="flex flex-wrap gap-2">
            {city.status && (
              <Badge variant="outline" className="text-sm">
                {city.status.replace('_', ' ')}
              </Badge>
            )}
            {city.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-2">
            {city.links.website && (
              <a
                href={city.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm">Website</span>
              </a>
            )}
            {city.links.twitter && (
              <a
                href={city.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <X className="h-4 w-4" />
                <span className="text-sm">X</span>
              </a>
            )}
            {city.links.discord && (
              <a
                href={city.links.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span className="text-sm">Discord</span>
              </a>
            )}
            {city.links.telegram && (
              <a
                href={city.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Send className="h-4 w-4" />
                <span className="text-sm">Telegram</span>
              </a>
            )}
            {city.links.application && (
              <a
                href={city.links.application}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm">Apply</span>
              </a>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground">{city.description}</p>

          {/* Location and Dates */}
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>
                {city.location.city}, {city.location.country}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {formatDateRange(city.startDate, city.endDate)}
              </span>
            </div>
          </div>

          {/* Photo Credit */}
          {image.source === 'Unsplash' && (
            <div className="text-sm text-gray-500">
              Cover Photo by{' '}
              <a
                href={`https://unsplash.com/@${image.photographer.username}?utm_source=netsos&utm_medium=referral`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                {image.photographer.name}
              </a>{' '}
              on{' '}
              <a
                href="https://unsplash.com/?utm_source=netsos&utm_medium=referral"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Unsplash
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
} 