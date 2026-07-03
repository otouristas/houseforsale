import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images } from "@/data/homepage";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero}
          alt="Panoramic view from the apartment balcony in Thessaloniki"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-aegean-dark/90 via-aegean/40 to-aegean/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8 pt-32">
        <div className="max-w-3xl space-y-5 animate-fade-in">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 text-white border border-white/25 backdrop-blur-sm">
            Direct from Landlord &bull; No Commission
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white">
            House in Greece
            <span className="block text-primary-gold">For Sale</span>
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-xl leading-relaxed">
            Contemporary 82.27 sqm penthouse in Nea Elvetia, Thessaloniki. Golden Visa eligible,
            Airbnb-ready, and built for premium Mediterranean living.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="/lets-communicate"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary-gold hover:bg-primary-gold-dark text-white font-bold rounded-full shadow-lg transition-all text-sm"
            >
              Schedule a Viewing
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/30 backdrop-blur-sm transition-all text-sm"
            >
              Explore Gallery
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {images.heroThumbnails.map((thumb) => (
            <div
              key={thumb.url}
              className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-white/20 shadow-lg"
            >
              <Image src={thumb.url} alt={thumb.alt} fill className="object-cover" sizes="25vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
