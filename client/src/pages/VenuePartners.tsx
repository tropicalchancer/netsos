import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Calendar, Globe, Twitter } from 'lucide-react';

interface VenuePartner {
  name: string;
  location: {
    city: string;
    country: string;
  };
  capacity: number;
  availability: string[];
  amenities: string[];
  previousHosts: string[];
  websiteUrl: string;
  twitterUrl?: string;
  description: string;
  oneLiner: string;
}

export function VenueCard({ venue }: { venue: VenuePartner }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="relative overflow-hidden rounded-xl group transition-all duration-300 h-[280px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl" />
      
      <div className="relative h-full p-6 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className="bg-indigo-500/20 text-indigo-300">
            <Building2 className="w-3 h-3 mr-1" />
            Venue Partner
          </Badge>
          <Badge className="bg-purple-500/20 text-purple-300">
            <Users className="w-3 h-3 mr-1" />
            {venue.capacity}+ capacity
          </Badge>
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-medium text-white mb-2">{venue.name}</h3>
          <p className="text-zinc-400 text-sm line-clamp-2 mb-3">
            {venue.oneLiner}
          </p>
          <p className="text-zinc-500 text-sm">
            {venue.location.city}, {venue.location.country}
          </p>
        </div>

        <div 
          className={`absolute inset-0 bg-zinc-900/90 p-6 flex flex-col transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex-1">
            <h3 className="text-xl font-medium text-white mb-2">{venue.name}</h3>
            <p className="text-zinc-300 mb-4">{venue.description}</p>
            <div className="space-y-2">
              <p className="text-zinc-400 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Available: {venue.availability.join(', ')}
              </p>
              <p className="text-zinc-400">
                Previous hosts: {venue.previousHosts.join(', ')}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            {venue.websiteUrl && (
              <a 
                href={venue.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <Globe size={16} />
                <span>Website</span>
              </a>
            )}
            {venue.twitterUrl && (
              <a 
                href={venue.twitterUrl}
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
    </Card>
  );
}

// Sample data
// Previous imports and interfaces remain the same...

// Updated sample data array with ALT PING added
const sampleVenues: VenuePartner[] = [
    {
      name: "ALT PING",
      location: {
        city: "Chiang Mai",
        country: "Thailand"
      },
      capacity: 120,
      availability: ["Q1 2024", "Q4 2024"],
      amenities: ["Coworking Space", "Event Hall", "Garden", "Cafe", "High-speed Internet"],
      previousHosts: ["ETHChiang Mai", "Thailand Digital Nomads"],
      websiteUrl: "https://altping.com",
      description: "Creative community space in Chiang Mai's old city with indoor and outdoor areas. Specializes in hosting tech communities and digital nomad events with strong local connections.",
      oneLiner: "Creative community space in Chiang Mai's old city"
    },
    // Previous venues remain unchanged...
    {
      name: "MINOA PERA",
      location: {
        city: "Istanbul",
        country: "Turkey"
      },
      capacity: 150,
      availability: ["Q2 2024", "Q3 2024"],
      amenities: ["Event Space", "Cafe", "Coworking", "High-speed Internet"],
      previousHosts: ["ZuConnect", "ETHIstanbul"],
      websiteUrl: "https://minoapera.com",
      description: "Cultural hub in the heart of Istanbul with flexible event spaces, professional sound system, and experienced event staff. Perfect for popup communities of 50-150 people.",
      oneLiner: "Cultural hub with flexible spaces for popup communities"
    },
    {
      name: "ALEPH HUB",
      location: {
        city: "Buenos Aires",
        country: "Argentina"
      },
      capacity: 200,
      availability: ["Q1 2024", "Q4 2024"],
      amenities: ["Event Hall", "Workshop Rooms", "Garden", "Kitchen"],
      previousHosts: ["ETHLatam", "Web3 BA"],
      websiteUrl: "https://alephhub.com",
      description: "Modern tech hub in Buenos Aires with multiple configurable spaces. Experienced in hosting international tech communities and events.",
      oneLiner: "Modern tech hub with configurable spaces"
    },
    {
      name: "MONTENEGRO RESORT",
      location: {
        city: "Budva",
        country: "Montenegro"
      },
      capacity: 300,
      availability: ["Q2 2024", "Q3 2024"],
      amenities: ["Conference Center", "Accommodation", "Restaurant", "Pool"],
      previousHosts: ["Zuzalu", "Digital Nomad Week"],
      websiteUrl: "https://montenegroresort.com",
      description: "Beachfront resort with comprehensive facilities for long-term community stays. Includes accommodation, workspace, and event facilities.",
      oneLiner: "Beachfront resort for extended community stays"
    }
  ];
  
  // Rest of the component code remains the same...

export function VenuePartners() {
  return (
    <div className="min-h-screen bg-zinc-900 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-light text-white mb-8">Venue Partners</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleVenues.map((venue) => (
            <VenueCard key={venue.name} venue={venue} />
          ))}
        </div>
      </div>
    </div>
  );
}