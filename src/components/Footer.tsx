import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand/About Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block relative w-48 h-10">
              <Image
                src="https://houseingreece.forsale/wp-content/uploads/2020/06/HouseInGreeceStandard-E01-eR.png"
                alt="House in Greece for Sale Logo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-gray-600 text-sm max-w-md leading-relaxed">
              A premium, contemporary 82.27 sqm penthouse apartment located on the quiet, high-class east side of Thessaloniki, Greece. Features fully furnished kitchen, natural gas heating, private parking, and high-yield potential for Golden Visa and Airbnb rentals.
            </p>
            <div className="flex space-x-4 pt-2 text-xs">
              <a
                href="https://m.me/houseingreece.forsale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c5bb73] hover:text-[#b2a860] flex items-center space-x-1 font-semibold"
              >
                <span>FB Messenger</span>
                <ExternalLink size={10} />
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="https://wa.me/306974269889"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c5bb73] hover:text-[#b2a860] flex items-center space-x-1 font-semibold"
              >
                <span>WhatsApp</span>
                <ExternalLink size={10} />
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="viber://chat?number=%2B306974269889"
                className="text-[#c5bb73] hover:text-[#b2a860] flex items-center space-x-1 font-semibold"
              >
                <span>Viber</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Explore Property
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-[#c5bb73] transition-colors">
                  Homepage
                </Link>
              </li>
              <li>
                <Link href="/why-am-i-selling-my-house" className="hover:text-[#c5bb73] transition-colors">
                  Why am I Selling my house
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#c5bb73] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/kit-for-real-estate-agents" className="hover:text-[#c5bb73] transition-colors">
                  Kit for Professionals
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#c5bb73] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Contact Owner
            </h4>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-[#c5bb73] mt-0.5 flex-shrink-0" />
                <span>1B Elenis Skoura Str., N. Elvetia, Thessaloniki, 54249, Greece</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-[#c5bb73] flex-shrink-0" />
                <a href="tel:+306974269889" className="hover:text-[#c5bb73]">
                  +30 6974 269889
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-[#c5bb73] flex-shrink-0" />
                <a href="mailto:contact@houseingreece.forsale" className="hover:text-[#c5bb73] break-all">
                  contact@houseingreece.forsale
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {currentYear} House In Greece For Sale. All rights reserved. Direct sale from landlord George Xipolitas.</p>
          <div className="mt-4 sm:mt-0 space-x-4">
            <Link href="/personal-data-processing" className="hover:text-[#c5bb73] transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <span className="opacity-60">No Agency Commission</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
