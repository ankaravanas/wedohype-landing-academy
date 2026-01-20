"use client";

import { Shield, Gift, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    text: "Εγγύηση Επιστροφής Χρημάτων",
  },
  {
    icon: Clock,
    text: "Lifetime πρόσβαση σε όλο το υλικό και τα Bonus",
  },
  {
    icon: Gift,
    text: "Bonus Pack (ΔΩΡΕΑΝ - αξία XXX€)",
  },
];

const courseIncludes = [
  "21 video-μαθήματα (~4,5 ώρες) στα ελληνικά.",
  "Τη μεθοδολογία της WEDOHYPE βήμα-βήμα.",
  "Πραγματικά case studies από την ελληνική αγορά.",
];

const bonusIncludes = [
  "Landing Pages Success Stories Guide.",
  "Figma Design Templates (layouts για διάφορα industries).",
  "40 AI Prompts (headlines, body, offers, CTAs).",
  "Conversion Optimization Checklist.",
  "SEO-Optimized Content Guide.",
  "Έτοιμα Lovable Templates (services, products, events, SaaS).",
  "CRM Guide για διαχείριση leads (χωρίς κόστος).",
  "Analytics Dashboard (visitors, leads, conversion rate).",
  "Sales Follow-up Script.",
  "Landing Page Best Practices.",
  "AI Tool για Branding + οδηγός.",
  "Ad Script & Ad Templates για τα πρώτα σου ads.",
];

export default function PricingCTA() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#eef6e8] bg-pattern bg-grid-light mask-fade-edges">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-[28px] md:text-[37px] font-semibold text-[#15301f] mb-4 leading-[1.2]">
            Ξεκίνα σήμερα να χτίζεις τη Landing Page που θα{" "}
            <span className="text-[#85c65f]">διπλασιάσει τις πωλήσεις σου</span>
          </h2>
          <p className="text-[#15301f] text-[16px] max-w-[700px] mx-auto leading-[26px]">
            Σταμάτα να αφήνεις τους επισκέπτες σου να φεύγουν και να πηγαίνουν στον ανταγωνισμό.
            Κέρδισέ τους σήμερα!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
          {/* Pricing Card */}
          <div className="bg-white rounded-[23px] shadow-[0px_4px_91px_1px_rgba(135,135,135,0.1)] border border-[#d5e9c6] overflow-hidden">
            <div className="bg-[#15301f] text-white p-5 text-center">
              <h3 className="text-[20px] font-semibold mb-1">
                Χτίσε Landing Page που Πουλάει με AI
              </h3>
              <p className="text-[#85c65f] text-[14px]">Ολοκληρωμένος Πρακτικός Οδηγός</p>
            </div>

            <div className="p-5">
              {/* Price */}
              <div className="text-center mb-5 pb-5 border-b border-[#d5e9c6]">
                <p className="text-gray-400 line-through text-[16px]">Αρχική τιμή: XXΧ€</p>
                <p className="text-[28px] font-bold text-[#15301f] my-2">
                  Τιμή προσφοράς: <span className="text-[36px]">XΧ€</span>
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-5">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#eef6e8] rounded-[10px] flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-[#15301f]" />
                    </div>
                    <span className="text-[#15301f] font-medium text-[15px]">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="w-full bg-[#85c65f] hover:bg-[#6db04a] text-white font-bold py-4 px-6 rounded-[15px] text-[16px] transition-all duration-200 shadow-[0px_4px_91px_1px_rgba(135,135,135,0.1)]">
                Θέλω το Course!
              </button>
            </div>
          </div>

          {/* What's Included */}
          <div className="space-y-4">
            {/* Course Content */}
            <div className="bg-white rounded-[15px] p-5 border border-[#d5e9c6]">
              <h4 className="font-semibold text-[#15301f] mb-4 text-[16px]">Το Course περιλαμβάνει:</h4>
              <ul className="space-y-2">
                {courseIncludes.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#15301f] text-[14px] leading-[20px]">
                    <span className="text-[#85c65f] mt-0.5 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bonus Content */}
            <div className="bg-[#eef6e8] rounded-[15px] p-5 border border-[#c5ddb3]">
              <h4 className="font-semibold text-[#15301f] mb-4 text-[16px]">
                + Bonus Pack (ΔΩΡΕΑΝ):
              </h4>
              <ul className="space-y-2">
                {bonusIncludes.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#15301f] text-[13px] leading-[18px]">
                    <span className="text-[#85c65f] mt-0.5 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
