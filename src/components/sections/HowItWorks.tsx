"use client";

import { PlayCircle, MonitorPlay, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: PlayCircle,
    step: "01",
    title: "Αποκτάς άμεση πρόσβαση στο course",
    description: "Μόλις ολοκληρώσεις την αγορά, θα λάβεις στο email σου το πλήρες video course μαζί με όλα τα bonus assets.",
  },
  {
    icon: MonitorPlay,
    step: "02",
    title: "Βλέπεις τα video modules στον ρυθμό σου",
    description: "Παρακολουθείς τη θεωρία και τις πρακτικές οδηγίες όποτε θέλεις, όσες φορές θέλεις και από οποιαδήποτε συσκευή σε βολεύει.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Χτίζεις τη landing page σου βήμα-βήμα",
    description: "Ακολουθείς κάθε βήμα στην πράξη, με οδηγούς, checklists και templates που σε οδηγούν με σιγουριά μέχρι το λανσάρισμα.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Είσαι online και έτοιμος/η να πουλήσεις",
    description: "Έχεις έτοιμη τη landing page σου και αρχίζεις να βλέπεις τις πρώτες σου πωλήσεις.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-[#f6f6f6]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-[28px] md:text-[37px] font-semibold text-[#15301f] mb-2">
            Πώς θα εκπαιδευτώ;
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-[15px] p-5 border border-[#d5e9c6] hover:shadow-[0px_4px_91px_1px_rgba(135,135,135,0.1)] transition-all"
            >
              {/* Step number */}
              <div className="absolute -top-3 -left-2 w-9 h-9 bg-[#85c65f] rounded-full flex items-center justify-center text-white font-bold text-[14px]">
                {step.step}
              </div>
              <div className="pt-4">
                <div className="w-11 h-11 bg-[#eef6e8] rounded-[10px] flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-[#15301f]" />
                </div>
                <h3 className="text-[16px] font-semibold text-[#15301f] mb-2 leading-[22px]">
                  {step.title}
                </h3>
                <p className="text-[#15301f] text-[14px] leading-[20px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
