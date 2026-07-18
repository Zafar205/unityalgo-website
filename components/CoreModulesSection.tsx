"use client";

import React from "react";
import { Users, Briefcase, UserCheck, ShoppingCart, BarChart, FileText } from "lucide-react";

const coreModules = [
  {
    title: "Customer Management",
    description: "Track customer records, account history, follow-ups, and service context from the same workspace.",
    icon: Users,
    bgGradient: "from-purple-100"
  },
  {
    title: "Supplier Management",
    description: "Centralize vendor profiles, transactions, purchasing terms, and approval history.",
    icon: Briefcase,
    bgGradient: "from-red-100"
  },
  {
    title: "Employee Management",
    description: "Keep workforce data, roles, attendance, and performance signals connected to operations.",
    icon: UserCheck,
    bgGradient: "from-cyan-100"
  },
  {
    title: "Purchase Management",
    description: "Move purchase requests, orders, receipts, and inventory updates through governed flows.",
    icon: ShoppingCart,
    bgGradient: "from-orange-100"
  },
  {
    title: "Sales Management",
    description: "Connect quotations, orders, invoices, and customer balances without duplicate entry.",
    icon: BarChart,
    bgGradient: "from-red-100"
  },
  {
    title: "Payments Management",
    description: "Reconcile incoming and outgoing payments with the records that produced them.",
    icon: FileText,
    bgGradient: "from-green-100"
  }
];

export function CoreModulesSection() {
  return (
    <section id="services" className="modules-system relative z-20 mx-auto max-w-7xl px-6 py-24 lg:px-8 bg-white" data-reveal>
      <div className="relative z-10 mx-auto mb-16 max-w-3xl text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight mb-4">
          Core modules, one source of truth
        </h2>
        <p className="mx-auto text-lg text-gray-600 leading-relaxed">
          UnityAlgo keeps department work close to the finance and inventory records that prove it.
        </p>
      </div>

      <div className="module-orbit-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreModules.map((module, index) => {
          const Icon = module.icon;
          return (
            <div 
              key={index}
              className={`module-card group flex flex-col p-8 rounded-2xl border border-gray-200 bg-gradient-to-b ${module.bgGradient} to-transparent via-transparent shadow-sm transition-transform duration-300 hover:scale-105 cursor-pointer`}
            >
              <div className="module-card-icon bg-[#8c181b] text-white p-4 rounded-xl mb-6 transition-colors duration-300 group-hover:bg-[#701315]">
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
