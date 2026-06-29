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

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/306974269889"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-white p-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer border border-gray-100/30"
          aria-label="Chat with landlord on WhatsApp"
        >
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720" className="w-11 h-11">
            <path fill="#00ac55" d="M360,0C161.18,0,0,161.18,0,360c0,65.41,17.45,126.75,47.94,179.61L0,720l187.02-44.21c51.34,28.18,110.28,44.21,172.98,44.21,198.82,0,360-161.18,360-360S558.82,0,360,0ZM360,655.52c-60.17,0-116.13-17.98-162.82-48.87l-110.49,28.14,30.99-105.61c-33.53-47.93-53.2-106.26-53.2-169.19,0-163.21,132.31-295.52,295.52-295.52s295.52,132.31,295.52,295.52-132.31,295.52-295.52,295.52Z"/>
            <path fill="#00ac55" d="M444.35,407.52l87.1,41.06c4,1.88,6.56,5.94,6.2,10.34-.94,11.46-5.54,34.43-26.13,55.02-58.12,58.12-162.49-7.64-166.74-10.18-25.67-13.79-50.06-32.24-73.19-55.36-23.12-23.12-41.58-47.52-55.37-73.19-2.55-4.24-68.31-108.61-10.18-166.74,20.59-20.59,43.56-25.19,55.02-26.13,4.41-.36,8.46,2.2,10.34,6.2l41.07,87.1c1.94,4.12,1.09,9.02-2.13,12.24l-30.61,30.61c-6.62,6.62-8.56,16.93-4,25.11,11.17,20.03,26.19,39.32,43.59,57.07,17.75,17.4,37.04,32.43,57.07,43.59,8.18,4.56,18.48,2.62,25.11-4l30.61-30.61c3.22-3.22,8.12-4.08,12.24-2.13Z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
