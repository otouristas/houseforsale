import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { images, kitchenFeatures } from "@/data/homepage";

export default function KitchenSection() {
  return (
    <section className="relative py-16 md:py-24 bg-bg-sand overflow-hidden">
      <div className="section-watermark">GOOD WORK</div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="overlap-card overlap-card--left p-6 md:p-8 space-y-5">
              <span className="text-primary-gold font-bold uppercase tracking-wider text-xs">
                Kitchen Spotlight
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-aegean">
                Kitchen Fully Furnished
              </h2>
              <div className="h-1 w-16 bg-primary-gold rounded-full" />
              <ul className="space-y-2.5">
                {kitchenFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-primary-gold shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-1.5 text-sm text-primary-gold font-bold hover:text-primary-gold-dark group"
              >
                See kitchen gallery
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src={images.kitchen}
                alt="Fully furnished kitchen with Franke appliances"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
