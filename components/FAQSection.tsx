"use client";

import React, { useState } from "react";
import { Sparkles, ChevronDown } from "lucide-react";

const faqs = [
  { 
    text: "How is UnityAlgo different from other ERP systems for small businesses?",
    answer: "UnityAlgo stands out from other ERP software by being cost-effective and designed with small and medium businesses in mind. Unlike many traditional ERP systems that are complex to use, UnityAlgo offers an intuitive user interface, which helps users learn fast and use with ease. There is no “Per User Fee” for UnityAlgo. This helps growing businesses reduce the Total Cost of Ownership (TCO) as compared to legacy ERP software. UnityAlgo is a modern platform - that means there is no vendor lock-in, unlike traditional ERP systems, where you are at the mercy of the OEM and their implementation partner for even small modifications."
  },
  { 
    text: "Can UnityAlgo scale as my business grows?",
    answer: "Yes, UnityAlgo is built to scale alongside your business. It supports multi-company setups, user roles, advanced user permissions, and can manage high transaction volumes. As your business processes evolve, UnityAlgo can be extended with additional modules, custom workflows, and third-party integrations. Cherry on the cake - UnityAlgo has no “Per User Fee”. You will need to pay only for the extra compute capacity needed. So cost doesn’t increase linearly with your scale."
  },
  { 
    text: "Do I need to hire an IT team to implement ERP software like UnityAlgo?",
    answer: "Not necessarily. UnityAlgo is designed to be user-friendly and can be implemented without a dedicated IT team. Many small businesses set up UnityAlgo on their own using UnityAlgo's online documentation. For basic implementations, we have Success Packs (available in limited regions) where our certified partners help you get started quickly for a small fee. However, for more complex setups or customizations, you may choose to work with a UnityAlgo implementation partner in a dedicated engagement. You can find a suitable partner for your use case."
  },
  { 
    text: "How long does it take to fully implement UnityAlgo?",
    answer: "Implementation time varies depending on the size of your business and the number of modules you're using. For most small businesses, a UnityAlgo implementation can take anywhere from 2 to 8 weeks. Deployments with standard modules like Accounting, CRM, and Inventory are often completed faster. More advanced features like Manufacturing or custom workflows may require additional planning and data migration."
  },
  { 
    text: "What kind of support and training does UnityAlgo provide after deployment?",
    answer: "UnityAlgo offers extensive support options to ensure a smooth experience post-implementation. You can access free online documentation, community forums, video tutorials, technical support via HelpDesk directly from the UnityAlgo team. If you have implemented UnityAlgo via any of our certified partners, they will help you fix basic issues and escalate to the UnityAlgo team in case of advance cases and bug fixes."
  },
  { 
    text: "Can UnityAlgo integrate with other software I’m already using?",
    answer: "Yes, UnityAlgo is designed to integrate with other business tools through its RESTful API and a growing ecosystem of Marketplace apps. Common integrations include authentication tools (LDAP, fairlogin), backup methods (Dropbox, Google Drive, Amazon S3), bank integrations (Plaid), payment gateways (Stripe, PayPal, RazorPay, GoCardless, Braintree, M-pesa, Paytm), ecommerce platforms (Shopify, WooCommerce, Amazon, Unicommerce, Zenoti), and communication tools (Twilio, Exotel). This ensures that your ERP system works seamlessly with the software you already use, reducing double entry and improving efficiency."
  },
  { 
    text: "Is UnityAlgo a good fit for service-based businesses or only for manufacturing and distribution businesses?",
    answer: "UnityAlgo is highly flexible and works well for service-based businesses in addition to traditional industries like manufacturing, distribution and retail. It includes modules for project management, timesheets, invoicing, CRM, help desk, and HR - all of which are essential for service providers. Whether you run a consultancy, IT services firm, digital agency, or legal practice, UnityAlgo provides the tools to manage operations efficiently within a single ERP system."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full py-24 bg-[#FAFAFA] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_100%] opacity-70 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
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
              <div key={index} className="flex items-start w-full max-w-3xl">
                <div 
                  className={`flex-1 bg-white px-6 sm:px-8 py-5 rounded-2xl shadow-sm border border-gray-100 text-left transition-all duration-300 cursor-pointer ${isOpen ? 'shadow-md border-gray-200' : 'hover:shadow-md'}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between font-semibold text-black gap-4">
                    <span className="text-lg">{faq.text}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#8c181b]' : ''}`} />
                  </div>
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden text-gray-600 text-base leading-relaxed">
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
