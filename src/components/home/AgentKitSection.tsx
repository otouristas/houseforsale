import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function AgentKitSection() {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-primary-gold font-bold uppercase tracking-wider text-xs">
              For Professionals
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-aegean">
              Download House Kit for Professionals
            </h2>
            <div className="h-1 w-16 bg-primary-gold rounded-full" />
            <p className="text-sm text-text-muted leading-relaxed max-w-lg">
              Only for professionals such as real estate agents, property investment firms, and
              consultants. Get floor plans, specs, and marketing materials in one package.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Link
              href="/kit-for-real-estate-agents"
              className="inline-flex items-center gap-3 px-8 py-4 bg-aegean hover:bg-aegean-dark text-white font-bold rounded-2xl shadow-lg transition-all text-sm"
            >
              <Download size={20} />
              Download Kit
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
