import { NextResponse } from 'next/server'
import { CitiesService } from '@/services/cities'

export async function GET() {
  try {
    const cities = await CitiesService.fetchCities()
    return NextResponse.json(cities)
  } catch (error) {
    console.error('Error fetching cities:', error)
    return NextResponse.json(
      { error: 'Failed to fetch cities' },
      { status: 500 }
    )
  }
} 