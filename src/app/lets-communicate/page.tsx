import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Lets Communicate | House in Greece for Sale",
  description: "Get in touch directly with the owner George Xipolitas to discuss property details, Golden Visa eligibility, or to schedule a viewing.",
  alternates: {
    canonical: "/lets-communicate",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-white pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-[#c5bb73] font-bold uppercase tracking-wider text-xs block">
            Direct Inquiries
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Lets Communicate
          </h1>
          <div className="h-1 w-20 bg-[#c5bb73] mx-auto rounded-full" />
          <p className="text-xs sm:text-sm text-gray-600">
            Have questions about the Greek Golden Visa threshold, bank configurations, or want to schedule a WhatsApp Video tour? Get in touch directly with landlord George Xipolitas.
          </p>
        </div>

        <ContactContent />
      </div>
    </div>
  );
}
