'use client'
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ESP32_IP = process.env.NEXT_PUBLIC_ESP32_IP;

export default function LEDControl() {
  const toggleLED = async (state: 'on' | 'off') => {
    try {
      await fetch(`${ESP32_IP}/api/led/${state}`);
    } catch (err) {
      alert('Failed to connect to ESP32');
    }
  };

  return (
    <Card className="w-96 mx-auto mt-8">
      <CardContent className="flex gap-4 p-6">
        <Button onClick={() => toggleLED('on')}>Turn On</Button>
        <Button variant="outline" onClick={() => toggleLED('off')}>Turn Off</Button>
      </CardContent>
    </Card>
  );
}