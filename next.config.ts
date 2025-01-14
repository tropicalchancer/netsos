import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ["web-worker"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'unpkg.com',
      },
      {
        protocol: 'https',
        hostname: 'api.mapbox.com',
      },
      {
        protocol: 'https',
        hostname: 'tiles.mapbox.com',
      },
      {
        protocol: 'https',
        hostname: 'events.mapbox.com',
      }
    ],
  },
  // Transpile three and three-globe modules
  transpilePackages: ['three', 'three-globe', 'mapbox-gl'],
}

export default nextConfig