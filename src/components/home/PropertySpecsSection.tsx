import Image from "next/image";
import { designChallenge, images, propertySpecs } from "@/data/homepage";

export default function PropertySpecsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="section-watermark">2010</div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <span className="text-primary-gold font-bold uppercase tracking-wider text-xs">
            Year Built 2010
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-aegean">
            Apartment Description
          </h2>
          <div className="h-1 w-20 bg-primary-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src={images.interior}
                alt="Bright interior of the penthouse apartment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overlap-card overlap-card--right p-6 md:p-8 space-y-5">
              <dl className="space-y-3">
                {propertySpecs.map((spec) => (
                  <div key={spec.label} className="flex flex-col sm:flex-row sm:gap-4 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <dt className="text-xs font-bold uppercase tracking-wider text-text-muted sm:w-36 shrink-0">
                      {spec.label}
                    </dt>
                    <dd className="text-sm font-semibold text-text-dark">{spec.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="pt-2 border-t border-gray-100">
                <h3 className="font-bold text-aegean text-sm mb-2">The Design Functionality Challenge</h3>
                <p className="text-sm text-text-muted leading-relaxed">{designChallenge}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
