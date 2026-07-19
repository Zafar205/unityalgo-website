import Image from "next/image";
import React from "react";

const capabilityChips = [
  "Optimize supply chain",
  "Master project finances",
  "Streamline production scheduling",
  "Enhance quality management",
  "Unify financial reporting",
  "Transform BOM management",
  "Accelerate sales conversions",
  "Elevate customer support",
  "Streamline new hires",
  "Transform talent management",
  "Control purchasing approvals",
  "Track inventory movement",
];

const promptText =
  "Create a financial consolidation app that automatically collects data from multiple business entities, performs currency conversion, and generates unified reports.";

const capabilityRows = [
  capabilityChips.slice(0, 6),
  capabilityChips.slice(6),
];

export function HeroSection() {
  return (
    <section id="home" className="relative">
      {/* Background Vertical Lines with Droplets */}
      <div 
        className="hero-grid-lines absolute inset-x-0 top-0 h-[80vh] z-0 flex justify-evenly pointer-events-none"
        style={{ 
          maskImage: 'linear-gradient(to bottom, black 30%, transparent 80%)', 
          WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 80%)' 
        }}
      >
        {[...Array(12)].map((_, i) => (
          <div key={i} className="relative w-px h-full bg-gray-100 overflow-hidden">
            {/* Animated Droplet */}
            <div
              className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#8c181b]"
              style={{
                animation: `drop ${4 + (i % 4) + (i % 2) * 0.5}s cubic-bezier(0.61, 1, 0.88, 1) infinite`,
                animationDelay: `${i * 0.7}s`,
                opacity: 0,
              }}
            />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="hero-content relative z-20 mx-auto max-w-4xl px-4 pt-10 text-center">
        
        {/* Announcement Pill */}
        <div className="hero-announcement mx-auto mb-8 flex max-w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-black shadow-sm">
          <span className="hero-announcement-icon" aria-hidden="true">*</span>
          Introducing UnityAlgo: The Future of Enterprise
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-black mb-6 leading-tight">
          <span className="hero-title-line">AI-powered ERP</span>
          {" "}
          <span className="hero-title-line">for real operations</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto max-w-2xl text-lg text-black font-medium leading-relaxed mb-10">
          Build, deploy, and manage AI agents and ERP workflows from one unified platform.
        </p>

        {/* Prompt Console */}
        <div className="hero-prompt-console mx-auto">
          <p aria-label={promptText}>
            {promptText.split(" ").map((word, index, words) => (
              <React.Fragment key={`${word}-${index}`}>
                <span className="hero-prompt-word">{word}</span>
                {index < words.length - 1 ? " " : null}
              </React.Fragment>
            ))}
          </p>
          <a href="#contact" className="hero-prompt-action">
            Build Now with UnityAlgo
            <span aria-hidden="true">-&gt;</span>
          </a>
        </div>

        {/* Capability Marquee */}
        <div className="capability-marquee" aria-label="UnityAlgo capabilities">
          {capabilityRows.map((row, rowIndex) => (
            <div key={`capability-row-${rowIndex}`} className="capability-marquee-row">
              <div className="capability-marquee-track">
                {[...row, ...row].map((chip, index) => (
                  <span
                    key={`${chip}-${rowIndex}-${index}`}
                    className="capability-chip"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Image Section with Background */}
      <div className="relative mx-auto mt-12 w-full max-w-7xl px-4 pb-16">
        
        {/* CSS gradient field */}
        <div data-parallax="gradient" className="hero-gradient-field absolute left-1/2 -top-64 z-0 h-[760px] w-[100vw] -translate-x-1/2 pointer-events-none" />

        {/* Image Container */}
        <div data-parallax="dashboard" className="hero-dashboard-frame relative z-10 mx-auto max-w-5xl rounded-2xl border border-gray-200/60 bg-white/50 p-2 shadow-2xl backdrop-blur-sm mt-20">
          <div className="relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-inner">
            <Image
              src="/hero.png"
              alt="UnityAlgo Dashboard"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Floating UI Element - Left (Overview) */}
          <div 
            data-float-card="overview"
            className="hero-metric-card absolute -left-16 lg:-left-32 top-1/2 -mt-24 hidden md:block w-60 h-48 z-20"
          >
            <div className="hero-metric-card-inner flex h-full w-full flex-col justify-between rounded-xl border border-gray-100 bg-white/95 backdrop-blur-md p-5 shadow-2xl">
              <div className="mb-2 text-sm font-bold text-black">Overview</div>
              <div className="flex flex-1 items-center justify-center py-2">
                <div className="h-20 w-20 rounded-full border-[5px] border-gray-100 border-t-[#8c181b] border-r-[#8c181b] flex items-center justify-center">
                  <span className="text-sm font-bold text-black">80%</span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-black mt-2">
                <span>Income<br/><b className="text-[10px]">$8264.35</b></span>
                <span className="text-right">Expenses<br/><b className="text-[10px]">$2064.35</b></span>
              </div>
            </div>
          </div>

          {/* Floating UI Element - Right (Progress) */}
          <div 
            data-float-card="progress"
            className="hero-metric-card absolute -right-16 lg:-right-32 top-1/2 -mt-24 hidden md:block w-60 h-48 z-20"
          >
            <div className="hero-metric-card-inner flex h-full w-full flex-col justify-between rounded-xl border border-gray-100 bg-white/95 backdrop-blur-md p-5 shadow-2xl">
              <div className="mb-2 text-sm font-bold text-black">Progress</div>
              <div className="flex flex-1 items-center justify-center gap-6">
                <div className="h-16 w-16 rounded-full border-[5px] border-gray-100 border-l-[#8c181b] border-b-[#8c181b] flex items-center justify-center">
                  <span className="text-xs font-bold text-black">70%</span>
                </div>
                <div className="flex flex-col gap-2 text-xs text-black font-medium">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gray-300"></span> Left
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#8c181b]"></span> Complete
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
