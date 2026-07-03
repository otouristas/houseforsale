import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function BlogPreviewSection() {
  return (
    <section className="py-16 md:py-20 bg-bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-baseline mb-10 gap-4">
          <div className="space-y-1">
            <span className="text-primary-gold font-bold uppercase tracking-wider text-xs block">
              Recent Posts
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-aegean">
              Investment Insights &amp; Market News
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-primary-gold font-bold hover:text-primary-gold-dark"
          >
            View all articles
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 6).map((post) => (
            <article
              key={post.slug}
              className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition duration-300"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={post.imageUrl}
                  alt={post.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-white/95 text-text-dark text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider font-bold border border-gray-100">
                  {post.category}
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs text-text-muted font-semibold">{post.date}</span>
                  <h3 className="text-sm font-bold text-text-dark line-clamp-2 hover:text-aegean transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">{post.summary}</p>
                </div>
                <div className="pt-3 mt-4 border-t border-gray-100">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-primary-gold font-bold hover:text-primary-gold-dark text-xs"
                  >
                    Read More
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
