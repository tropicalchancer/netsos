import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AuthProtectionProps {
  children: React.ReactNode;
}

interface ProveRequest {
  type: string;
  returnUrl: string;
  args: {
    group: {
      argumentType: string;
      userProvided: boolean;
      remoteUrl: string;
    };
    identity: {
      argumentType: string;
      pcdType: string;
      userProvided: boolean;
    };
    signal: {
      argumentType: string;
      userProvided: boolean;
      value: string;
    };
    externalNullifier?: {
      argumentType: string;
      userProvided: boolean;
      value: string;
    };
  };
  pcdType: string;
  options: {
    title: string;
    description: string;
    requesterUrl: string;
  };
}

// Utility function to construct prove URL
function constructProveUrl(request: ProveRequest) {
  const baseUrl = "https://zupass.org/#/prove";
  const params = new URLSearchParams();
  params.set("request", JSON.stringify(request));
  return `${baseUrl}?${params.toString()}`;
}

export function AuthProtection({ children }: AuthProtectionProps) {
  const [isAuthed, setIsAuthed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const proof = urlParams.get("proof");

    console.log("Debug: Current URL:", window.location.href); // Debug: Current URL
    console.log("Debug: Proof parameter (raw):", proof); // Debug: Raw proof
    console.log("Debug: Proof parameter (decoded):", proof ? decodeURIComponent(proof) : "null"); // Debug: Decoded proof

    if (proof) {
      try {
        if (proof.length > 0) {
          console.log("Debug: Proof is valid. Authenticating user...");
          setIsAuthed(true);

          // Remove query parameters after authentication
          const cleanUrl = window.location.pathname;
          window.history.replaceState({}, "", cleanUrl);
          console.log("Debug: Cleaned URL:", cleanUrl);
        } else {
          console.error("Debug: Proof is invalid or empty.");
        }
      } catch (error) {
        console.error("Error validating proof:", error);
      }
    } else {
      console.warn("Debug: No proof parameter found in the URL.");
    }

    setIsLoading(false);
  }, []);

  const handleLogin = async () => {
    if (isLoading || isAuthed) return; // Prevent duplicate login attempts

    try {
      setIsLoading(true);

      // Request payload for ZuPass
      const request: ProveRequest = {
        type: "Get",
        returnUrl: window.location.href, // Ensure this URL is accurate
        args: {
          externalNullifier: {
            argumentType: "BigInt",
            userProvided: false,
            value: "349792840326278579327614575712649752952729059724980772145639015969705472900",
          },
          group: {
            argumentType: "Object",
            userProvided: false,
            remoteUrl: "https://api.zupass.org/semaphore/1",
          },
          identity: {
            argumentType: "PCD",
            pcdType: "semaphore-identity-pcd",
            userProvided: true,
          },
          signal: {
            argumentType: "BigInt",
            userProvided: false,
            value: "1",
          },
        },
        pcdType: "semaphore-group-signal",
        options: {
          title: "SIGN IN WITH ZUPASS",
          description: "Verify Zuzalu participant credential",
          requesterUrl: window.location.origin,
        },
      };

      const proveUrl = constructProveUrl(request);
      console.log("Debug: Redirecting to ZuPass Prove URL:", proveUrl); // Debug: Prove URL
      window.location.href = proveUrl;
    } catch (err) {
      console.error("Error initiating login:", err);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="w-full max-w-md mx-auto">
          <CardContent className="flex items-center justify-center py-8">
            <div className="text-zinc-300">Checking ZuPass credentials...</div>
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
            <CardTitle className="text-white">ZuPass Authentication Required</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-300 mb-4">
              This page requires proof of Zuzalu participant credential. Please connect with your
              ZuPass to verify.
            </p>
            <Button
              onClick={handleLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
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
