import { visaTips } from "@/data/homepage";

export default function VisaTipsSection() {
  return (
    <section className="py-16 md:py-20 bg-aegean-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-primary-gold font-bold uppercase tracking-wider text-xs">
            We Got You Covered
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-aegean">
            Tips for You
          </h2>
          <div className="h-1 w-20 bg-primary-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {visaTips.map((tip) => {
            const Icon = tip.icon;
            return (
              <div
                key={tip.title}
                className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex p-3 rounded-xl bg-aegean-light text-aegean mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-aegean text-lg mb-2">{tip.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{tip.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
