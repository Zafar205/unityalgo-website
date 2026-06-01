"use client";

import React, { useState } from "react";
import { Sparkles, ChevronDown } from "lucide-react";

const faqs = [
  { 
    q: "Q1", 
    text: "What is UnityAlgo SaaS?",
    answer: "UnityAlgo SaaS is a comprehensive platform designed to streamline and automate business operations through core modules like Customer Management, Supplier Management, and Sales."
  },
  { 
    q: "Q2", 
    text: "How does multitenancy work?",
    answer: "Our multitenancy architecture ensures that each client (tenant) has a secure, isolated environment while sharing the same underlying software infrastructure, maximizing efficiency."
  },
  { 
    q: "Q3", 
    text: "What hosting is required?",
    answer: "We offer flexible deployment options. You can use our managed cloud hosting for a hassle-free experience or deploy it on your own servers if you require more control."
  },
  { 
    q: "Q4", 
    text: "How customizable is this SaaS template?",
    answer: "Highly customizable! The platform is built with a modular approach, allowing you to easily toggle features, customize themes, and adapt workflows to your business needs."
  },
  { 
    q: "Q5", 
    text: "Can I integrate third-party tools?",
    answer: "Yes, we provide robust APIs and webhooks that allow seamless integration with popular CRM, accounting, and marketing tools."
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 bg-[#FAFAFA] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_100%] opacity-70 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-bold text-black shadow-sm mb-6">
          <Sparkles className="h-4 w-4 text-[#8c181b]" />
          TRENDING FAQS
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight mb-16">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4 items-center">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="flex items-start gap-6 w-full max-w-lg">
                <span className="text-lg font-bold text-black mt-4">{faq.q}</span>
                <div 
                  className={`flex-1 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 text-left transition-all duration-300 cursor-pointer ${isOpen ? 'shadow-md border-gray-200' : 'hover:shadow-md'}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between font-semibold text-black">
                    <span>{faq.text}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#8c181b]' : ''}`} />
                  </div>
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden text-gray-500 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
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
