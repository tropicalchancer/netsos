import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container max-w-2xl mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl">About Netsos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <p className="text-lg">
              Netsos = network societies
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Mission</h2>
            <p className="text-lg leading-relaxed">
              Support the Zuzalu (and wider popup city) ecosystem. Make it easier to navigate 
              and get involved. Support organizers, contributors, and technologists.
            </p>
          </section>

          <section>
            <p className="text-lg">
              There&apos;s also a Telegram group for{" "}
              <a 
                href="https://t.me/popupcityupdates" 
                className="font-medium text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Popup City Updates here
              </a>.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}