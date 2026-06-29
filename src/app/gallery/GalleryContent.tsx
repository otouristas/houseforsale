"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryImage {
  url: string;
  category: string;
  title: string;
}

export default function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "living", name: "Living Room" },
    { id: "kitchen", name: "Kitchen" },
    { id: "bedroom", name: "Bedrooms" },
    { id: "bathroom", name: "Bathroom" },
    { id: "view", name: "Balcony & Views" },
    { id: "exterior", name: "Exterior Building" },
    { id: "plan", name: "House Plan" },
  ];

  const galleryImages: GalleryImage[] = [
    // Living Room
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/LivingRoom_3.jpg", category: "living", title: "Living Room Space" },
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/LivingRoom_9.jpg", category: "living", title: "Bright Window Angles" },
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/LivingRoom_41.jpg", category: "living", title: "Cozy Dining Integration" },
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/LivingRoom_10.jpg", category: "living", title: "Contemporary TV Zone" },
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/LivingRoom_1.jpg", category: "living", title: "Spacious Living Area" },
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/LivingRoom_8.jpg", category: "living", title: "Corridor Entrance" },

    // Kitchen
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/Kitchen_41.jpg", category: "kitchen", title: "Kitchen Design Overview" },
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/Kitchen_2.jpg", category: "kitchen", title: "Gourmet Franke Appliances" },
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/Kitchen_1.jpg", category: "kitchen", title: "Sink with Filtration Faucet" },
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/Kitchen_5.jpg", category: "kitchen", title: "High-Quality Storage Cabinets" },
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/Kitchen_3.jpg", category: "kitchen", title: "Counter Space Details" },

    // Bedrooms
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/MasterBedroom_11.jpg", category: "bedroom", title: "Elegant Master Bedroom" },
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/MasterBedroom_2.jpg", category: "bedroom", title: "Master Bedroom Storage" },
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/MasterBedroom_3.jpg", category: "bedroom", title: "Hardwood Wooden Flooring" },
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/Bedroom_1.jpg", category: "bedroom", title: "Bright Second Bedroom" },
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/Bedroom_2.jpg", category: "bedroom", title: "Second Bedroom Space" },
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/Bedroom_3.jpg", category: "bedroom", title: "Bedroom Wardrobes" },

    // Bathroom
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/Bathroom_1.jpg", category: "bathroom", title: "Bathroom Modern Fixtures" },
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/Bathroom_2.jpg", category: "bathroom", title: "Bath and Shower Setup" },
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/Bathroom_3.jpg", category: "bathroom", title: "Elegant Tiles & Basin" },

    // Views
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/Viewfromthebalconies_1.jpg", category: "view", title: "Balcony View of Thessaloniki Bay" },
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/Viewfromthebalconies_2.jpg", category: "view", title: "Large Front Terrace Space" },
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/Viewfromthebalconies_3.jpg", category: "view", title: "Sunny Balcony Corner" },

    // Exterior
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/DSC_99351.jpg", category: "exterior", title: "Building Facade View" },
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/Exteriorviewofthebuilding_11.jpg", category: "exterior", title: "Modern Building Entrance" },
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/Exteriorviewofthebuilding_3.jpg", category: "exterior", title: "Quiet Neighborhood Street" },

    // House Plan
    { url: "https://houseingreece.forsale/wp-content/uploads/2020/06/0733.jpg", category: "plan", title: "Detailed Floor Layout Plan" },
  ];

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (imgUrl: string) => {
    const idx = galleryImages.findIndex(img => img.url === imgUrl);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
    }
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <>
      {/* Categories Tab Selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all border ${
              activeCategory === cat.id
                ? "bg-[#c5bb73] text-white border-[#c5bb73] shadow-sm"
                : "bg-white text-gray-700 border-gray-200 hover:border-[#c5bb73] hover:text-[#c5bb73]"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((img) => (
          <div
            key={img.url}
            onClick={() => openLightbox(img.url)}
            className="group relative h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-150 cursor-pointer transition-all duration-300"
          >
            <Image
              src={img.url}
              alt={img.title}
              fill
              sizes="(max-w-768px) 100vw, 33vw"
              className="object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="text-white flex items-center justify-between w-full">
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-[#c5bb73]">{img.category}</p>
                  <p className="font-bold text-sm">{img.title}</p>
                </div>
                <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                  <Maximize2 size={14} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No photos found in this category.</p>
        </div>
      )}

      {/* Lightbox Modal (Clean bright backdrop with dark UI elements) */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-md p-4 sm:p-8 select-none">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-3 text-gray-800 hover:text-[#c5bb73] bg-gray-100 hover:bg-gray-200 rounded-full transition"
            aria-label="Close Lightbox"
          >
            <X size={24} />
          </button>

          {/* Left Nav */}
          <button
            onClick={prevImage}
            className="absolute left-4 p-3 text-gray-800 hover:text-[#c5bb73] bg-gray-100 hover:bg-gray-200 rounded-full transition hidden sm:block"
            aria-label="Previous Image"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="relative w-full max-w-4xl h-[70vh] sm:h-[80vh] flex flex-col items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={galleryImages[lightboxIndex].url}
                alt={galleryImages[lightboxIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center text-gray-900 mt-4 space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-[#c5bb73] font-bold">
                {galleryImages[lightboxIndex].category}
              </p>
              <p className="text-base font-bold">{galleryImages[lightboxIndex].title}</p>
              <p className="text-[11px] text-gray-400">
                {lightboxIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Right Nav */}
          <button
            onClick={nextImage}
            className="absolute right-4 p-3 text-gray-800 hover:text-[#c5bb73] bg-gray-100 hover:bg-gray-200 rounded-full transition hidden sm:block"
            aria-label="Next Image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  );
}
