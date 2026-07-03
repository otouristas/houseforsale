import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images } from "@/data/homepage";

export default function GalleryBandSection() {
  return (
    <section className="relative h-[50vh] min-h-[320px] max-h-[560px] overflow-hidden">
      <Image
        src={images.galleryPanorama}
        alt="Panoramic view through the apartment glass doors"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-aegean/50 flex items-center justify-center">
        <div className="text-center px-4 space-y-5">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Take a Look at the Gallery
          </h2>
          <p className="text-white/85 text-sm sm:text-base max-w-lg mx-auto">
            Explore 27 photos of the living spaces, kitchen, bedrooms, views, and building exterior.
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-gold hover:bg-primary-gold-dark text-white font-bold rounded-full shadow-lg transition-all text-sm"
          >
            View Apartment Gallery
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
