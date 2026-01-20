"use client";

import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";

const testimonials = [
  // Column 1
  {
    text: "Μέσα σε μία εβδομάδα έφτιαξα τη landing page μου και είδα αύξηση 40% στα leads. Η μεθοδολογία είναι απλή και αποτελεσματική!",
    image: "/images/testimonials/woman-44.webp",
    name: "Μαρία Παπαδοπούλου",
    role: "E-commerce Owner",
  },
  {
    text: "Επιτέλους ένα course που δεν είναι θεωρητικό! Κάθε βίντεο έχει πρακτικά βήματα που εφαρμόζεις αμέσως.",
    image: "/images/testimonials/man-32.webp",
    name: "Γιώργος Νικολάου",
    role: "Digital Marketing Manager",
  },
  {
    text: "Το Bonus Pack αξίζει μόνο του περισσότερα από την τιμή του course. Τα AI prompts με βοήθησαν να γράψω copy σε μισή ώρα!",
    image: "/images/testimonials/woman-68.webp",
    name: "Ελένη Δημητρίου",
    role: "Freelance Copywriter",
  },
  // Column 2
  {
    text: "Ως ιδιοκτήτης μικρής επιχείρησης, δεν είχα budget για agency. Με αυτό το course έφτιαξα μόνος μου σελίδα που φέρνει πελάτες καθημερινά.",
    image: "/images/testimonials/man-75.webp",
    name: "Κώστας Αλεξίου",
    role: "Ιδιοκτήτης Καφέ",
  },
  {
    text: "Η ομάδα της WEDOHYPE ξέρει τι κάνει. Βλέπεις real case studies, όχι θεωρία. Αυτό κάνει τη διαφορά.",
    image: "/images/testimonials/woman-65.webp",
    name: "Σοφία Καραγιάννη",
    role: "Brand Strategist",
  },
  {
    text: "Ξεκίνησα χωρίς καμία γνώση σε landing pages. Τώρα φτιάχνω σελίδες για πελάτες μου και χρεώνω extra!",
    image: "/images/testimonials/man-46.webp",
    name: "Νίκος Παναγιωτόπουλος",
    role: "Web Designer",
  },
  // Column 3
  {
    text: "Το conversion rate της σελίδας μου πήγε από 1.2% σε 4.8% μετά την εφαρμογή της μεθοδολογίας. Απίστευτα αποτελέσματα!",
    image: "/images/testimonials/woman-33.webp",
    name: "Αναστασία Βασιλείου",
    role: "E-shop Manager",
  },
  {
    text: "Τα Figma templates είναι game changer. Δεν χρειάζεται να είσαι designer για να φτιάξεις επαγγελματική σελίδα.",
    image: "/images/testimonials/man-22.webp",
    name: "Δημήτρης Οικονόμου",
    role: "Startup Founder",
  },
  {
    text: "Η εγγύηση επιστροφής χρημάτων με έκανε να νιώσω ασφαλής. Αλλά δεν τη χρειάστηκα - το course αξίζει κάθε euro!",
    image: "/images/testimonials/woman-17.webp",
    name: "Χριστίνα Μάρκου",
    role: "Marketing Consultant",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#f6f6f6] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[600px] mx-auto mb-10"
        >
          <div className="flex justify-center">
            <div className="bg-[#d5e9c6] text-[#15301f] py-1 px-4 rounded-[10px] text-[14px] font-medium">
              Testimonials
            </div>
          </div>

          <h2 className="text-[28px] md:text-[37px] font-semibold text-[#15301f] tracking-tight mt-5 text-center">
            Τι λένε όσοι παρακολούθησαν το Course
          </h2>
          <p className="text-center mt-4 text-[#15301f]/75 text-[16px] leading-[26px]">
            Δες τι αποτελέσματα είχαν επαγγελματίες και επιχειρήσεις που εφάρμοσαν τη μεθοδολογία μας.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
