"use client";

import { FileCheck, Lightbulb, Brain, DollarSign, Target, TrendingUp } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";

const gains = [
  {
    icon: FileCheck,
    title: "Μια landing page που πουλάει, φτιαγμένη από τα δικά σου χέρια",
    description: "Θα έχεις έτοιμη μια σελίδα που εμπνέει εμπιστοσύνη, δείχνει επαγγελματική και μετατρέπει επισκέπτες σε πελάτες.",
  },
  {
    icon: Target,
    title: "Ξεκάθαρη στρατηγική πωλήσεων",
    description: "Θα ξέρεις πώς δομείται μια σελίδα που πουλάει, τι περιμένει ο επισκέπτης να δει, και πώς να το παρουσιάσεις για να πει \"ναι\".",
  },
  {
    icon: Lightbulb,
    title: "Templates, prompts & εργαλεία που δουλεύουν για σένα",
    description: "Δεν ξεκινάς από λευκό καμβά. Έχεις έτοιμα templates, δοκιμασμένα prompts και real-life παραδείγματα που σου δείχνουν ακριβώς τι να κάνεις.",
  },
  {
    icon: DollarSign,
    title: "Γλιτώνεις χιλιάδες ευρώ από agencies & freelancers",
    description: "Θα μπορείς να φτιάξεις όσες σελίδες θες, όποτε θες, χωρίς να πληρώνεις designer, developer ή copywriter. Έχεις τον απόλυτο έλεγχο.",
  },
  {
    icon: Brain,
    title: "Αληθινή κατανόηση για το τι πουλάει σήμερα",
    description: "Πρακτική γνώση, βήμα-βήμα καθοδήγηση, πολύτιμα εργαλεία. Πλέον ξέρεις πώς σκέφτεται ο επισκέπτης, τι περιμένει να δει και πώς να του το δώσεις για να κάνει convert.",
  },
  {
    icon: TrendingUp,
    title: "Ανταγωνιστικό πλεονέκτημα",
    description: "Σε αντίθεση με μεγάλο κομμάτι του ανταγωνισμού σου, εσύ δεν πας πια στα τυφλά. Έχεις μάθει το παιχνίδι του conversion και το αξιοποιείς καθημερινά υπέρ σου!",
  },
];

export default function WhatYouGain() {
  return (
    <section className="py-16 bg-[#f6f6f6]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-[28px] md:text-[37px] font-semibold text-[#15301f] mb-2">
            Τι θα έχεις κερδίσει στο τέλος του course;
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gains.map((gain, index) => (
            <div
              key={index}
              className="bg-white rounded-[15px] p-5 border border-[#d5e9c6] hover:shadow-[0px_4px_91px_1px_rgba(135,135,135,0.1)] transition-all"
            >
              <div className="w-11 h-11 bg-[#eef6e8] rounded-[10px] flex items-center justify-center mb-4">
                <gain.icon className="w-5 h-5 text-[#15301f]" />
              </div>
              <h3 className="text-[16px] font-semibold text-[#15301f] mb-2 leading-[22px]">
                {gain.title}
              </h3>
              <p className="text-[#15301f] text-[14px] leading-[20px]">
                {gain.description}
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
