"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Sparkles, ArrowRight, Check } from "lucide-react";

const featuresList1 = [
  {
    title: "Accounting",
    features: [
      "Multi-subsidiary, Multi-currency",
      "General ledger",
      "Accounts payable/receivable",
      "Financial statements",
      "Fixed assets",
      "Global tax and compliance"
    ],
    image: "/pics/accounting.png",
  },
  {
    title: "Procurement",
    features: [
      "Procure-to-Pay cycle",
      "Material request",
      "Purchase orders",
      "Multi-level approvals",
      "Supplier scorecards",
      "Supplier payments"
    ],
    image: "/pics/procurement.png",
  },
  {
    title: "Sales",
    features: [
      "Order-to-Cash",
      "Sales orders",
      "Sales invoice",
      "Print formats",
      "Pricing rules",
      "Payments"
    ],
    image: "/pics/sales.webp",
  },
  {
    title: "CRM",
    features: [
      "Leads",
      "Opportunities",
      "Quotations",
      "Multi-territory sales",
      "SLA management",
      "Newsletters"
    ],
    image: "/pics/crm.png",
  },
  {
    title: "Stock",
    features: [
      "Item master",
      "Warehouses",
      "Serial and batch tracking",
      "Stock ledger",
      "Item defaults",
      "Inventory reports"
    ],
    image: "/pics/stock.webp",
  },
];

const featuresList2 = [
  {
    title: "Manufacturing",
    features: [
      "Multi-level BOM",
      "Production planning",
      "Work orders, Job cards",
      "Subcontracting",
      "Quality checks",
      "Manufacturing reports"
    ],
    image: "/pics/manufacturing.webp",
  },
  {
    title: "Projects",
    features: [
      "Project and task tracking",
      "Revenue recognition",
      "Expenses tracking",
      "Timesheet tracking",
      "Inventory tracking",
      "Cashflow management"
    ],
    image: "/pics/projects.png",
  },
  {
    title: "Point of Sale",
    features: [
      "Cloud-based",
      "Multi-store",
      "Collections and Invoicing",
      "Shift Management",
      "POS profile",
      "Print formats"
    ],
    image: "/pics/pos.png",
  },
  {
    title: "Quality",
    features: [
      "Quality assurance plans",
      "Quality inspections",
      "Quality templates",
      "Non-conformance reporting",
      "Quality analytics & reports",
      "Checks across end to end material flow"
    ],
    image: "/pics/quality.png",
  },
  {
    title: "Support",
    features: [
      "Auto-assign tickets",
      "Define and honour SLAs",
      "Customer portal",
      "Maintenance visits",
      "Knowledge base",
      "Integrated invoicing"
    ],
    image: "/pics/support.webp",
  },
];

export function MainFeaturesSection() {
  const [activeTab1, setActiveTab1] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);

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

      {/* First Grid Layout (Tabs Left, Image Right) */}
      <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-start mb-24">
        
        {/* Left Side - Tabs List */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {featuresList1.map((feature, index) => {
            const isActive = activeTab1 === index;
            return (
              <div
                key={index}
                onClick={() => setActiveTab1(index)}
                className={`
                  group cursor-pointer rounded-xl border transition-all duration-500 ease-in-out
                  ${isActive 
                    ? "bg-white border-white shadow-xl border-l-4 !border-l-[#8c181b] p-6" 
                    : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm p-5"
                  }
                `}
              >
                {/* Tab Header */}
                <div className="flex items-center justify-between">
                  <h3 className={`font-bold transition-all duration-500 ${
                    isActive ? "text-xl text-[#8c181b]" : "text-base text-gray-800 group-hover:text-black"
                  }`}>
                    {feature.title}
                  </h3>
                  <ArrowRight 
                    className={`h-5 w-5 transition-all duration-500 ease-in-out ${
                      isActive 
                        ? "-rotate-45 text-[#8c181b]" 
                        : "text-gray-400 group-hover:text-black"
                    }`} 
                  />
                </div>

                {/* Animated Expandable Content */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    isActive ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-3 pr-2 pb-1">
                      {feature.features.map((fItem, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="h-4 w-4 text-[#8c181b] shrink-0 mt-0.5" />
                          <span className="leading-tight">{fItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side - Dynamic Image Display */}
        <div className="lg:col-span-8 rounded-[2rem] border border-gray-100 bg-gray-50/50 p-3 shadow-sm transition-all">
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100">
            {featuresList1.map((feature, idx) => (
              <Image
                key={idx}
                src={feature.image}
                alt={feature.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className={`object-contain p-2 transition-opacity duration-700 ease-in-out absolute inset-0 ${
                  activeTab1 === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
                priority={idx === 0}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Second Grid Layout (Image Left, Tabs Right) */}
      <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side - Dynamic Image Display */}
        <div className="lg:col-span-8 rounded-[2rem] border border-gray-100 bg-gray-50/50 p-3 shadow-sm transition-all order-2 lg:order-1">
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100">
            {featuresList2.map((feature, idx) => (
              <Image
                key={idx}
                src={feature.image}
                alt={feature.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className={`object-contain p-2 transition-opacity duration-700 ease-in-out absolute inset-0 ${
                  activeTab2 === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Tabs List */}
        <div className="lg:col-span-4 flex flex-col gap-3 order-1 lg:order-2">
          {featuresList2.map((feature, index) => {
            const isActive = activeTab2 === index;
            return (
              <div
                key={index}
                onClick={() => setActiveTab2(index)}
                className={`
                  group cursor-pointer rounded-xl border transition-all duration-500 ease-in-out
                  ${isActive 
                    ? "bg-white border-white shadow-xl border-l-4 !border-l-[#8c181b] p-6" 
                    : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm p-5"
                  }
                `}
              >
                {/* Tab Header */}
                <div className="flex items-center justify-between">
                  <h3 className={`font-bold transition-all duration-500 ${
                    isActive ? "text-xl text-[#8c181b]" : "text-base text-gray-800 group-hover:text-black"
                  }`}>
                    {feature.title}
                  </h3>
                  <ArrowRight 
                    className={`h-5 w-5 transition-all duration-500 ease-in-out ${
                      isActive 
                        ? "-rotate-45 text-[#8c181b]" 
                        : "text-gray-400 group-hover:text-black"
                    }`} 
                  />
                </div>

                {/* Animated Expandable Content */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    isActive ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-3 pr-2 pb-1">
                      {feature.features.map((fItem, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="h-4 w-4 text-[#8c181b] shrink-0 mt-0.5" />
                          <span className="leading-tight">{fItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
