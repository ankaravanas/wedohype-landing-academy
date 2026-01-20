"use client";

import Image from "next/image";
import { ShinyButton } from "@/components/ui/shiny-button";

const bonuses = [
  {
    icon: "/images/searching-icon.svg",
    iconSize: 24,
    title: "BONUS 1",
    name: "Landing Pages Success Stories Guide",
    value: "Αξία: 300€",
    description: "Πώς οι landing pages βοήθησαν πελάτες μου να πετύχουν. Detailed case studies breakdown & lessons learned. Actionable insights για implementation.",
  },
  {
    icon: "/images/figma-icon-color.svg",
    iconSize: 28,
    title: "BONUS 2",
    name: "Figma Design Templates",
    value: "Αξία: 1000€+",
    description: "Figma templates από δικά μας designs. Landing page layouts για διαφορετικά industries. Editable design files για να τα προσαρμόσεις πανεύκολα στο brand σου.",
  },
  {
    icon: "/images/chatgpt-icon.svg",
    iconSize: 32,
    title: "BONUS 3",
    name: "40 AI Prompts για Landing Pages & Sales",
    value: "Αξία: 70€",
    description: "40 δοκιμασμένα prompts για δημιουργία περιεχομένου, πωλήσεις, landing pages. Μαθαίνεις πώς να χρησιμοποιείς έξυπνα το AI και να αποφεύγεις παγίδες. Μαθαίνεις να γράφεις πωλησιακά headlines, body copy, offers, CTAs.",
  },
  {
    icon: "/images/checklist-icon.svg",
    iconSize: 24,
    title: "BONUS 4",
    name: "Conversion Optimization Checklist",
    value: "Αξία: 200€",
    description: "Checklist για βελτιστοποιημένη landing page. Οδηγός βημάτων βελτιστοποίησης της διαδικασίας. Performance tracking framework.",
  },
  {
    icon: "/images/searching-icon.svg",
    iconSize: 24,
    title: "BONUS 5",
    name: "SEO-Optimized Content Guide",
    value: "Αξία: 200€",
    description: "Πρακτικές οδηγίες για να γράφεις SEO-optimized κείμενα. Keyword research basics για την ελληνική αγορά. Best practices για δομή περιεχομένου.",
  },
  {
    icon: "/images/lovable-icon.svg",
    iconSize: 28,
    title: "BONUS 6",
    name: "Έτοιμα Lovable Templates Collection",
    value: "Αξία: 1000€+",
    description: "Professional landing page templates για άμεση χρήση. Templates για διαφορετικούς τύπους επιχειρήσεων (services, products, events, SaaS). Customization guides για κάθε template. Import instructions και setup guide.",
  },
];

export default function BonusPack() {
  return (
    <section className="py-16 bg-[#f6f6f6]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-[28px] md:text-[37px] font-semibold text-[#15301f] mb-2">
            Bonus Pack αξίας 2.770€+
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#15301f] font-semibold">
            Δικό σου εντελώς{" "}
            <span className="relative inline-block">
              <span className="relative z-10">ΔΩΡΕΑΝ</span>
              <span
                className="absolute left-0 right-0 bottom-0 h-[50%] bg-[#85c65f]/40 -z-0 rounded-sm"
                aria-hidden="true"
              />
            </span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="bg-white rounded-[15px] p-6 border border-[#d5e9c6] hover:shadow-[0px_4px_91px_1px_rgba(135,135,135,0.1)] transition-all"
            >
              <div className="w-12 h-12 bg-[#eef6e8] rounded-[10px] flex items-center justify-center mb-4">
                <Image src={bonus.icon} alt="" width={bonus.iconSize} height={bonus.iconSize} loading="lazy" />
              </div>
              <span className="text-[12px] font-bold text-[#85c65f] uppercase tracking-wider">
                {bonus.title}
              </span>
              <h3 className="text-[16px] md:text-[18px] font-bold text-[#15301f] mt-1 mb-1 leading-[24px]">
                {bonus.name}
              </h3>
              <p className="text-[14px] text-[#15301f] font-medium mb-3">
                ({bonus.value})
              </p>
              <p className="text-gray-600 text-[14px] leading-[22px]">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <ShinyButton href="#pricing">Απόκτησέ το</ShinyButton>
        </div>
      </div>
    </section>
  );
}
