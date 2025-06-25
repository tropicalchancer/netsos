import { Loader2 } from 'lucide-react'

interface LoadingSpinnerProps {
  message?: string
  size?: 'sm' | 'md' | 'lg'
}

export function LoadingSpinner({ message = 'Loading cities...', size = 'md' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  }

  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <Loader2 className={`${sizeClasses[size]} animate-spin text-muted-foreground`} />
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  )
} 