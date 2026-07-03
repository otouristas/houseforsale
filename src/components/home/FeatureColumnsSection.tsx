import { CheckCircle } from "lucide-react";
import {
  additionalFeatures,
  apartmentFeatures,
  buildingFeatures,
} from "@/data/homepage";

const columns = [
  { title: "Apartment Features", items: apartmentFeatures },
  { title: "Building Features", items: buildingFeatures },
  { title: "Additional Features", items: additionalFeatures },
];

export default function FeatureColumnsSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <span className="text-primary-gold font-bold uppercase tracking-wider text-xs">
            Property Details
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-aegean">
            Everything Included
          </h2>
          <div className="h-1 w-20 bg-primary-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((column) => (
            <div
              key={column.title}
              className="bg-bg-sand p-6 md:p-8 rounded-2xl border border-gray-100"
            >
              <h3 className="font-display text-xl font-bold text-aegean mb-5 pb-3 border-b border-gray-200">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-primary-gold shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-text-muted leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
