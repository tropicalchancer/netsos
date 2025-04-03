import Link from "next/link"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between px-6 md:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-base font-semibold">
            netso villages
          </Link>
          <Link 
            href="/about" 
            className="text-base font-medium transition-colors hover:text-foreground/80"
          >
            about
          </Link>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          asChild
          className="flex items-center gap-2 h-8 px-4 font-medium"
        >
          <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLSccz5k5EJSmMsgWi-xPOdW-mD6d07Ugr2k1wfwIRALw3kDT8w/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Plus className="h-4 w-4" />
            Add Missing Popup
          </Link>
        </Button>
      </nav>
    </header>
  )
}