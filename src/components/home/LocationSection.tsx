import Image from "next/image";
import Link from "next/link";
import { Building, ExternalLink, Map, MapPin, UtensilsCrossed } from "lucide-react";
import {
  commuteDetails,
  leisureSpots,
  monuments,
  supermarkets,
} from "@/data/homepage";

export default function LocationSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <span className="text-primary-gold font-bold uppercase tracking-wider text-xs">
            Useful Information
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-aegean">
            Location &amp; Nearby Attractions
          </h2>
          <div className="h-1 w-20 bg-primary-gold mx-auto rounded-full" />
          <p className="text-sm text-text-muted max-w-2xl mx-auto">
            Situated in the premium residential sector of Nea Elvetia (near Kifisia). Quiet,
            family-oriented, and rich with parks, transport, and culture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                <Map size={18} className="text-primary-gold" />
                Commute &amp; Transport
              </h3>
              <div className="space-y-3">
                {commuteDetails.map((item) => (
                  <div
                    key={item.mode}
                    className="flex justify-between items-start border-b border-gray-100 pb-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-text-dark">{item.mode}</p>
                      <p className="text-xs text-text-muted">{item.note}</p>
                    </div>
                    <span className="bg-aegean-light text-aegean text-xs font-bold px-2.5 py-1 rounded-full shrink-0">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                <Building size={18} className="text-primary-gold" />
                Supermarkets &amp; Shopping
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {supermarkets.map((item) => (
                  <div
                    key={item.name}
                    className="bg-bg-sand p-3 rounded-xl flex justify-between items-center text-xs border border-gray-100"
                  >
                    <span className="font-medium text-text-dark">{item.name}</span>
                    <span className="text-primary-gold font-bold">{item.dist}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                <UtensilsCrossed size={18} className="text-primary-gold" />
                Nearby Leisure
              </h3>
              <div className="space-y-3">
                {leisureSpots.map((spot) => (
                  <div
                    key={spot.name}
                    className="flex justify-between items-center bg-bg-sand p-3 rounded-xl border border-gray-100"
                  >
                    <div>
                      <p className="text-sm font-semibold text-text-dark">{spot.name}</p>
                      <p className="text-xs text-text-muted">{spot.note}</p>
                    </div>
                    <span className="text-primary-gold font-bold text-xs">{spot.dist}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative h-[240px] rounded-2xl overflow-hidden border border-gray-200 bg-bg-sand flex flex-col items-center justify-center p-6 text-center space-y-3">
              <MapPin size={36} className="text-primary-gold" />
              <div>
                <h4 className="font-bold text-text-dark">1B Elenis Skoura, Str.</h4>
                <p className="text-xs text-text-muted mt-1">Nea Elvetia, Thessaloniki, 54249, Greece</p>
              </div>
              <a
                href="https://www.google.com/maps/place/Eleni+Skoura+1,+Thessaloniki+542+49"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-aegean text-white font-bold text-xs px-4 py-2.5 rounded-full hover:bg-aegean-dark transition"
              >
                Open in Google Maps
                <ExternalLink size={12} />
              </a>
            </div>

            <div>
              <h3 className="text-lg font-bold text-text-dark mb-4">Thessaloniki Monuments</h3>
              <div className="grid grid-cols-2 gap-4">
                {monuments.map((monument) => (
                  <Link
                    key={monument.name}
                    href={monument.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={monument.image}
                        alt={monument.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="25vw"
                      />
                    </div>
                    <div className="p-3 bg-bg-sand">
                      <p className="text-xs font-bold text-text-dark line-clamp-2 group-hover:text-aegean transition-colors">
                        {monument.name}
                      </p>
                      <p className="text-[10px] text-text-muted mt-1">{monument.distance}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
