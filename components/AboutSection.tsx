import Image from "next/image";
import React from "react";
import { Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative z-20 mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-bold text-black shadow-sm">
            <Sparkles className="h-4 w-4 text-[#8c181b]" />
            ABOUT UNITYALGO
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black leading-[1.15]">
            Ultimate Application for Managing Sales, Inventory & Accounting
          </h2>

          {/* Paragraph */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
Traditional proprietary ERP systems are often expensive, rigid, and difficult to customize, forcing businesses to either invest heavily in solutions like SAP and Oracle NetSuite or rely on multiple disconnected applications that create manual work, poor visibility, and broken traceability. UnityAlgoERP offers a better alternative: a modern, comprehensive, and user friendly Enterprise Resource Planning (ERP) solution designed to streamline operations while remaining affordable. With powerful features, seamless integration, and extensive customization capabilities, UnityAlgoERP gives businesses complete freedom, control, and flexibility to adapt the system to their unique processes without the limitations and high costs of traditional ERP platforms.

          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 pt-4">
            <div>
              <div className="text-4xl font-extrabold text-black mb-1">
                2.5<span className="text-[#8c181b]">x</span>
              </div>
              <div className="text-sm font-medium text-gray-500">Faster Development</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-black mb-1">
                $2.5M<span className="text-[#8c181b]">+</span>
              </div>
              <div className="text-sm font-medium text-gray-500">Client Revenue Impacted</div>
            </div>
          </div>
        </div>

        {/* Right Column - Image with Hover Zoom */}
        <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group">
          <Image
            src="/cta.png"
            alt="Team collaborating on UnityAlgo"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
        
      </div>
    </section>
  );
}
