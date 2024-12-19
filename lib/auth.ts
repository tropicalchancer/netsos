import type { PipelineEdDSATicketZuAuthConfig } from "@pcd/passport-interface";

const zanzaluConfig: PipelineEdDSATicketZuAuthConfig[] = [
  {
    "pcdType": "eddsa-ticket-pcd",
    "publicKey": [
      "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
      "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
    ],
    "productId": "2c4c93f0-7739-53b3-aa9b-9c09c2a31c6d",
    "eventId": "998af319-ac17-5505-b11d-76b497418adc",
    "eventName": "Zanzalu 2024",
    "productName": "Resident"
  }
]

const zuVillageGeorgiaConfig: PipelineEdDSATicketZuAuthConfig[] = [
  {
    "pcdType": "eddsa-ticket-pcd",
    "publicKey": [
      "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
      "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
    ],
    "productId": "aecf9f84-b92f-5b40-8541-cbb48f4d6267",
    "eventId": "6f5f194b-97b5-5fe9-994d-0998f3eacc75",
    "eventName": "ZuVillage Georgia",
    "productName": "Contributor"
  }
]

const zuzaluConfig: PipelineEdDSATicketZuAuthConfig[] = [
  {
    pcdType: "eddsa-ticket-pcd",
    publicKey: ["05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e","29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f"],
    eventId: "5de90d09-22db-40ca-b3ae-d934573def8b",
    eventName: "Zuzalu",
    productId: "5ba4cd9e-893c-4a4a-b15b-cf36ceda1938",
    productName: "Resident"
  },
  {
    pcdType: "eddsa-ticket-pcd",
    publicKey: ["05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e","29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f"],
    eventId: "5de90d09-22db-40ca-b3ae-d934573def8b",
    eventName: "Zuzalu",
    productId: "10016d35-40df-4033-a171-7d661ebaccaa",
    productName: "Organizer"
  },
  {
    pcdType: "eddsa-ticket-pcd",
    publicKey: ["05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e","29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f"],
    eventId: "5de90d09-22db-40ca-b3ae-d934573def8b",
    eventName: "Zuzalu",
    productId: "53b518ed-e427-4a23-bf36-a6e1e2764256",
    productName: "Visitor"
  }
];

const zuConnectConfig: PipelineEdDSATicketZuAuthConfig[] = [
  {
    pcdType: "eddsa-ticket-pcd",
    publicKey: ["05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e","29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f"],
    eventId: "91312aa1-5f74-4264-bdeb-f4a3ddb8670c",
    eventName: "ZuConnect",
    productId: "cc9e3650-c29b-4629-b275-6b34fc70b2f9",
    productName: "Resident"
  },
  {
    pcdType: "eddsa-ticket-pcd",
    publicKey: ["05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e","29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f"],
    eventId: "54863995-10c4-46e4-9342-75e48b68d307",
    eventName: "ZuConnect",
    productId: "d2123bf9-c027-4851-b52c-d8b73fc3f5af",
    productName: "First Week"
  },
  {
    pcdType: "eddsa-ticket-pcd",
    publicKey: ["05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e","29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f"],
    eventId: "797de414-2aec-4ef8-8655-09df7e2b6cc6",
    eventName: "ZuConnect",
    productId: "d3620f38-56a9-4235-bea8-0d1dba6bb623",
    productName: "Scholarship"
  },
  {
    pcdType: "eddsa-ticket-pcd",
    publicKey: ["05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e","29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f"],
    eventId: "f7370f63-b9ae-480c-9ded-0663f1922bef",
    eventName: "ZuConnect",
    productId: "0179ed5b-f265-417c-aeaa-ac61a525c6b0",
    productName: "Organizer"
  }
];

export const allConfigs = [...zanzaluConfig, ...zuVillageGeorgiaConfig, ...zuzaluConfig, ...zuConnectConfig];