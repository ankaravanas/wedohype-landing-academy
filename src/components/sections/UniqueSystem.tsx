"use client";

import { Target, Users, Cog } from "lucide-react";

const personas = [
  {
    icon: Target,
    text: "Δεν θέλει μόνο traffic, αλλά conversions.",
  },
  {
    icon: Users,
    text: "Έχει καλό προϊόν/υπηρεσία, αλλά δεν ξέρει πώς να το παρουσιάσει.",
  },
  {
    icon: Cog,
    text: "Χρειάζεται έναν αποτελεσματικό μηχανισμό πωλήσεων.",
  },
];

const learnings = [
  "Πώς να σχεδιάσεις την ιδανική landing page για το offer σου.",
  "Πώς να γράψεις κείμενα που πουλάνε, με AI στα ελληνικά.",
  "Πώς να χτίσεις μια επαγγελματική σελίδα χωρίς developer ή designer.",
];

export default function UniqueSystem() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <div className="text-center max-w-[900px] mx-auto mb-10">
          <h2 className="text-[28px] md:text-[37px] font-semibold text-[#15301f] leading-[1.2] mb-4">
            Το μοναδικό σύστημα στην Ελλάδα που σου δείχνει πώς να χτίζεις{" "}
            <span className="text-[#85c65f]">Πωλησιακές Landing Pages</span>,
            ακόμα κι αν δεν έχεις ιδέα από copy, design και development!
          </h2>
          <p className="text-[16px] text-[#15301f] leading-[26px]">
            Δεν χρειάζεσαι εμπειρία. Δεν χρειάζεσαι τεχνικές γνώσεις. Δεν χρειάζεσαι agency.
          </p>
        </div>

        {/* For whom */}
        <div className="mb-12">
          <p className="text-center text-[#15301f] mb-8 text-[16px] leading-[26px]">
            Στη WEDOHYPE, δημιουργήσαμε αυτό το σύστημα για τον σύγχρονο επαγγελματία που:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {personas.map((persona, index) => (
              <div
                key={index}
                className="bg-[#eef6e8] rounded-[15px] p-5 border border-[#c5ddb3] hover:shadow-[0px_4px_91px_1px_rgba(135,135,135,0.1)] transition-shadow"
              >
                <div className="w-11 h-11 bg-[#15301f] rounded-[10px] flex items-center justify-center mb-4">
                  <persona.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-[#15301f] font-medium text-[15px] leading-[22px]">{persona.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What you'll learn */}
        <div className="bg-gradient-to-br from-[#eef6e8] to-white rounded-[23px] p-6 lg:p-10 border border-[#d5e9c6]">
          <h3 className="text-[20px] md:text-[24px] font-semibold text-[#15301f] text-center mb-8">
            Θα μάθεις βήμα-βήμα:
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {learnings.map((learning, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#85c65f] rounded-full flex items-center justify-center text-white font-bold text-[16px]">
                  {index + 1}
                </div>
                <p className="text-[#15301f] text-[15px] leading-[22px] pt-2">{learning}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
