"use client";

import Image from "next/image";
import { Zap, Brain, Settings, TrendingUp } from "lucide-react";

const results = [
  {
    icon: Zap,
    title: "Έλεγχο",
    description: "Δεν εξαρτάσαι από developers, copywriters, agencies",
  },
  {
    icon: Brain,
    title: "Αυτοπεποίθηση",
    description: "Ξέρεις τι δουλεύει και γιατί",
  },
  {
    icon: Settings,
    title: "Σύστημα",
    description: "Δεν πειραματίζεσαι. Εκτελείς",
  },
  {
    icon: TrendingUp,
    title: "Αποτέλεσμα",
    description: "Τουλάχιστον x2 στο conversion rate",
  },
];

const caseStudies = [
  {
    src: "/images/kidnest-lp.webp",
    name: "Kidnest",
    result: "+68% Conversion Rate",
    industry: "Parenting & Education",
  },
  {
    src: "/images/screencapture-fitbuddy-gr-experience-2024-10-09-16_49_12.webp",
    name: "FitBuddy",
    result: "+45% Lead Generation",
    industry: "Fitness",
  },
  {
    src: "/images/screencapture-katiatalksdiet-gr-2024-10-09-13_50_57.webp",
    name: "Katia Talks Diet",
    result: "2.3x Sales Increase",
    industry: "Nutrition",
  },
];

export default function RealResults() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-[28px] md:text-[37px] font-semibold text-[#15301f] mb-2">
            Τι πραγματικά κερδίζεις
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {results.map((result, index) => (
            <div
              key={index}
              className="text-center p-5 bg-gradient-to-br from-[#eef6e8] to-white rounded-[15px] border border-[#c5ddb3]"
            >
              <div className="w-12 h-12 mx-auto bg-[#85c65f] rounded-[10px] flex items-center justify-center mb-4">
                <result.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[16px] font-semibold text-[#15301f] mb-2">{result.title}</h3>
              <p className="text-[#15301f] text-[14px] leading-[20px]">{result.description}</p>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="text-center mb-8">
          <p className="text-[#85c65f] text-[14px] font-medium uppercase tracking-wider mb-2">
            Real Projects
          </p>
          <h3 className="text-[24px] md:text-[28px] font-semibold text-[#15301f]">
            Δουλειές που έχουμε κάνει με αυτή τη μεθοδολογία
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-white rounded-[15px] overflow-hidden border border-[#d5e9c6] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_40px_rgba(133,198,95,0.15)] transition-all duration-300"
            >
              {/* Image with scroll-on-hover effect */}
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={study.src}
                  alt={study.name}
                  fill
                  className="object-cover object-top transition-all duration-[3s] ease-in-out group-hover:object-bottom"
                />
                {/* Gradient overlay - bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#15301f]/80 to-transparent" />
                {/* Gradient overlay - top (subtle) */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#15301f]/30 to-transparent" />
                {/* Result badge */}
                <div className="absolute bottom-3 left-3 bg-[#85c65f] text-white px-3 py-1.5 rounded-full text-[13px] font-semibold">
                  {study.result}
                </div>
              </div>
              {/* Info */}
              <div className="p-4">
                <h4 className="text-[18px] font-semibold text-[#15301f] mb-1">{study.name}</h4>
                <p className="text-[14px] text-gray-500">{study.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
