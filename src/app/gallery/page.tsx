import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Gallery | House in Greece for Sale",
  description: "Browse high-definition photos of our contemporary penthouse in Thessaloniki, Greece. View rooms, custom kitchen, balconies, building plan, and layout specs.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div className="pt-24 min-h-screen bg-white pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-[#c5bb73] font-bold uppercase tracking-wider text-xs block">
            Visual Exploration
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Gallery
          </h1>
          <div className="h-1 w-20 bg-[#c5bb73] mx-auto rounded-full" />
          <p className="text-xs sm:text-sm text-gray-600">
            Browse through interior, exterior, neighborhood views, and building plans of the property. Click on any photo to inspect in high definition.
          </p>
        </div>

        <GalleryContent />
      </div>
    </div>
  );
}
