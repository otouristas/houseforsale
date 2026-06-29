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
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
          aria-label="Chat with landlord on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.01 14.069.99 11.999.99c-5.437 0-9.862 4.37-9.866 9.8.001 2.028.536 4.003 1.55 5.75L2.6 20.6l4.047-1.446zM17.13 14.51c-.274-.135-1.62-.79-1.87-.88-.25-.09-.43-.135-.61.135-.18.27-.694.88-.85 1.055-.157.18-.314.2-.59.065-2.285-1.123-3.774-2.26-4.834-4.042-.266-.453.266-.42.762-1.408.083-.165.04-.31-.02-.445-.06-.135-.53-1.285-.726-1.758-.19-.462-.384-.4-.53-.408-.135-.006-.29-.007-.444-.007-.156 0-.41.06-.624.293-.214.23-.817.8-.817 1.95 0 1.15.836 2.26.95 2.413.115.153 1.644 2.477 3.985 3.468.557.24 1.01.378 1.348.483.56.175 1.07.15 1.472.09.448-.067 1.62-.653 1.85-1.282.23-.63.23-1.17.16-1.285-.07-.115-.25-.18-.524-.315z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
