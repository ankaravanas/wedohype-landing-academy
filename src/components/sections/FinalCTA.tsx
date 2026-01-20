"use client";

import { Check } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";

const noNeed = [
  "Δεν χρειάζεσαι developer",
  "Δεν χρειάζεσαι designer",
  "Δεν χρειάζεσαι budget για agency",
];

export default function FinalCTA() {
  return (
    <section className="py-20 bg-[#15301f] relative overflow-hidden">
      {/* Decorative elements */}
      {/* Large green circle - left */}
      <div
        className="absolute -left-[200px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #85c65f 0%, transparent 70%)",
        }}
      />
      {/* Large green circle - right */}
      <div
        className="absolute -right-[200px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #85c65f 0%, transparent 70%)",
        }}
      />
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(rgba(133, 198, 95, 0.4) 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-[28px] md:text-[37px] font-semibold text-white mb-4 leading-[1.2]">
          Τώρα είναι η στιγμή να επενδύσεις στην επιτυχία του brand σου
        </h2>
        <p className="text-white/80 text-[16px] md:text-[18px] mb-8 leading-[26px]">
          Είσαι ένα click μακριά από την πρώτη σου landing page που φέρνει πελάτες
        </p>

        {/* No need badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {noNeed.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5"
            >
              <div className="w-5 h-5 bg-[#85c65f] rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <span className="text-white font-medium text-[14px]">{item}</span>
            </div>
          ))}
        </div>

        {/* Price and CTA Card */}
        <div className="bg-white rounded-[23px] shadow-[0px_8px_40px_rgba(0,0,0,0.2)] p-6 md:p-8 max-w-[500px] mx-auto">
          {/* Price display */}
          <div className="mb-4">
            <p className="text-gray-400 line-through text-[16px]">397€</p>
            <p className="text-[36px] md:text-[42px] font-bold text-[#15301f]">197€</p>
          </div>

          <p className="text-[#15301f] text-[16px] leading-[26px] mb-4">
            Με lifetime πρόσβαση, όλα τα bonus και 30 μέρες εγγύηση επιστροφής χρημάτων.
          </p>
          <p className="text-[#85c65f] font-semibold text-[18px] mb-6">
            +ΔΩΡΟ Bonus Pack συνολικής αξίας 2.770€+
          </p>

          <div className="flex justify-center mb-4">
            <ShinyButton className="w-full text-[20px] py-5">Ξεκίνα Τώρα!</ShinyButton>
          </div>

          <p className="text-[14px] text-gray-500">
            Ασφαλής πληρωμή • 30 ημέρες εγγύηση επιστροφής
          </p>
        </div>
      </div>
    </section>
  );
}
