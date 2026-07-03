import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images, ownerIntro } from "@/data/homepage";

export default function OwnerIntroSection() {
  return (
    <section className="py-16 md:py-24 bg-bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative mx-auto lg:mx-0 w-full max-w-md">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white shadow-xl border border-gray-100">
              <Image
                src={images.owner}
                alt="George Xipolitas, property owner"
                fill
                className="object-contain object-bottom p-4"
                sizes="(max-width: 1024px) 80vw, 400px"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-gold/20 rounded-full blur-2xl -z-10" />
          </div>

          <div className="space-y-5">
            <span className="text-primary-gold font-bold uppercase tracking-wider text-xs">
              An intro from me
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-aegean leading-tight">
              {ownerIntro.greeting}
            </h2>
            <p className="text-lg font-semibold text-text-dark">{ownerIntro.subtitle}</p>
            <div className="h-1 w-16 bg-primary-gold rounded-full" />
            {ownerIntro.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-sm sm:text-base text-text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/why-am-i-selling-my-house"
                className="inline-flex items-center gap-2 px-6 py-3 bg-aegean hover:bg-aegean-dark text-white font-bold rounded-full transition-all text-sm"
              >
                Why am I selling my house
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 border border-gray-200 text-text-dark font-bold rounded-full transition-all text-sm"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
