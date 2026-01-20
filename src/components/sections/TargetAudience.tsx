"use client";

import Image from "next/image";
import { Check, X } from "lucide-react";

const audiences = [
  {
    image: "/images/businessman-main.jpg",
    title: "Είσαι Επιχειρηματίας;",
    points: [
      "Έχεις B2B ή B2C εταιρεία και θέλεις να αυξήσεις τις πωλήσεις σου;",
      "Δεν ξέρεις από copy, design ή development και χρειάζεσαι καθοδήγηση;",
      "Δεν αντέχεις να εξαρτάσαι από freelancers που αργούν ή δεν καταλαβαίνουν το brand σου;",
      "Θες να έχεις προβλέψιμη ροή πελατών και να ανακτήσεις τον έλεγχο των πωλήσεών σου;",
    ],
  },
  {
    image: "/images/young-guy-main.jpg",
    title: "Είσαι Freelancer ή Agency;",
    points: [
      "Θες να χτίσεις ένα ανταγωνιστικό portfolio με landing pages που φέρνουν εντυπωσιακά αποτελέσματα;",
      "Θέλεις να ανεβάσεις την αξία και τα αποτελέσματα που φέρνεις στους πελάτες σου;",
      "Θέλεις να μειώσεις τον χρόνο και τα κόστη για copy, design και development;",
      "Θέλεις να αποκτήσεις ένα σύστημα που θα εφαρμόζεις για κάθε πελάτη;",
    ],
  },
];

const notNeeded = [
  "ΔΕΝ χρειάζεσαι γνώσεις κώδικα ή development.",
  "ΔΕΝ χρειάζεται να ξέρεις από design.",
  "ΔΕΝ είναι ανάγκη να είσαι copywriter.",
  "ΔΕΝ πειράζει αν δεν καταλαβαίνεις όρους όπως \"conversion rate\".",
];

const needed = [
  "Υπολογιστή, tablet ή κινητό.",
  "Σύνδεση στο Internet.",
  "Διάθεση να διπλασιάσεις (τουλάχιστον) τις πωλήσεις σου.",
];

export default function TargetAudience() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tagline */}
        <div className="text-center mb-10">
          <h2 className="text-[28px] md:text-[37px] font-semibold text-[#15301f] leading-[1.2]">
            ΧΩΡΙΣ κώδικα. ΧΩΡΙΣ agency. ΧΩΡΙΣ άγχος.
          </h2>
        </div>

        {/* Two Audiences */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-[#eef6e8] rounded-[23px] overflow-hidden border border-[#c5ddb3]"
            >
              {/* Image with gradient overlay */}
              <div className="relative h-[280px] md:h-[309px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#f6f6f6] to-[#85c65f] rounded-t-[23px]" />
                <Image
                  src={audience.image}
                  alt={audience.title}
                  fill
                  className="object-cover object-top relative z-10"
                />
              </div>
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-[20px] md:text-[24px] font-bold text-[#15301f] mb-5">{audience.title}</h3>
                <ul className="space-y-3">
                  {audience.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3 text-[#15301f] text-[15px] leading-[22px]">
                      <div className="w-5 h-5 bg-[#85c65f] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition */}
        <div className="text-center mb-10">
          <p className="text-[18px] md:text-[20px] text-[#15301f] font-semibold max-w-[700px] mx-auto leading-[1.4]">
            Αν αναγνώρισες τον εαυτό σου σε έστω 1 από τα παραπάνω…<br />
            Αυτό το course είναι για σένα.
          </p>
        </div>

        {/* What you DON'T need / DO need */}
        <div className="bg-[#f6f6f6] rounded-[23px] p-6 md:p-8">
          <h4 className="text-[18px] md:text-[20px] font-semibold text-[#15301f] mb-6 text-center">
            Για να παρακολουθήσεις τα μαθήματα:
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Don't Need */}
            <div>
              <ul className="space-y-3">
                {notNeeded.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#15301f] text-[15px] leading-[22px]">
                    <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Do Need */}
            <div>
              <p className="font-semibold text-[#15301f] mb-4 text-[16px]">Χρειάζεται μόνο να έχεις:</p>
              <ul className="space-y-3">
                {needed.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#15301f] text-[15px] leading-[22px]">
                    <div className="w-5 h-5 bg-[#85c65f] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span>{item}</span>
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
