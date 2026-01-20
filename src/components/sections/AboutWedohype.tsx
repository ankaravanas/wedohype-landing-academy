"use client";

import Image from "next/image";
import { motion } from "motion/react";

const industries = [
  {
    icon: "/images/shopping-icon.svg",
    title: "E-commerce",
    description: "ρούχα, καλλυντικά, fitness προϊόντα, εξοπλισμός, gadgets",
  },
  {
    icon: "/images/office-icon.svg",
    title: "B2B και B2C εταιρείες",
    description: "",
  },
  {
    icon: "/images/stethoscope-icon.svg",
    title: "Ιατρούς",
    description: "ορθοπεδικούς, οδοντιάτρους κ.α.",
  },
  {
    icon: "/images/office-icon.svg",
    title: "Αρχιτεκτονικά γραφεία",
    description: "και κατασκευαστικές εταιρείες",
  },
  {
    icon: "/images/searching-icon.svg",
    title: "Beauty professionals",
    description: "",
  },
];

const trustedLogos = [
  { src: "/images/Delta.svg", alt: "Delta" },
  { src: "/images/Novartis.svg", alt: "Novartis" },
  { src: "/images/PHARMASEPT.svg", alt: "Pharmasept" },
  { src: "/images/Remax.svg", alt: "Remax" },
  { src: "/images/travel1824.svg", alt: "Travel1824" },
  { src: "/images/Fitbuddy.svg", alt: "Fitbuddy" },
  { src: "/images/weber.svg", alt: "Weber" },
  { src: "/images/bdtk.svg", alt: "BDTK" },
];

const teamMembers = [
  {
    image: "/images/team-andreas.png",
    name: "Ανδρέας Καραβάνας",
    role: "Co-Founder",
    bio: "Τα τελευταία 10 χρόνια βοηθάω επιχειρήσεις, brands και freelancers να αυξήσουν τις πωλήσεις τους. Έχω ζήσει από πρώτο χέρι τη δυσκολία του να φτιάχνεις σελίδες που είναι όμορφες, αλλά δεν πουλάνε. Γι' αυτό δημιούργησα, μαζί με την ομάδα μου, ένα πρακτικό σύστημα που φέρνει μετρήσιμα αποτελέσματα.\n\nΣτο πρόγραμμα, **είμαι ο άνθρωπος που σε καθοδηγεί βήμα-βήμα, ώστε να εφαρμόσεις κι εσύ το σύστημα που εφαρμόζω καθημερινά για τους πελάτες της WEDOHYPE.**",
  },
  {
    image: "/images/team-thanasis.png",
    name: "Θανάσης Χρυσοβέργης",
    role: "Co-Founder & Head of Development",
    bio: "Τα τελευταία 15+ χρόνια βοηθάω brands σε όλο τον κόσμο να αναπτυχθούν online. **Φτιάχνω websites που είναι ελκυστικά, αλλά πάνω απ' όλα που πουλάνε και γίνονται εργαλεία ανάπτυξης για τις επιχειρήσεις.**\n\nΑγαπώ να συνδυάζω design, data και τεχνολογία, για να είμαι σίγουρος ότι το αποτέλεσμα είναι πάντα το καλύτερο που θα μπορούσε.",
  },
  {
    image: "/images/team-sotiris.png",
    name: "Σωτήρης Πανταζής",
    role: "Co-Founder & Head of Performance",
    bio: "Είμαι ο άνθρωπος που παρακολουθεί τα νούμερα και εξασφαλίζει ότι κάθε ενέργεια που κάνουμε για τους πελάτες μας φέρνει μετρήσιμα αποτελέσματα.\n\nΑσχολούμαι με το performance marketing για πάνω από 15 χρόνια κι έχω εμπειρία σε Paid Ads, SEO, CRO, Web Analytics και Web Development. Ό,τι κι αν χτίζουμε στη WEDOHYPE, **ο στόχος μου είναι πάντα ένας: να φέρει ανάπτυξη που φαίνεται στους αριθμούς.**",
  },
];

export default function AboutWedohype() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Dot pattern background - matching Figma (dots stronger in center) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(133, 198, 95, 0.2) 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
          maskImage: "radial-gradient(ellipse 70% 50% at 50% 50%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 50%, black 20%, transparent 70%)"
        }}
      />
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[37px] font-semibold text-[#15301f] mb-4">
            Είμαστε η WEDOHYPE
          </h2>
          <p className="text-[#15301f] text-[16px] md:text-[18px] max-w-[700px] mx-auto leading-[26px]">
            Έχουμε φτιάξει χιλιάδες landing pages που πουλάνε.
            Και μοιραζόμαστε το σύστημά μας μαζί σου.
          </p>
        </div>

        {/* Team Members - 3 columns grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 max-w-[1200px] mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative w-full h-[500px] md:h-[580px] group">
              {/* Gradient card */}
              <div className="absolute inset-x-0 top-[15%] bottom-[18%] bg-gradient-to-b from-[#f6f6f6] to-[#85c65f] rounded-[23px]" />

              {/* Bio text box - shows on hover for all members with bio */}
              {member.bio && (
                <div className="absolute inset-x-4 top-[8%] bottom-[22%] bg-[#85c65f] rounded-[20px] p-5 md:p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-[#15301f] text-[13px] md:text-[14px] leading-[20px] md:leading-[22px]">
                    {member.bio.split('\n\n').map((paragraph, i) => (
                      <p key={i} className={i > 0 ? 'mt-4' : ''}>
                        {paragraph.split(/\*\*(.*?)\*\*/).map((part, j) =>
                          j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Image - head extends above the green box, no side cropping */}
              <div className={`absolute -top-[10%] left-0 right-0 bottom-[18%] z-10 ${member.bio ? 'group-hover:opacity-0' : ''} transition-opacity duration-300`}>
                <div className="relative w-full h-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain object-bottom"
                  />
                </div>
              </div>

              {/* Text info - positioned below the card with more spacing */}
              <div className="absolute bottom-0 left-0 right-0 text-center">
                <h4 className="text-[#15301f] font-semibold text-[20px] md:text-[26px] tracking-[0.56px] leading-[28px] mb-1">
                  {member.name}
                </h4>
                <p className="text-[#15301f] text-[13px] md:text-[15px] tracking-[0.32px] leading-[22px]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="mb-12">
          <h3 className="text-center text-[20px] md:text-[24px] font-semibold text-[#15301f] mb-8 max-w-[800px] mx-auto">
            Ό,τι κι αν πουλάς, πιθανότατα έχουμε βοηθήσει κάποιον σαν εσένα να το απογειώσει
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="text-center p-4 bg-[#eef6e8] rounded-[15px] border border-[#c5ddb3]"
              >
                <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-3">
                  <Image src={industry.icon} alt="" width={24} height={24} />
                </div>
                <h4 className="font-semibold text-[#15301f] text-[14px] mb-1">
                  {industry.title}
                </h4>
                {industry.description && (
                  <p className="text-gray-500 text-[12px]">{industry.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trusted logos - Animated Carousel */}
        <div className="mb-12">
          <p className="text-[#15301f] text-center mb-6 text-[16px]">Brands που μας έχουν εμπιστευτεί</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{ x: "-50%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-0 items-center"
            >
              {[...trustedLogos, ...trustedLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[160px] h-[70px] relative"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA text */}
        <div className="text-center max-w-[900px] mx-auto">
          <p className="text-[#15301f] text-[16px] leading-[26px] mb-4">
            Αυτό το course είναι η μέθοδός μας, αποδομημένη και πακεταρισμένη για σένα.
            Χωρίς γενικές και περίπλοκες θεωρίες. Μόνο πράγματα που εφαρμόζουμε κάθε μέρα
            για εταιρείες στην Ελλάδα και στο εξωτερικό.
          </p>
          <p className="text-[#15301f] font-semibold text-[18px]">
            Ξεκίνα τώρα με τη μεθοδολογία που εμπιστεύονται τα πιο επιτυχημένα brands
            σε Ελλάδα κι εξωτερικό.
          </p>
        </div>
      </div>
    </section>
  );
}
