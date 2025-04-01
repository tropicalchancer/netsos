"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useZupassPopupMessages } from "@pcd/passport-interface/PassportPopup/react";
import { openZupassPopup } from "@pcd/passport-interface/PassportPopup/core";
import { constructZupassPcdGetRequestUrl } from "@pcd/passport-interface/PassportInterface";
import { ArgumentTypeName } from "@pcd/pcd-types";
import { SemaphoreGroupPCDTypeName } from "@pcd/semaphore-group-pcd/SemaphoreGroupPCD";
import { SemaphoreIdentityPCDTypeName } from "@pcd/semaphore-identity-pcd/SemaphoreIdentityPCD";
import { generateSnarkMessageHash } from "@pcd/util";

interface AuthProtectionProps {
  children: React.ReactNode;
}

export function AuthProtection({ children }: AuthProtectionProps) {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pcdStr] = useZupassPopupMessages();
  const [error, setError] = useState<string | null>(null);

  // Reset authentication state on mount - always require verification
  useEffect(() => {
    setIsAuthenticated(false);
  }, []);

  // Process incoming proofs from popup
  useEffect(() => {
    if (!pcdStr) return;
    
    setIsVerifying(true);
    setError(null);
    
    console.log("Received proof from Zupass:", pcdStr);
    
    try {
      if (pcdStr && typeof pcdStr === "string" && pcdStr.length > 0) {
        // Successfully received a proof
        setIsAuthenticated(true);
      } else {
        setError("Invalid proof received");
      }
    } catch (err) {
      console.error("Error processing proof:", err);
      setError("Failed to process authentication");
    } finally {
      setIsVerifying(false);
    }
  }, [pcdStr]);

  const handleVerify = () => {
    setIsVerifying(true);
    setError(null);
    
    try {
      // Using the exact same URL format as Zupoll
      const ZUPASS_CLIENT_URL = "https://zupass.org";
      const ZUPASS_SERVER_URL = "https://api.zupass.org"; 
      const popupUrl = `${window.location.origin}/popup`;
      
      // This is the correct format used by Zupoll
      const ZUZALU_PARTICIPANTS_GROUP_URL = `${ZUPASS_SERVER_URL}/semaphore/1`;
      
      const proofUrl = constructZupassPcdGetRequestUrl(
        ZUPASS_CLIENT_URL,
        popupUrl,
        SemaphoreGroupPCDTypeName,
        {
          externalNullifier: {
            argumentType: ArgumentTypeName.BigInt,
            userProvided: false,
            value: generateSnarkMessageHash("netsos").toString()
          },
          group: {
            argumentType: ArgumentTypeName.Object,
            userProvided: false,
            remoteUrl: ZUZALU_PARTICIPANTS_GROUP_URL
          },
          identity: {
            argumentType: ArgumentTypeName.PCD,
            pcdType: SemaphoreIdentityPCDTypeName,
            value: undefined,
            userProvided: true
          },
          signal: {
            argumentType: ArgumentTypeName.BigInt,
            userProvided: false,
            value: "1"
          }
        },
        {
          title: "SIGN IN WITH ZUPASS",
          description: "NetSOS Benefits",
          requesterUrl: window.location.origin
        }
      );
      
      console.log("Opening Zupass popup with URL:", proofUrl);
      openZupassPopup(popupUrl, proofUrl);
      
    } catch (err) {
      console.error("Failed to open Zupass:", err);
      setError("Failed to connect to Zupass");
      setIsVerifying(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto py-8">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>ZuPass Authentication Required</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Please verify with ZuPass to access this content.
            </p>
            {error && (
              <div className="p-3 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}
            <Button 
              onClick={handleVerify} 
              disabled={isVerifying}
              className="w-full"
            >
              {isVerifying ? "Verifying..." : "Verify with ZuPass"}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return children;
}