'use client'
import LEDControl from "@/components/led/led-control"
import { AuthProtection } from "@/components/auth/auth-protection"
import BrunelShowcase from "@/components/brunel-showcase"

export default function ArduinoPage() {
  return (
    <AuthProtection>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Light Control</h1>
        <LEDControl />
        <h2 className="text-xl font-semibold mt-12 mb-4 text-center">Isambard Kingdom Brunel&apos;s Legacy</h2>
        <BrunelShowcase />
      </div>
    </AuthProtection>
  )
}