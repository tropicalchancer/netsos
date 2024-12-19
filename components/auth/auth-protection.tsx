"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { zuAuthRedirect } from "@pcd/zuauth/client";
import { allConfigs } from "@/lib/auth";

interface AuthProtectionProps {
  children: React.ReactNode;
}

export function AuthProtection({ children }: AuthProtectionProps) {
  const [isAuthed, setIsAuthed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const proof = urlParams.get("proof");

      if (proof) {
        try {
          if (proof.length > 0) {
            setIsChecking(true);
            fetch("/api/auth/verify", {
              method: "POST",
              body: JSON.stringify({ pcd: proof })
            }).then(res => {
              if (res.ok) {
                setIsAuthed(true);
                const cleanUrl = window.location.pathname;
                window.history.replaceState({}, "", cleanUrl);
              }
            }).catch(err => {
              console.error("Error validating proof:", err);
            }).finally(() => {
              setIsChecking(false);
            });
          }
        } catch (error) {
          console.error("Error validating proof:", error);
        }
      }

      setIsLoading(false);
    }
  }, []);

  const handleLogin = async () => {
    if (isLoading || isAuthed) return;

    try {
      setIsLoading(true);
      // Get the current URL components
      const currentOrigin =
        typeof window !== "undefined" ? window.location.origin : "";
      const currentPath =
        typeof window !== "undefined" ? window.location.pathname : "";

      const returnUrl = `${currentOrigin}${currentPath}`;
      zuAuthRedirect({
        zupassUrl: process.env.NEXT_PUBLIC_ZUPASS_SERVER_URL as string,
        fieldsToReveal: {
          // We might not want the name and email, in which case these can be removed
          revealAttendeeEmail: true,
          revealAttendeeName: true,
          // These cannot be removed and are necessary for authentication to work
          revealEventId: true,
          revealProductId: true,
        },
        config: allConfigs,
        watermark: "0",
        externalNullifier: "0",
        returnUrl: returnUrl,
      });
    } catch (err) {
      console.error("Error initiating login:", err);
      setIsLoading(false);
    }
  };

  if (isLoading || isChecking) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="w-full max-w-md mx-auto">
          <CardContent className="flex items-center justify-center py-8">
            <div className="text-muted-foreground">
              Checking ZuPass credentials...
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isAuthed) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>ZuPass Authentication Required</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              This page requires proof of Zuzalu participant credential. Please
              connect with your ZuPass to verify.
            </p>
            <Button
              onClick={handleLogin}
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Connecting..." : "Verify with ZuPass"}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return children;
}
