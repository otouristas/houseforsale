import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | House in Greece for Sale",
  description: "Stay updated with Greek property market trends, Thessaloniki technology expansions, and European Golden Visa updates.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <div className="pt-24 min-h-screen bg-white pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-[#c5bb73] font-bold uppercase tracking-wider text-xs block">
            Investment Portal
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Greece Property &amp; Investment Blog
          </h1>
          <div className="h-1 w-20 bg-[#c5bb73] mx-auto rounded-full" />
          <p className="text-xs sm:text-sm text-gray-600">
            Read about why Thessaloniki is turning into a tech and real estate hotspot, the economic boom of Greece, and how non-EU investors can secure the European Golden Visa.
          </p>
        </div>

        {/* Featured Post (First Post in List) */}
        {blogPosts.length > 0 && (
          <div className="mb-12 bg-gray-50 rounded-3xl overflow-hidden shadow-sm border border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="relative h-64 sm:h-80 lg:h-auto lg:col-span-7">
              <Image
                src={blogPosts[0].imageUrl}
                alt={blogPosts[0].imageAlt}
                fill
                priority
                sizes="(max-w-1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/95 text-gray-800 text-xs font-bold px-3 py-1.5 rounded-md border border-gray-150">
                Featured Article
              </div>
            </div>
            
            <div className="p-8 sm:p-10 lg:col-span-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-xs text-gray-400 font-semibold">
                  <span className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>{blogPosts[0].date}</span>
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center space-x-1">
                    <User size={12} />
                    <span>{blogPosts[0].author}</span>
                  </span>
                </div>
                
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-[#c5bb73] transition-colors leading-tight">
                  <Link href={`/blog/${blogPosts[0].slug}`}>{blogPosts[0].title}</Link>
                </h2>
                
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-4">
                  {blogPosts[0].summary}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200 mt-6">
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center space-x-2 bg-[#c5bb73] hover:bg-[#b2a860] text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-sm transition-all"
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.slug}
              className="flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-150 hover:shadow-sm transition-all duration-300"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={post.imageUrl}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/95 text-gray-800 text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider font-bold border border-gray-100">
                  {post.category}
                </div>
              </div>
              
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-[11px] text-gray-400">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-base font-bold text-gray-900 line-clamp-2 hover:text-[#c5bb73]">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
                
                <div className="pt-3 mt-4 border-t border-gray-200">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-1 text-[#c5bb73] font-bold hover:text-[#b2a860] text-xs"
                  >
                    <span>Read Full Post</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
