import {
  Hero,
  UniqueSystem,
  PainPoints,
  CoursePreview,
  CourseModules,
  PricingCTA,
  MoneyBackGuarantee,
  BonusPack,
  AboutWedohype,
  WhatYouGain,
  RealResults,
  TargetAudience,
  HowItWorks,
  WhyChoose,
  Charity,
  Testimonials,
  FAQ,
  FinalCTA,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <UniqueSystem />
      <PainPoints />
      <CoursePreview />
      <CourseModules />
      <PricingCTA />
      <MoneyBackGuarantee />
      <BonusPack />
      <AboutWedohype />
      <WhatYouGain />
      <RealResults />
      <TargetAudience />
      <HowItWorks />
      <WhyChoose />
      <Charity />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
