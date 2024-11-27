import { useState } from 'react';
import type { PopupCity } from '../types';
import { ExternalLink, Twitter, Calendar, MapPin } from 'lucide-react';

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
  } catch (error) {
    return 'UPCOMING';
  }
}

// Smart date formatter that makes dates more concise
function formatDateRange(dateRange: string): string {
  if (!dateRange || dateRange.includes('Invalid') || dateRange.includes('NaN')) {
    return 'TBD';
  }

  const [start, end] = dateRange.split(' → ');
  if (!start || !end) return dateRange;

  try {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const formatMonth = (date: Date) => date.toLocaleString('en-US', { month: 'short' });
    
    const startMonth = formatMonth(startDate);
    const endMonth = formatMonth(endDate);
    const startDay = startDate.getDate();
    const endDay = endDate.getDate();
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();

    if (startMonth === endMonth && startYear === endYear) {
      return `${startMonth} ${startDay}–${endDay}`;
    }

    if (startYear === endYear) {
      return `${startMonth} ${startDay}–${endMonth} ${endDay}`;
    }

    return `${startMonth} ${startYear}–${endMonth} ${endYear}`;
  } catch (error) {
    return dateRange;
  }
}

export function CityCard({ city }: { city: PopupCity }) {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate the current status based on dates
  const currentStatus = calculateStatus(city.dateRange);

  const statusColorClass = {
    'UPCOMING': 'bg-emerald-500/20 text-emerald-300',
    'ON NOW': 'bg-blue-500/20 text-blue-300',
    'FINISHED': 'bg-zinc-500/20 text-zinc-300'
  }[currentStatus]; // Use calculated status instead of city.status

  const brandColorClass = 'bg-indigo-500/20 text-indigo-300';
  const formattedDateRange = formatDateRange(city.dateRange);

  return (
    <div 
      className="relative overflow-hidden rounded-xl group transition-all duration-300 h-[280px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl" />
      
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
            <span>{formattedDateRange}</span>
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
        </div>
      </div>
    </div>
  );
}