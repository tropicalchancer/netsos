import type { Experiment } from "@/types"

export const experiments: Experiment[] = [
  {
    id: "exp-1",
    name: "Digital Nomad Visa Program",
    tldr: "Testing streamlined visa processes for popup city participants",
    description: "A comprehensive program to simplify and expedite visa processes for digital nomads participating in popup cities. Working directly with local immigration authorities to create special provisions and fast-track applications for community members.",
    location: "Zuzalu Montenegro",
    rates: [
      {
        name: "Processing Time Reduction",
        value: "50%"
      },
      {
        name: "Participant Satisfaction",
        value: "95%"
      }
    ],
    retroArticle: {
      title: "How We Streamlined the Visa Process",
      url: "https://zuzalu.city/blog/visa-process"
    },
    status: "ACTIVE",
    startDate: "2024-01-01",
    tags: ["governance", "immigration", "community"],
    outcomes: [
      "Reduced visa processing time by 50%",
      "Increased participant satisfaction to 95%",
      "Created reusable template for future popup cities",
      "Established direct communication channel with immigration office"
    ]
  }
  // Add more experiments as needed
]

