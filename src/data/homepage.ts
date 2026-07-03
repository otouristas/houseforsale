import {
  Building2,
  Coins,
  Globe,
  Key,
  Scale,
  Shield,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export const IMAGE_BASE = "https://houseingreece.forsale/wp-content/uploads";

export const images = {
  hero: `${IMAGE_BASE}/2020/06/Viewfromthebalconies_1.jpg`,
  owner: `${IMAGE_BASE}/2020/07/photoGXtransp.png`,
  interior: `${IMAGE_BASE}/2020/06/LivingRoom_9.jpg`,
  galleryPanorama: `${IMAGE_BASE}/2020/06/Viewfromthebalconies_3.jpg`,
  kitchen: `${IMAGE_BASE}/2020/06/Kitchen_2.jpg`,
  heroThumbnails: [
    { url: `${IMAGE_BASE}/2020/06/LivingRoom_3.jpg`, alt: "Living room" },
    { url: `${IMAGE_BASE}/2020/06/Kitchen_2.jpg`, alt: "Kitchen" },
    { url: `${IMAGE_BASE}/2020/06/MasterBedroom_11.jpg`, alt: "Master bedroom" },
    { url: `${IMAGE_BASE}/2020/06/DSC_99351.jpg`, alt: "Building exterior" },
  ],
  monuments: {
    whiteTower: `${IMAGE_BASE}/2020/06/greece-white-tower-thessaloniki.jpg`,
    archOfGalerius: `${IMAGE_BASE}/2020/06/arch-of-galerius-tourism-thessaloniki.jpg`,
    aristotelous: `${IMAGE_BASE}/2020/06/aristotlesquarethessaloniki.jpg`,
    museum: `${IMAGE_BASE}/2020/06/Archaeological_Museum_of_Thessaloniki.jpg`,
  },
};

export const propertySpecs = [
  { label: "Neighborhood", value: "1B, Elenis Skoura Str., N. Elvetia (near Kifisia)" },
  { label: "Zone", value: "Residential" },
  { label: "Floor", value: "3rd – penthouse apartment" },
  { label: "Total Surface", value: "82.27 sqm" },
  { label: "Bedrooms", value: "2" },
  { label: "Bathrooms/WC", value: "1" },
  { label: "Living Room", value: "1" },
  { label: "Kitchen", value: "1" },
];

export const designChallenge =
  "Airy, bright and sunny apartment with good orientation and nice panoramic view. With basement storage room and protective private parking slot, one step from the building's main entrance. Suitable for commercial use – Airbnb investment.";

export interface IdealForItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const idealForItems: IdealForItem[] = [
  {
    title: "Income Generating Property",
    description: "Strong rental yield potential in a premium east-side neighborhood.",
    icon: Coins,
  },
  {
    title: "Residency Visa (EU Residency Permit)",
    description: "Eligible for Greece's Golden Visa program with full Schengen access.",
    icon: Globe,
  },
  {
    title: "Short-Term Leasing",
    description: "Ideal layout and location for Airbnb and holiday rentals.",
    icon: TrendingUp,
  },
  {
    title: "Long-Term Leasing",
    description: "Attractive for professionals and families seeking quality living.",
    icon: Key,
  },
];

export const apartmentFeatures = [
  "Autonomous Heating system (Natural Gas)",
  "Security door",
  "Automatic awnings",
  "Automatic shutters",
  "Sliding aluminum framed windows – balcony doors",
  "Sunscreen window films",
  "Tiled floors – living room, kitchen, bathroom",
  "Wooden floors – bedrooms",
  "Painted with bold colors",
  "Large front balcony with Thessaloniki bay area view – 1 balcony master bedroom – 1 balcony kitchen.",
];

export const buildingFeatures = [
  "Tiled roof above the apartment",
  "Elevator",
  "High quality building materials (wood, glass and aluminum) were used during the construction of the property resistant to humidity and time, which meet European quality standards.",
  "Road: asphalt type",
];

export const additionalFeatures = [
  "Plug for optic fiber",
  "Pre installation for water fireplace and for solar water heater",
  "Pre installation for alarm system, loud speakers, air-condition units",
];

export const kitchenFeatures = [
  "Large cabinets – lots of storage area",
  "Franke kitchen appliances",
  "Pitsos dishwasher",
  "Franke 2 bowls fireclay sink",
  "Built-in soap dispenser",
  "Stainless steel faucet – professional style",
  "Everpure filtration system with separate faucet for drinking water",
  "Bosch freezer and deep freezer",
];

export interface VisaTip {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const visaTips: VisaTip[] = [
  {
    title: "Getting the EU Visa",
    description:
      "The after purchase process of getting the EU Visa is taken care of by a Greek lawyer. It is an easy process.",
    icon: Globe,
  },
  {
    title: "Find a Good Lawyer",
    description:
      "George can suggest a very good lawyer. You can negotiate with him independently on his fee.",
    icon: Scale,
  },
  {
    title: "One Year Residency Permit",
    description:
      "The EU Visa takes around one month to be issued. However, Greek authorities issue a one year Residency Permit from the time the lawyer submits all necessary documents.",
    icon: Shield,
  },
  {
    title: "Support for VAT Number & Bank Account",
    description:
      "The lawyer will issue a Greek Tax number (VAT) necessary to buy property, and open a bank account at a Greek bank.",
    icon: Building2,
  },
];

export const commuteDetails = [
  { mode: "SKG Airport", time: "10 min drive (12 km)", note: "Direct highways to terminal" },
  { mode: "Voulgari Bus Terminal", time: "7 min walk", note: "Direct routes to downtown" },
  { mode: "Charilaou Bus Terminal", time: "3 min walk", note: "Local neighborhood connections" },
  { mode: "Metro Station", time: "3 min walk", note: "Rapid access to Thessaloniki center" },
  { mode: "Ring Road", time: "< 1 min drive", note: "Quick regional connections" },
  { mode: "Nea Elvetia Park", time: "4 min walk", note: "Jogging, strolling, or a quick coffee" },
];

export const supermarkets = [
  { name: "Masoutis", dist: "9 min walk" },
  { name: "AB Vasilopoulos", dist: "7 min walk" },
  { name: "Lidl", dist: "3 min drive (1.2 km)" },
  { name: "Macedonia Mall / Sklavenitis", dist: "5 min drive (3.6 km)" },
  { name: "Mediterranean Cosmos", dist: "6 min drive (<5 km)" },
];

export const leisureSpots = [
  { name: "Coffee Island", dist: "2 min walk", note: "Coffee shop" },
  { name: "Ouzaki", dist: "2 min walk", note: "Traditional restaurant" },
];

export const monuments = [
  {
    name: "White Tower of Thessaloniki",
    distance: "4.3 km – 14 min drive",
    image: images.monuments.whiteTower,
    mapsUrl:
      "https://www.google.com/maps/dir/White+Tower+of+Thessaloniki,+Thessaloniki+546+21/Eleni+Skoura+1,+Thessaloniki+542+49",
  },
  {
    name: "Arch of Galerius",
    distance: "4.7 km – 16 min drive",
    image: images.monuments.archOfGalerius,
    mapsUrl:
      "https://www.google.com/maps/dir/Arch+of+Galerius,+Thessaloniki/Eleni+Skoura+1,+Thessaloniki+542+49",
  },
  {
    name: "Aristotelous Square",
    distance: "5.6 km – 22 min drive",
    image: images.monuments.aristotelous,
    mapsUrl:
      "https://www.google.com/maps/dir/Aristotelous+Square,+Thessaloniki/Eleni+Skoura+1,+Thessaloniki+542+49",
  },
  {
    name: "Archaeological Museum of Thessaloniki",
    distance: "4 km – 15 min drive",
    image: images.monuments.museum,
    mapsUrl:
      "https://www.google.com/maps/dir/Archaeological+Museum+of+Thessaloniki,+Manoli+Andronikou,+Thessaloniki/Eleni+Skoura+1,+Thessaloniki+542+49",
  },
];

export const ownerIntro = {
  greeting: "Hello,",
  subtitle: "Thanks for visiting my site!",
  paragraphs: [
    "I'm George. Well, if you'll try to pronounce my native name it will be something like Yiorgos! Anyhow, either George or Yiorgos, it's fine by me! I just want you to know that I'm selling my house!",
    "Contemporary apartment for sale in Greece. This apartment is located on the east side of Thessaloniki, Greece – the only co-capital city in the world!",
    "Whether you like to live in this apartment, or invest in a property that will give you your desired return on investment, this is a smart choice for you.",
  ],
};
