interface IndexHeaderProps {
    title: string
    description: string
    count: number
  }
  
  export function IndexHeader({ title, description, count }: IndexHeaderProps) {
    return (
      <section className="relative py-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container px-4">
          <div className="flex flex-col items-center text-center space-y-2">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {title}
            </h1>
            <p className="text-gray-200 text-sm sm:text-base">
              {description} · {count} items listed
            </p>
          </div>
        </div>
      </section>
    )
  }
  
  