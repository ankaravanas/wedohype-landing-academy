"use client";

import Image from "next/image";

export default function MoneyBackGuarantee() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left - Image/Shield */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Green circle background */}
              <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-gradient-to-br from-[#eef6e8] to-[#85c65f] rounded-full flex items-center justify-center">
                <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Image src="/images/shield.svg" alt="Money Back Guarantee" width={80} height={80} className="md:w-[100px] md:h-[100px]" loading="lazy" />
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-12 md:w-16 h-12 md:h-16 bg-[#d5e9c6] rounded-full opacity-60" />
              <div className="absolute -bottom-2 -left-6 w-10 md:w-12 h-10 md:h-12 bg-[#c5ddb3] rounded-full opacity-60" />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-[28px] md:text-[37px] font-semibold text-[#15301f] mb-6 leading-[1.2]">
              Εγγύηση Επιστροφής Χρημάτων
            </h2>
            <div className="space-y-4 text-[#15301f] text-[16px] leading-[26px]">
              <p>
                Πίσω από κάθε μάθημα, υπάρχει πραγματική εμπειρία από την ελληνική αγορά,
                δοκιμασμένες τεχνικές και αποτελέσματα που αποδεικνύονται με νούμερα.
              </p>
              <p>
                Πιστεύουμε τόσο πολύ σ' αυτό το course, που σου προσφέρουμε{" "}
                <span className="font-semibold">
                  30 ημέρες εγγύηση επιστροφής χρημάτων
                </span>
                , για να νιώσεις 100% ασφαλής για την επένδυσή σου.
              </p>
              <p className="font-semibold">
                Χωρίς ψιλά γράμματα. Θέλουμε απλά να το δοκιμάσεις και να πετύχεις.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
