import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dices } from 'lucide-react';

const BRUNEL_CREATIONS = [
  {
    type: 'Bridge',
    name: 'Clifton Suspension Bridge',
    year: 1864,
    description: 'Spanning the Avon Gorge in Bristol, this bridge stands 101m above the water and remains in use today.'
  },
  {
    type: 'Ship',
    name: 'SS Great Britain',
    year: 1843,
    description: 'The first iron steamer to cross the Atlantic, revolutionizing ship building with its screw propeller and iron hull.'
  },
  {
    type: 'Railway',
    name: 'Great Western Railway',
    year: 1838,
    description: "Known as God's Wonderful Railway, it connected London to Bristol with remarkable engineering feats."
  },
  {
    type: 'Bridge',
    name: 'Royal Albert Bridge',
    year: 1859,
    description: 'This railway bridge spans the River Tamar between Plymouth and Saltash, using revolutionary tubular support design.'
  },
  {
    type: 'Ship',
    name: 'SS Great Eastern',
    year: 1858,
    description: 'The largest ship ever built at the time, it was designed to carry 4,000 passengers to Australia without refueling.'
  },
  {
    type: 'Quote',
    name: 'On Engineering',
    year: 1830,
    description: 'I am opposed to the laying down of rules or conditions to be observed in the construction of bridges lest the progress of improvement tomorrow might be embarrassed or shackled by recording or registering as law the prejudices or errors of today.'
  }
];

const BrunelShowcase = () => {
  const [currentCreation, setCurrentCreation] = useState(BRUNEL_CREATIONS[0]);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinSlotMachine = () => {
    setIsSpinning(true);
    let spins = 0;
    const maxSpins = 10;
    const interval = setInterval(() => {
      setCurrentCreation(BRUNEL_CREATIONS[Math.floor(Math.random() * BRUNEL_CREATIONS.length)]);
      spins++;
      if (spins >= maxSpins) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, 100);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardContent className="space-y-6 p-6">
        <div className="min-h-[200px] p-6 bg-muted rounded-lg">
          <h3 className="text-xl font-bold mb-2">{currentCreation.name} ({currentCreation.year})</h3>
          <p className="text-sm text-muted-foreground mb-2">Type: {currentCreation.type}</p>
          <p className="text-muted-foreground">{currentCreation.description}</p>
        </div>
        <Button 
          onClick={spinSlotMachine} 
          disabled={isSpinning}
          className="w-full"
        >
          <Dices className="mr-2 h-4 w-4" />
          {isSpinning ? 'Spinning...' : 'Discover Another Creation'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BrunelShowcase;