"use client";

import Image from "next/image";

export default function CoursePreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left - Image/Preview Area */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#eef6e8] rounded-[23px] p-5 border border-[#c5ddb3]">
              <div className="relative aspect-[4/3] bg-gray-100 rounded-[15px] overflow-hidden border border-[#d5e9c6] shadow-[0px_4px_91px_1px_rgba(135,135,135,0.1)]">
                <Image
                  src="/images/homepage-example.png"
                  alt="Landing Page Example"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <p className="text-[12px] text-[#85c65f] font-bold uppercase tracking-wider mb-3">
              Αποτελέσματα
            </p>
            <h2 className="text-[28px] md:text-[37px] font-semibold text-[#15301f] mb-6 leading-[1.2]">
              Μάθε βήμα-βήμα πώς θα φτιάξεις μια σελίδα που πουλάει και είναι όμορφη
            </h2>
            <p className="text-[#15301f] mb-5 text-[16px] leading-[26px]">
              Σε 4,5 ώρες video-μαθημάτων, η ομάδα της WEDOHYPE σου δείχνει βήμα-βήμα πώς να
              χτίζεις επαγγελματικές σελίδες που φέρνουν πωλήσεις.
            </p>
            <p className="text-[#15301f] mb-5 text-[16px] leading-[26px]">
              Με AI, έτοιμα templates και τη μεθοδολογία που χρησιμοποιούμε για brands σε
              Ελλάδα και εξωτερικό.
            </p>
            <p className="text-[#15301f] font-semibold mb-6 text-[16px] leading-[26px]">
              Δεν χρειάζεσαι καμία εμπειρία! Μόνο διάθεση να μάθεις πώς να στήνεις ένα
              σύστημα πωλήσεων που δουλεύει.
            </p>
            <p className="text-[#15301f] text-[14px]">
              Στο τέλος του μαθήματος, θα μπορείς να φτιάχνεις landing pages όπως αυτές:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
