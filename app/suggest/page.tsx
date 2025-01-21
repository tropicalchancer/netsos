// File: /app/suggest/page.tsx

'use client';

import SuggestionForm from '@/components/low-touch-popup/suggestion-form';

export default function SuggestPage() {
  return (
    <div className="container mx-auto py-8">
      <SuggestionForm />
      
      <div className="max-w-2xl mx-auto mt-12 p-4">
        <h2 className="text-2xl font-bold mb-4">What is a Low-Touch Popup?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          Think of it as an open invitation to join a casual nomad hangout spot. No strict commitments, 
          no rigid schedules - just like-minded people choosing to be in the same neighborhood for a while.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          You can join the group chat, suggest activities, or just do your own thing. 
          It is all about creating opportunities for serendipitous connections while maintaining 
          the freedom to choose how involved you want to be.
        </p>
      </div>
    </div>
  );
}