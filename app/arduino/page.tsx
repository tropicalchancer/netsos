'use client'
import LEDControl from "@/components/led/led-control"
import { AuthProtection } from "@/components/auth/auth-protection"

export default function ArduinoPage() {
  return (
    <AuthProtection>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Light Control</h1>
        <LEDControl />
      </div>
    </AuthProtection>
  )
}