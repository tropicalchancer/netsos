import { render, screen } from '@testing-library/react'
import { CityGrid } from './CityGrid'
import type { PopupCity } from '../types'

const mockCities: PopupCity[] = [
  {
    name: "City One",
    brand: "Brand A",
    dateRange: "2024-03-01 → 2024-03-31",
    websiteUrl: "https://test1.com",
    twitterUrl: "https://twitter.com/test1",
    oneLiner: "First city",
    location: {
      city: "Berlin",
      country: "Germany"
    }
  },
  {
    name: "City Two",
    brand: "Brand B",
    dateRange: "2024-04-01 → 2024-04-30",
    websiteUrl: "https://test2.com",
    twitterUrl: "https://twitter.com/test2",
    oneLiner: "Second city",
    location: {
      city: "Paris",
      country: "France"
    }
  }
]

describe('CityGrid', () => {
  test('renders filter bar', () => {
    render(<CityGrid cities={mockCities} />)
    expect(screen.getByPlaceholderText('Search cities...')).toBeInTheDocument()
    expect(screen.getByText('Status')).toBeInTheDocument()
    expect(screen.getByText('Country')).toBeInTheDocument()
  })

  test('renders grid container', () => {
    render(<CityGrid cities={mockCities} />)
    const gridContainer = document.querySelector('.grid-cols-1')
    expect(gridContainer).toBeInTheDocument()
  })

  test('renders clear filters button', () => {
    render(<CityGrid cities={mockCities} />)
    expect(screen.getByText('Clear filters')).toBeInTheDocument()
  })
})