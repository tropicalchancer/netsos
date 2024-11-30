import React, { useState } from 'react';
import { Redirect } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AuthProtectionProps {
  children: React.ReactNode;
}

export function AuthProtection({ children }: AuthProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-white">Authentication Required</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-300 mb-4">
              This page is only accessible to ZuPass holders. Please authenticate to continue.
            </p>
            <Button 
              onClick={() => setIsAuthenticated(true)}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Connect with ZuPass
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return children;
}