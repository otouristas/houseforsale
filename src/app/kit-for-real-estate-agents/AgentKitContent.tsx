"use client";

import { useState } from "react";
import { Download, FileText, Image as ImageIcon, FileCheck, CheckCircle2 } from "lucide-react";

export default function AgentKitContent() {
  const [formData, setFormData] = useState({ name: "", company: "", website: "", email: "", country: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate approval and document packaging
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const kitContents = [
    {
      title: "Detailed Architectural Plans",
      desc: "Original DWG/PDF layouts with room measurements, balconies, and parking dimensions.",
      icon: FileCheck,
    },
    {
      title: "High-Resolution Images",
      desc: "Full-sized interior, exterior, balcony views, and nearby neighborhood context photos.",
      icon: ImageIcon,
    },
    {
      title: "Property Fact Sheets",
      desc: "Formatted copy for real estate portals, building materials, specifications, and neighborhood data.",
      icon: FileText,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Left: What's inside */}
      <div className="lg:col-span-5 space-y-5">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">What's in the kit?</h2>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          We make it easy for real estate agents to list our penthouse. The kit contains ready-to-upload files and professional documents designed to speed up client matching.
        </p>

        <div className="space-y-6 pt-2">
          {kitContents.map((content, i) => {
            const Icon = content.icon;
            return (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-gray-50 text-[#c5bb73] rounded-xl border border-gray-150">
                    <Icon size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base">{content.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{content.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: Registration / Download Form */}
      <div className="lg:col-span-7 bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
        {status === "success" ? (
          <div className="space-y-6 py-6 text-center">
            <div className="inline-flex p-4 rounded-full bg-green-50 text-green-600 border border-green-150">
              <CheckCircle2 size={40} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Kit Ready for Download</h3>
              <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
                Your registration has been approved. Click on the links below to download the assets.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto pt-4">
              <a
                href="https://houseingreece.forsale/wp-content/uploads/2020/06/0733.jpg"
                download
                className="flex items-center justify-between p-4 bg-white hover:bg-gray-100 rounded-xl border border-gray-200 text-xs sm:text-sm font-bold text-gray-800"
              >
                <span>Download Floor Plans (PDF/JPG)</span>
                <Download size={16} className="text-[#c5bb73]" />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center justify-between p-4 bg-white hover:bg-gray-100 rounded-xl border border-gray-200 text-xs sm:text-sm font-bold text-gray-800"
              >
                <span>Download Image Package (ZIP)</span>
                <Download size={16} className="text-[#c5bb73]" />
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Professional Access Form</h3>
            <p className="text-xs text-gray-400">
              Fill in your professional coordinates to unlock instant downloads.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#c5bb73] focus:border-transparent text-sm"
                  placeholder="e.g. Sarah Smith"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#c5bb73] focus:border-transparent text-sm"
                  placeholder="e.g. Apex Realty"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="website" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                  Company Website
                </label>
                <input
                  type="url"
                  id="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#c5bb73] focus:border-transparent text-sm"
                  placeholder="e.g. https://apexrealty.com"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                  Professional Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#c5bb73] focus:border-transparent text-sm"
                  placeholder="e.g. sarah@apexrealty.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="country" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                Country *
              </label>
              <input
                type="text"
                id="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#c5bb73] focus:border-transparent text-sm"
                placeholder="e.g. Germany"
                  />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 bg-[#c5bb73] hover:bg-[#b2a860] text-white font-bold rounded-xl shadow-sm transition-all flex items-center justify-center space-x-2 text-sm cursor-pointer"
            >
              {status === "loading" ? (
                <span>Preparing Kit...</span>
              ) : (
                <>
                  <span>Submit &amp; Download Kit</span>
                  <Download size={14} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
