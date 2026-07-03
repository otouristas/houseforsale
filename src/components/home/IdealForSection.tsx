import { idealForItems } from "@/data/homepage";

export default function IdealForSection() {
  return (
    <section className="py-16 md:py-20 bg-bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-primary-gold font-bold uppercase tracking-wider text-xs">Ideal For</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-aegean">
            A Smart Choice for Every Investor
          </h2>
          <div className="h-1 w-20 bg-primary-gold mx-auto rounded-full" />
          <p className="text-sm text-text-muted leading-relaxed">
            Whether you like to live in this apartment, or invest in a property that will give you
            your desired return on investment, this is a smart choice for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {idealForItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-gold/30 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-aegean-light text-aegean mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-text-dark text-base mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
