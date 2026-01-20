"use client";

import { Check } from "lucide-react";

const noNeed = [
  "Δεν χρειάζεσαι developer",
  "Δεν χρειάζεσαι designer",
  "Δεν χρειάζεσαι budget για agency",
];

export default function FinalCTA() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#eef6e8]">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-[28px] md:text-[37px] font-semibold text-[#15301f] mb-4 leading-[1.2]">
          Τώρα είναι η στιγμή να επενδύσεις στην επιτυχία του brand σου
        </h2>
        <p className="text-[#15301f] text-[16px] md:text-[18px] mb-8 leading-[26px]">
          Είσαι ένα click μακριά από την πρώτη σου landing page που φέρνει πελάτες
        </p>

        {/* No need badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {noNeed.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white border border-[#d5e9c6] rounded-full px-5 py-2.5"
            >
              <div className="w-5 h-5 bg-[#85c65f] rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <span className="text-[#15301f] font-medium text-[14px]">{item}</span>
            </div>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="bg-white rounded-[23px] shadow-[0px_4px_91px_1px_rgba(135,135,135,0.1)] border border-[#d5e9c6] p-6 md:p-8 max-w-[500px] mx-auto">
          <p className="text-[#15301f] text-[16px] leading-[26px] mb-4">
            Με lifetime πρόσβαση, όλα τα bonus και 30 μέρες εγγύηση επιστροφής χρημάτων.
          </p>
          <p className="text-[#15301f] font-semibold text-[18px] mb-6">
            +ΔΩΡΟ Bonus Pack συνολικής αξίας xxx€
          </p>

          <button className="w-full bg-[#15301f] hover:bg-[#0d1f14] text-white font-bold py-4 px-8 rounded-[15px] text-[18px] leading-[26px] transition-all duration-200 mb-4">
            Ξεκίνα Τώρα!
          </button>

          <p className="text-[14px] text-gray-500">
            Ασφαλής πληρωμή • 30 ημέρες εγγύηση επιστροφής
          </p>
        </div>
      </div>
    </section>
  );
}
