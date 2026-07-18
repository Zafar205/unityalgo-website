"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, Loader2 } from "lucide-react";
import { sendContactEmail } from "@/app/actions/sendEmail";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const result = await sendContactEmail(formData);

    if (result.success) {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSuccess(false), 5000); // Clear success message after 5 seconds
    } else {
      setError(result.error || "Failed to send message. Please try again.");
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact-section relative mx-auto max-w-7xl px-6 py-24 lg:px-8 bg-white z-20" data-reveal>
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="section-kicker">Contact</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
          Talk through your ERP rollout
        </h2>
        <p className="mx-auto mt-6 text-lg text-gray-600 leading-relaxed">
          Share your workflow, modules, and deployment requirements. We will map the next practical step.
        </p>
      </div>

      <div data-parallax="panel" className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-[2rem] border border-gray-100 shadow-xl max-w-5xl mx-auto">
        
        {/* Left: Image & Info */}
        <div className="relative aspect-square lg:aspect-auto w-full bg-[#8c181b]">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#8c181b]/80 z-10 mix-blend-multiply" />
            <Image 
              src="/contact.png" 
              alt="Office" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>
          
          <div className="relative z-20 h-full flex flex-col justify-end p-10 text-white">
            <h3 className="text-2xl font-bold mb-2">Address</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              123 Business Avenue<br />
              Karachi, Pakistan, 1200
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <div className="flex items-center gap-3 text-gray-300 mb-2">
              <Mail className="w-5 h-5" /> info@unityalgo.com
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="w-5 h-5" /> +880 123 456 789
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white p-10 lg:p-14 flex flex-col justify-center">
          <h3 className="text-3xl font-extrabold text-black mb-2">Get in Touch</h3>
          <p className="text-gray-500 text-sm mb-10 leading-relaxed">
            Whether you have questions, need support, or want a demo, our team is here to help.
          </p>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-black uppercase tracking-wider">Name</label>
                <input name="name" type="text" required placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#8c181b] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-black uppercase tracking-wider">Email</label>
                <input name="email" type="email" required placeholder="name@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#8c181b] transition-colors" />
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-black uppercase tracking-wider">Company</label>
                <input name="company" type="text" placeholder="Your Company" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#8c181b] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-black uppercase tracking-wider">Phone</label>
                <input name="phone" type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#8c181b] transition-colors" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-black uppercase tracking-wider">Message</label>
              <textarea name="message" required placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#8c181b] transition-colors resize-none"></textarea>
            </div>

            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
            {success && <p className="text-green-600 text-sm font-medium bg-green-50 p-3 rounded-lg">Your message has been sent successfully. We will get back to you soon!</p>}

            <button disabled={isSubmitting} type="submit" className="px-8 py-3 rounded-xl font-bold text-white bg-[#8c181b] hover:bg-[#701315] disabled:opacity-70 disabled:cursor-not-allowed transition-colors shadow-lg shadow-[#8c181b]/30 flex items-center justify-center gap-2">
              {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
