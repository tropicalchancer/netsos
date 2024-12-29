import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function LEDControl() {
  const toggleLED = async (state) => {
    try {
      await fetch(`http://192.168.1.200/api/led/${state}`);
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