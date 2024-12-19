// components/layout/navigation-layout.tsx
import React from 'react';


export function NavigationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Render the children (IndexHeader and CitiesGrid) first */}
        {children}
        
        {/* Then the navigation tabs */}
        
      </div>
    </div>
  );
}