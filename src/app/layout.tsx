import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "House in Greece for Sale | Premium Penthouse in Thessaloniki",
    template: "%s | House in Greece for Sale"
  },
  description: "Explore this contemporary 82.27 sqm, 2-bedroom penthouse apartment in N. Elvetia, Thessaloniki, Greece. Perfect for Golden Visa investment, short-term Airbnb leasing, or premium living.",
  keywords: [
    "House in Greece for Sale",
    "apartment for sale Greece",
    "House in Thessaloniki for Sale",
    "apartment for sale Thessaloniki",
    "Golden Visa Greece real estate",
    "property investment Greece",
    "Thessaloniki penthouse for sale",
    "no commission real estate Greece",
    "buy property Thessaloniki"
  ],
  authors: [{ name: "George Xipolitas" }],
  creator: "George Xipolitas",
  metadataBase: new URL("https://houseingreece.forsale"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "House in Greece for Sale | Premium Penthouse in Thessaloniki",
    description: "Contemporary 82.27 sqm, 2-bedroom penthouse apartment in N. Elvetia, Thessaloniki, Greece. High-yield real estate investment with Golden Visa eligibility.",
    url: "https://houseingreece.forsale",
    siteName: "House in Greece for Sale",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://houseingreece.forsale/wp-content/uploads/2020/06/LivingRoom_3.jpg",
        width: 1200,
        height: 630,
        alt: "Contemporary Thessaloniki Penthouse Living Room"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "House in Greece for Sale | Premium Penthouse in Thessaloniki",
    description: "Contemporary 82.27 sqm penthouse for sale in Thessaloniki, Greece. Perfect for Golden Visa & rental yield.",
    images: ["https://houseingreece.forsale/wp-content/uploads/2020/06/LivingRoom_3.jpg"],
  },
  icons: {
    icon: [
      { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/HouseInGreeceCentered-E01-eR_favicon.jpg", type: "image/jpeg" }
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-text-dark font-sans selection:bg-primary-gold/30 selection:text-text-dark">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
