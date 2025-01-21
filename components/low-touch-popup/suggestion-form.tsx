'use client';

import React, { useState } from 'react';

const vibeOptions: string[] = [
  'chill', 'digital nomads', 'families', 'coworking',
  'creative', 'party', 'wellness', 'lock-in mode'
];

const SuggestionForm: React.FC = () => {
  const [selectedVibes, setSelectedVibes] = useState<string[]>([]);
  const [customVibe, setCustomVibe] = useState<string>('');
  
  const handleVibeSelection = (vibe: string): void => {
    setSelectedVibes(prev => 
      prev.includes(vibe) 
        ? prev.filter(v => v !== vibe)
        : [...prev, vibe]
    );
  };

  const handleCustomVibeAdd = (): void => {
    if (customVibe.trim() && !selectedVibes.includes(customVibe)) {
      setSelectedVibes(prev => [...prev, customVibe.trim()]);
      setCustomVibe('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-[#0D1117] rounded-lg p-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-3 text-white">Suggest a Low-Touch Popup</h1>
            <p className="text-lg text-gray-400">
              Share your dream destination for the next nomad hangout spot! Keep it simple, keep it fun.
            </p>
          </div>

          <div className="space-y-3">
            <label className="block text-xl font-medium text-white">Neighborhood</label>
            <input 
              type="text"
              placeholder="e.g. Palermo, Buenos Aires" 
              className="w-full text-lg p-3 rounded-lg bg-[#1C2128] border border-[#30363D] 
                       text-gray-300 placeholder-gray-500 focus:outline-none 
                       focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-xl font-medium text-white">Why this location?</label>
            <textarea 
              placeholder="Tell us what makes this neighborhood special..."
              className="w-full text-lg p-3 rounded-lg bg-[#1C2128] border border-[#30363D]
                       text-gray-300 placeholder-gray-500 min-h-[100px] focus:outline-none
                       focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-xl font-medium text-white">Vibes</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Add custom vibe..."
                value={customVibe}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCustomVibe(e.target.value)}
                className="flex-grow text-lg p-3 rounded-lg bg-[#1C2128] border border-[#30363D]
                         text-gray-300 placeholder-gray-500 focus:outline-none
                         focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <button 
                onClick={handleCustomVibeAdd}
                type="button"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg
                         text-lg font-medium transition-colors"
              >
                Add Vibe
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {vibeOptions.map((vibe) => (
                <button
                  key={vibe}
                  onClick={() => handleVibeSelection(vibe)}
                  type="button"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedVibes.includes(vibe)
                      ? 'bg-blue-500 text-white'
                      : 'bg-[#1C2128] text-gray-300 border border-[#30363D] hover:border-gray-500'
                  }`}
                >
                  {selectedVibes.includes(vibe) ? '✓ ' : '+ '}
                  {vibe}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <label className="block text-xl font-medium text-white">Start Date</label>
              <input 
                type="date" 
                className="w-full text-lg p-3 rounded-lg bg-[#1C2128] border border-[#30363D]
                         text-gray-300 focus:outline-none focus:border-blue-500 
                         focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-3">
              <label className="block text-xl font-medium text-white">End Date</label>
              <input 
                type="date" 
                className="w-full text-lg p-3 rounded-lg bg-[#1C2128] border border-[#30363D]
                         text-gray-300 focus:outline-none focus:border-blue-500 
                         focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <button 
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-lg
                     text-xl font-medium transition-colors mt-6"
          >
            Suggest Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuggestionForm;