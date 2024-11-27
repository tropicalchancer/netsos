import { render, screen } from '@testing-library/react'
import { CityCard } from './CityCard'
import type { PopupCity } from '../types'

const mockCity: PopupCity = {
  name: "Test City",
  brand: "Test Brand",
  dateRange: "2024-03-01 → 2024-03-31",
  websiteUrl: "https://test.com",
  twitterUrl: "https://twitter.com/test",
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
    expect(headings.length).toBeGreaterThan(0) // Verify at least one heading exists
    
    // Check location is rendered
    expect(screen.getByText('Test Location')).toBeInTheDocument()
    expect(screen.getByText('Test Country')).toBeInTheDocument()
    
    // Check brand is rendered
    expect(screen.getByText('Test Brand')).toBeInTheDocument()
  })
})