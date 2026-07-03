import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactBar() {
  return (
    <section className="py-12 md:py-14 bg-aegean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Want to learn more?
            </h2>
            <p className="text-white/80 text-sm sm:text-base max-w-xl">
              Fill my form and I&apos;ll communicate with you to inform you about all the extra
              details you may need!
            </p>
          </div>
          <Link
            href="/lets-communicate"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-gold hover:bg-primary-gold-dark text-white font-bold rounded-full shadow-lg transition-all text-sm shrink-0"
          >
            Let&apos;s Communicate
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
