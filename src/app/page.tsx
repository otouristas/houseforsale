import Link from "next/link";
import Image from "next/image";
import { 
  Building, 
  MapPin, 
  Calendar, 
  Maximize2, 
  Bed, 
  Bath, 
  Flame, 
  ShieldCheck, 
  Wind, 
  Sun, 
  ArrowRight, 
  Phone, 
  Mail,
  CheckCircle,
  Map,
  Compass as CompassIcon,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function Home() {
  const specs = [
    { label: "Year Built", value: "2010", icon: Calendar },
    { label: "Total Surface", value: "82.27 sqm", icon: Maximize2 },
    { label: "Bedrooms", value: "2 Rooms", icon: Bed },
    { label: "Bathrooms/WC", value: "1 Bath", icon: Bath },
    { label: "Floor", value: "3rd (Penthouse)", icon: Building },
    { label: "Zone", value: "Residential", icon: MapPin },
  ];

  const featuresList = [
    { title: "Natural Gas Heating", desc: "Autonomous natural gas heating system for winter comfort.", icon: Flame },
    { title: "Premium Security", desc: "High-grade armored security door and building safety parameters.", icon: ShieldCheck },
    { title: "Automatic Shutters", desc: "Automatic electric awnings and shutters for thermal management.", icon: Sun },
    { title: "Energy Windows", desc: "Sliding aluminum framed balcony doors with sunscreen window films.", icon: Wind },
    { title: "Mixed Flooring", desc: "Italian tile floors in living/kitchen areas & hardwood floors in bedrooms.", icon: CompassIcon },
    { title: "Pre-Installations", desc: "Ready for alarm system, water fireplace, A/C units, and surround sound.", icon: Sparkles },
  ];

  const commuteDetails = [
    { mode: "SKG Airport", time: "10 min drive (12 km)", note: "Direct highways to terminal" },
    { mode: "Voulgari Bus Terminal", time: "7 min walk", note: "Direct routes to downtown" },
    { mode: "Charilaou Bus Terminal", time: "3 min walk", note: "Local neighborhood connections" },
    { mode: "Metro Station", time: "3 min walk", note: "Rapid access to Thessaloniki center" },
    { mode: "Nea Elvetia Park", time: "4 min walk", note: "Perfect for morning walks & jogging" },
  ];

  const supermarkets = [
    { name: "AB Vasilopoulos", dist: "7 min walk" },
    { name: "Masoutis", dist: "9 min walk" },
    { name: "Lidl", dist: "3 min drive (1.2 km)" },
    { name: "Macedonia Mall / Sklavenitis", dist: "5 min drive (3.6 km)" },
    { name: "Mediterranean Cosmos Mall", dist: "6 min drive (<5 km)" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SingleFamilyResidence",
    "name": "Contemporary Penthouse Apartment in Thessaloniki, Greece",
    "description": "82.27 sqm, 2-bedroom penthouse apartment in N. Elvetia, Thessaloniki, Greece. Perfect for Golden Visa or Airbnb investment.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1B Elenis Skoura Str., N. Elvetia",
      "addressLocality": "Thessaloniki",
      "postalCode": "54249",
      "addressCountry": "GR"
    },
    "numberOfRooms": 4,
    "numberOfBedrooms": 2,
    "numberOfBathroomsTotal": 1,
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": 82.27,
      "unitCode": "MTK"
    },
    "telephone": "+306974269889",
    "email": "contact@houseingreece.forsale"
  };

  return (
    <div className="relative pt-16 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section (Bright light-overlay styling) */}
      <section className="relative h-[85vh] flex items-center justify-center bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://houseingreece.forsale/wp-content/uploads/2020/06/LivingRoom_3.jpg"
            alt="Thessaloniki Penthouse Living Room"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-900 space-y-6 animate-fade-in">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c5bb73]/20 text-[#9e924a] border border-[#c5bb73]/30">
            Direct from Landlord &bull; No Commission
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
            Contemporary Penthouse <br />
            <span className="text-[#c5bb73]">For Sale in Greece</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
            Beautiful 82.27 sqm, 2-bedroom penthouse apartment in Elenis Skoura, Thessaloniki.
            The perfect investment for Golden Visa eligibility, Airbnb lease, or premium living.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/lets-communicate"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#c5bb73] hover:bg-[#b2a860] text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
            >
              <span>Schedule a Viewing</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/gallery"
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-bold rounded-full shadow-sm transition-all duration-300 flex items-center justify-center text-sm"
            >
              Explore Photo Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Key Specs Grid */}
      <section className="bg-gray-50 py-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200/80">
            {specs.map((spec, idx) => {
              const Icon = spec.icon;
              return (
                <div key={idx} className="text-center p-2 border-r border-gray-100 last:border-r-0 last:border-0">
                  <div className="inline-flex p-3 rounded-full bg-gray-50 text-[#c5bb73] mb-2">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{spec.label}</h3>
                  <p className="text-sm sm:text-base font-bold text-gray-800 mt-1">{spec.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Detailed Features Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Outstanding Functionality &amp; Comfort
            </h2>
            <div className="h-1 w-20 bg-[#c5bb73] mx-auto rounded-full" />
            <p className="text-sm text-gray-600">
              The apartment features premium materials resistant to humidity and time, built to high European construction standards. Perfect for year-round residency or commercial renting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuresList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#c5bb73]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="inline-flex p-2.5 rounded-xl bg-white text-[#c5bb73] shadow-sm mb-4 border border-gray-100">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Kitchen Spotlight Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image Block */}
            <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-md border border-gray-200">
              <Image
                src="https://houseingreece.forsale/wp-content/uploads/2020/06/Kitchen_2.jpg"
                alt="Fully Furnished Kitchen with Franke Appliances"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/95 text-gray-800 text-xs font-bold px-3 py-1 rounded-full border border-gray-100">
                Gourmet Ready
              </div>
            </div>

            {/* Content Block */}
            <div className="space-y-5">
              <span className="text-[#c5bb73] font-bold uppercase tracking-wider text-xs block">
                Interior Spotlight
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                Fully Equipped Luxury Kitchen
              </h2>
              <div className="h-1 w-16 bg-[#c5bb73] rounded-full" />
              <p className="text-sm text-gray-600 leading-relaxed">
                Enjoy cooking in a premium, fully furnished kitchen loaded with top-tier appliances and smart additions. Everything was selected to combine luxury design with longevity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Franke cooking appliances",
                  "Built-in Franke soap dispenser",
                  "Pitsos built-in dishwasher",
                  "Everpure drinking water filter",
                  "Professional style faucet",
                  "Bosch freezer & deep freezer",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle size={14} className="text-[#c5bb73] flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/gallery"
                  className="inline-flex items-center space-x-1.5 text-xs sm:text-sm text-[#c5bb73] font-bold hover:text-[#b2a860] group"
                >
                  <span>See kitchen gallery</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Location Guide */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
            <span className="text-[#c5bb73] font-bold uppercase tracking-wider text-xs block">
              Neighborhood Advantage
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">
              The Prestige of Thessaloniki East Side
            </h2>
            <div className="h-1 w-20 bg-[#c5bb73] mx-auto rounded-full" />
            <p className="text-sm text-gray-600">
              Situated in the premium residential sector of **Nea Elvetia (near Kifisia)**. This quiet, family-oriented neighborhood is highly structured, rich with parks, and enjoys high community security and access.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Transport & Amenities */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
                  <Map size={18} className="text-[#c5bb73]" />
                  <span>Commute &amp; Transport</span>
                </h3>
                <div className="space-y-3">
                  {commuteDetails.map((item, i) => (
                    <div key={i} className="flex justify-between items-start border-b border-gray-100 pb-2.5">
                      <div>
                        <p className="text-sm font-semibold text-gray-850">{item.mode}</p>
                        <p className="text-xs text-gray-400">{item.note}</p>
                      </div>
                      <span className="bg-gray-100 text-gray-700 text-xs font-bold px-2.5 py-1 rounded-full">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-850 mb-4 flex items-center space-x-2">
                  <Building size={18} className="text-[#c5bb73]" />
                  <span>Supermarkets &amp; Shopping</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {supermarkets.map((item, i) => (
                    <div key={i} className="bg-gray-50 p-3 rounded-xl flex justify-between items-center text-xs border border-gray-100">
                      <span className="font-medium text-gray-700">{item.name}</span>
                      <span className="text-[#c5bb73] font-bold">{item.dist}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Map Placeholder (Clean bright look) */}
            <div className="space-y-6">
              <div className="relative h-[280px] rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 flex flex-col items-center justify-center p-6 text-center space-y-3">
                <MapPin size={40} className="text-[#c5bb73] animate-bounce" />
                <div>
                  <h4 className="font-bold text-gray-800 text-base">1B Elenis Skoura, Str.</h4>
                  <p className="text-xs text-gray-500 mt-1">Nea Elvetia, Thessaloniki, 54249, Greece</p>
                </div>
                <a
                  href="https://www.google.com/maps/place/Eleni+Skoura+1,+Thessaloniki+542+49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 bg-gray-800 text-white font-bold text-xs px-4 py-2.5 rounded-full hover:bg-gray-700 shadow-sm transition"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <div className="bg-[#c5bb73]/10 p-5 rounded-2xl border border-[#c5bb73]/20">
                <h4 className="font-bold text-gray-800 text-sm mb-1">Distance to Historic Sites</h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Located near core cultural hotspots: White Tower of Thessaloniki (14 mins), Arch of Galerius (16 mins), and Aristotelous Square (22 mins).
                </p>
                <div className="flex justify-between text-xs text-gray-700 font-semibold">
                  <span>White Tower: 4.3 km</span>
                  <span>Aristotelous Square: 5.6 km</span>
                  <span>Museum: 4.0 km</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Investor & Golden Visa Guide (No dark backgrounds!) */}
      <section className="py-16 md:py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="text-[#c5bb73] font-bold uppercase tracking-wider text-xs block">
                European Residency
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                Invest in Greece, <br />
                <span className="text-[#c5bb73]">Unlock the Golden Visa</span>
              </h2>
              <div className="h-1 w-16 bg-[#c5bb73] rounded-full" />
              <p className="text-sm text-gray-600 leading-relaxed">
                Greece offers the most competitive Golden Visa program in Europe. By purchasing real estate, non-EU investors acquire permanent residence permits for themselves and their immediate families, granting unlimited travel inside Europe's Schengen Zone.
              </p>

              <div className="space-y-3">
                {[
                  "No residency stay requirement — visit at your choice",
                  "Renew the visa every 5 years for as long as you own the asset",
                  "Path to full European citizenship after 7 years",
                  "Immediate access to European education and health systems",
                  "Full support for Greek VAT number and bank accounts",
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-2.5">
                    <CheckCircle size={16} className="text-[#c5bb73] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card: The Support Team (Clean grey card) */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-3">George's Expert Transition Team</h3>
              <p className="text-xs sm:text-sm text-gray-650 leading-relaxed">
                When you buy this apartment, you aren't just getting the keys; you get direct access to a dedicated team of professionals to fast-track your investment:
              </p>
              
              <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="bg-[#c5bb73]/20 text-[#9e924a] font-bold px-2 py-0.5 rounded text-xs mt-0.5 flex-shrink-0">Lawyers</span>
                  <span>Two legal partners with 10+ years in foreign real estate acquisitions.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="bg-[#c5bb73]/20 text-[#9e924a] font-bold px-2 py-0.5 rounded text-xs mt-0.5 flex-shrink-0">Accountant</span>
                  <span>Personal certified accountant to secure tax numbers (VAT) and corporate filings.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="bg-[#c5bb73]/20 text-[#9e924a] font-bold px-2 py-0.5 rounded text-xs mt-0.5 flex-shrink-0">Engineer</span>
                  <span>Experienced civil engineer for technical certifications and layouts.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="bg-[#c5bb73]/20 text-[#9e924a] font-bold px-2 py-0.5 rounded text-xs mt-0.5 flex-shrink-0">Banking</span>
                  <span>Direct links with senior executives at three top Greek banks to streamline fund transfers.</span>
                </li>
              </ul>
              
              <div className="pt-2 border-t border-gray-100 text-center">
                <Link
                  href="/why-am-i-selling-my-house"
                  className="inline-flex items-center space-x-1.5 text-xs text-[#c5bb73] font-bold hover:text-[#b2a860]"
                >
                  <span>Read George's personal note</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Recent Blog Posts (SEO Content Hub - Clean design) */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-baseline mb-10">
            <div className="space-y-1">
              <span className="text-[#c5bb73] font-bold uppercase tracking-wider text-xs block">
                Greece Real Estate Market
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Investment Insights &amp; Market News
              </h2>
            </div>
            <Link
              href="/blog"
              className="mt-2 sm:mt-0 inline-flex items-center space-x-1 text-xs sm:text-sm text-[#c5bb73] font-bold hover:text-[#b2a860]"
            >
              <span>View all articles</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <article key={post.slug} className="flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-150/80 hover:shadow-md transition duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.imageUrl}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 text-gray-800 text-xs px-2.5 py-1 rounded-md uppercase tracking-wider font-bold border border-gray-100">
                    {post.category}
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs text-gray-400 font-semibold">{post.date}</span>
                    <h3 className="text-base font-bold text-gray-900 line-clamp-2 hover:text-[#c5bb73]">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-550 line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>
                  <div className="pt-3 mt-4 border-t border-gray-100">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-1 text-[#c5bb73] font-bold hover:text-[#b2a860] text-xs"
                    >
                      <span>Read Full Post</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call to Action / Lead Form (Clean light card design) */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200/80 shadow-sm space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Let's Communicate</h2>
              <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto">
                Fill out the form below or contact me directly to get more details about the property, schedule a personal or virtual video walkthrough, or consult with my experts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Form Block */}
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#c5bb73] focus:border-transparent text-sm"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#c5bb73] focus:border-transparent text-sm"
                    placeholder="e.g. john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#c5bb73] focus:border-transparent text-sm resize-none"
                    placeholder="Ask about Golden Visa, photos, price, or schedule details..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#c5bb73] hover:bg-[#b2a860] text-white font-bold rounded-xl shadow-sm transition text-sm cursor-pointer"
                  id="home-submit-btn"
                >
                  Send Inquiry
                </button>
              </form>

              {/* Direct Channels Block */}
              <div className="space-y-5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
                <h3 className="font-bold text-gray-800 text-base">Contact Directly</h3>
                <p className="text-xs text-gray-400">I respond within an hour during business hours (9am - 9pm Greek Time).</p>
                
                <div className="space-y-3.5">
                  <a
                    href="tel:+306974269889"
                    className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-gray-50 transition border border-transparent hover:border-gray-150"
                  >
                    <div className="p-2 rounded-full bg-[#c5bb73]/10 text-[#c5bb73]">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Call Mobile</p>
                      <p className="text-sm font-bold text-gray-800">+30 6974 269889</p>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@houseingreece.forsale"
                    className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-gray-50 transition border border-transparent hover:border-gray-150"
                  >
                    <div className="p-2 rounded-full bg-[#c5bb73]/10 text-[#c5bb73]">
                      <Mail size={16} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-gray-400">Email Address</p>
                      <p className="text-xs sm:text-sm font-bold text-gray-800 break-words">contact@houseingreece.forsale</p>
                    </div>
                  </a>
                </div>

                <div className="pt-2 flex gap-3">
                  <a
                    href="https://wa.me/306974269889"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-lg text-center"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="https://m.me/houseingreece.forsale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 bg-[#0084FF] hover:bg-[#0074e0] text-white text-xs font-bold rounded-lg text-center"
                  >
                    Messenger
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
