"use client";

import React from "react";
import { Sparkles, Users, Briefcase, UserCheck, ShoppingCart, BarChart, FileText } from "lucide-react";

const coreModules = [
  {
    title: "Customer Management",
    description: "Customer Management is a crucial module that helps businesses effectively organize, track, and nurture their customer relationships.",
    icon: Users,
    bgGradient: "from-purple-100"
  },
  {
    title: "Supplier Management",
    description: "Supplier Management helps you keep track of all your vendors in one place. From storing contact details to monitoring transactions.",
    icon: Briefcase,
    bgGradient: "from-red-100"
  },
  {
    title: "Employee Management",
    description: "Employee Management centralizes your workforce data, from personal details to job roles, performance, and attendance.",
    icon: UserCheck,
    bgGradient: "from-cyan-100"
  },
  {
    title: "Purchase Management",
    description: "Purchase Management enables you to handle all procurement activities seamlessly. You can create purchase orders, track inventory levels.",
    icon: ShoppingCart,
    bgGradient: "from-orange-100"
  },
  {
    title: "Sales Management",
    description: "Sales Management gives you full control over your sales pipeline. Track orders, view customer history, and generate invoices effortlessly.",
    icon: BarChart,
    bgGradient: "from-red-100"
  },
  {
    title: "Payments Management",
    description: "Payments Management brings all your incoming and outgoing financial transactions into one organized space.",
    icon: FileText,
    bgGradient: "from-green-100"
  }
];

export function CoreModulesSection() {
  return (
    <section id="services" className="relative z-20 mx-auto max-w-7xl px-6 py-24 lg:px-8 bg-white">
      <div className="relative z-10 text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-bold text-black shadow-sm mb-6">
          <Sparkles className="h-4 w-4 text-[#8c181b]" />
          CORE MODULES
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight mb-4">
          Core Modules to Simplify and<br />
          Grow Your Business
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreModules.map((module, index) => {
          const Icon = module.icon;
          return (
            <div 
              key={index}
              className={`group flex flex-col items-center text-center p-8 rounded-2xl border border-gray-200 bg-gradient-to-b ${module.bgGradient} to-transparent via-transparent shadow-sm transition-transform duration-300 hover:scale-105 cursor-pointer`}
            >
              <div className="bg-[#8c181b] text-white p-4 rounded-xl mb-6 transition-colors duration-300 group-hover:bg-[#701315]">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">{module.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {module.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
