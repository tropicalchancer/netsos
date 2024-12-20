import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold">
            netso villages
          </Link>
          
          <nav className="hidden md:flex gap-6">
          <Link href="/about" className="text-foreground/60 transition-colors hover:text-foreground">
              about
            </Link>
            {/* <Link href="/benefits" className="text-foreground/60 transition-colors hover:text-foreground">
              Benefits
            </Link> */}
           
          </nav>
        </div>
        <div className="flex items-center gap-2">
        </div>
      </div>
    </header>
  )
}