"use client";

import { Check } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";

const benefits = [
  "Σύντομα, πρακτικά βίντεο που βλέπεις όποτε θέλεις.",
  "Εύπεπτη πληροφορία και βήμα-βήμα καθοδήγηση.",
  "Συνδυασμός θεωρίας+πρακτικών βημάτων.",
  "Στο τέλος των βίντεο, θα έχεις έτοιμη τη landing page σου.",
  "Εκπαίδευση σε κορυφαία digital και AI εργαλεία.",
  "Βασισμένο σε αληθινά success stories πελατών μας.",
  "Bonus Pack αξίας 2.770€+ που θα σου είναι χρήσιμα για πάντα.",
  "Εγγύηση επιστροφής χρημάτων.",
];

export default function WhyChoose() {
  return (
    <section className="py-16 bg-white bg-pattern bg-grid mask-fade-y">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-[28px] md:text-[37px] font-semibold text-[#15301f] mb-2">
            Γιατί να επιλέξω αυτό το course;
          </h2>
        </div>

        <div className="bg-gradient-to-br from-[#eef6e8] to-[#d5e9c6] rounded-[23px] p-6 lg:p-10 border border-[#c5ddb3]">
          <div className="grid sm:grid-cols-2 gap-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/70 rounded-[10px] p-4"
              >
                <div className="flex-shrink-0 w-5 h-5 bg-[#85c65f] rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <p className="text-[#15301f] text-[15px] leading-[22px]">{benefit}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8">
            <ShinyButton href="#pricing">Απόκτησέ το</ShinyButton>
          </div>
        </div>
      </div>
    </section>
  );
}
