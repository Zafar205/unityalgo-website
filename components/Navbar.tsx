import Image from "next/image";
import React from "react";

export function Navbar() {
  return (
    <>
      <div className="top-promo-pill">
        <span>Process is All You Need</span>
        <span aria-hidden="true">|</span>
        <a href="#contact">Build your workspace -&gt;</a>
      </div>
      <nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="UnityAlgo Logo" 
            width={40} 
            height={40} 
            className="object-contain"
            priority
          />
          <span className="text-xl font-bold text-black tracking-tight">UnityAlgo</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black">
          <a href="#home" className="hover:text-[#8c181b] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#8c181b] transition-colors">About</a>
          <a href="#services" className="hover:text-[#8c181b] transition-colors">Services</a>
          <a href="#pricing" className="hover:text-[#8c181b] transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-[#8c181b] transition-colors">FAQ</a>
        </div>

        <a href="#contact" className="rounded-lg bg-[#111827] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-black">
          Contact Now
        </a>
      </nav>
    </>
  );
}
