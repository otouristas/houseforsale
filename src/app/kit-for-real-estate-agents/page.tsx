import type { Metadata } from "next";
import AgentKitContent from "./AgentKitContent";

export const metadata: Metadata = {
  title: "Kit for Real Estate Agents | House in Greece for Sale",
  description: "Download the professional marketing kit, floor plans, and high-resolution images for listing the Thessaloniki penthouse.",
  alternates: {
    canonical: "/kit-for-real-estate-agents",
  },
};

export default function AgentKitPage() {
  return (
    <div className="pt-24 min-h-screen bg-white pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-[#c5bb73] font-bold uppercase tracking-wider text-xs block">
            Professionals &amp; Brokers
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Kit for Real Estate Agents
          </h1>
          <div className="h-1 w-20 bg-[#c5bb73] mx-auto rounded-full" />
          <p className="text-xs sm:text-sm text-gray-600">
            Download the official marketing kit for your property listing sheets. Specifically curated for real estate agents, property investment firms, and brokers looking to feature the Thessaloniki Penthouse.
          </p>
        </div>

        <AgentKitContent />
      </div>
    </div>
  );
}
