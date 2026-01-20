"use client";

import { X } from "lucide-react";

const painPoints = [
  {
    number: "01.",
    title: "Δεν λες ξεκάθαρα τι προσφέρεις",
  },
  {
    number: "02.",
    title: "Δεν δείχνεις γιατί να σε εμπιστευτούν",
  },
  {
    number: "03.",
    title: "Δεν υπάρχει σαφές επόμενο βήμα, π.χ. να κλείσουν ραντεβού",
  },
  {
    number: "04.",
    title: "Δεν δείχνεις στο κοινό ότι το καταλαβαίνεις",
  },
];

export default function PainPoints() {
  return (
    <section className="py-16 bg-[#f6f6f6]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Statement */}
        <div className="text-center max-w-[800px] mx-auto mb-8">
          <h2 className="text-[28px] md:text-[37px] font-semibold text-[#15301f] mb-4 leading-[1.2]">
            Η σελίδα σου δεν είναι φτιαγμένη για να φέρνει πωλήσεις
          </h2>
          <p className="text-[#15301f] text-[16px] leading-[26px]">
            Έχεις καλό προϊόν → Έχεις κοινό που σε ακολουθεί → Τρέχεις διαφήμιση → Βγάζεις περιεχόμενο
          </p>
        </div>

        {/* The Problem */}
        <div className="text-center mb-10">
          <p className="text-[18px] text-[#15301f] max-w-[700px] mx-auto leading-[28px]">
            Αλλά το κοινό σου μπαίνει στη σελίδα σου και φεύγει χωρίς να αγοράσει.
            <br />
            <span className="font-semibold">
              Τα 4 λάθη που διώχνουν τους επισκέπτες σου
            </span>
          </p>
        </div>

        {/* 4 Mistakes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-[15px] p-5 border border-[#d5e9c6] hover:shadow-[0px_4px_91px_1px_rgba(135,135,135,0.1)] transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[24px] font-bold text-red-400 group-hover:text-red-500 transition-colors">
                  {point.number}
                </span>
                <div className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="w-4 h-4 text-red-500" />
                </div>
              </div>
              <p className="text-[#15301f] font-medium text-[15px] leading-[22px]">
                {point.title}
              </p>
            </div>
          ))}
        </div>

        {/* Solution Teaser */}
        <div className="bg-gradient-to-r from-[#15301f] to-[#85c65f] rounded-[23px] p-8 lg:p-10 text-white text-center">
          <p className="text-[16px] lg:text-[18px] max-w-[800px] mx-auto leading-[26px]">
            Καταλαβαίνουμε πόσο δύσκολο είναι να δημιουργήσεις χωρίς καμία βοήθεια μια σελίδα
            που θα είναι όμορφη, λειτουργική και θα σου φέρνει πωλήσεις.
            <br /><br />
            <span className="font-semibold">
              Γι' αυτό στη WEDOHYPE μοιραζόμαστε μαζί σου το σύστημά μας,
              που εφαρμόζουμε κάθε μέρα για τους πελάτες μας.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
