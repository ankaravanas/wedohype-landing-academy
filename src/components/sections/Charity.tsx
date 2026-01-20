"use client";

import Image from "next/image";

export default function Charity() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image Section - Figma exact design */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[350px] h-[380px] md:w-[450px] md:h-[480px]">
              {/* Gray background rectangle - slightly rotated */}
              <div
                className="absolute w-[320px] h-[340px] md:w-[400px] md:h-[420px] bg-[#CFCFCF] rounded-[33px] left-0 top-4"
                style={{ transform: "rotate(-2.73deg)" }}
              />

              {/* Main image - on top */}
              <div className="absolute w-[320px] h-[340px] md:w-[400px] md:h-[420px] rounded-[33px] overflow-hidden left-3 top-0 z-10 bg-gray-100">
                <Image
                  src="/images/joyful-child-superhero.jpg"
                  alt="Παιδί ντυμένο σούπερ ήρωας"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 320px, 400px"
                  loading="lazy"
                />
              </div>

              {/* Logo - positioned at bottom right */}
              <div className="absolute right-0 bottom-0 z-20">
                <Image
                  src="/images/superheroes-logo.png"
                  alt="Super Heroes GR Logo"
                  width={222}
                  height={101}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-[24px] md:text-[32px] font-semibold text-[#15301f] mb-6 leading-[1.16]">
              Με την αγορά σου, στηρίζεις τη φιλανθρωπική οργάνωση Super Ηeroes GR
            </h2>
            <p className="text-[#15301f] text-[16px] md:text-[18px] leading-[24px] tracking-[0.02em]">
              Οι Super Heroes GR είναι ένας μη κερδοσκοπικός οργανισμός που στηρίζει
              παιδιά που το έχουν ανάγκη. Μέσα από διαδραστικά παιχνίδια, δώρα και επισκέψεις,
              τα βοηθούν να χαμογελάσουν ξανά γνωρίζοντας τους αγαπημένους τους υπερήρωες.
              Η ομάδα της WEDOHYPE στηρίζει τις δράσεις τους, προσφέροντας μέρος των εσόδων του course.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
