import { NextResponse } from 'next/server'
import { CitiesService } from '@/services/cities'

export async function GET() {
  try {
    const cities = await CitiesService.fetchCities()
    
    if (!Array.isArray(cities)) {
      return NextResponse.json(
        { error: 'Invalid data format received from Google Sheet' },
        { status: 500 }
      )
    }
    
    return NextResponse.json(cities)
  } catch (error) {
    console.error('Error fetching cities:', error)
    
    // Provide more specific error messages based on error type
    let statusCode = 500
    let errorMessage = 'Failed to fetch cities'
    
    if (error instanceof Error) {
      if (error.message.includes('Google Apps Script URL not configured')) {
        statusCode = 503 // Service Unavailable
        errorMessage = 'Data source not configured'
      } else if (error.message.includes('Failed to fetch')) {
        statusCode = 502 // Bad Gateway
        errorMessage = 'Unable to connect to data source'
      } else if (error.message.includes('Invalid response format')) {
        statusCode = 502 // Bad Gateway
        errorMessage = 'Data source returned invalid format'
      } else {
        errorMessage = error.message
      }
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        timestamp: new Date().toISOString()
      },
      { status: statusCode }
    )
  }
} 