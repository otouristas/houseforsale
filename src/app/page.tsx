import HeroSection from "@/components/home/HeroSection";
import OwnerIntroSection from "@/components/home/OwnerIntroSection";
import PropertySpecsSection from "@/components/home/PropertySpecsSection";
import IdealForSection from "@/components/home/IdealForSection";
import FeatureColumnsSection from "@/components/home/FeatureColumnsSection";
import GalleryBandSection from "@/components/home/GalleryBandSection";
import KitchenSection from "@/components/home/KitchenSection";
import ContactBar from "@/components/home/ContactBar";
import VisaTipsSection from "@/components/home/VisaTipsSection";
import LocationSection from "@/components/home/LocationSection";
import BlogPreviewSection from "@/components/home/BlogPreviewSection";
import AgentKitSection from "@/components/home/AgentKitSection";
import ContactSection from "@/components/home/ContactSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SingleFamilyResidence",
  name: "Contemporary Penthouse Apartment in Thessaloniki, Greece",
  description:
    "82.27 sqm, 2-bedroom penthouse apartment in N. Elvetia, Thessaloniki, Greece. Perfect for Golden Visa or Airbnb investment.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1B Elenis Skoura Str., N. Elvetia",
    addressLocality: "Thessaloniki",
    postalCode: "54249",
    addressCountry: "GR",
  },
  numberOfRooms: 4,
  numberOfBedrooms: 2,
  numberOfBathroomsTotal: 1,
  floorSize: {
    "@type": "QuantitativeValue",
    value: 82.27,
    unitCode: "MTK",
  },
  telephone: "+306974269889",
  email: "contact@houseingreece.forsale",
};

export default function Home() {
  return (
    <div className="relative bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection />
      <OwnerIntroSection />
      <PropertySpecsSection />
      <IdealForSection />
      <FeatureColumnsSection />
      <GalleryBandSection />
      <KitchenSection />
      <ContactBar />
      <VisaTipsSection />
      <LocationSection />
      <BlogPreviewSection />
      <AgentKitSection />
      <ContactSection />
    </div>
  );
}
