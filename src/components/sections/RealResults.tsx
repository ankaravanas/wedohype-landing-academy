"use client";

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

export default function RealResults() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-[28px] md:text-[37px] font-semibold text-[#15301f] mb-2">
            Τι πραγματικά κερδίζεις
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
      </div>
    </section>
  );
}
