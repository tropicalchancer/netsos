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

const LOGIN_GROUPS = [
  {
    id: "zuzalu-participant",  
    name: "Zuzalu Participant",
    url: "https://api.zupass.org/semaphore/1"
  },
  {
    id: "zuzalu-resident",     
    name: "Zuzalu Resident",
    url: "https://api.zupass.org/semaphore/2"
  },
  {
    id: "zuzalu-visitor",      
    name: "Zuzalu Visitor",
    url: "https://api.zupass.org/semaphore/3"
  },
  {
    id: "zuzalu-organizer",  
    name: "Zuzalu Organizer",
    url: "https://api.zupass.org/semaphore/4"
  },
  {
    id: "everyone",            
    name: "Everyone",
    url: "https://api.zupass.org/semaphore/5"
  },
  {
    id: "devconnect-attendee", 
    name: "Devconnect Attendee",
    url: "https://api.zupass.org/semaphore/6"
  },
  {
    id: "devconnect-organizer", 
    name: "Devconnect Organizer",
    url: "https://api.zupass.org/semaphore/7"
  },
  {
    id: "zuvillage-georgia",    
    name: "ZuVillage Georgia",
    url: "https://api.zupass.org/generic-issuance/api/semaphore/fca0ba48-125b-43a4-90ef-04f9fdede43d/7ce6f74a-1383-57be-a77a-d4fc04e02f45"
  }
  // Add other groups as needed
];

interface AuthProtectionProps {
  children: React.ReactNode;
}

export function AuthProtection({ children }: AuthProtectionProps) {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedGroupId, setSelectedGroupId] = useState<string>("");
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
    if (!selectedGroupId) {
      setError("Please select a group first");
      return;
    }

    setIsVerifying(true);
    setError(null);
    
    try {
      const ZUPASS_CLIENT_URL = "https://zupass.org";
      const popupUrl = `${window.location.origin}/popup`;
      
      const selectedGroup = LOGIN_GROUPS.find(g => g.id === selectedGroupId);
      if (!selectedGroup) {
        throw new Error("Invalid group selection");
      }
      
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
            remoteUrl: selectedGroup.url
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
              Please select a group and verify with ZuPass to access this content.
            </p>
            
            {/* Simple HTML select element */}
            <select
              value={selectedGroupId}
              onChange={(e) => setSelectedGroupId(e.target.value)}
              className="w-full p-2 rounded-md mb-4 bg-background text-foreground border border-input hover:border-ring focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors"
            >
              <option value="" disabled>Select a verification group</option>
              {LOGIN_GROUPS.map((group) => (
                <option 
                  key={group.id} 
                  value={group.id}
                  className="bg-background text-foreground"
                >
                  {group.name}
                </option>
              ))}
            </select>

            {error && (
              <div className="p-3 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}
            <Button 
              onClick={handleVerify} 
              disabled={isVerifying || !selectedGroupId}
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