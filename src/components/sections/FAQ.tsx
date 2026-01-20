"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Τι περιλαμβάνει το course;",
    answer: "Το course περιλαμβάνει 21 video-μαθήματα (~4,5 ώρες) στα ελληνικά, τη μεθοδολογία της WEDOHYPE βήμα-βήμα, πραγματικά case studies από την ελληνική αγορά, καθώς και ένα πλήρες Bonus Pack με templates, prompts, checklists και guides.",
  },
  {
    question: "Δεν ξέρω τίποτα από copywriting, design ή development. Θα τα καταφέρω;",
    answer: "Απόλυτα! Το course είναι σχεδιασμένο για αρχάριους. Σε καθοδηγούμε βήμα-βήμα, με AI εργαλεία που γράφουν για σένα, έτοιμα templates και πρακτικές οδηγίες. Δεν χρειάζεσαι καμία προηγούμενη εμπειρία.",
  },
  {
    question: "Σε πόσο χρόνο το ολοκληρώνω;",
    answer: "Τα videos έχουν συνολική διάρκεια περίπου 4,5 ώρες. Μπορείς να τα παρακολουθήσεις στον δικό σου ρυθμό, όποτε σου βολεύει.",
  },
  {
    question: "Πώς αποκτώ πρόσβαση;",
    answer: "Μόλις ολοκληρώσεις την αγορά, θα λάβεις άμεσα στο email σου τα στοιχεία πρόσβασης στο course και σε όλα τα bonus materials.",
  },
  {
    question: "Σε ποιες συσκευές μπορώ να το παρακολουθήσω;",
    answer: "Μπορείς να παρακολουθήσεις το course από υπολογιστή, tablet ή κινητό. Το μόνο που χρειάζεσαι είναι σύνδεση στο internet.",
  },
  {
    question: "Πόσο καιρό έχω πρόσβαση στο course και τα bonus;",
    answer: "Έχεις lifetime πρόσβαση σε όλο το υλικό! Μπορείς να το ξαναδείς όποτε θέλεις, όσες φορές θέλεις.",
  },
  {
    question: "Είναι ασφαλής η πληρωμή;",
    answer: "Ναι, η πληρωμή γίνεται μέσω ασφαλούς πλατφόρμας με κρυπτογράφηση SSL. Δεχόμαστε πιστωτικές/χρεωστικές κάρτες και PayPal.",
  },
  {
    question: "Αν δεν μείνω ικανοποιημένος/η;",
    answer: "Προσφέρουμε 30 ημέρες εγγύηση επιστροφής χρημάτων, χωρίς ψιλά γράμματα. Αν δεν είσαι ικανοποιημένος/η, επικοινωνείς μαζί μας και σου επιστρέφουμε το ποσό.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-[#f6f6f6]">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-[28px] md:text-[37px] font-semibold text-[#15301f] mb-2">
            Συχνές Ερωτήσεις
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-[15px] border border-[#d5e9c6] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#f9fafb] transition-colors"
              >
                <span className="font-semibold text-[#15301f] text-[16px] pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#15301f] flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-5 pb-5 text-[#15301f] text-[14px] leading-[22px] border-t border-[#d5e9c6] pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
