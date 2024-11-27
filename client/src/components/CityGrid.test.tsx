import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CityCard } from './CityCard'
import type { PopupCity } from '../types'

const mockCity: PopupCity = {
  name: "Test City",
  status: "UPCOMING",
  brand: "Test Brand",
  year: 2024,
  dateRange: "2024-03-01 → 2024-03-31",
  websiteUrl: "https://test.com",
  twitterUrl: "https://twitter.com/test",
  description: "Full test description",
  oneLiner: "Test one liner",
  location: {
    city: "Test Location",
    country: "Test Country"
  }
}

describe('CityCard', () => {
  test('renders basic city information', () => {
    render(<CityCard city={mockCity} />)
    
    // Find the card content
    const headings = screen.getAllByRole('heading', { name: 'Test City' })
    expect(headings.length).toBeGreaterThan(0)
    
    // Check location is rendered
    expect(screen.getByText('Test Location')).toBeTruthy()
    expect(screen.getByText('Test Country')).toBeTruthy()
    
    // Check brand is rendered
    expect(screen.getByText('Test Brand')).toBeTruthy()
  })
})