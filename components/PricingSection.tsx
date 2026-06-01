import React from "react";
import { Sparkles, CheckCircle2, XCircle } from "lucide-react";

const pricingPlans = [
  {
    name: "Supplier Management",
    description: "All the basics for your business. Permitted for one domain for personal use only.",
    price: "$69",
    duration: "Month",
    buttonText: "Buy Regular License",
    isPopular: false,
    features: [
      { name: "Quality checked by Envato.", included: true },
      { name: "Life time update.", included: true },
      { name: "6 Month support.", included: true, highlight: true },
      { name: "Permitted for one domain for personal use.", included: true },
      { name: "For Personal Project only.", included: true },
      { name: "Support (2 Business day).", included: true },
      { name: "Full Source Code", included: false },
      { name: "Skype Support", included: false },
      { name: "Anydesk/Teamviewer Support", included: false },
      { name: "Free Installation", included: false },
    ]
  },
  {
    name: "Extended License",
    description: "All the basics for your business. Permitted for multiple domains for commercial use only.",
    price: "$999",
    duration: "Month",
    buttonText: "Start Free Trial",
    isPopular: true,
    features: [
      { name: "Quality checked by Envato.", included: true },
      { name: "Life time update.", included: true },
      { name: "6 Month support.", included: true, highlight: true },
      { name: "Permitted for multiple commercial uses.", included: true },
      { name: "For Personal & Commercial Project.", included: true },
      { name: "Support (1 Business day).", included: true },
      { name: "Full Source Code", included: true },
      { name: "Skype Support", included: true },
      { name: "Anydesk/Teamviewer Support", included: true },
      { name: "Free Installation", included: true },
      { name: "6 Hours Free Customization Work", included: true },
    ]
  }
];

export function PricingSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 bg-white z-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-bold text-black shadow-sm mb-6">
          <Sparkles className="h-4 w-4 text-[#8c181b]" />
          PRICING PLAN
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
          Choose the Perfect Pricing Plan<br />
          for Your Business Needs
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        
        {/* Basic Plan */}
        <div className="flex flex-col p-8 rounded-[2rem] border border-gray-200 bg-white shadow-sm">
          <h3 className="text-2xl font-bold text-black mb-2">{pricingPlans[0].name}</h3>
          <p className="text-gray-500 text-sm mb-6">{pricingPlans[0].description}</p>
          <div className="flex items-end gap-1 mb-8">
            <span className="text-5xl font-extrabold text-black">{pricingPlans[0].price}</span>
            <span className="text-gray-500 font-medium mb-2">/{pricingPlans[0].duration}</span>
          </div>
          <button className="w-full py-4 rounded-xl font-bold text-white bg-[#8c181b] hover:bg-[#701315] transition-colors mb-8">
            {pricingPlans[0].buttonText}
          </button>
          
          <div className="text-sm font-bold text-black mb-4">What's Included</div>
          <ul className="space-y-3">
            {pricingPlans[0].features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm">
                {feature.included ? (
                  <CheckCircle2 className="w-5 h-5 text-[#8c181b]" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-300" />
                )}
                <span className={feature.included ? "text-gray-600" : "text-gray-400"}>
                  {feature.highlight ? (
                    <>6 Month <span className="text-[#8c181b]">support.</span></>
                  ) : feature.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Plan */}
        <div className="flex flex-col p-8 rounded-[2rem] border border-gray-200 bg-[#8c181b] shadow-xl text-white transform lg:-translate-y-4">
          <h3 className="text-2xl font-bold text-white mb-2">{pricingPlans[1].name}</h3>
          <p className="text-gray-300 text-sm mb-6">{pricingPlans[1].description}</p>
          <div className="flex items-end gap-1 mb-8">
            <span className="text-5xl font-extrabold text-white">{pricingPlans[1].price}</span>
            <span className="text-gray-300 font-medium mb-2">/{pricingPlans[1].duration}</span>
          </div>
          <button className="w-full py-4 rounded-xl font-bold text-[#8c181b] bg-white hover:bg-gray-100 transition-colors mb-8 shadow-lg shadow-white/30">
            {pricingPlans[1].buttonText}
          </button>
          
          <div className="text-sm font-bold text-white mb-4">What's Included</div>
          <ul className="space-y-3">
            {pricingPlans[1].features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-red-400" />
                <span className="text-gray-100">
                  {feature.highlight ? (
                    <>6 Month <span className="text-red-400">support.</span></>
                  ) : feature.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Custom Plan */}
        <div className="flex flex-col p-8 rounded-[2rem] border-2 border-red-50 bg-white shadow-[0_0_40px_rgba(255,100,100,0.05)]">
          <h3 className="text-2xl font-bold text-black mb-4">For any custom work</h3>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            We love hearing from you! Feel free to leave us a message. Use the contact form to get in touch with us. We'll reply back within the next 24 hour.
          </p>
          <button className="w-full py-4 rounded-xl font-bold text-white bg-[#8c181b] hover:bg-[#701315] transition-colors mb-8">
            Contact Now
          </button>
          
          <div className="text-sm font-bold text-black mb-4">We would love to assist you via</div>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-[#8c181b]" /> Email Support (1 Business day).
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-[#8c181b]" /> Skype Support
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-[#8c181b]" /> WhatsApp Support
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-[#8c181b]" /> Anydesk/Teamviewer Support
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
