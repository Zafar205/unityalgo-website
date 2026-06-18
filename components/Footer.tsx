"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Loader2 } from "lucide-react";
import { sendNewsletterEmail } from "@/app/actions/sendEmail";

export function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const result = await sendNewsletterEmail(formData);

    if (result.success) {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSuccess(false), 5000); // Clear success message after 5 seconds
    } else {
      setError(result.error || "Failed to subscribe. Please try again.");
    }
    
    setIsSubmitting(false);
  };

  return (
    <footer className="relative bg-[#8c181b] text-white overflow-hidden pt-24 pb-12">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Top Row */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
          
          {/* Subscribe Col */}
          <div className="lg:col-span-5 space-y-8">

            
            <div>
              <h4 className="text-lg font-semibold mb-4">Subscribe For Our Newsletter</h4>
              <form onSubmit={handleSubscribe}>
                <div className="relative max-w-md">
                  <input 
                    name="email"
                    type="email" 
                    required
                    placeholder="Email" 
                    className="w-full bg-black border-none rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400"
                  />
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-300 hover:text-white disabled:opacity-50 disabled:hover:text-gray-300 transition-colors"
                  >
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <ArrowRight className="w-5 h-5" />}
                  </button>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-300">
                  <input required type="checkbox" id="privacy" className="rounded border-gray-400 bg-transparent text-white focus:ring-white cursor-pointer" />
                  <label htmlFor="privacy" className="cursor-pointer">I agree to the Privacy Policy</label>
                </div>
                {error && <p className="text-red-300 text-sm font-medium mt-3">{error}</p>}
                {success && <p className="text-green-300 text-sm font-medium mt-3">Thanks for subscribing!</p>}
              </form>
            </div>
          </div>

          {/* Links Cols */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-300">Main Pages</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-300">Utility Pages</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">404 Error Page</a></li>
                <li><a href="#" className="hover:text-white transition-colors">License page</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Style Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-300">Socials</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors uppercase">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors uppercase">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors uppercase">LinkedIn</a></li>
              </ul>
            </div>
          </div>

        </div>

      </div>

      {/* Huge Watermark Text */}
      <div className="absolute bottom-0 left-0 right-0 z-0 flex items-end justify-center overflow-hidden h-[300px] pointer-events-none">
        <h1 className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/[0.05] to-transparent leading-none select-none relative z-10">
          UNITYALGO
        </h1>
        {/* Simple gradient bottom representing the staggered bars pattern */}
        <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-black to-transparent opacity-80" />
      </div>
    </footer>
  );
}
