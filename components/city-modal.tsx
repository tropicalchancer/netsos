'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { PopupCityModal } from "@/types/popup-city-v2"
import { Building2, Calendar, Globe, MapPin, Twitter, MessageSquare, Send } from "lucide-react"

interface CityModalProps {
  city: PopupCityModal | null
  isOpen: boolean
  onClose: () => void
}

export function CityModal({ city, isOpen, onClose }: CityModalProps) {
  if (!city) return null

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
            <Badge variant="outline" className="text-sm">
              {city.status.replace('_', ' ')}
            </Badge>
            {city.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
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
                {new Date(city.startDate).toLocaleDateString()} → {new Date(city.endDate).toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Costs Section */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Costs</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Estimated Monthly Cost</span>
                <span className="font-semibold">
                  {city.costs.currency} {city.costs.estimatedTotalMonthlyCost.toLocaleString()}
                </span>
              </div>

              {/* Ticket Options */}
              <div>
                <h4 className="font-medium mb-2">Ticket Options</h4>
                <div className="space-y-2">
                  {city.costs.tickets.options.map(ticket => (
                    <div key={ticket.name} className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{ticket.name}</span>
                        <span className="text-sm text-muted-foreground"> ({ticket.duration} days)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>{city.costs.currency} {ticket.price.toLocaleString()}</span>
                        {!ticket.available && (
                          <Badge variant="secondary">Sold Out</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Housing */}
              <div>
                <h4 className="font-medium mb-2">Housing</h4>
                <p className="text-sm text-muted-foreground">{city.costs.housing.details}</p>
                {city.costs.housing.estimatedCost && (
                  <div className="mt-2">
                    <span className="text-sm">
                      Estimated {city.costs.housing.estimatedCost.timeUnit}ly cost:{' '}
                      {city.costs.currency} {city.costs.housing.estimatedCost.min.toLocaleString()} - {city.costs.housing.estimatedCost.max.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>

              {/* Monthly Estimates */}
              {city.costs.monthlyEstimates && (
                <div>
                  <h4 className="font-medium mb-2">Additional Monthly Estimates</h4>
                  <div className="space-y-1">
                    {city.costs.monthlyEstimates.food && (
                      <div className="flex justify-between">
                        <span>Food</span>
                        <span>{city.costs.currency} {city.costs.monthlyEstimates.food.toLocaleString()}</span>
                      </div>
                    )}
                    {city.costs.monthlyEstimates.transport && (
                      <div className="flex justify-between">
                        <span>Transport</span>
                        <span>{city.costs.currency} {city.costs.monthlyEstimates.transport.toLocaleString()}</span>
                      </div>
                    )}
                    {city.costs.monthlyEstimates.activities && (
                      <div className="flex justify-between">
                        <span>Activities</span>
                        <span>{city.costs.currency} {city.costs.monthlyEstimates.activities.toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
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
                <Twitter className="h-4 w-4" />
                <span className="text-sm">Twitter</span>
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
          </div>

          {/* Requirements and Capacity */}
          {(city.requirements?.length > 0 || city.capacity) && (
            <div className="border-t pt-4">
              {city.requirements?.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Requirements</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {city.requirements?.map(req => (
                      <li key={req} className="text-sm text-muted-foreground">{req}</li>
                    ))}
                  </ul>
                </div>
              )}
              {city.capacity && (
                <div>
                  <h4 className="font-medium mb-2">Capacity</h4>
                  <p className="text-sm text-muted-foreground">{city.capacity} participants</p>
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
} 