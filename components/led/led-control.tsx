import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ESP32_IP = process.env.NEXT_PUBLIC_ESP32_IP;

export default function LEDControl() {
  const triggerRelay = async () => {
    try {
      await fetch(`${ESP32_IP}/api/led/on`);  // Will auto-turn off after 3s
    } catch {
      alert('Failed to connect to ESP32');
    }
  };

  return (
    <Card className="w-96 mx-auto mt-8">
      <CardContent className="flex gap-4 p-6">
        <Button onClick={triggerRelay}>Brew Coffee (3s)</Button>
      </CardContent>
    </Card>
  );
}