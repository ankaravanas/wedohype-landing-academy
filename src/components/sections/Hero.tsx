"use client";

import Image from "next/image";
import { Check } from "lucide-react";

const features = [
  "21 video-μαθήματα στα ελληνικά",
  "Πρακτικά templates + αληθινά case studies",
  "Το σύστημα που χρησιμοποιούμε",
  "Εγγύηση επιστροφής χρημάτων",
];

const landingPageExamples = [
  { src: "/images/kidnest-lp.webp", alt: "Kidnest Landing Page" },
  { src: "/images/rania-nats.webp", alt: "Rania Nats Landing Page" },
  { src: "/images/screencapture-fitbuddy-gr-experience-2024-10-09-16_49_12.webp", alt: "FitBuddy Landing Page" },
  { src: "/images/screencapture-grillacademy-kyso-gr-homepage-2024-10-09-13_59_24.webp", alt: "Grill Academy Landing Page" },
  { src: "/images/screencapture-katiatalksdiet-gr-2024-10-09-13_50_57.webp", alt: "Katia Talks Diet Landing Page" },
  { src: "/images/screencapture-sneakerness-gr-2024-10-11-17_02_15.webp", alt: "Sneakerness Landing Page" },
];

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large green ellipse gradient - center top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1237px] h-[608px]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(213, 233, 198, 0.6) 0%, transparent 70%)"
          }}
        />
        {/* Dot patterns - full width with center fade (matching Figma) */}
        <div
          className="absolute top-0 left-0 right-0 h-[700px]"
          style={{
            backgroundImage: "radial-gradient(rgba(133, 198, 95, 0.25) 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, black 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, black 70%)"
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 pt-[75px]">
        {/* Brand Badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#d5e9c6] rounded-[30px] px-6 py-2">
            <span className="text-[16px] font-normal text-[#15301f] tracking-[0.32px]">
              AI Landing Page Course
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-[939px] mx-auto mb-4">
          <h1 className="text-[36px] md:text-[48px] font-semibold text-[#15301f] leading-[1.1] tracking-tight">
            Χτίσε τη Landing Page που θα σου φέρει{" "}
            <span className="text-[#85c65f]">2x Πωλήσεις</span>{" "}
            με τη δύναμη του AI.
          </h1>
          <p className="text-[36px] md:text-[48px] font-semibold text-[#15301f] leading-[1.1] mt-1">
            ΧΩΡΙΣ περιττά χρήματα.
          </p>
          <p className="text-[36px] md:text-[48px] font-semibold text-[#15301f] leading-[1.1]">
            ΧΩΡΙΣ δύσκολες διαδικασίες.
          </p>
        </div>

        {/* Subheadline */}
        <div className="text-center max-w-[690px] mx-auto mb-6">
          <p className="text-[16px] md:text-[18px] text-[#15301f] leading-[26px] tracking-[0.32px]">
            Το video course που σου δείχνει βήμα-βήμα πώς να δημιουργήσεις μια landing page{" "}
            <span className="font-bold">που προσελκύει leads κάθε μέρα,</span>{" "}
            χωρίς να σπαταλήσεις χρήματα και χωρίς να χάσεις χρόνο σε περίπλοκες διαδικασίες.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-2 mb-10">
          <button className="bg-[#15301f] hover:bg-[#0d1f14] text-white font-bold py-4 px-8 rounded-[15px] text-[18px] leading-[26px] transition-all duration-200">
            Θέλω να μάθω περισσότερα
          </button>
          <p className="text-[18px] text-[#15301f] leading-[26px]">
            + <span className="font-bold">ΔΩΡΟ</span> Bonus Pack αξίας 2.770€+
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white border border-[#d5e9c6] rounded-full px-5 py-2.5 shadow-sm"
            >
              <div className="w-5 h-5 bg-[#85c65f] rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <span className="text-[#15301f] text-[14px] font-medium whitespace-nowrap">{feature}</span>
            </div>
          ))}
        </div>

        {/* Landing Page Examples Showcase - Glassmorphism Cards */}
        <div className="max-w-[1538px] mx-auto mb-12">
          <div className="flex justify-center gap-5 overflow-x-auto pb-4 px-4">
            {landingPageExamples.map((example, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] md:w-[332px] h-[350px] md:h-[393px] rounded-[13px] overflow-hidden shadow-[0px_4px_91px_1px_rgba(135,135,135,0.1)] backdrop-blur-[26.5px] bg-[rgba(255,255,255,0.4)]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={example.src}
                    alt={example.alt}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Preview Card */}
        <div className="max-w-[896px] mx-auto pb-16">
          <div className="bg-[#f6f6f6] rounded-[19px] p-6 md:p-8 relative overflow-hidden">
            {/* Left decorative ellipse */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[267px] h-[495px] opacity-50"
              style={{
                background: "radial-gradient(ellipse at center, rgba(213, 233, 198, 0.8) 0%, transparent 70%)"
              }}
            />
            {/* Right decorative ellipse */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[267px] h-[495px] opacity-50"
              style={{
                background: "radial-gradient(ellipse at center, rgba(213, 233, 198, 0.8) 0%, transparent 70%)"
              }}
            />

            <div className="relative z-10">
              {/* Video placeholder */}
              <div className="aspect-video bg-white rounded-[15px] shadow-md flex items-center justify-center border border-gray-100 mb-6">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-[#15301f] rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-[#15301f] font-medium text-[16px]">Course Preview</p>
                  <p className="text-gray-400 text-[14px]">4,5 ώρες video-μαθημάτων</p>
                </div>
              </div>

              {/* Course info */}
              <div className="text-center">
                <p className="text-[#15301f] font-medium text-[16px] mb-2">
                  4,5 ώρες βίντεο μαθημάτων που παρακολουθείς στον δικό σου χρόνο
                </p>
                <p className="text-gray-500 text-[14px] mb-4">
                  Templates, case studies, θεωρία+πρακτικά παραδείγματα
                </p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[28px] font-bold text-[#15301f]">197€</span>
                  <span className="text-[14px] text-[#85c65f] font-medium">
                    +Bonus Pack αξίας 2.770€+ δωρεάν!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
