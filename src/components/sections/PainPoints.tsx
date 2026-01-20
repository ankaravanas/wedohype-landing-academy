"use client";

import { Check, X, ArrowDown } from "lucide-react";

const achievements = [
  "Έχεις καλό προϊόν",
  "Έχεις κοινό που σε ακολουθεί",
  "Τρέχεις διαφήμιση",
  "Βγάζεις περιεχόμενο",
];

const painPoints = [
  "Δεν λες ξεκάθαρα τι προσφέρεις",
  "Δεν δείχνεις γιατί να σε εμπιστευτούν",
  "Δεν υπάρχει σαφές επόμενο βήμα, π.χ. να κλείσουν ραντεβού",
  "Δεν δείχνεις στο κοινό ότι το καταλαβαίνεις",
];

export default function PainPoints() {
  return (
    <section className="py-16 bg-[#f6f6f6]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Statement */}
        <div className="text-center max-w-[800px] mx-auto mb-10">
          <h2 className="text-[28px] md:text-[37px] font-semibold text-[#15301f] mb-6 leading-[1.2]">
            Η σελίδα σου δεν είναι φτιαγμένη για να φέρνει πωλήσεις
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {/* Left - Achievements */}
          <div className="bg-white rounded-[23px] p-6 md:p-8 border border-[#c5ddb3]">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-[#85c65f] rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-[18px] font-semibold text-[#15301f]">Αυτά τα κάνεις σωστά</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-[#eef6e8] rounded-[12px] px-4 py-3">
                  <div className="w-5 h-5 bg-[#85c65f] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#15301f] text-[15px] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - The Problem */}
          <div className="bg-[#15301f] rounded-[23px] p-6 md:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-[#dc2626] rounded-full flex items-center justify-center">
                <X className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-[18px] font-semibold text-white">Όμως...</h3>
            </div>
            <p className="text-white text-[20px] md:text-[24px] font-semibold leading-[1.4] mb-4">
              Το κοινό σου μπαίνει στη σελίδα σου και φεύγει χωρίς να αγοράσει.
            </p>
            <p className="text-white/70 text-[15px]">
              Γιατί η σελίδα σου δεν είναι σχεδιασμένη για conversions.
            </p>
          </div>
        </div>

        {/* Arrow indicator */}
        <div className="flex justify-center mb-6">
          <div className="w-10 h-10 bg-[#15301f] rounded-full flex items-center justify-center">
            <ArrowDown className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* 4 Mistakes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-red-50 to-red-100/80 rounded-[15px] p-5 border border-red-200/50 hover:border-red-300 hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 bg-[#dc2626] rounded-full flex items-center justify-center mb-4">
                <X className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <p className="text-[#15301f] font-medium text-[15px] leading-[22px]">
                {point}
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
