"use client"

import React, { useState, useEffect } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface AuthProtectionProps {
  children: React.ReactNode
}

interface ProveRequest {
  type: string
  returnUrl: string
  args: {
    group: {
      argumentType: string
      userProvided: boolean
      remoteUrl: string
    }
    identity: {
      argumentType: string
      pcdType: string
      userProvided: boolean
    }
    signal: {
      argumentType: string
      userProvided: boolean
      value: string
    }
    externalNullifier?: {
      argumentType: string
      userProvided: boolean
      value: string
    }
  }
  pcdType: string
  options: {
    title: string
    description: string
    requesterUrl: string
  }
}

function constructProveUrl(request: ProveRequest) {
  const baseUrl = "https://zupass.org/#/prove"
  const params = new URLSearchParams()
  params.set("request", JSON.stringify(request))
  return `${baseUrl}?${params.toString()}`
}

export function AuthProtection({ children }: AuthProtectionProps) {
  const [isAuthed, setIsAuthed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const proof = urlParams.get("proof")

      if (proof) {
        try {
          if (proof.length > 0) {
            setIsAuthed(true)
            const cleanUrl = window.location.pathname
            window.history.replaceState({}, "", cleanUrl)
          }
        } catch (error) {
          console.error("Error validating proof:", error)
        }
      }

      setIsLoading(false)
    }
  }, [])

  const handleLogin = async () => {
    if (isLoading || isAuthed) return

    try {
      setIsLoading(true)
      
      // Get the current URL components
      const currentOrigin = typeof window !== 'undefined' ? window.location.origin : ''
      const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''
      
      // Construct the return URL using the actual origin
      const returnUrl = `${currentOrigin}${currentPath}`

      const request: ProveRequest = {
        type: "Get",
        returnUrl: returnUrl,
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
          requesterUrl: currentOrigin,
        },
      }

      window.location.href = constructProveUrl(request)
    } catch (err) {
      console.error("Error initiating login:", err)
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="w-full max-w-md mx-auto">
          <CardContent className="flex items-center justify-center py-8">
            <div className="text-muted-foreground">Checking ZuPass credentials...</div>
          </CardContent>
        </Card>
      </div>
    )
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
              This page requires proof of Zuzalu participant credential. Please connect with your ZuPass to verify.
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
    )
  }

  return children
}