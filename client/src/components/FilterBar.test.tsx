
import { describe, test, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { FilterBar } from './FilterBar'
import type { PopupCity } from '../types'

const mockCities: PopupCity[] = [
    {
      name: "City One",
      status: "UPCOMING",
      brand: "Brand A",
      year: 2024,
      dateRange: "2024-03-01 → 2024-03-31",
      websiteUrl: "https://test1.com",
      twitterUrl: "https://twitter.com/test1",
      description: "Full description 1",
      oneLiner: "Test one liner 1",
      location: {
        city: "Berlin",
        country: "Germany"
      }
    },
    {
      name: "City Two",
      status: "ON NOW",
      brand: "Brand B",
      year: 2024,
      dateRange: "2024-04-01 → 2024-04-30",
      websiteUrl: "https://test2.com",
      twitterUrl: "https://twitter.com/test2",
      description: "Full description 2",
      oneLiner: "Test one liner 2",
      location: {
        city: "Paris",
        country: "France"
      }
    }
  ]

describe('FilterBar', () => {
  test('renders filter inputs', () => {
    const handleFilterChange = vi.fn()
    render(<FilterBar onFilterChange={handleFilterChange} cities={mockCities} />)

    expect(screen.getByPlaceholderText('Search cities...')).toBeInTheDocument()
    expect(screen.getByText('Status')).toBeInTheDocument()
    expect(screen.getByText('Country')).toBeInTheDocument()
  })

  test('search input triggers filter change', () => {
    const handleFilterChange = vi.fn()
    render(<FilterBar onFilterChange={handleFilterChange} cities={mockCities} />)

    const searchInput = screen.getByPlaceholderText('Search cities...')
    fireEvent.change(searchInput, { target: { value: 'Berlin' } })

    expect(handleFilterChange).toHaveBeenCalled()
  })

  test('renders country options', () => {
    const handleFilterChange = vi.fn()
    render(<FilterBar onFilterChange={handleFilterChange} cities={mockCities} />)
    
    // Find all option elements
    const countryOptions = screen.getAllByRole('option')
    
    // Check if the country options exist
    expect(countryOptions.find(option => option.textContent === 'Germany')).toBeTruthy()
    expect(countryOptions.find(option => option.textContent === 'France')).toBeTruthy()
  })

  test('clear filters button exists', () => {
    const handleFilterChange = vi.fn()
    render(<FilterBar onFilterChange={handleFilterChange} cities={mockCities} />)
    
    expect(screen.getByText('Clear filters')).toBeInTheDocument()
  })
})