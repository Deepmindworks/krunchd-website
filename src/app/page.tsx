import { HeroSection } from "@/components/sections/HeroSection";
import { ValuePropSection } from "@/components/sections/ValuePropSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { ProductHighlightsSection } from "@/components/sections/ProductHighlightsSection";
import { WhyDifferentSection } from "@/components/sections/WhyDifferentSection";
import { IngredientsSection } from "@/components/sections/IngredientsSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuePropSection />
      <ProblemSolutionSection />
      <ProductHighlightsSection />
      <WhyDifferentSection />
      <IngredientsSection />
      <SocialProofSection />
      <TestimonialsSection />
      <MissionSection />
      <CTASection />
    </>
  );
}
