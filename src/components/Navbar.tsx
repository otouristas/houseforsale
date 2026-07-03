"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Homepage", href: "/" },
    { name: "Why am I Selling my house", href: "/why-am-i-selling-my-house" },
    { name: "Gallery", href: "/gallery" },
    { name: "Kit for Professionals", href: "/kit-for-real-estate-agents" },
    { name: "Blog", href: "/blog" },
    { name: "Lets Communicate", href: "/lets-communicate" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const isHome = pathname === "/";
  const transparentHero = isHome && !isScrolled && !isOpen;

  const headerClass = transparentHero
    ? "bg-aegean-dark/20 backdrop-blur-sm border-b border-white/10 py-4"
    : isScrolled
      ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-2.5"
      : "bg-white/80 border-b border-gray-50 py-4";

  const linkClass = (href: string) => {
    if (isActive(href)) {
      return transparentHero
        ? "text-primary-gold-light font-bold"
        : "text-primary-gold font-bold";
    }
    return transparentHero
      ? "text-white/90 hover:text-white"
      : "text-gray-700 hover:text-primary-gold";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo Image */}
          <Link
            href="/"
            className="flex-shrink-0 relative w-48 h-12 transition-opacity hover:opacity-90"
          >
            <Image
              src="https://houseingreece.forsale/wp-content/uploads/2020/06/HouseInGreeceStandard-E01-eR.png"
              alt="House in Greece for Sale Logo"
              fill
              priority
              className="object-contain object-left"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${linkClass(link.href)}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+306974269889"
              className="inline-flex items-center space-x-2 bg-primary-gold hover:bg-primary-gold-dark text-white font-bold px-5 py-2.5 rounded-full shadow-sm transition-all duration-200 text-sm"
              id="nav-call-btn"
            >
              <Phone size={14} />
              <span>+30 6974 269889</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                transparentHero
                  ? "text-white hover:text-primary-gold-light"
                  : "text-gray-700 hover:text-primary-gold"
              }`}
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel (Full screen edge-to-edge) */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header bar inside mobile menu */}
          <div className="flex items-center justify-between px-4 sm:px-6 h-16 border-b border-gray-100 bg-white">
            <Link href="/" onClick={() => setIsOpen(false)} className="relative w-48 h-12">
              <Image
                src="https://houseingreece.forsale/wp-content/uploads/2020/06/HouseInGreeceStandard-E01-eR.png"
                alt="House in Greece for Sale Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-gray-700 hover:text-[#c5bb73] focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Large Navigation Links */}
          <div className="flex-grow overflow-y-auto px-6 py-8 space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-xl font-bold border-b border-gray-50 pb-3 transition-colors ${
                  isActive(link.href)
                    ? "text-[#c5bb73]"
                    : "text-gray-900 hover:text-[#c5bb73]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Sticky Full CTAs at the Bottom */}
          <div className="p-6 bg-gray-50 border-t border-gray-200 space-y-3">
            <a
              href="tel:+306974269889"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center space-x-2 bg-[#c5bb73] hover:bg-[#b2a860] text-white font-bold py-3.5 rounded-xl shadow-sm text-sm"
            >
              <Phone size={16} />
              <span>Call Owner: +30 6974 269889</span>
            </a>
            
            <div className="grid grid-cols-3 gap-2">
              <a
                href="https://wa.me/306974269889"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl"
              >
                WhatsApp
              </a>
              <a
                href="https://m.me/houseingreece.forsale"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center py-3 bg-[#0084FF] hover:bg-[#0074e0] text-white text-xs font-bold rounded-xl"
              >
                Messenger
              </a>
              <a
                href="viber://chat?number=%2B306974269889"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center py-3 bg-[#7360F2] hover:bg-[#604edf] text-white text-xs font-bold rounded-xl"
              >
                Viber
              </a>
            </div>
            
            <p className="text-center text-[10px] text-gray-400 font-semibold tracking-wide uppercase">
              Direct Transaction &bull; No Commissions
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
