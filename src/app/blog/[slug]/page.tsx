import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | House in Greece for Sale`,
    description: post.summary,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: post.imageUrl,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: RouteParams) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Simple custom markdown renderer to support basic syntax (Headings, Bullet points, Paragraphs)
  const renderContent = (markdownText: string) => {
    const lines = markdownText.split("\n");
    let inList = false;
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];

    const flushList = (key: number) => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${key}`} className="list-disc pl-6 my-4 space-y-2 text-gray-700">
            {listItems.map((item, idx) => (
              <li key={idx} className="text-xs sm:text-sm leading-relaxed">{item}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Heading 3
      if (trimmed.startsWith("###")) {
        flushList(index);
        inList = false;
        elements.push(
          <h3 key={index} className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-3">
            {trimmed.replace(/^###\s*/, "")}
          </h3>
        );
      }
      // Heading 2
      else if (trimmed.startsWith("##")) {
        flushList(index);
        inList = false;
        elements.push(
          <h2 key={index} className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">
            {trimmed.replace(/^##\s*/, "")}
          </h2>
        );
      }
      // Bullet lists
      else if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        inList = true;
        listItems.push(trimmed.replace(/^[*|-]\s*/, ""));
      }
      // Empty lines
      else if (trimmed === "") {
        if (inList) {
          flushList(index);
          inList = false;
        }
      }
      // Paragraphs
      else {
        if (inList) {
          flushList(index);
          inList = false;
        }
        elements.push(
          <p key={index} className="text-xs sm:text-sm text-gray-650 leading-relaxed my-3">
            {trimmed}
          </p>
        );
      }
    });

    // Flush any leftover list
    if (inList) {
      flushList(lines.length);
    }

    return elements;
  };

  return (
    <div className="pt-24 min-h-screen bg-white pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#c5bb73] hover:text-[#b2a860] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Article Meta */}
        <article className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 space-y-6">
          <div className="space-y-3">
            <span className="inline-block bg-gray-105 text-[#c5bb73] border border-gray-200/50 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 text-xs text-gray-400 font-semibold">
              <span className="flex items-center space-x-1">
                <Calendar size={12} />
                <span>{post.date}</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center space-x-1">
                <User size={12} />
                <span>{post.author}</span>
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-60 sm:h-96 rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={post.imageUrl}
              alt={post.imageAlt}
              fill
              sizes="(max-w-768px) 100vw, 80vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Article Body */}
          <div className="max-w-none pt-2">
            {renderContent(post.contentMarkdown)}
          </div>

          {/* CTA Box inside Article */}
          <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-4 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center">
            <div className="space-y-1">
              <h4 className="font-bold text-gray-800 text-base">Interested in the Property?</h4>
              <p className="text-xs text-gray-400">Contact George directly for immediate details or walkthrough schedules.</p>
            </div>
            <Link
              href="/lets-communicate"
              className="mt-4 sm:mt-0 px-6 py-3 bg-[#c5bb73] hover:bg-[#b2a860] text-white font-bold rounded-full text-xs sm:text-sm shadow-sm transition-all flex items-center space-x-2"
            >
              <span>Lets Communicate</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
