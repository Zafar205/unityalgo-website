"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { sendNewsletterEmail } from "@/app/actions/sendEmail";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
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

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const footer = footerRef.current;

    if (!footer) {
      return;
    }

    const watermark = footer.querySelector<HTMLElement>(".footer-watermark");

    if (!watermark) {
      return;
    }

    const rect = watermark.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const isInsideWatermark = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;

    footer.style.setProperty("--footer-spotlight-x", `${x}px`);
    footer.style.setProperty("--footer-spotlight-y", `${y}px`);
    footer.style.setProperty("--footer-spotlight-opacity", isInsideWatermark ? "1" : "0");
  };

  const handlePointerLeave = () => {
    footerRef.current?.style.setProperty("--footer-spotlight-opacity", "0");
  };

  return (
    <footer
      ref={footerRef}
      className="footer-section relative bg-[#181413] text-white overflow-hidden py-12 sm:py-14"
      data-reveal
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <a href="#home" className="footer-brand" aria-label="UnityAlgo home">
              <Image
                src="/logo.png"
                alt=""
                width={42}
                height={42}
                className="object-contain"
              />
              <span>UnityAlgo</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              AI-ready ERP infrastructure for accounting, inventory, approvals, sales, and operational reporting.
            </p>

            <div className="mt-7 max-w-md">
              <h4 className="mb-3 text-sm font-semibold">Subscribe to product notes</h4>
              <form onSubmit={handleSubscribe}>
                <div className="footer-subscribe">
                  <input 
                    name="email"
                    type="email" 
                    required
                    placeholder="Email" 
                    className="w-full rounded-full border-none bg-transparent px-5 py-3 pr-12 text-sm text-white placeholder-white/38 focus:outline-none"
                  />
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="absolute right-1.5 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-white transition-colors disabled:opacity-50 disabled:hover:text-white"
                    aria-label="Subscribe"
                  >
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <ArrowRight className="w-5 h-5" />}
                  </button>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-white/52">
                  <input required type="checkbox" id="privacy" className="cursor-pointer rounded border-white/30 bg-transparent text-white focus:ring-white" />
                  <label htmlFor="privacy" className="cursor-pointer">I agree to the Privacy Policy</label>
                </div>
                {error && <p className="text-red-300 text-sm font-medium mt-3">{error}</p>}
                {success && <p className="text-green-300 text-sm font-medium mt-3">Thanks for subscribing!</p>}
              </form>
            </div>
          </div>

          <div className="footer-links lg:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4>Main Pages</h4>
              <ul>
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul>
                <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#license" className="hover:text-white transition-colors">License</a></li>
              </ul>
            </div>
            <div>
              <h4>Socials</h4>
              <ul>
                <li><a href="#facebook" className="hover:text-white transition-colors uppercase">Facebook</a></li>
                <li><a href="#instagram" className="hover:text-white transition-colors uppercase">Instagram</a></li>
                <li><a href="#linkedin" className="hover:text-white transition-colors uppercase">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-watermark" aria-hidden="true">
          <span className="footer-watermark-base">UNITYALGO</span>
          <span className="footer-watermark-highlight">UNITYALGO</span>
        </div>

        <div className="footer-bottom">
          <p>© 2026 UnityAlgo. All rights reserved.</p>
          <span>All services are online</span>
        </div>
      </div>
    </footer>
  );
}
