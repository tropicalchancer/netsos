import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { PopupCity } from "@/types/popup-city"
import { CitiesService } from "@/services/cities"

type FilterType = 'ALL' | 'ACTIVE' | 'UPCOMING' | 'FINISHED'

interface FilterSidebarProps {
  isOpen: boolean
  onClose: () => void
  activeFilter: FilterType
  onFilterChange: (filter: FilterType) => void
  cities: PopupCity[]
}

export function FilterSidebar({ isOpen, onClose, activeFilter, onFilterChange, cities }: FilterSidebarProps) {
  const getCityCount = (filter: FilterType) => {
    if (filter === 'ALL') return cities.length;
    
    return cities.filter(city => {
      const status = CitiesService.getStatus(city.dateRange)
      switch (filter) {
        case 'ACTIVE':
          return status === 'ON NOW'
        case 'UPCOMING':
          return status === 'UPCOMING'
        case 'FINISHED':
          return status === 'FINISHED'
      }
    }).length;
  };

  const filters: { value: FilterType; label: string }[] = [
    { value: "ALL", label: "All Cities" },
    { value: "ACTIVE", label: "Active Now" },
    { value: "UPCOMING", label: "Upcoming" },
    { value: "FINISHED", label: "Finished" }
  ]

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 right-0 w-80 bg-background border-l transform transition-transform duration-200 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {filters.map((filter) => (
                <Button
                  key={filter.value}
                  variant={activeFilter === filter.value ? "default" : "outline"}
                  className="w-full justify-between"
                  onClick={() => onFilterChange(filter.value)}
                >
                  <span>{filter.label}</span>
                  <span className="ml-2 px-2 py-0.5 text-sm rounded-full bg-background/10">
                    {getCityCount(filter.value)}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 