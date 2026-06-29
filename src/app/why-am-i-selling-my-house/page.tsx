import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Scale, ShieldAlert, Award, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Why am I Selling my house | House in Greece for Sale",
  description: "Read a personal message from George (Yiorgos) regarding the sale of his contemporary penthouse in Thessaloniki, Greece.",
  alternates: {
    canonical: "/why-am-i-selling-my-house",
  },
};

export default function WhySellingPage() {
  const transitionTeam = [
    {
      title: "Real Estate Lawyers",
      desc: "Two specialized attorneys with over 10 years of experience in foreign property purchases, corporate structuring, and Golden Visa processing.",
      icon: Scale,
    },
    {
      title: "Certified Accountant",
      desc: "George's personal accountant since 2003, assisting with the issuance of a Greek Tax Number (VAT) and opening Greek bank accounts.",
      icon: ShieldAlert,
    },
    {
      title: "Civil Engineer",
      desc: "Collaborator on over 60 commercial projects, handling all building certificates, architectural plan verification, and structure checks.",
      icon: Award,
    },
    {
      title: "Banking Advisors",
      desc: "Top management executives at three major Greek banks who can streamline funds transfers, account setups, and financial compliance.",
      icon: FileText,
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-[#c5bb73] font-bold uppercase tracking-wider text-xs block">
            An Intro from Me
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Why am I selling my House?
          </h1>
          <div className="h-1 w-20 bg-[#c5bb73] mx-auto rounded-full" />
        </div>

        {/* Split Narrative Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-gray-750 leading-relaxed text-sm sm:text-base">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Dear Reader,
            </h2>
            <p>
              Time passes by and your needs change as you grow older! I've decided to move on and search for a different kind of house to live in. I value my present house a lot, and to be honest, it hurts that I'll have to leave it behind!
            </p>
            <p>
              That's why I've decided to set up this website and detailed communication channel—to clearly state that I'm putting my house up for sale. By describing every detail, I hope to find the man or woman who will understand the potential of this property and grab the opportunity.
            </p>
            <p className="font-bold text-gray-900 text-base">
              It is an ideal investment, believe me.
            </p>
            <p>
              When you decide to become the next key holder, you won't have to worry about the paperwork. I've got a whole team of experts—accountants, lawyers, civil engineers—who will ease the transition and take care of the legal transfer without typical administrative delays.
            </p>
            <p>
              So feel free to take a stroll through every detail! I would be happy to answer any questions. You can get in touch with me in many different ways.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/gallery"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-full transition-all flex items-center space-x-2 text-sm shadow-sm"
              >
                <span>View Property Gallery</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/lets-communicate"
                className="px-6 py-3 bg-[#c5bb73] hover:bg-[#b2a860] text-white font-bold rounded-full transition-all text-sm shadow-sm"
              >
                Lets Communicate
              </Link>
            </div>
          </div>

          {/* Right: Layout Plan and Owner Profile */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              <Image
                src="https://houseingreece.forsale/wp-content/uploads/2020/06/0733.jpg"
                alt="House Architectural Plan"
                fill
                sizes="(max-w-768px) 100vw, 33vw"
                className="object-contain bg-white p-4"
              />
              <div className="absolute bottom-4 right-4 bg-gray-800/90 text-[#c5bb73] text-xs font-bold px-3 py-1 rounded-md">
                Apartment Plan Layout
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150">
              <h3 className="font-bold text-gray-800 text-base mb-1">No Agency Commissions</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Because you are talking straight to the landlord, there are no intermediary commissions (usually 2-5%) to pay. Having co-owned the land and worked closely with the contractor, I have all the direct build records.
              </p>
            </div>
          </div>
        </div>

        {/* Transition Team / Experts Section */}
        <section className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <h2 className="text-2xl font-bold text-gray-900">
              Your Professional Support Circle
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Six seasoned professionals are standing by to execute the sale and Golden Visa processes swiftly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transitionTeam.map((member, i) => {
              const Icon = member.icon;
              return (
                <div key={i} className="flex gap-4 p-3 rounded-xl hover:bg-white transition border border-transparent hover:border-gray-150">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-white text-[#c5bb73] border border-gray-100 rounded-xl shadow-sm">
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-gray-800 text-base">{member.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-650 leading-relaxed">{member.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-400">
              * Note: You are free to engage independent representation. The experts above are pre-aligned to guarantee rapid transfers and paperwork.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
