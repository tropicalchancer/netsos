// components/layout/navigation-layout.tsx
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function NavigationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Render the children (IndexHeader and CitiesGrid) first */}
        {children}
        
        {/* Then the navigation tabs */}
        <div className="mt-6 sm:mt-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start space-x-2 rounded-none border-b border-border pb-px">
              <TabsTrigger
                value="all"
                className="rounded-none border-b-2 border-transparent px-4 pb-4 pt-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground"
              >
                All Cities
              </TabsTrigger>
              <TabsTrigger
                value="active"
                className="rounded-none border-b-2 border-transparent px-4 pb-4 pt-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground"
              >
                Active Now
              </TabsTrigger>
              <TabsTrigger
                value="upcoming"
                className="rounded-none border-b-2 border-transparent px-4 pb-4 pt-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground"
              >
                Upcoming
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  );
}