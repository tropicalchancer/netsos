// src/components/ui/input.tsx
import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "flex h-10 w-full rounded-md border bg-zinc-800 px-3 py-2",
        "text-sm text-zinc-200 placeholder:text-zinc-400",
        "focus:outline-none focus:ring-2 focus:ring-zinc-600",
        className
      )}
      {...props}
    />
  )
}