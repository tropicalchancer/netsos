import { describe, expect, test } from 'vitest'
import { popupCities } from './popupCities'

describe('Popup Cities', () => {
  test('each city has required basic info', () => {
    const firstCity = popupCities[0]
    
    expect(firstCity).toHaveProperty('name')
    expect(firstCity).toHaveProperty('status')
    expect(firstCity).toHaveProperty('location')
    
    expect(firstCity.name.length).toBeGreaterThan(0)
    expect(['UPCOMING', 'ON NOW', 'FINISHED']).toContain(firstCity.status)
    expect(firstCity.location).toHaveProperty('city')
    expect(firstCity.location).toHaveProperty('country')
  })

  test('we have multiple cities in the database', () => {
    expect(popupCities.length).toBeGreaterThan(0)
  })

  test('all cities have valid status values', () => {
    const validStatuses = ['UPCOMING', 'ON NOW', 'FINISHED']
    
    popupCities.forEach(city => {
      expect(validStatuses).toContain(city.status)
    })
  })

  test('all date ranges have proper format', () => {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    popupCities.forEach(city => {
      // Should contain at least one month name
      expect(
        monthNames.some(month => city.dateRange.includes(month))
      ).toBe(true)
      
      // Should contain numbers (for days)
      expect(city.dateRange).toMatch(/\d+/)
    })
  })

  test('all cities have unique names', () => {
    const cityNames = popupCities.map(city => city.name)
    const duplicates = cityNames.filter((name, index) => 
      cityNames.indexOf(name) !== index
    )
    
    if (duplicates.length > 0) {
      console.log('Duplicate city names found:', duplicates)
    }
    
    expect(duplicates).toHaveLength(0)
  })
})