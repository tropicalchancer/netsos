import { AuthProtection } from "@/components/auth/auth-protection"
import { Card } from "@/components/ui/card"

interface PixelBorderProps {
  children: React.ReactNode
}

const PixelBorder = ({ children }: PixelBorderProps) => (
  <div className="relative p-8 border-8 rounded-none bg-background border-muted">
    <div className="absolute inset-0 m-2 border-4 border-background" />
    {children}
  </div>
)

export default function AlephHub() {
  return (
    <AuthProtection>
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="w-full max-w-2xl">
          <Card className="border-0 bg-transparent shadow-none">
            <PixelBorder>
              <div className="space-y-8 text-center">
                <h1 className="mb-8 text-4xl font-bold uppercase tracking-wider text-foreground md:text-6xl">
                  Aleph Hub
                </h1>
                <div className="animate-bounce">
                  <p className="font-mono text-xl text-primary md:text-2xl">
                    ZUZALU VERIFIED
                  </p>
                </div>
                <div className="mt-8">
                  <p className="font-mono text-xl text-muted-foreground">
                    YOU MAY NOW ENTER THE HUB
                  </p>
                </div>
              </div>
            </PixelBorder>
          </Card>
        </div>
      </div>
    </AuthProtection>
  )
}