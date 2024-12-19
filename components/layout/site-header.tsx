import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold">netso villages</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link href="/experiments" className="text-sm font-medium transition-colors hover:text-primary">
            Experiments
          </Link>
          <Link href="/benefits" className="text-sm font-medium transition-colors hover:text-primary">
            Benefits
          </Link>
          <Link href="/venues" className="text-sm font-medium transition-colors hover:text-primary">
            Venues
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button>join kimchi</Button>
        </div>
      </div>
    </header>
  )
}

