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
    ],
  }
}

export default nextConfig