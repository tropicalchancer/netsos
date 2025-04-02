export function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate)
  const end = new Date(endDate)
  
  // Same year
  const sameYear = start.getFullYear() === end.getFullYear()
  // Same month
  const sameMonth = start.getMonth() === end.getMonth() && sameYear

  const monthNames = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']
  
  if (sameMonth) {
    // May 3-18, 2025
    return `${monthNames[start.getMonth()]} ${start.getDate()}-${end.getDate()}, ${start.getFullYear()}`
  } else if (sameYear) {
    // May 3 - Jun 18, 2025
    return `${monthNames[start.getMonth()]} ${start.getDate()} - ${monthNames[end.getMonth()]} ${end.getDate()}, ${start.getFullYear()}`
  } else {
    // May 3, 2025 - Jun 18, 2026
    return `${monthNames[start.getMonth()]} ${start.getDate()}, ${start.getFullYear()} - ${monthNames[end.getMonth()]} ${end.getDate()}, ${end.getFullYear()}`
  }
}

export function formatDate(date: string): string {
  const d = new Date(date)
  const monthNames = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']
  return `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
} 