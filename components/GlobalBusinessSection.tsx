"use client";

import Image from "next/image";
import React from "react";
import { Layers } from "lucide-react";

export function GlobalBusinessSection() {
  return (
    <section className="control-section relative z-20 mx-auto max-w-6xl px-6 py-24 lg:px-8 bg-white text-gray-900" data-reveal>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="section-kicker">Global accounting</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-6">
            Complete control over your ERP cost and compliance
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
            Manage branches, currencies, taxes, reporting, and hosting without tying every new employee to a new software seat.
          </p>

          <div className="control-checks mt-8">
            <div>Multi-company and multi-currency reporting</div>
            <div>Configurable tax rules for local compliance</div>
            <div>Hosting and support plans that scale by usage</div>
          </div>
        </div>

        <div data-parallax="panel" className="pricing-comparison-card rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-sm overflow-x-auto">
          <div className="min-w-[760px]">
          
            {/* Top Row: Logos */}
            <div className="flex items-center mb-12">
              {/* UnityAlgo */}
              <div className="w-[30%] flex items-center gap-3">
                <Image src="/logo.png" alt="UnityAlgo" width={40} height={40} className="object-contain" />
                <span className="font-bold text-2xl text-gray-900">UnityAlgo</span>
              </div>

              {/* Competitors */}
              <div className="w-[70%] grid grid-cols-4 items-center opacity-70 grayscale">
                <div className="flex items-center font-bold text-2xl tracking-tight">
                  <span className="text-gray-700">odoo</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-lg">
                  <Layers className="h-7 w-7 text-gray-700" />
                  <span className="text-gray-700">Zoho One</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-lg">
                  <div className="h-5 w-6 bg-gray-600 rounded-sm skew-x-[-15deg]"></div>
                  <div className="leading-tight text-gray-700">
                    <div>Dynamics</div>
                    <div>365</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-lg">
                  <span className="text-gray-700 text-xl">SAP</span> 
                  <span className="text-xs font-normal text-gray-700">Business One</span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Pricing */}
            <div className="flex items-center">
            
              <div className="w-[30%] flex flex-col gap-1 border-r border-gray-100 pr-8 relative">
                <p className="font-bold text-gray-900 text-lg">No per-user pricing</p>
                <p className="text-sm text-gray-500 font-medium">Pay only for hosting and support</p>
              </div>

              <div className="w-[70%] grid grid-cols-4 items-center">
                <div><span className="text-gray-500 font-medium text-xl">$14</span></div>
                <div><span className="text-gray-500 font-medium text-xl">$50</span></div>
                <div><span className="text-gray-500 font-medium text-xl">$100</span></div>
                <div><span className="text-gray-500 font-medium text-xl">$108</span></div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
