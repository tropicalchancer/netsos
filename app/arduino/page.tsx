'use client'
import LEDControl from "@/components/led/led-control"

// Removed AuthProtection completely for ESP32 control
export default function ArduinoPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Coffee Machine Control</h1>
      <LEDControl />
    </div>
  );
}