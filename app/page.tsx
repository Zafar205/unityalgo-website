import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MainFeaturesSection } from "@/components/MainFeaturesSection";
import { CoreModulesSection } from "@/components/CoreModulesSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { PricingSection } from "@/components/PricingSection";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-white overflow-hidden font-sans">
      <style>{`
        @keyframes drop {
          0% { top: -10%; opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        @keyframes float-large {
          0%, 100% { transform: translateY(-130px); }
          50% { transform: translateY(130px); }
        }
        @keyframes float-large-delayed {
          0%, 100% { transform: translateY(130px); }
          50% { transform: translateY(-130px); }
        }
      `}</style>
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MainFeaturesSection />
      <CoreModulesSection />
      <TestimonialSection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </main>
  );
}