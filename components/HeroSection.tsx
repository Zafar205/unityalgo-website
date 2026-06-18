import Image from "next/image";
import React from "react";

export function HeroSection() {
  return (
    <section id="home" className="relative">
      {/* Background Vertical Lines with Droplets (Faded out before the image) */}
      <div 
        className="absolute inset-x-0 top-0 h-[80vh] z-0 flex justify-evenly pointer-events-none"
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
                animation: `drop ${4 + (i % 4) + (i % 2) * 0.5}s linear infinite`,
                animationDelay: `${i * 0.7}s`,
                opacity: 0,
              }}
            />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 mx-auto max-w-4xl px-4 pt-10 text-center">
        
        {/* Social Proof Pill */}
        <div className="mx-auto mb-8 flex max-w-fit items-center gap-3 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
          <div className="flex -space-x-2">
            <Image 
              src="/first.avif" 
              alt="Enterprise Client 1" 
              width={24} 
              height={24} 
              className="h-6 w-6 rounded-full border-2 border-white object-cover bg-gray-100" 
            />
            <Image 
              src="/second.avif" 
              alt="Enterprise Client 2" 
              width={24} 
              height={24} 
              className="h-6 w-6 rounded-full border-2 border-white object-cover bg-gray-100" 
            />
            <Image 
              src="/third.avif" 
              alt="Enterprise Client 3" 
              width={24} 
              height={24} 
              className="h-6 w-6 rounded-full border-2 border-white object-cover bg-gray-100" 
            />
          </div>
          <span className="text-xs font-medium text-black pr-2">
            Trusted by enterprise clients
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-black mb-6 leading-tight">
          The only {" "}
          <span className="relative inline-block border-2 border-[#8c181b] text-[#8c181b] px-3 py-1 mt-2">
            ERP
            <span className="absolute -left-1.5 -top-1.5 h-2.5 w-2.5 border border-[#8c181b] bg-white" />
            <span className="absolute -right-1.5 -top-1.5 h-2.5 w-2.5 border border-[#8c181b] bg-white" />
            <span className="absolute -bottom-1.5 -left-1.5 h-2.5 w-2.5 border border-[#8c181b] bg-white" />
            <span className="absolute -bottom-1.5 -right-1.5 h-2.5 w-2.5 border border-[#8c181b] bg-white" />
          </span>
            you'll ever need
        </h1>

        {/* Subheadline */}
        <p className="mx-auto max-w-2xl text-lg text-black font-medium leading-relaxed mb-10">
          Streamline your business operations with intelligent automation. 
          UnityAlgo brings AI-driven insights to manage expenses, purchases, sales, accounting, inventory, and more.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-lg bg-[#8c181b] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#8c181b]/30 transition-all hover:bg-[#701315] hover:-translate-y-0.5">
            Start Free Trial
          </button>
          <button className="rounded-lg border border-gray-200 bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-sm transition-all hover:bg-gray-50 hover:-translate-y-0.5">
            Contact Us
          </button>
        </div>
      </div>

      {/* Hero Image Section with Background */}
      <div className="relative mx-auto mt-12 w-full max-w-7xl px-4 pb-16">
        
        {/* Background Gradient Image */}
        <div className="absolute left-1/2 -top-64 z-0 h-[800px] w-[100vw] -translate-x-1/2 pointer-events-none">
          <Image
            src="/hero_gradient.png"
            alt="Hero Background Gradient"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Image Container */}
        <div className="relative z-10 mx-auto max-w-5xl rounded-2xl border border-gray-200/60 bg-white/50 p-2 shadow-2xl backdrop-blur-sm mt-20">
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
            className="absolute -left-16 lg:-left-32 top-1/2 -mt-24 hidden md:flex flex-col justify-between w-60 h-48 rounded-xl border border-gray-100 bg-white/95 backdrop-blur-md p-5 shadow-2xl z-20"
            style={{ animation: 'float-large 10s ease-in-out infinite' }}
          >
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

          {/* Floating UI Element - Right (Progress) */}
          <div 
            className="absolute -right-16 lg:-right-32 top-1/2 -mt-24 hidden md:flex flex-col justify-between w-60 h-48 rounded-xl border border-gray-100 bg-white/95 backdrop-blur-md p-5 shadow-2xl z-20"
            style={{ animation: 'float-large-delayed 10s ease-in-out infinite' }}
          >
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
    </section>
  );
}
