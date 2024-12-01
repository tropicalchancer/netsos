import { useState } from 'react';
import type { PopupCity } from '../types';
import { ExternalLink, Twitter, Calendar, MapPin, Image as ImageIcon } from 'lucide-react';
import { useCityImage } from '../lib/api';

// Utility to calculate current status based on dates
function calculateStatus(dateRange: string): 'UPCOMING' | 'ON NOW' | 'FINISHED' {
  // Handle invalid dates
  if (!dateRange || dateRange.includes('Invalid') || dateRange.includes('NaN')) {
    return 'UPCOMING';
  }

  try {
    const [start, end] = dateRange.split(' → ');
    const startDate = new Date(start);
    const endDate = new Date(end);
    const now = new Date();

    // Reset hours to compare just dates
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999); // End of day
    now.setHours(0, 0, 0, 0);

    if (now < startDate) return 'UPCOMING';
    if (now > endDate) return 'FINISHED';
    return 'ON NOW';
  } catch {
    return 'UPCOMING';
  }
}

export function CityCard({ city }: { city: PopupCity }) {
  const [isHovered, setIsHovered] = useState(false);
  const { imageData, isLoading } = useCityImage(city.location.city, city.location.country);

  const currentStatus = calculateStatus(city.dateRange);
  const statusColorClass = {
    'UPCOMING': 'bg-emerald-500/20 text-emerald-300',
    'ON NOW': 'bg-blue-500/20 text-blue-300',
    'FINISHED': 'bg-zinc-500/20 text-zinc-300'
  }[currentStatus];

  const brandColorClass = 'bg-indigo-500/20 text-indigo-300';

  return (
    <div 
      className="relative overflow-hidden rounded-xl group transition-all duration-300 h-[280px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Layer */}
      <div className="absolute inset-0">
        {isLoading ? (
          <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900">
            <ImageIcon className="w-8 h-8 text-zinc-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          </div>
        ) : imageData ? (
          <div className="relative w-full h-full">
            <img
              src={imageData.url}
              alt={imageData.altDescription}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900" />
        )}
      </div>
      
      {/* Content Layer */}
      <div className="relative h-full p-6 flex flex-col">
        {/* Top Section: Status and Brand */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColorClass}`}>
            {currentStatus}
          </span>
          {city.brand && (
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${brandColorClass}`}>
              {city.brand}
            </span>
          )}
        </div>

        {/* Middle Section: Title */}
        <div className="flex-1">
          <h3 className="text-2xl font-light text-white tracking-wide">{city.name}</h3>
        </div>

        {/* Bottom Section: Date and Location */}
        <div className="space-y-2 mt-auto">
          <div className="flex items-center gap-2 text-zinc-400 text-sm">
            <Calendar size={14} className="text-zinc-500 shrink-0" />
            <span>{city.dateRange}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-zinc-500 shrink-0" />
            <span className="text-zinc-300 font-medium">
              {city.location.city}
              <span className="text-zinc-500 ml-1 font-normal">
                {city.location.country}
              </span>
            </span>
          </div>
        </div>

        {/* Hover State */}
        <div 
          className={`absolute inset-0 bg-zinc-900/95 p-6 flex flex-col transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex-1">
            <h3 className="text-2xl font-light text-white tracking-wide mb-3">{city.name}</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              {city.oneLiner}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              {city.websiteUrl && city.websiteUrl !== 'N/A' && (
                <a 
                  href={city.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Website</span>
                </a>
              )}
              {city.twitterUrl && city.twitterUrl !== 'N/A' && (
                <a 
                  href={city.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                >
                  <Twitter size={16} />
                  <span>Twitter</span>
                </a>
              )}
            </div>
            
            {imageData && (
              <p className="text-xs text-zinc-500">
                Photo by{' '}
                <a 
                  href={imageData.photographerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  {imageData.photographer}
                </a>
                {' '}on Unsplash
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}