import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Data Processing & Privacy Policy | House in Greece for Sale",
  description: "Learn about how your personal details are processed when you fill out forms on House in Greece for Sale.",
  alternates: {
    canonical: "/personal-data-processing",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 min-h-screen bg-white pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#c5bb73] hover:text-[#b2a860]"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-200 space-y-6 text-gray-700">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Personal Data Processing
          </h1>
          <div className="h-1 w-16 bg-[#c5bb73] rounded-full" />
          
          <p className="text-xs sm:text-sm leading-relaxed">
            This Privacy Policy outlines how your personal data is collected, processed, and protected when you interact with this website. I respect your privacy and am committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR) and Greek privacy regulations.
          </p>

          <h2 className="text-lg font-bold text-gray-800 mt-8">1. Information We Collect</h2>
          <p className="text-xs sm:text-sm leading-relaxed">
            We only collect personal information that you voluntarily provide to us when filling out the contact or agent download forms. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm">
            <li>Your Name</li>
            <li>Your Email Address</li>
            <li>Your Phone Number (optional)</li>
            <li>Your Company Name and Website (for agents requesting the professional kit)</li>
            <li>Your Country of Residence</li>
          </ul>

          <h2 className="text-lg font-bold text-gray-800 mt-8">2. Purpose of Data Processing</h2>
          <p className="text-xs sm:text-sm leading-relaxed">
            The data collected is processed exclusively for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm">
            <li>To respond to your inquiries regarding the property sale, pricing, or viewing schedules.</li>
            <li>To verify your professional status as a real estate agent or broker before granting access to the marketing media package.</li>
            <li>To facilitate legal coordination (via lawyers or accountants) during transactions, provided you explicitly authorize us to do so.</li>
          </ul>

          <h2 className="text-lg font-bold text-gray-800 mt-8">3. Data Retention and Sharing</h2>
          <p className="text-xs sm:text-sm leading-relaxed">
            Your data is stored securely and is only kept for as long as necessary to complete our communications or transaction. We do not sell, rent, or distribute your personal details to third parties for marketing purposes.
          </p>
          <p className="text-xs sm:text-sm leading-relaxed">
            With your explicit consent, details may be shared with members of the transition team (such as legal, accounting, or banking professionals) in order to carry out requested transaction steps.
          </p>

          <h2 className="text-lg font-bold text-gray-800 mt-8">4. Your Legal Rights</h2>
          <p className="text-xs sm:text-sm leading-relaxed">
            Under GDPR, you have the right to access, rectify, or request the deletion of your personal data at any time. To exercise these rights, please email us directly at <a href="mailto:contact@houseingreece.forsale" className="text-[#c5bb73] font-bold hover:underline">contact@houseingreece.forsale</a>.
          </p>

          <div className="pt-6 border-t border-gray-200 text-center">
            <p className="text-[10px] text-gray-400">Last updated: June 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
