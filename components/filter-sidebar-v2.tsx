import { PopupCity } from '@/types/popup-city-v2'
import { CitiesService } from '@/services/cities'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type FilterType = 'ALL' | 'ACTIVE' | 'UPCOMING' | 'FINISHED'

interface FilterSidebarProps {
  isOpen: boolean
  onClose: () => void
  activeFilter: FilterType
  onFilterChange: (filter: FilterType) => void
  cities: PopupCity[]
}

export function FilterSidebarV2({ isOpen, onClose, activeFilter, onFilterChange, cities }: FilterSidebarProps) {
  const getCityCount = (filter: FilterType) => {
    if (filter === 'ALL') return cities.length;
    
    const citiesWithStatus = CitiesService.getCitiesWithStatus(cities);
    return citiesWithStatus.filter(city => {
      switch (filter) {
        case 'ACTIVE':
          return city.status === 'ON_NOW'
        case 'UPCOMING':
          return city.status === 'UPCOMING'
        case 'FINISHED':
          return city.status === 'FINISHED'
        default:
          return false
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
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Filter Cities</SheetTitle>
        </SheetHeader>
        <div className="py-4">
          <div className="space-y-2">
            {filters.map(filter => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "ghost"}
                className={cn(
                  "w-full justify-between",
                  activeFilter === filter.value && "bg-primary text-primary-foreground"
                )}
                onClick={() => onFilterChange(filter.value)}
              >
                <span>{filter.label}</span>
                <span className="text-sm text-muted-foreground">
                  {getCityCount(filter.value)}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
} 