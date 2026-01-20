"use client";

import Image from "next/image";

const bonuses = [
  {
    icon: "/images/searching-icon.svg",
    title: "BONUS 1",
    name: "Landing Pages Success Stories Guide",
    value: "Αξία: χχ€",
    description: "Πώς οι landing pages βοήθησαν πελάτες μου να πετύχουν. Detailed case studies breakdown & lessons learned. Actionable insights για implementation.",
  },
  {
    icon: "/images/figma-icon.svg",
    title: "BONUS 2",
    name: "Figma Design Templates",
    value: "Αξία: χχ€",
    description: "Figma templates από δικά μας designs. Landing page layouts για διαφορετικά industries. Editable design files για να τα προσαρμόσεις πανεύκολα στο brand σου.",
  },
  {
    icon: "/images/prompt-icon.svg",
    title: "BONUS 3",
    name: "40 AI Prompts για Landing Pages & Sales",
    value: "Αξία: χχ€",
    description: "40 δοκιμασμένα prompts για δημιουργία περιεχομένου, πωλήσεις, landing pages. Μαθαίνεις πώς να χρησιμοποιείς έξυπνα το AI και να αποφεύγεις παγίδες. Μαθαίνεις να γράφεις πωλησιακά headlines, body copy, offers, CTAs.",
  },
  {
    icon: "/images/checklist-icon.svg",
    title: "BONUS 4",
    name: "Conversion Optimization Checklist",
    value: "Αξία: χχ€",
    description: "Checklist για βελτιστοποιημένη landing page. Οδηγός βημάτων βελτιστοποίησης της διαδικασίας. Performance tracking framework.",
  },
  {
    icon: "/images/searching-icon.svg",
    title: "BONUS 5",
    name: "SEO-Optimized Content Guide",
    value: "Αξία: χχ€",
    description: "Πρακτικές οδηγίες για να γράφεις SEO-optimized κείμενα. Keyword research basics για την ελληνική αγορά. Best practices για δομή περιεχομένου.",
  },
];

export default function BonusPack() {
  return (
    <section className="py-16 bg-[#f6f6f6]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-[28px] md:text-[37px] font-semibold text-[#15301f] mb-2">
            Bonus Pack αξίας χχχ€
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#15301f] font-semibold">
            Δικό σου εντελώς ΔΩΡΕΑΝ
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className={`bg-white rounded-[15px] p-6 border border-[#d5e9c6] hover:shadow-[0px_4px_91px_1px_rgba(135,135,135,0.1)] transition-all ${
                index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 bg-[#eef6e8] rounded-[10px] flex items-center justify-center mb-4">
                <Image src={bonus.icon} alt="" width={24} height={24} />
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
      </div>
    </section>
  );
}
