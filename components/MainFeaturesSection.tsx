"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Sparkles, ArrowRight, ArrowUpRight } from "lucide-react";

const featuresList = [
  {
    title: "Multitenancy",
    description: "The multitenancy feature enables the individual database for each individual tenant.",
    image: "/feature_one.png",
  },
  {
    title: "Multilingual",
    description: "Serve a global audience with built-in support for multiple languages and regional localization.",
    image: "/hero.png",
  },
  {
    title: "Single Page Application",
    description: "Experience lightning-fast navigation and seamless interactions without page reloads.",
    image: "/feature_one.png",
  },
  {
    title: "Custom Domain",
    description: "Personalize your brand identity by connecting your own custom domain effortlessly.",
    image: "/feature_one.png",
  },
  {
    title: "Stripe Billing",
    description: "Manage subscriptions and process payments securely with integrated Stripe billing.",
    image: "/feature_one.png",
  },
];

export function MainFeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative z-20 mx-auto max-w-7xl px-6 py-24 lg:px-8 bg-white">
      
      {/* Background grid pattern for this specific section */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-bold text-black shadow-sm mb-6">
          <Sparkles className="h-4 w-4 text-[#8c181b]" />
          MAIN FEATURES
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
          Your Experience Gets Better <br className="hidden sm:block" />
          And Better Over Time.
        </h2>
      </div>

      {/* Interactive Grid Layout */}
      <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side - Tabs List */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {featuresList.map((feature, index) => {
            const isActive = activeTab === index;
            return (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={`
                  group cursor-pointer rounded-xl border transition-all duration-300
                  ${isActive 
                    ? "bg-white border-white shadow-xl border-l-4 !border-l-[#8c181b] p-6" 
                    : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm p-5 flex items-center justify-between"
                  }
                `}
              >
                {isActive ? (
                  // Active Tab Layout
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-[#8c181b]">{feature.title}</h3>
                      <ArrowUpRight className="h-5 w-5 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed pr-4">
                      {feature.description}
                    </p>
                  </div>
                ) : (
                  // Inactive Tab Layout
                  <>
                    <h3 className="text-base font-bold text-gray-800 group-hover:text-black">
                      {feature.title}
                    </h3>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-black transition-colors" />
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side - Dynamic Image Display */}
        <div className="lg:col-span-8 rounded-[2rem] border border-gray-100 bg-gray-50/50 p-3 shadow-sm transition-all">
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100">
            <Image
              key={activeTab}
              src={featuresList[activeTab].image}
              alt={featuresList[activeTab].title}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-contain p-2 transition-opacity duration-500 ease-in-out"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
