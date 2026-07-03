import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-aegean-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200/80 shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-aegean">
              Let&apos;s Communicate
            </h2>
            <p className="text-xs sm:text-sm text-text-muted max-w-lg mx-auto">
              Fill out the form below or contact me directly to get more details about the property,
              schedule a personal or virtual video walkthrough, or consult with my experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent text-sm"
                  placeholder="e.g. John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1"
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent text-sm"
                  placeholder="e.g. john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent text-sm resize-none"
                  placeholder="Ask about Golden Visa, photos, price, or schedule details..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary-gold hover:bg-primary-gold-dark text-white font-bold rounded-xl shadow-sm transition text-sm cursor-pointer"
                id="home-submit-btn"
              >
                Send Inquiry
              </button>
            </form>

            <div className="space-y-5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
              <h3 className="font-bold text-text-dark text-base">Contact Directly</h3>
              <p className="text-xs text-text-muted">
                I respond within an hour during business hours (9am – 9pm Greek Time).
              </p>

              <div className="space-y-3.5">
                <a
                  href="tel:+306974269889"
                  className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-bg-sand transition border border-transparent hover:border-gray-200"
                >
                  <div className="p-2 rounded-full bg-primary-gold/10 text-primary-gold">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Call Mobile</p>
                    <p className="text-sm font-bold text-text-dark">+30 6974 269889</p>
                  </div>
                </a>

                <a
                  href="mailto:contact@houseingreece.forsale"
                  className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-bg-sand transition border border-transparent hover:border-gray-200"
                >
                  <div className="p-2 rounded-full bg-primary-gold/10 text-primary-gold">
                    <Mail size={16} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-text-muted">Email Address</p>
                    <p className="text-xs sm:text-sm font-bold text-text-dark break-words">
                      contact@houseingreece.forsale
                    </p>
                  </div>
                </a>
              </div>

              <div className="pt-2 flex gap-3">
                <a
                  href="https://wa.me/306974269889"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-lg text-center"
                >
                  WhatsApp
                </a>
                <a
                  href="https://m.me/houseingreece.forsale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 bg-[#0084FF] hover:bg-[#0074e0] text-white text-xs font-bold rounded-lg text-center"
                >
                  Messenger
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
