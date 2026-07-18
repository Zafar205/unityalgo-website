import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MainFeaturesSection } from "@/components/MainFeaturesSection";
import { GlobalBusinessSection } from "@/components/GlobalBusinessSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { PricingSection } from "@/components/PricingSection";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { PremiumMotion } from "@/components/PremiumMotion";

export default function Home() {
  return (
    <PremiumMotion>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MainFeaturesSection />
      <GlobalBusinessSection />
      <TestimonialSection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </PremiumMotion>
  );
}
