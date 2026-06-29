"use client";

import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function ContactContent() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const contactChannels = [
    {
      name: "WhatsApp Messenger",
      desc: "Fastest response channel. Tap to open chat.",
      href: "https://wa.me/306974269889",
      bgColor: "bg-[#25D366]/10 text-[#1eaf50] border-[#25D366]/20 hover:bg-[#25D366]/20",
    },
    {
      name: "FB Messenger",
      desc: "Send instant text / voice messages via Facebook.",
      href: "https://m.me/houseingreece.forsale",
      bgColor: "bg-[#0084FF]/10 text-[#0074e0] border-[#0084FF]/20 hover:bg-[#0084FF]/20",
    },
    {
      name: "Viber Chat",
      desc: "Connect directly via Viber on desktop or mobile.",
      href: "viber://chat?number=%2B306974269889",
      bgColor: "bg-[#7360F2]/10 text-[#604edf] border-[#7360F2]/20 hover:bg-[#7360F2]/20",
    },
    {
      name: "Skype Connection",
      desc: "Start a call or call schedule with George.",
      href: "skype:live:contact_7894?chat",
      bgColor: "bg-[#00AFF0]/10 text-[#009bda] border-[#00AFF0]/20 hover:bg-[#00AFF0]/20",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Left Column: Direct Info & Quick Channels */}
      <div className="lg:col-span-5 space-y-8">
        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 space-y-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-3">Property Contact Details</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="text-[#c5bb73] mt-1 flex-shrink-0" size={18} />
              <div>
                <p className="text-xs text-gray-400">Property Address</p>
                <a
                  href="https://www.google.com/maps/place/Eleni+Skoura+1,+Thessaloniki+542+49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-gray-800 hover:text-[#c5bb73]"
                >
                  1B Elenis Skoura Str., N. Elvetia, Thessaloniki, 54249, Greece
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="text-[#c5bb73] mt-1 flex-shrink-0" size={18} />
              <div>
                <p className="text-xs text-gray-400">Mobile Number</p>
                <a href="tel:+306974269889" className="text-sm font-bold text-gray-800 hover:text-[#c5bb73]">
                  +30 6974 269889
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="text-[#c5bb73] mt-1 flex-shrink-0" size={18} />
              <div>
                <p className="text-xs text-gray-400">Email Address</p>
                <a href="mailto:contact@houseingreece.forsale" className="text-sm font-bold text-gray-800 hover:text-[#c5bb73] break-all">
                  contact@houseingreece.forsale
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="text-[#c5bb73] mt-1 flex-shrink-0" size={18} />
              <div>
                <p className="text-xs text-gray-400">Availability Hours</p>
                <p className="text-sm font-bold text-gray-800">
                  Monday - Friday: 9am - 9pm <br />
                  Saturday: 9am - 5pm <br />
                  Sunday: Closed <span className="text-xs text-gray-400 font-normal">(Eastern European Time)</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Channel Cards */}
        <div className="space-y-4">
          <h3 className="font-bold text-gray-800 text-base">Instant Messaging</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactChannels.map((chan, i) => (
              <a
                key={i}
                href={chan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-xl border flex flex-col justify-between transition-all duration-200 ${chan.bgColor}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm">{chan.name}</span>
                  <MessageSquare size={14} />
                </div>
                <p className="text-xs opacity-90 mt-2 leading-relaxed">{chan.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Lead Form */}
      <div className="lg:col-span-7 bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5">Send a Message</h2>
        
        {status === "success" ? (
          <div className="p-6 bg-green-50 text-green-800 rounded-xl border border-green-255 flex items-start space-x-3">
            <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600" size={20} />
            <div>
              <h4 className="font-bold">Message Sent Successfully!</h4>
              <p className="text-xs sm:text-sm mt-1">Thank you for getting in touch, George will respond to your email or phone number as soon as possible.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#c5bb73] focus:border-transparent text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#c5bb73] focus:border-transparent text-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#c5bb73] focus:border-transparent text-sm"
                placeholder="e.g. +1 555 123 4567"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                Your Message *
              </label>
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#c5bb73] focus:border-transparent text-sm resize-none"
                placeholder="Provide details about your query. If you want a call schedule, please specify your timezone and preferred hours."
              ></textarea>
            </div>

            {status === "error" && (
              <div className="p-3 bg-red-50 text-red-800 text-xs rounded-lg flex items-center space-x-2">
                <AlertCircle size={14} />
                <span>There was an error sending your message. Please try again.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#c5bb73] hover:bg-[#b2a860] text-white font-bold rounded-xl shadow-sm transition-all flex items-center justify-center space-x-2 text-sm cursor-pointer"
            >
              {status === "loading" ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <span>Send Inquiry</span>
                  <Send size={14} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
