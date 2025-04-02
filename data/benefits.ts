import type { Benefit } from "@/types"

export const benefits: Benefit[] = [
  {
    id: "airalo-1",
    name: "Airalo",
    partnerName: "Airalo",
    shortDescription: "Get 15% off on all Airalo eSIMs with code SAFETY15",
    longDescription: "Airalo is the world's first eSIM store, offering instant connectivity in over 190+ countries and regions. Get 15% off on all eSIMs using code SAFETY15. Perfect for travelers looking for seamless, instant mobile data without the hassle of physical SIM cards.",
    category: "TRAVEL",
    partnerLogo: "/logos/airalo.png",
    actionUrl: "https://www.airalo.com",
    redemptionDetails: "Use code SAFETY15 at checkout to receive 15% off"
  },
  {
    id: "zanzalu-1",
    name: "Zanzalu",
    partnerName: "Zanzalu",
    shortDescription: "Get 15% off on Zanzalu popup village tickets with code ZUZALU15",
    longDescription: "Zanzalu is catalyzing an innovation ecosystem in East Africa by building a global talent hub in Zanzibar. Join us from July 4-August 4, 2024 in Zanzibar, Tanzania for an immersive experience in one of Africa's most vibrant locations. Use code ZUZALU15 for 15% off your ticket.",
    category: "POPUP_CITY",
    partnerLogo: "/logos/zanzalu.png",
    actionUrl: "https://zanzalu.org",
    redemptionDetails: "Use code ZUZALU15 at checkout to receive 15% off your Zanzalu ticket"
  }
]

