import { PopupCity } from '../types/popup-city-v2';

// Helper function to determine status based on dates
const getStatus = (startDate: string, endDate: string): "UPCOMING" | "ON_NOW" | "FINISHED" => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  if (now < start) return "UPCOMING";
  if (now > end) return "FINISHED";
  return "ON_NOW";
};

export const popupCities: PopupCity[] = [
  {
    // Card Info
    id: "zuzalu-montenegro-2023",
    name: "Zuzalu Montenegro",
    slug: "zuzalu-montenegro-2023",
    status: getStatus("2023-03-25", "2023-05-25"),
    startDate: "2023-03-25",
    endDate: "2023-05-25",
    brand: "ZUZALU",
    coverImage: {
      url: "https://images.unsplash.com/photo-1555990793-da11153b2473",
      photographer: {
        name: "Anita Jankovic",
        username: "anitajankovic"
      },
      source: "Unsplash"
    },
    tagline: "The original Zuzalu event",
    tags: ["community", "innovation", "technology", "network-states"],
    location: {
      city: "Lustica Bay",
      country: "MONTENEGRO"
    },

    // Detailed Info
    description: "OG Zuzalu event",
    timezone: "Europe/Podgorica",
    coordinates: {
      latitude: 42.3739,
      longitude: 18.6726
    },
    notes: {
      description: "The inaugural Zuzalu event that started it all. A two-month gathering that laid the foundation for future popup communities focused on innovation, technology, and human flourishing.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "N / A",
      application: "N / A"
    },
    amenities: [
      "Coworking Space",
      "Community Events",
      "Tech Workshops",
      "Networking Opportunities",
      "Seaside Location",
      "Innovation Hub"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "shanhaiwoo-2023",
    name: "ShanHaiWoo",
    slug: "shanhaiwoo-2023",
    status: getStatus("2023-08-05", "2023-08-31"),
    startDate: "2023-08-05",
    endDate: "2023-08-31",
    brand: "SHANHAIWOO",
    coverImage: {
      url: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403",
      photographer: {
        name: "Zhang Kaiyv",
        username: "zhangkaiyv"
      },
      source: "Unsplash"
    },
    tagline: "Shanhaiwu: A month-long Web3 and AI-focused co-living event at Beida Lake Ski Resort",
    tags: ["web3", "ai", "creator-economy", "sustainability", "community"],
    location: {
      city: "Shanghai",
      country: "CHINA"
    },

    // Detailed Info
    description: "The Shanhaiwu event jointly initiated by various communities, focusing on Web3, artificial intelligence, creator economy, and sustainability.",
    timezone: "Asia/Shanghai",
    coordinates: {
      latitude: 31.2304,
      longitude: 121.4737
    },
    notes: {
      description: "Join a diverse community of innovators for a month-long exploration of Web3, AI, and sustainable technologies. Experience collaborative living while contributing to the future of the creator economy.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.shanhaiwoo.com/",
      twitter: "https://x.com/shanhaiwoo",
      application: "https://www.shanhaiwoo.com/"
    },
    amenities: [
      "Coworking Space",
      "AI Labs",
      "Web3 Workshops",
      "Creator Studios",
      "Community Events",
      "Sustainability Programs"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "shanhaiwoo-2-2024",
    name: "ShanHaiWoo 2",
    slug: "shanhaiwoo-2-2024",
    status: getStatus("2024-09-30", "2024-11-10"),
    startDate: "2024-09-30",
    endDate: "2024-11-10",
    brand: "SHANHAIWOO",
    coverImage: {
      url: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403",
      photographer: {
        name: "Zhang Kaiyv",
        username: "zhangkaiyv"
      },
      source: "Unsplash"
    },
    tagline: "A six-week pop-up village for co-learning and co-creating, Sept 30–Nov 10, 2024",
    tags: ["co-learning", "co-creation", "community", "innovation", "thailand"],
    location: {
      city: "Chiang Mai",
      country: "THAILAND"
    },

    // Detailed Info
    description: "A six-week co-learning and co-creating pop-up village is about to set sail in Sept 30 to Nov 10, 2024",
    timezone: "Asia/Bangkok",
    coordinates: {
      latitude: 18.7883,
      longitude: 98.9853
    },
    notes: {
      description: "Join us for six weeks of intensive co-learning and co-creation in the vibrant setting of Chiang Mai. Experience a unique pop-up village designed to foster collaboration, innovation, and community building.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.shanhaiwoo.com/",
      twitter: "https://x.com/shanhaiwoo/status/1809822202868691457",
      application: "https://www.shanhaiwoo.com/"
    },
    amenities: [
      "Coworking Space",
      "Learning Labs",
      "Community Events",
      "Innovation Hub",
      "Creative Studios",
      "Collaboration Spaces"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "invisible-garden-2024",
    name: "Invisible Garden",
    slug: "invisible-garden-2024",
    status: getStatus("2024-09-30", "2024-11-10"),
    startDate: "2024-09-30",
    endDate: "2024-11-10",
    brand: "TBD",
    coverImage: {
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1",
      photographer: {
        name: "Markus Spiske",
        username: "markusspiske"
      },
      source: "Unsplash"
    },
    tagline: "Ethereum & ZKP dev city #0",
    tags: ["ethereum", "zkp", "blockchain", "development", "technology"],
    location: {
      city: "Chiang Mai",
      country: "THAILAND"
    },

    // Detailed Info
    description: "Ethereum and ZKP dev city #0",
    timezone: "Asia/Bangkok",
    coordinates: {
      latitude: 18.7883,
      longitude: 98.9853
    },
    notes: {
      description: "Join the inaugural gathering of Ethereum and Zero-Knowledge Proof developers in Chiang Mai. Experience six weeks of intensive development, collaboration, and innovation in a community-driven environment.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://invisible.garden/",
      twitter: "https://x.com/invisiblgarden",
      application: "https://invisible.garden/"
    },
    amenities: [
      "Developer Workspace",
      "ZKP Labs",
      "Ethereum Workshops",
      "Community Events",
      "Tech Infrastructure",
      "Networking Sessions"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "muchiangmai-2023",
    name: "MuChiangMai",
    slug: "muchiangmai-2023",
    status: getStatus("2023-09-15", "2023-10-31"),
    startDate: "2023-09-15",
    endDate: "2023-10-31",
    brand: "THE MU",
    coverImage: {
      url: "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e",
      photographer: {
        name: "Mathew Schwartz",
        username: "cadop"
      },
      source: "Unsplash"
    },
    tagline: "Co-learn and co-build with blockchain and cryptography's brightest in 6 weeks",
    tags: ["blockchain", "cryptography", "learning", "community", "technology"],
    location: {
      city: "Chiang Mai",
      country: "THAILAND"
    },

    // Detailed Info
    description: "Co-learn & co-build 6 weeks with the brightest in blockchain & cryptography.",
    timezone: "Asia/Bangkok",
    coordinates: {
      latitude: 18.7883,
      longitude: 98.9853
    },
    notes: {
      description: "Join us for six weeks of intensive learning and building in blockchain and cryptography. Work alongside industry experts and fellow innovators in the vibrant setting of Chiang Mai.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://the-mu.xyz/blog/muchiangmai",
      twitter: "https://x.com/themu_xyz",
      application: "https://the-mu.xyz/blog/muchiangmai"
    },
    amenities: [
      "Coworking Space",
      "Blockchain Labs",
      "Cryptography Workshops",
      "Learning Sessions",
      "Community Events",
      "Tech Infrastructure"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "zuconnect-2023",
    name: "ZuConnect",
    slug: "zuconnect-2023",
    status: getStatus("2023-10-29", "2023-11-11"),
    startDate: "2023-10-29",
    endDate: "2023-11-11",
    brand: "ZUZALU",
    coverImage: {
      url: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
      photographer: {
        name: "Fatih Yürür",
        username: "fatihyurur"
      },
      source: "Unsplash"
    },
    tagline: "ZK, public goods, network states, longevity, and the future of Zuzalu scouting",
    tags: ["zk", "public-goods", "network-states", "longevity", "zuzalu"],
    location: {
      city: "Istanbul",
      country: "TURKEY"
    },

    // Detailed Info
    description: "ZK, Public goods, Network States, Longevity, Scouting/Zuzalu Future",
    timezone: "Europe/Istanbul",
    coordinates: {
      latitude: 41.0082,
      longitude: 28.9784
    },
    notes: {
      description: "A gathering focused on zero-knowledge proofs, public goods, network states, and longevity research. Join fellow innovators in exploring the future of Zuzalu and its impact on technology and society.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "N / A",
      application: "N / A"
    },
    amenities: [
      "Coworking Space",
      "Tech Workshops",
      "ZK Labs",
      "Networking Events",
      "Innovation Hub",
      "Community Activities"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "wamotopia-chiang-mai-2023",
    name: "Wamotopia Chiang Mai",
    slug: "wamotopia-chiang-mai-2023",
    status: getStatus("2023-12-05", "2024-01-05"),
    startDate: "2023-12-05",
    endDate: "2024-01-05",
    brand: "TBD",
    coverImage: {
      url: "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e",
      photographer: {
        name: "Mathew Schwartz",
        username: "cadop"
      },
      source: "Unsplash"
    },
    tagline: "WAMO: Merging Web3, AI, digital art, and social action for cultural evolution",
    tags: ["web3", "ai", "digital-art", "social-action", "culture"],
    location: {
      city: "Chiang Mai",
      country: "THAILAND"
    },

    // Detailed Info
    description: "WAMO is a collaborative series of events to open up new culture by combining Web3, AI creator culture, humanistic digital art, and creative social action.",
    timezone: "Asia/Bangkok",
    coordinates: {
      latitude: 18.7883,
      longitude: 98.9853
    },
    notes: {
      description: "Join a month-long exploration at the intersection of Web3, AI, and digital art. Experience how technology and creativity can drive social action and cultural evolution in the vibrant setting of Chiang Mai.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.notion.so/wamo/4937122f2cae493495b430ef491a9289",
      twitter: "https://twitter.com/Wamo_topia",
      application: "https://www.notion.so/wamo/4937122f2cae493495b430ef491a9289"
    },
    amenities: [
      "Creative Studios",
      "AI Labs",
      "Web3 Workshops",
      "Art Spaces",
      "Community Events",
      "Cultural Programs"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "vitalia-2024",
    name: "Vitalia",
    slug: "vitalia-2024",
    status: getStatus("2024-01-06", "2024-02-29"),
    startDate: "2024-01-06",
    endDate: "2024-02-29",
    brand: "VITALIA",
    coverImage: {
      url: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50",
      photographer: {
        name: "Ivana Cajina",
        username: "von_co"
      },
      source: "Unsplash"
    },
    tagline: "A decentralized city boosting longevity biotech, starting in Roatán, @Prosperahn ZEDE",
    tags: ["longevity", "biotech", "decentralization", "research", "innovation"],
    location: {
      city: "Roatán",
      country: "HONDURAS"
    },

    // Detailed Info
    description: "A decentralised city that accelerates longevity biotech development, starting with a permanent hub on Roatán in the jurisdiction of @Prosperahn ZEDE",
    timezone: "America/Tegucigalpa",
    coordinates: {
      latitude: 16.3219,
      longitude: -86.5319
    },
    notes: {
      description: "Join a pioneering community focused on accelerating longevity biotech development in a unique island setting. Experience the intersection of decentralized governance and cutting-edge research while contributing to the future of human healthspan.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.vitalia.city/",
      twitter: "https://x.com/VitaliaCity",
      application: "https://www.vitalia.city/"
    },
    amenities: [
      "Biotech Labs",
      "Research Facilities",
      "Coworking Space",
      "Community Events",
      "Beachfront Location",
      "Innovation Hub"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "mubuenos-2024",
    name: "MuBuenos",
    slug: "mubuenos-2024",
    status: getStatus("2024-03-15", "2024-04-28"),
    startDate: "2024-03-15",
    endDate: "2024-04-28",
    brand: "THE MU",
    coverImage: {
      url: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e",
      photographer: {
        name: "Renzo D'Andrea",
        username: "renzodandrea"
      },
      source: "Unsplash"
    },
    tagline: "A dev-focused 6-week pop-up city in Buenos Aires, Argentina",
    tags: ["developers", "technology", "innovation", "community", "argentina"],
    location: {
      city: "Buenos Aires",
      country: "ARGENTINA"
    },

    // Detailed Info
    description: "A dev-focused 6-week popup city in Buenos Aires, Argentina 🇦🇷",
    timezone: "America/Argentina/Buenos_Aires",
    coordinates: {
      latitude: -34.6037,
      longitude: -58.3816
    },
    notes: {
      description: "Join us for six weeks of intensive development and collaboration in the vibrant tech ecosystem of Buenos Aires. Experience a unique blend of Latin American culture and cutting-edge technology while working alongside fellow developers.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://the-mu.xyz/blog/mubuenos",
      twitter: "https://x.com/themu_xyz",
      application: "https://the-mu.xyz/blog/mubuenos"
    },
    amenities: [
      "Coworking Space",
      "Developer Workshops",
      "Hackathon Events",
      "Tech Infrastructure",
      "Community Events",
      "Cultural Programs"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "zuberlin-2024",
    name: "ZuBerlin",
    slug: "zuberlin-2024",
    status: getStatus("2024-06-08", "2024-06-22"),
    startDate: "2024-06-08",
    endDate: "2024-06-22",
    brand: "ZUBERLIN",
    coverImage: {
      url: "https://images.unsplash.com/photo-1560969184-10fe8719e047",
      photographer: {
        name: "Sebastian Herrmann",
        username: "herrherrmann"
      },
      source: "Unsplash"
    },
    tagline: "A two-week Berlin residency, June 8–22, connecting tech innovators",
    tags: ["technology", "innovation", "community", "berlin", "residency"],
    location: {
      city: "Berlin",
      country: "GERMANY"
    },

    // Detailed Info
    description: "A two-week immersive residency in Berlin from June 8th till 22nd to connect people at the cutting edge of technology",
    timezone: "Europe/Berlin",
    coordinates: {
      latitude: 52.5200,
      longitude: 13.4050
    },
    notes: {
      description: "Join us for an intensive two-week residency designed to bring together innovators at the cutting edge of technology. Experience Berlin's vibrant tech scene while collaborating with forward-thinking individuals in a community-driven environment.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://zu.garden/",
      twitter: "https://x.com/ZuBerlinCity",
      application: "https://zu.garden/"
    },
    amenities: [
      "Coworking Space",
      "Tech Workshops",
      "Networking Events",
      "Innovation Hub",
      "Community Activities",
      "Urban Experience"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "muaccra-2024",
    name: "MuAccra",
    slug: "muaccra-2024",
    status: getStatus("2024-06-09", "2024-06-22"),
    startDate: "2024-06-09",
    endDate: "2024-06-22",
    brand: "THE MU",
    coverImage: {
      url: "https://images.unsplash.com/photo-1567945716310-4745a6b7844b",
      photographer: {
        name: "Kojo Kwarteng",
        username: "kojokwarteng"
      },
      source: "Unsplash"
    },
    tagline: "Connecting minds to solve real-world problems—Accra, Ghana edition",
    tags: ["innovation", "africa", "technology", "problem-solving", "community"],
    location: {
      city: "Accra",
      country: "GHANA"
    },

    // Detailed Info
    description: "Connecting minds to learn and build practical solutions for real-world problems. Accra, Ghana edition.",
    timezone: "Africa/Accra",
    coordinates: {
      latitude: 5.6037,
      longitude: -0.1870
    },
    notes: {
      description: "Join us for two weeks of collaborative problem-solving and innovation in Accra. Work alongside bright minds to develop practical solutions that address real-world challenges while experiencing Ghana's vibrant tech ecosystem.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://the-mu.xyz/blog/muaccra-report",
      twitter: "https://x.com/themu_xyz",
      application: "https://the-mu.xyz/blog/muaccra-report"
    },
    amenities: [
      "Coworking Space",
      "Innovation Workshops",
      "Community Events",
      "Local Tech Ecosystem",
      "Problem-Solving Sessions",
      "Cultural Programs"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "zanzalu-2024",
    name: "Zanzalu",
    slug: "zanzalu-2024",
    status: getStatus("2024-05-15", "2024-06-21"),
    startDate: "2024-05-15",
    endDate: "2024-06-21",
    brand: "TBD",
    coverImage: {
      url: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3",
      photographer: {
        name: "sutirta budiman",
        username: "sutirtab"
      },
      source: "Unsplash"
    },
    tagline: "A community of innovators driving human flourishing through tech and social innovation",
    tags: ["innovation", "technology", "community", "social-impact", "entrepreneurship"],
    location: {
      city: "Fumba Town",
      country: "TANZANIA"
    },

    // Detailed Info
    description: "We are a community of innovators, builders, and entrepreneurs seeking to progress human flourishing through technological and social innovation",
    timezone: "Africa/Dar_es_Salaam",
    coordinates: {
      latitude: -6.2732,
      longitude: 39.2244
    },
    notes: {
      description: "Join a vibrant community of innovators and entrepreneurs for five weeks of collaborative building and learning. Experience how technology and social innovation can drive human flourishing in the beautiful setting of Fumba Town, Tanzania.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://zanzalu.com/",
      twitter: "https://x.com/_zanzalu",
      application: "https://zanzalu.com/"
    },
    amenities: [
      "Coworking Space",
      "Innovation Hub",
      "Community Events",
      "Tech Workshops",
      "Networking Opportunities",
      "Beachfront Location"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "edge-city-esmeralda-2024",
    name: "Edge City Esmeralda",
    slug: "edge-city-esmeralda-2024",
    status: getStatus("2024-06-02", "2024-06-30"),
    startDate: "2024-06-02",
    endDate: "2024-06-30",
    brand: "EDGE CITY",
    coverImage: {
      url: "https://images.unsplash.com/photo-1465447142348-e9952c393450",
      photographer: {
        name: "Jeremy Bishop",
        username: "jeremybishop"
      },
      source: "Unsplash"
    },
    tagline: "A first step toward Esmeralda, a long-term vision for a new town",
    tags: ["innovation", "community", "technology", "future-building", "sustainability"],
    location: {
      city: "Healdsburg",
      country: "USA"
    },

    // Detailed Info
    description: "A month-long gathering for people building the future. Join us for a popup village to live in a healthy and productive community focused on incubating novel technologies and ways of living.",
    timezone: "America/Los_Angeles",
    coordinates: {
      latitude: 38.6103,
      longitude: -122.8692
    },
    notes: {
      description: "Experience a month of collaborative future-building in a healthy, productive community environment. Join fellow innovators in exploring novel technologies and alternative ways of living while working towards the long-term vision of Esmeralda.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.edgeesmeralda.com/",
      twitter: "https://x.com/JoinEdgeCity",
      application: "https://www.edgeesmeralda.com/"
    },
    amenities: [
      "Coworking Space",
      "Innovation Hub",
      "Community Events",
      "Tech Workshops",
      "Sustainable Living",
      "Natural Environment"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "zuvillage-georgia-2024",
    name: "ZuVillage Georgia",
    slug: "zuvillage-georgia-2024",
    status: getStatus("2024-07-20", "2024-08-31"),
    startDate: "2024-07-20",
    endDate: "2024-08-31",
    brand: "ZUVILLAGE",
    coverImage: {
      url: "https://images.unsplash.com/photo-1563284223-333497472e88",
      photographer: {
        name: "Dimitri Tyan",
        username: "dimitrityan"
      },
      source: "Unsplash"
    },
    tagline: "A digital community for truth seekers, builders, and sovereign individuals with cypherpunk ideals",
    tags: ["cypherpunk", "dacc", "community", "sovereignty", "technology"],
    location: {
      city: "Kachreti",
      country: "GEORGIA"
    },

    // Detailed Info
    description: "A digital community of truth seekers, builders, and sovereign individuals guided by cypherpunk and d/acc philosophies.",
    timezone: "Asia/Tbilisi",
    coordinates: {
      latitude: 41.6228,
      longitude: 45.8528
    },
    notes: {
      description: "Join a vibrant community of truth seekers and builders for a six-week gathering focused on cypherpunk principles and d/acc philosophy. Experience a unique blend of technological innovation and sovereign living in the beautiful Georgian countryside.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://zuvillage-georgia.framer.website/",
      twitter: "https://x.com/zuvillage",
      application: "https://zuvillage-georgia.framer.website/"
    },
    amenities: [
      "Coworking Space",
      "Community Events",
      "Tech Workshops",
      "Philosophy Discussions",
      "Cultural Programs",
      "Georgian Cuisine"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "mtndao-v6-2024",
    name: "mtnDAO v6",
    slug: "mtndao-v6-2024",
    status: getStatus("2024-08-01", "2024-08-31"),
    startDate: "2024-08-01",
    endDate: "2024-08-31",
    brand: "MTNDAO",
    coverImage: {
      url: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
      photographer: {
        name: "Mick Haupt",
        username: "rocinante_11"
      },
      source: "Unsplash"
    },
    tagline: "V6 mtndao Summit: A month-long developer-focused event in Salt Lake City, Aug 2024",
    tags: ["developers", "collaboration", "technology", "community", "innovation"],
    location: {
      city: "Salt Lake City",
      country: "USA"
    },

    // Detailed Info
    description: "The August 2024 V6 mtndao Summit is a month-long event set to take place in Salt Lake City from August 1st to 31st, offering developers a unique experience of building and collaboration.",
    timezone: "America/Denver",
    coordinates: {
      latitude: 40.7608,
      longitude: -111.8910
    },
    notes: {
      description: "Join us for a month-long summit designed specifically for developers, offering a unique blend of building, collaboration, and mountain living. Experience the perfect environment for focused development and community building in the heart of Salt Lake City.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://tally.so/r/mR4bOP",
      twitter: "https://x.com/mtndao",
      application: "https://tally.so/r/mR4bOP"
    },
    amenities: [
      "Coworking Space",
      "Developer Workshops",
      "Hackathon Events",
      "Mountain Activities",
      "Community Events",
      "Tech Infrastructure"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "aleph-1-2024",
    name: "Aleph 1",
    slug: "aleph-1-2024",
    status: getStatus("2024-08-05", "2024-09-01"),
    startDate: "2024-08-05",
    endDate: "2024-09-01",
    brand: "CRECIMIENTO",
    coverImage: {
      url: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e",
      photographer: {
        name: "Renzo D'Andrea",
        username: "renzodandrea"
      },
      source: "Unsplash"
    },
    tagline: "Aleph: Bright minds in Buenos Aires pioneering the first crypto nation this August",
    tags: ["crypto", "innovation", "blockchain", "community", "nation-building"],
    location: {
      city: "Buenos Aires",
      country: "ARGENTINA"
    },

    // Detailed Info
    description: "Aleph is convening the world's brightest minds in Buenos Aires this August to pioneer the first crypto nation.",
    timezone: "America/Argentina/Buenos_Aires",
    coordinates: {
      latitude: -34.6037,
      longitude: -58.3816
    },
    notes: {
      description: "Join us for a month-long gathering of innovators and builders focused on pioneering the future of crypto nations. Experience a vibrant community dedicated to pushing the boundaries of what's possible at the intersection of technology and governance.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.aleph.crecimiento.build/",
      twitter: "https://x.com/crecimientoar",
      application: "https://www.aleph.crecimiento.build/"
    },
    amenities: [
      "Coworking Space",
      "Community Events",
      "Innovation Hub",
      "Crypto Workshops",
      "Networking Opportunities"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "solana-economic-zone-2024",
    name: "Solana Economic Zone",
    slug: "solana-economic-zone-2024",
    status: getStatus("2024-08-10", "2024-09-15"),
    startDate: "2024-08-10",
    endDate: "2024-09-15",
    brand: "FORMA",
    coverImage: {
      url: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849",
      photographer: {
        name: "Marcelo Vaz",
        username: "marcelovaz"
      },
      source: "Unsplash"
    },
    tagline: "A think tank partnering with techno-optimistic countries to create Solana Economic Zones",
    tags: ["solana", "blockchain", "economics", "innovation", "governance"],
    location: {
      city: "Buenos Aires",
      country: "ARGENTINA"
    },

    // Detailed Info
    description: "We're a think tank that works with techno-optimistic countries to create Solana Economic Zones.",
    timezone: "America/Argentina/Buenos_Aires",
    coordinates: {
      latitude: -34.6037,
      longitude: -58.3816
    },
    notes: {
      description: "Join us for a month-long exploration of how Solana blockchain technology can revolutionize economic zones. Work alongside forward-thinking individuals and organizations to design and implement innovative economic frameworks.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://forma.city/",
      twitter: "https://x.com/formacity",
      application: "https://forma.city/"
    },
    amenities: [
      "Coworking Space",
      "Economic Workshops",
      "Blockchain Labs",
      "Think Tank Sessions",
      "Networking Events",
      "Innovation Hub"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "zugarden-2024",
    name: "ZuGarden",
    slug: "zugarden-2024",
    status: getStatus("2024-11-10", "2024-11-30"),
    startDate: "2024-11-10",
    endDate: "2024-11-30",
    brand: "ZUBERLIN",
    coverImage: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
      photographer: {
        name: "Evan Krause",
        username: "evankrause"
      },
      source: "Unsplash"
    },
    tagline: "A 3-week immersive Zuzalu-style pop-up in Thailand by ZuBerlin creators",
    tags: ["community", "innovation", "thailand", "popup-village"],
    location: {
      city: "Secret Island",
      country: "THAILAND"
    },

    // Detailed Info
    description: "ZuGarden is a 3-week immersive Zuzalu-style pop-up village in Thailand by the creators of ZuBerlin.",
    timezone: "Asia/Bangkok",
    coordinates: {
      latitude: 8.0533,
      longitude: 98.8298
    },
    notes: {
      description: "Join us for a three-week immersive experience in a secret island location in Thailand. Experience a Zuzalu-style community focused on innovation, collaboration, and personal growth.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.zu.garden/",
      twitter: "https://x.com/ZuGarden",
      application: "https://www.zu.garden/"
    },
    amenities: [
      "Coworking Space",
      "Community Events",
      "Beach Access",
      "Wellness Activities",
      "Innovation Workshops",
      "Island Location"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "zuitzerland-2024-aug",
    name: "Zuitzerland",
    slug: "zuitzerland-2024-aug",
    status: getStatus("2024-08-25", "2024-09-15"),
    startDate: "2024-08-25",
    endDate: "2024-09-15",
    brand: "ZUITZERLAND",
    coverImage: {
      url: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95",
      photographer: {
        name: "Ricardo Gomez Angel",
        username: "ripato"
      },
      source: "Unsplash"
    },
    tagline: "A 10-day co-design residence blending Swiss democracy with innovative governance",
    tags: ["governance", "innovation", "democracy", "decentralization", "community"],
    location: {
      city: "Switzerland",
      country: "SWITZERLAND"
    },

    // Detailed Info
    description: "Zuitzerland is a 10-day co-design residence in Interlaken, Switzerland, inspired by Zuzalu and Swiss models of decentralization.",
    timezone: "Europe/Zurich",
    coordinates: {
      latitude: 46.8182,
      longitude: 8.2275
    },
    notes: {
      description: "Join us for an innovative co-design residence that explores the intersection of Swiss democratic principles and modern governance models. Experience a unique blend of traditional wisdom and cutting-edge thinking in governance and community building.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.zuitzerland.ch/",
      twitter: "https://x.com/zuitzerland",
      application: "https://www.zuitzerland.ch/"
    },
    amenities: [
      "Coworking Space",
      "Governance Workshops",
      "Community Events",
      "Mountain Location",
      "Innovation Sessions",
      "Swiss Cultural Experience"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "arc-lisbon-2024",
    name: "ARC Lisbon",
    slug: "arc-lisbon-2024",
    status: getStatus("2024-09-10", "2024-10-10"),
    startDate: "2024-09-10",
    endDate: "2024-10-10",
    brand: "ARC",
    coverImage: {
      url: "https://images.unsplash.com/photo-1513735492246-483525079686",
      photographer: {
        name: "Eugene Zhyvchik",
        username: "eugenezhyvchik"
      },
      source: "Unsplash"
    },
    tagline: "Ârc: Cities enabling great things by great people",
    tags: ["innovation", "urban-development", "community", "technology"],
    location: {
      city: "Lisbon",
      country: "PORTUGAL"
    },

    // Detailed Info
    description: "Ârc builds cities that allow great people to do great things.",
    timezone: "Europe/Lisbon",
    coordinates: {
      latitude: 38.7223,
      longitude: -9.1393
    },
    notes: {
      description: "Join us in Lisbon for a month-long exploration of urban innovation and community building. Experience how great cities can enable great achievements through thoughtful design and collaborative spaces.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.xn--2ca.city/",
      application: "https://www.xn--2ca.city/"
    },
    amenities: [
      "Coworking Space",
      "Urban Planning Workshops",
      "Innovation Hub",
      "Community Events",
      "City Exploration",
      "Tech Infrastructure"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "zuthailand-2024",
    name: "ZuThailand",
    slug: "zuthailand-2024",
    status: getStatus("2024-11-18", "2024-12-18"),
    startDate: "2024-11-18",
    endDate: "2024-12-18",
    brand: "TBD",
    coverImage: {
      url: "https://images.unsplash.com/photo-1528181304800-259b08848526",
      photographer: {
        name: "Mathew Schwartz",
        username: "cadop"
      },
      source: "Unsplash"
    },
    tagline: "A month-long pop-up city for 300+ technical, curious builders in Pattaya",
    tags: ["tech", "innovation", "community", "builders"],
    location: {
      city: "Pattaya",
      country: "THAILAND"
    },

    // Detailed Info
    description: "A month-long pop-up city experiment for 300+ deeply technical, curious, and self-driven builders.",
    timezone: "Asia/Bangkok",
    coordinates: {
      latitude: 12.9236,
      longitude: 100.8824
    },
    notes: {
      description: "Join a community of over 300 technical builders, innovators, and curious minds for a month-long experiment in collaborative living and creation. This pop-up city is designed for self-driven individuals looking to push the boundaries of what's possible.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.zuthailand.com/",
      twitter: "https://x.com/zuthailand",
      application: "https://www.zuthailand.com/"
    },
    amenities: [
      "Coworking Space",
      "Technical Workshops",
      "Community Events",
      "Innovation Hub",
      "Networking Opportunities",
      "Beach Access"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "aleph-de-verano-2024",
    name: "Aleph de Verano",
    slug: "aleph-de-verano-2024",
    status: getStatus("2024-12-09", "2024-12-20"),
    startDate: "2024-12-09",
    endDate: "2024-12-20",
    brand: "CRECIMIENTO",
    coverImage: {
      url: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e",
      photographer: {
        name: "Renzo D'Andrea",
        username: "renzodandrea"
      },
      source: "Unsplash"
    },
    tagline: "Aleph: Innovators converge in Buenos Aires to build the first crypto nation",
    tags: ["crypto", "innovation", "startups", "blockchain", "community"],
    location: {
      city: "Buenos Aires",
      country: "ARGENTINA"
    },

    // Detailed Info
    description: "Aleph is convening the world's brightest minds in Buenos Aires to pioneer the first crypto nation.",
    timezone: "America/Argentina/Buenos_Aires",
    coordinates: {
      latitude: -34.6037,
      longitude: -58.3816
    },
    notes: {
      description: "Join us for an intensive two-week gathering of innovators and builders focused on pioneering the future of crypto nations. Experience a vibrant community dedicated to pushing the boundaries of what's possible at the intersection of technology and governance.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.aleph.crecimiento.build/",
      twitter: "https://x.com/crecimientoar",
      application: "https://www.aleph.crecimiento.build/"
    },
    amenities: [
      "Coworking Space",
      "Community Events",
      "Innovation Hub",
      "Crypto Workshops",
      "Networking Opportunities"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "edge-city-lanna-2024",
    name: "Edge City Lanna",
    slug: "edge-city-lanna-2024",
    status: getStatus("2024-10-10", "2024-11-10"),
    startDate: "2024-10-10",
    endDate: "2024-11-10",
    brand: "EDGE CITY",
    coverImage: {
      url: "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e",
      photographer: {
        name: "Mathew Schwartz",
        username: "cadop"
      },
      source: "Unsplash"
    },
    tagline: "Join us in Chiang Mai for a month-long experiment in healthy community living and novel tech incubation",
    tags: ["community", "technology", "innovation", "health", "thailand"],
    location: {
      city: "Chiang Mai",
      country: "THAILAND"
    },

    // Detailed Info
    description: "Join us October 10th - November 10th in beautiful Chiang Mai to live in a healthy community focused on incubating novel technologies and ways of living.",
    timezone: "Asia/Bangkok",
    coordinates: {
      latitude: 18.7883,
      longitude: 98.9853
    },
    notes: {
      description: "Experience a month of community living focused on health, technology, and innovation in the beautiful setting of Chiang Mai. Join fellow innovators in exploring novel technologies and alternative ways of living.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "http://edgecity.live/lanna",
      twitter: "https://x.com/JoinEdgeCity",
      application: "http://edgecity.live/lanna"
    },
    amenities: [
      "Coworking Space",
      "Innovation Hub",
      "Health & Wellness Facilities",
      "Community Events",
      "Tech Workshops",
      "Cultural Programs"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "archipelago-chiang-mai-2024",
    name: "Archipelago Chiang Mai",
    slug: "archipelago-chiang-mai-2024",
    status: getStatus("2024-10-10", "2024-11-10"),
    startDate: "2024-10-10",
    endDate: "2024-11-10",
    brand: "1-OFF",
    coverImage: {
      url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
      photographer: {
        name: "Mathew Schwartz",
        username: "cadop"
      },
      source: "Unsplash"
    },
    tagline: "Building a global network of communities at the intersection of free tech, health, and innovation",
    tags: ["technology", "health", "innovation", "community", "science"],
    location: {
      city: "Chiang Mai",
      country: "THAILAND"
    },

    // Detailed Info
    description: "To foster a global network of communities to advance humanity by creating playgrounds at the intersection of free and open technology, health, science and social innovation.",
    timezone: "Asia/Bangkok",
    coordinates: {
      latitude: 18.7883,
      longitude: 98.9853
    },
    notes: {
      description: "Join a global network of communities focused on advancing humanity through the intersection of free technology, health, and social innovation. Experience a unique playground for collaboration and experimentation in Chiang Mai.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://potlock.notion.site/Archipelago-d90ea029295a4b789464243fa206fd15",
      application: "https://potlock.notion.site/Archipelago-d90ea029295a4b789464243fa206fd15"
    },
    amenities: [
      "Innovation Labs",
      "Health Tech Facilities",
      "Coworking Space",
      "Community Events",
      "Science Workshops",
      "Social Innovation Hub"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "edge-esmeralda-2-2025",
    name: "Edge Esmeralda 2",
    slug: "edge-esmeralda-2-2025",
    status: getStatus("2025-01-24", "2025-02-21"),
    startDate: "2025-01-24",
    endDate: "2025-02-21",
    brand: "EDGE CITY",
    coverImage: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      photographer: {
        name: "Bailey Zindel",
        username: "baileyzindel"
      },
      source: "Unsplash"
    },
    tagline: "A community for those who believe in a brighter future and are actively creating it",
    tags: ["innovation", "community", "technology"],
    location: {
      city: "Healdsburg",
      country: "USA"
    },

    // Detailed Info
    description: "It will be a place for people who believe the future can be better & are actively working to make it happen.",
    timezone: "America/Los_Angeles",
    coordinates: {
      latitude: 38.6103,
      longitude: -122.8692
    },
    notes: {
      description: "Join us for a month-long gathering focused on building the future. Experience a popup village designed for a healthy and productive community, dedicated to incubating novel technologies and innovative ways of living.",
      lastUpdated: "2024-03-19",
      estimatedRange: {
        min: 3000,
        max: 5000,
        currency: "USD",
        timeUnit: "total"
      }
    },
    links: {
      website: "https://blog.edgeesmeralda.com/p/save-the-date-for-edge-esmeralda",
      twitter: "https://x.com/JoinEdgeCity",
      application: "https://blog.edgeesmeralda.com/p/save-the-date-for-edge-esmeralda"
    },
    amenities: [
      "Coworking Space",
      "Community Events",
      "Innovation Hub",
      "Networking Opportunities",
      "Tech Workshops"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "vitalia-forever-2025",
    name: "Vitalia Forever",
    slug: "vitalia-forever-2025",
    status: getStatus("2025-01-01", "2025-02-28"),
    startDate: "2025-01-01",
    endDate: "2025-02-28",
    brand: "VITALIA",
    coverImage: {
      url: "https://images.unsplash.com/photo-1559825481-12a05cc00344",
      photographer: {
        name: "Alex Azabache",
        username: "alexazabache"
      },
      source: "Unsplash"
    },
    tagline: "A decentralized city accelerating longevity biotech, starting with a hub in Roatán, @Prosperahn ZEDE",
    tags: ["longevity", "biotech", "innovation", "decentralization", "research"],
    location: {
      city: "Roatán",
      country: "HONDURAS"
    },

    // Detailed Info
    description: "A decentralised city that accelerates longevity biotech development.",
    timezone: "America/Tegucigalpa",
    coordinates: {
      latitude: 16.3219,
      longitude: -86.5319
    },
    notes: {
      description: "Join us for a two-month immersive experience focused on accelerating longevity biotech development. Be part of a community dedicated to extending human healthspan through decentralized research and innovation.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.vitalia.city/",
      twitter: "https://x.com/VitaliaCity",
      application: "https://www.vitalia.city/"
    },
    amenities: [
      "Biotech Labs",
      "Research Facilities",
      "Coworking Space",
      "Community Events",
      "Networking Opportunities",
      "Beachfront Location"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "zu-grama-2025",
    name: "Zu-Grama",
    slug: "zu-grama-2025",
    status: getStatus("2025-01-05", "2025-02-16"),
    startDate: "2025-01-05",
    endDate: "2025-02-16",
    brand: "TBD",
    coverImage: {
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
      photographer: {
        name: "Naveed Ahmed",
        username: "naveedahmed"
      },
      source: "Unsplash"
    },
    tagline: "An Indian pop-village experiment to catalyze innovation",
    tags: ["innovation", "india", "technology", "community"],
    location: {
      city: "Kerala",
      country: "INDIA"
    },

    // Detailed Info
    description: "A pop-village experiment to catapult India's innovation.",
    timezone: "Asia/Kolkata",
    coordinates: {
      latitude: 10.8505,
      longitude: 76.2711
    },
    notes: {
      description: "Join us in Kerala for a transformative six-week gathering focused on catalyzing innovation in India. Experience a vibrant community dedicated to pushing the boundaries of technology and social progress.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://zugrama.org/",
      twitter: "https://x.com/ZuGramaIndia",
      application: "https://zugrama.org/"
    },
    amenities: [
      "Coworking Space",
      "Innovation Hub",
      "Community Events",
      "Tech Workshops",
      "Cultural Programs"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "aleph-3-2025",
    name: "Aleph 3",
    slug: "aleph-3-2025",
    status: getStatus("2025-03-01", "2025-03-31"),
    startDate: "2025-03-01",
    endDate: "2025-03-31",
    brand: "CRECIMIENTO",
    coverImage: {
      url: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849",
      photographer: {
        name: "Marcelo Vaz",
        username: "marcelovaz"
      },
      source: "Unsplash"
    },
    tagline: "The world's brightest minds gather in Buenos Aires this August to ignite the future of crypto and startup innovation",
    tags: ["crypto", "innovation", "startups", "blockchain", "community"],
    location: {
      city: "Buenos Aires",
      country: "ARGENTINA"
    },

    // Detailed Info
    description: "Aleph is convening the world's brightest minds in Buenos Aires this August to pioneer the first crypto nation.",
    timezone: "America/Argentina/Buenos_Aires",
    coordinates: {
      latitude: -34.6037,
      longitude: -58.3816
    },
    notes: {
      description: "Join us for a month-long gathering of innovators and builders focused on pioneering the future of crypto nations. Experience a vibrant community dedicated to pushing the boundaries of what's possible at the intersection of technology, governance, and innovation.",
      lastUpdated: "2024-03-19",
      estimatedRange: {
        min: 3000,
        max: 5000,
        currency: "USD",
        timeUnit: "total"
      }
    },
    links: {
      website: "https://www.aleph.crecimiento.build/",
      twitter: "https://x.com/crecimientoar",
      application: "https://www.aleph.crecimiento.build/"
    },
    amenities: [
      "Coworking Space",
      "Community Events",
      "Innovation Hub",
      "Networking Opportunities",
      "Crypto Workshops"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },
  {
    // Card Info
    id: "zuafrique-2025",
    name: "ZuAfrique",
    slug: "zuafrique-2025",
    status: getStatus("2025-05-01", "2025-05-01"),
    startDate: "2025-05-01",
    endDate: "2025-05-01",
    brand: "TBD",
    coverImage: {
      url: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6",
      photographer: {
        name: "Adrian Infernus",
        username: "infernus"
      },
      source: "Unsplash"
    },
    tagline: "Empowering African blockchain builders to innovate, collaborate, and create real-world projects",
    tags: ["blockchain", "africa", "innovation", "community", "tech"],
    location: {
      city: "Kilifi",
      country: "KENYA"
    },

    // Detailed Info
    description: "Empowering African blockchain builders to innovate, collaborate, and create real-world projects.",
    timezone: "Africa/Nairobi",
    coordinates: {
      latitude: -3.6305,
      longitude: 39.8499
    },
    notes: {
      description: "Join us for a transformative gathering focused on empowering African blockchain builders and fostering innovation across the continent. Experience a vibrant community dedicated to creating real-world impact through blockchain technology.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://zuafrique.onrender.com/",
      twitter: "https://x.com/zuafrique",
      application: "https://zuafrique.onrender.com/"
    },
    amenities: [
      "Coworking Space",
      "Blockchain Workshops",
      "Community Events",
      "Networking Opportunities",
      "Innovation Lab"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },
  {
    // Card Info
    id: "zuitzerland-2025",
    name: "Zuitzerland",
    slug: "zuitzerland-2025",
    status: getStatus("2025-05-03", "2025-06-18"),
    startDate: "2025-05-03",
    endDate: "2025-06-18",
    brand: "ZUITZERLAND",
    coverImage: {
      url: "https://images.unsplash.com/photo-1502943693086-33b5b1cfdf2f",
      photographer: {
        name: "Joshua Earle",
        username: "joshuaearle"
      },
      source: "Unsplash"
    },
    tagline: "Two month zuzalu event in Interlaken Switzerland",
    tags: ["d/acc", "governance", "biotech"],
    location: {
      city: "secret location",
      country: "SWITZERLAND"
    },

    // Detailed Info
    description: "Two month zuzalu event in Interlaken Switzerland, in May and June 2025, partnering with the local community, hosting 200-300 people in our amazing zuvillage.",
    timezone: "Europe/Zurich",
    coordinates: {
      latitude: 46.6863,
      longitude: 7.8632
    },
    notes: {
      description: "Full experience tickets (45 days) are around $6,000, which includes shared chalet accommodation. Additional monthly costs for food, transport, and activities typically range from $2,000-3,000. Accommodation is provided in shared chalets in Interlaken with all utilities and amenities included. The event will host 200 participants.",
      lastUpdated: "2024-03-19",
      estimatedRange: {
        min: 6000,
        max: 9000,
        currency: "USD",
        timeUnit: "total"
      }
    },
    links: {
      website: "https://www.zuitzerland.ch/",
      twitter: "https://x.com/zuitzerland",
      telegram: "https://t.me/zuitzerland",
      application: "https://apply.zuitzerland.ch"
    },
    amenities: [
      "Coworking Space",
      "High-speed Internet",
      "Shared Kitchen",
      "Mountain Views",
      "Community Events"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },
  {
    // Card Info
    id: "arc-austin-2025",
    name: "ARC Austin",
    slug: "arc-austin-2025",
    status: getStatus("2025-03-01", "2025-03-01"),
    startDate: "2025-03-01",
    endDate: "2025-03-01",
    brand: "ARC",
    coverImage: {
      url: "https://images.unsplash.com/photo-1531901599143-df5010ab9438",
      photographer: {
        name: "Mitchell Kmetz",
        username: "mktz"
      },
      source: "Unsplash"
    },
    tagline: "Cities designed for greatness to thrive",
    tags: ["innovation", "community", "technology", "urban-development"],
    location: {
      city: "Austin",
      country: "USA"
    },

    // Detailed Info
    description: "Ârc builds cities that allow great people to do great things.",
    timezone: "America/Chicago",
    coordinates: {
      latitude: 30.2672,
      longitude: -97.7431
    },
    notes: {
      description: "Join us in Austin for a gathering focused on reimagining urban spaces and building cities that foster innovation and human potential.",
      lastUpdated: "2024-03-19",
      estimatedRange: {
        min: 2000,
        max: 4000,
        currency: "USD",
        timeUnit: "total"
      }
    },
    links: {
      website: "https://www.xn--2ca.city/",
      twitter: undefined,
      application: "https://www.xn--2ca.city/"
    },
    amenities: [
      "Coworking Space",
      "Innovation Hub",
      "Networking Events",
      "Urban Planning Workshops",
      "Tech Infrastructure"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },
  {
    // Card Info
    id: "aurisci-2024",
    name: "AuriSci(Auraverse)",
    slug: "aurisci-2024",
    status: getStatus("2024-10-12", "2024-11-10"),
    startDate: "2024-10-12",
    endDate: "2024-11-10",
    brand: "TBD",
    coverImage: {
      url: "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e",
      photographer: {
        name: "Mathew Schwartz",
        username: "cadop"
      },
      source: "Unsplash"
    },
    tagline: "AuraVerse: A month in Chiang Mai fusing science, art, and community to push innovation's limits",
    tags: ["science", "art", "community", "innovation", "creativity"],
    location: {
      city: "Chiang Mai",
      country: "THAILAND"
    },

    // Detailed Info
    description: "Step into AuraVerse, a month-long, electrifying journey at the intersection of science, art, and community—where the boundaries of innovation and creativity are pushed to new heights.",
    timezone: "Asia/Bangkok",
    coordinates: {
      latitude: 18.7883,
      longitude: 98.9853
    },
    notes: {
      description: "Join us for a month-long exploration at the intersection of science, art, and community. Experience how these disciplines converge to push the boundaries of innovation and creativity in the vibrant setting of Chiang Mai.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.auraverse.life/",
      twitter: "https://x.com/Aura_Sci",
      application: "https://www.auraverse.life/"
    },
    amenities: [
      "Science Labs",
      "Art Studios",
      "Coworking Space",
      "Community Events",
      "Innovation Workshops",
      "Creative Spaces"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },
  {
    // Card Info
    id: "zelar-city-2024",
    name: "Zelar City",
    slug: "zelar-city-2024",
    status: getStatus("2024-10-05", "2024-11-17"),
    startDate: "2024-10-05",
    endDate: "2024-11-17",
    brand: "TBD",
    coverImage: {
      url: "https://images.unsplash.com/photo-1551076805-e1869033e561",
      photographer: {
        name: "Nick Fewings",
        username: "jannerboy62"
      },
      source: "Unsplash"
    },
    tagline: "A pop-up city advancing longevity biotech and science, Oct 5–Nov 17",
    tags: ["longevity", "biotech", "science", "innovation", "zuzalu"],
    location: {
      city: "Berlin",
      country: "GERMANY"
    },

    // Detailed Info
    description: "A pop-up city dedicated to curing aging entirely by creating innovation in biotech and longevity science. Part of the Zuzalu ecosystem",
    timezone: "Europe/Berlin",
    coordinates: {
      latitude: 52.5200,
      longitude: 13.4050
    },
    notes: {
      description: "Join a dedicated community of scientists, researchers, and innovators focused on advancing longevity biotech and working towards curing aging. Experience six weeks of intensive collaboration and breakthrough discoveries in Berlin.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.zelar.city/",
      twitter: "https://x.com/ZelarCity",
      application: "https://www.zelar.city/"
    },
    amenities: [
      "Biotech Labs",
      "Research Facilities",
      "Coworking Space",
      "Science Workshops",
      "Innovation Hub",
      "Community Events"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },
  {
    // Card Info
    id: "megazu-2024",
    name: "MegaZu",
    slug: "megazu-2024",
    status: getStatus("2024-10-07", "2024-11-07"),
    startDate: "2024-10-07",
    endDate: "2024-11-07",
    brand: "TBD",
    coverImage: {
      url: "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e",
      photographer: {
        name: "Mathew Schwartz",
        username: "cadop"
      },
      source: "Unsplash"
    },
    tagline: "A 50-builder residency with Eigen Layer and Megaeth",
    tags: ["blockchain", "ethereum", "development", "residency", "community"],
    location: {
      city: "Chiang Mai",
      country: "THAILAND"
    },

    // Detailed Info
    description: "50 builder 1 month residency in collab with Eigen Layer and Megaeth",
    timezone: "Asia/Bangkok",
    coordinates: {
      latitude: 18.7883,
      longitude: 98.9853
    },
    notes: {
      description: "Join an exclusive month-long residency program for 50 selected builders, in collaboration with Eigen Layer and Megaeth. Experience intensive development and innovation in the vibrant setting of Chiang Mai.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.megazu.fun/",
      twitter: "https://x.com/eigenfoundation/status/1828928776417300558",
      application: "https://www.megazu.fun/"
    },
    amenities: [
      "Coworking Space",
      "Developer Workshops",
      "Blockchain Labs",
      "Community Events",
      "Networking Sessions",
      "Tech Infrastructure"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },


  {
    // Card Info
    id: "muchiangmai-season-2-2024",
    name: "MuChiang Mai Season 2",
    slug: "muchiangmai-season-2-2024",
    status: getStatus("2024-09-30", "2024-11-10"),
    startDate: "2024-09-30",
    endDate: "2024-11-10",
    brand: "THE MU",
    coverImage: {
      url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
      photographer: {
        name: "Julian Yu",
        username: "julianyu"
      },
      source: "Unsplash"
    },
    tagline: "A community of builders and developers in the heart of Chiang Mai",
    tags: ["development", "community", "blockchain", "technology", "thailand"],
    location: {
      city: "Chiang Mai",
      country: "THAILAND"
    },

    // Detailed Info
    description: "Season 2 of the successful MuChiangMai series, bringing together developers and builders for six weeks of collaboration and innovation",
    timezone: "Asia/Bangkok",
    coordinates: {
      latitude: 18.7883,
      longitude: 98.9853
    },
    notes: {
      description: "Join the second season of MuChiangMai, where developers and innovators come together to learn, build, and create in the vibrant setting of Northern Thailand.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://the-mu.xyz/",
      twitter: "https://x.com/themu_xyz",
      application: "https://the-mu.xyz/"
    },
    amenities: [
      "Coworking Space",
      "Developer Workshops",
      "Community Events",
      "Tech Infrastructure",
      "Networking Sessions",
      "Learning Labs"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "network-school-2024",
    name: "Network School",
    slug: "network-school-2024",
    status: getStatus("2024-09-23", "2024-12-23"),
    startDate: "2024-09-23",
    endDate: "2024-12-23",
    brand: "NETWORK SCHOOL",
    coverImage: {
      url: "https://images.unsplash.com/photo-1577401239170-897942555fb3",
      photographer: {
        name: "Shawn Ang",
        username: "shawnanggg"
      },
      source: "Unsplash"
    },
    tagline: "Founding an academic community on an island near Singapore, starting with a 90-day pop-up",
    tags: ["education", "community", "network-states", "innovation", "academic"],
    location: {
      city: "Forest City",
      country: "MALAYSIA"
    },

    // Detailed Info
    description: "We're founding a new academic community on an island near Singapore, starting with a 90 day popup on Sep 23. Rent starts at just $1000/month.",
    timezone: "Asia/Singapore",
    coordinates: {
      latitude: 1.4249,
      longitude: 103.6136
    },
    notes: {
      description: "Join a pioneering academic community for a 90-day experiment in community-driven education and innovation. Experience a new model of learning while helping build the foundation of a permanent academic institution.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://ns.com/school",
      twitter: "https://x.com/thenetworkstate",
      application: "https://ns.com/school"
    },
    amenities: [
      "Academic Facilities",
      "Study Spaces",
      "Community Events",
      "Learning Labs",
      "Research Infrastructure",
      "Collaborative Workspaces"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "builder-monastery-2024",
    name: "Builder Monastery",
    slug: "builder-monastery-2024",
    status: getStatus("2024-09-16", "2024-10-07"),
    startDate: "2024-09-16",
    endDate: "2024-10-07",
    brand: "TBD",
    coverImage: {
      url: "https://images.unsplash.com/photo-1533387520709-752d83de3630",
      photographer: {
        name: "Nick Fewings",
        username: "jannerboy62"
      },
      source: "Unsplash"
    },
    tagline: "A focused space for solving hard problems with collaboration and craftsmanship",
    tags: ["focus", "collaboration", "craftsmanship", "innovation", "portugal"],
    location: {
      city: "Ericeira",
      country: "PORTUGAL"
    },

    // Detailed Info
    description: "Builder Monastery offers a focused environment where individuals can work on difficult problems. This space fosters collaboration, curiosity, and craftsmanship.",
    timezone: "Europe/Lisbon",
    coordinates: {
      latitude: 38.9637,
      longitude: -9.4169
    },
    notes: {
      description: "Join a focused community of builders dedicated to solving challenging problems in a monastery-like setting. Experience three weeks of deep work, collaboration, and craftsmanship by the Portuguese coast.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.buildermonastery.com/",
      twitter: "https://x.com/b_monastery",
      application: "https://www.buildermonastery.com/"
    },
    amenities: [
      "Focus Spaces",
      "Collaboration Areas",
      "Workshop Facilities",
      "Community Events",
      "Seaside Location",
      "Quiet Workspaces"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "zanzalu-2-2025",
    name: "Zanzalu 2",
    slug: "zanzalu-2-2025",
    status: getStatus("2025-06-21", "2025-07-19"),
    startDate: "2025-06-21",
    endDate: "2025-07-19",
    brand: "ZANZALU",
    coverImage: {
      url: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3",
      photographer: {
        name: "sutirta budiman",
        username: "sutirtab"
      },
      source: "Unsplash"
    },
    tagline: "A community of builders catalyzing a growth ecosystem in Zanzibar",
    tags: ["innovation", "entrepreneurship", "africa", "community", "ecosystem"],
    location: {
      city: "Fumba Town",
      country: "TANZANIA"
    },

    // Detailed Info
    description: "Zanzalu is a community of builders, entrepreneurs, and innovators who are working together to catalyze a growth ecosystem in Zanzibar.",
    timezone: "Africa/Dar_es_Salaam",
    coordinates: {
      latitude: -6.2732,
      longitude: 39.2244
    },
    notes: {
      description: "Join the second iteration of Zanzalu, where builders and entrepreneurs come together to foster innovation and growth in Zanzibar. Experience a month of collaboration, learning, and community building in this unique coastal setting.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://zanzalu.wpcomstaging.com/",
      twitter: "https://x.com/_zanzalu",
      application: "https://zanzalu.wpcomstaging.com/"
    },
    amenities: [
      "Coworking Space",
      "Innovation Hub",
      "Community Events",
      "Networking Sessions",
      "Beach Access",
      "Workshop Facilities"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "ethiopia-2025",
    name: "ETHiopia",
    slug: "ethiopia-2025",
    status: getStatus("2025-01-21", "2025-02-21"),
    startDate: "2025-01-21",
    endDate: "2025-02-21",
    brand: "TBD",
    coverImage: {
      url: "https://images.unsplash.com/photo-1627894483216-2138af692e32",
      photographer: {
        name: "Abel Getachew",
        username: "abelgetachew"
      },
      source: "Unsplash"
    },
    tagline: "Building Ethereum's future in the heart of Africa",
    tags: ["ethereum", "blockchain", "africa", "innovation", "community"],
    location: {
      city: "Addis Ababa",
      country: "ETHIOPIA"
    },

    // Detailed Info
    description: "A month-long gathering focused on Ethereum development and blockchain innovation in Ethiopia's capital",
    timezone: "Africa/Addis_Ababa",
    coordinates: {
      latitude: 9.0320,
      longitude: 38.7462
    },
    notes: {
      description: "Join the pioneering community of Ethereum developers and innovators in Addis Ababa for a month of collaboration, learning, and building. Experience the intersection of blockchain technology and African innovation.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "TBD",
      twitter: "https://x.com/MEARAFTADEWOS/status/1863839823091364243",
      application: "TBD"
    },
    amenities: [
      "Developer Workspace",
      "Blockchain Labs",
      "Community Events",
      "Tech Infrastructure",
      "Networking Sessions",
      "Workshop Facilities"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "pirate-island-2025",
    name: "Pirate Island",
    slug: "pirate-island-2025",
    status: getStatus("2025-09-20", "2025-10-20"),
    startDate: "2025-09-20",
    endDate: "2025-10-20",
    brand: "TBD",
    coverImage: {
      url: "https://images.unsplash.com/photo-1533105079780-92b9be482077",
      photographer: {
        name: "Anastasia Taioglou",
        username: "thenata"
      },
      source: "Unsplash"
    },
    tagline: "A month of innovation on a Greek island paradise",
    tags: ["community", "innovation", "greece", "island", "collaboration"],
    location: {
      city: "Cyclades",
      country: "GREECE"
    },

    // Detailed Info
    description: "A month-long gathering of innovators and builders in the beautiful Cyclades islands of Greece",
    timezone: "Europe/Athens",
    coordinates: {
      latitude: 37.0842,
      longitude: 25.1542
    },
    notes: {
      description: "Experience a unique month of collaboration and innovation on a Greek island. Join fellow builders and creators in this picturesque setting, combining focused work with Mediterranean island life.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "TBD",
      twitter: "TBD",
      application: "TBD"
    },
    amenities: [
      "Coworking Space",
      "Beach Access",
      "Community Events",
      "Innovation Hub",
      "Networking Areas",
      "Island Activities"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "ipe-village-2025",
    name: "Ipê Village",
    slug: "ipe-village-2025",
    status: getStatus("2025-04-22", "2025-05-22"),
    startDate: "2025-04-22",
    endDate: "2025-05-22",
    brand: "Ipê City",
    coverImage: {
      url: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
      photographer: {
        name: "Felipe Dias",
        username: "felipedias"
      },
      source: "Unsplash"
    },
    tagline: "Building the cities and governments of the future with crypto and AI on Florianópolis",
    tags: ["crypto", "ai", "governance", "innovation", "brazil"],
    location: {
      city: "Florianópolis",
      country: "BRAZIL"
    },

    // Detailed Info
    description: "Join us in building the cities and governments of the future with crypto and AI on Florianópolis, a stunning island.",
    timezone: "America/Sao_Paulo",
    coordinates: {
      latitude: -27.5954,
      longitude: -48.5480
    },
    notes: {
      description: "Experience a month of innovation at the intersection of crypto, AI, and governance. Work alongside fellow builders to prototype the future of cities while enjoying the beauty of Florianópolis island.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://ipe.city/popup",
      twitter: "https://x.com/ipecity",
      application: "https://ipe.city/popup"
    },
    amenities: [
      "Innovation Labs",
      "AI Workspace",
      "Crypto Infrastructure",
      "Community Events",
      "Beach Access",
      "Coworking Space"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "zudetroit-2025",
    name: "ZuDetroit",
    slug: "zudetroit-2025",
    status: getStatus("2025-05-01", "2025-05-31"),
    startDate: "2025-05-01",
    endDate: "2025-05-31",
    brand: "TBD",
    coverImage: {
      url: "https://images.unsplash.com/photo-1470219556762-1771e7f9427d",
      photographer: {
        name: "Michelle Tsang",
        username: "petitemichelle"
      },
      source: "Unsplash"
    },
    tagline: "Reimagining urban innovation in the heart of Motor City",
    tags: ["innovation", "urban-development", "community", "technology", "detroit"],
    location: {
      city: "Detroit",
      country: "USA"
    },

    // Detailed Info
    description: "A month-long gathering exploring the future of urban innovation and community building in Detroit",
    timezone: "America/Detroit",
    coordinates: {
      latitude: 42.3314,
      longitude: -83.0458
    },
    notes: {
      description: "Join a pioneering community in Detroit as we explore new models of urban development and innovation. Experience the city's renaissance while contributing to its future.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "TBD",
      twitter: "TBD",
      application: "TBD"
    },
    amenities: [
      "Innovation Hub",
      "Urban Labs",
      "Community Spaces",
      "Workshop Facilities",
      "Tech Infrastructure",
      "Networking Areas"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "frontier-tower-2025",
    name: "Frontier Tower",
    slug: "frontier-tower-2025",
    status: getStatus("2025-02-05", "2025-03-31"),
    startDate: "2025-02-05",
    endDate: "2025-03-31",
    brand: "BERLINHOUSE",
    coverImage: {
      url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
      photographer: {
        name: "Rafael Garcin",
        username: "rafaelgarcin"
      },
      source: "Unsplash"
    },
    tagline: "A 16-floor community innovation hub in the heart of San Francisco, dedicated to advancing frontier technologies, arts, and sciences",
    tags: ["ai", "neurotech", "longevity", "crypto", "desci", "biotech", "arts"],
    location: {
      city: "San Francisco",
      country: "USA"
    },

    // Detailed Info
    description: "​The Frontier Tower is a 16-story nexus for frontier technology, fostering innovation and collaboration in the heart of Silicon Valley. Starting with a vertical pop-up village Feb 5 - Mar 31, 2025, this will become a lighthouse for the future, attracting top talent in AI, Neurotech, Longevity, Crypto, DeSci, Biotech, Hard Tech, Arts & music.",
    timezone: "America/Los_Angeles",
    coordinates: {
      latitude: 37.7749,
      longitude: -122.4194
    },
    notes: {
      description: "Experience innovation across 16 floors of dedicated spaces for frontier technology development. Join a diverse community of creators and innovators working at the intersection of technology, science, and arts in the heart of San Francisco.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://berlinhouse.com/",
      twitter: "https://x.com/berlinhouse_sf",
      application: "https://berlinhouse.com/"
    },
    amenities: [
      "Innovation Labs",
      "AI Research Spaces",
      "Biotech Facilities",
      "Art Studios",
      "Event Spaces",
      "Coworking Areas",
      "Tech Infrastructure",
      "Community Lounges"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "vitalist-bay-2025",
    name: "Vitalist Bay",
    slug: "vitalist-bay-2025",
    status: getStatus("2025-04-04", "2025-05-29"),
    startDate: "2025-04-04",
    endDate: "2025-05-29",
    brand: "TBD",
    coverImage: {
      url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      photographer: {
        name: "National Cancer Institute",
        username: "nci"
      },
      source: "Unsplash"
    },
    tagline: "An 8-week longevity zone bringing the world's best minds together to extend human healthspan & solve aging",
    tags: ["longevity", "biotech", "research", "health", "innovation"],
    location: {
      city: "Berkeley",
      country: "USA"
    },

    // Detailed Info
    description: "Vitalist Bay is an 8-week longevity zone bringing the world's best minds together to extend human healthspan & solve aging.",
    timezone: "America/Los_Angeles",
    coordinates: {
      latitude: 37.8715,
      longitude: -122.2730
    },
    notes: {
      description: "Join an intensive 8-week program focused on advancing longevity research and solutions. Work alongside leading minds in the field while contributing to groundbreaking developments in human healthspan extension.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.vitalistbay.com/",
      twitter: "TBD",
      application: "https://www.vitalistbay.com/"
    },
    amenities: [
      "Research Labs",
      "Biotech Facilities",
      "Collaboration Spaces",
      "Scientific Equipment",
      "Workshop Areas",
      "Community Events",
      "Health Facilities"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "lovepunks-2024",
    name: "Lovepunks",
    slug: "lovepunks-2024",
    status: getStatus("2024-10-12", "2024-11-10"),
    startDate: "2024-10-12",
    endDate: "2024-11-10",
    brand: "BLOCKRAVERS",
    coverImage: {
      url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
      photographer: {
        name: "Antenna",
        username: "antenna"
      },
      source: "Unsplash"
    },
    tagline: "A Pop-Up Village for Visionaries, Creators, and Changemakers",
    tags: ["blockchain", "community", "creativity", "music", "culture"],
    location: {
      city: "Chiang Mai",
      country: "THAILAND"
    },

    // Detailed Info
    description: "A collective of builders and ravers for gud.",
    timezone: "Asia/Bangkok",
    coordinates: {
      latitude: 18.7883,
      longitude: 98.9853
    },
    notes: {
      description: "Join a vibrant community where blockchain innovation meets creative expression. Experience a month of building, creating, and celebrating at the intersection of technology and culture.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.lovepunks.xyz/",
      twitter: "https://x.com/blockravers",
      application: "https://www.lovepunks.xyz/"
    },
    amenities: [
      "Creative Studios",
      "Music Spaces",
      "Event Venues",
      "Coworking Areas",
      "Community Spaces",
      "Innovation Labs"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "castalia-2024",
    name: "Castalia",
    slug: "castalia-2024",
    status: getStatus("2024-11-25", "2024-12-15"),
    startDate: "2024-11-25",
    endDate: "2024-12-15",
    brand: "TBD",
    coverImage: {
      url: "https://images.unsplash.com/photo-1518107616985-bd48230d3b20",
      photographer: {
        name: "Jezael Melgoza",
        username: "jezael"
      },
      source: "Unsplash"
    },
    tagline: "Exploring intersection of science, web3 and emerging tech",
    tags: ["science", "web3", "research", "innovation", "knowledge"],
    location: {
      city: "Mexico City",
      country: "MEXICO"
    },

    // Detailed Info
    description: "A home of intellectual pursuits, experimentation, and synthesising human knowledge. The place where inspiration meets reality. It is where science progresses",
    timezone: "America/Mexico_City",
    coordinates: {
      latitude: 19.4326,
      longitude: -99.1332
    },
    notes: {
      description: "Experience three weeks of intensive intellectual exploration and scientific advancement. Join a community dedicated to pushing the boundaries of human knowledge through experimentation and collaboration.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://castalia.city/",
      twitter: "https://x.com/CastaliaCity",
      application: "https://castalia.city/"
    },
    amenities: [
      "Research Labs",
      "Experimental Spaces",
      "Study Areas",
      "Collaboration Zones",
      "Workshop Facilities",
      "Scientific Equipment"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },
  
  {
    // Card Info
    id: "bloom-city-2025",
    name: "Bloom City",
    slug: "bloom-city-2025",
    status: getStatus("2025-06-22", "2025-08-16"),
    startDate: "2025-06-22",
    endDate: "2025-08-16",
    brand: "TBD",
    coverImage: {
      url: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843",
      photographer: {
        name: "National Cancer Institute",
        username: "nci"
      },
      source: "Unsplash"
    },
    tagline: "A longevity-focused village catalyzing cultural revolution through entertainment and innovation",
    tags: ["longevity", "entertainment", "science", "innovation", "culture"],
    location: {
      city: "Los Angeles",
      country: "USA"
    },

    // Detailed Info
    description: "Bloom City is a pop-up village in LA that is bringing together longevity thought leaders, innovators, scientists, and entertainment creators to form a new society focused on catalyzing a longevity cultural revolution. By using positive entertainment and fostering organic, bottom-up collaboration, we aim to seed a movement that prioritizes extended and enhanced human life.",
    timezone: "America/Los_Angeles",
    coordinates: {
      latitude: 34.0522,
      longitude: -118.2437
    },
    notes: {
      description: "Join an eight-week immersive experience where entertainment meets longevity science. Collaborate with thought leaders, creators, and innovators to shape a cultural movement focused on extending human healthspan through positive media and community engagement.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.jellyfishdao.org/bloom-city",
      twitter: "https://x.com/JellyfishDAO",
      application: "https://www.jellyfishdao.org/bloom-city"
    },
    amenities: [
      "Creative Studios",
      "Research Labs",
      "Entertainment Spaces",
      "Collaboration Zones",
      "Media Production Facilities",
      "Community Areas",
      "Innovation Hub"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  },

  {
    // Card Info
    id: "edge-expedition-south-africa-2025",
    name: "Edge Expedition: South Africa",
    slug: "edge-expedition-south-africa-2025",
    status: getStatus("2025-04-01", "2025-04-12"),
    startDate: "2025-04-01",
    endDate: "2025-04-12",
    brand: "EDGE CITY",
    coverImage: {
      url: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99",
      photographer: {
        name: "Michael DeStefano",
        username: "mikedestefano"
      },
      source: "Unsplash"
    },
    tagline: "Exploring Africa's role in the future of networked societies",
    tags: ["africa", "innovation", "network-states", "community", "research"],
    location: {
      city: "Cape Town",
      country: "SOUTH AFRICA"
    },

    // Detailed Info
    description: "How can Africa play a role in the future of networked societies and the next frontier? Join 50 global builders, founders, researchers and other interesting people in exploring, learning and building the future together",
    timezone: "Africa/Johannesburg",
    coordinates: {
      latitude: -33.9249,
      longitude: 18.4241
    },
    notes: {
      description: "A twelve-day expedition bringing together 50 global innovators to explore Africa's potential in shaping networked societies. Experience intensive collaboration while discovering opportunities at the intersection of technology and African innovation.",
      lastUpdated: "2024-03-19"
    },
    links: {
      website: "https://www.edgecity.live/southafrica",
      twitter: "https://x.com/JoinEdgeCity/status/1878903479202390400",
      application: "https://www.edgecity.live/southafrica"
    },
    amenities: [
      "Innovation Labs",
      "Workshop Spaces",
      "Networking Areas",
      "Research Facilities",
      "Community Events",
      "Expedition Activities"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    isPublished: true
  }


]; 

/*

  {
    // Card Info
    id: "", // lowercase, hyphenated, usually includes year e.g. "zuzalu-montenegro-2023"
    name: "", // display name e.g. "Zuzalu Montenegro"
    slug: "", // usually same as id
    status: getStatus("YYYY-MM-DD", "YYYY-MM-DD"), // start and end dates
    startDate: "YYYY-MM-DD", // e.g. "2024-06-01"
    endDate: "YYYY-MM-DD", // e.g. "2024-06-30"
    brand: "", // uppercase e.g. "ZUZALU" or "TBD" if unknown
    coverImage: {
      url: "", // verified Unsplash URL
      photographer: {
        name: "", // photographer's full name
        username: "" // their Unsplash username
      },
      source: "Unsplash"
    },
    tagline: "", // short description, one line
    tags: [], // array of lowercase strings e.g. ["community", "innovation", "technology"]
    location: {
      city: "", // city name
      country: "" // country name in UPPERCASE
    },

    // Detailed Info
    description: "", // longer description
    timezone: "", // e.g. "Europe/Berlin", "Asia/Bangkok"
    coordinates: {
      latitude: 0, // decimal number e.g. 18.7883
      longitude: 0 // decimal number e.g. 98.9853
    },
    notes: {
      description: "", // detailed notes about the event
      lastUpdated: "2024-03-19", // today's date
      estimatedRange: { // optional - remove if no pricing info
        min: 0,
        max: 0,
        currency: "USD",
        timeUnit: "total"
      }
    },
    links: {
      website: "", // full URL or "TBD"
      twitter: "", // X/Twitter URL or "TBD"
      application: "" // application URL, often same as website
    },
    amenities: [
      // array of strings, common ones include:
      "Coworking Space",
      "Community Events",
      "Innovation Hub",
      "Tech Workshops",
      "Networking Opportunities"
    ],

    // Metadata
    createdAt: "2024-03-19T00:00:00Z", // today's date
    updatedAt: "2024-03-19T00:00:00Z", // today's date
    isPublished: true
  }
*/