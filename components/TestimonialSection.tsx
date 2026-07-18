"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "UnityAlgo gave us one place to track orders, billing, and stock without adding another disconnected tool.",
    name: "Henry D. Suza",
    role: "Founder & CEO at HBAC",
    image: "/testimonial.png"
  },
  {
    quote: "The multi-tenant setup shortened deployment across client environments and kept our support team in control.",
    name: "Amara Patel",
    role: "CTO at Northline Cloud",
    image: "/testimonial_1.png"
  },
  {
    quote: "Finance, sales, and service teams finally work from the same records. That changed our weekly operations meetings.",
    name: "Michael Chen",
    role: "Director of Operations at Kairo Works",
    image: "/testimonial_1.png"
  }
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="testimonial-section relative w-full overflow-hidden py-24" data-reveal>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Portrait */}
          <div data-parallax="media" className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-[2rem] overflow-hidden shadow-2xl">
            {/* Placeholder - to be replaced by actual image */}
            <div className="absolute inset-0 bg-gray-300">
              <Image 
                key={current.image}
                src={current.image} 
                alt="Testimonial Portrait" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover animate-in fade-in duration-500"
              />
            </div>
          </div>

          {/* Right: Testimonial Text */}
          <div className="flex flex-col min-h-[400px] justify-center">
            <Quote className="testimonial-quote-icon h-16 w-16 mb-8" />
            
            {/* Wrapper for animation keying */}
            <div key={currentIndex} className="animate-in slide-in-from-right-4 fade-in duration-500 fill-mode-both">
              <h3 className="text-3xl sm:text-4xl font-semibold leading-snug mb-10">
                &ldquo;{current.quote}&rdquo;
              </h3>

              <div className="mb-10">
                <p className="font-bold text-lg">{current.name}</p>
                <p>{current.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={prevTestimonial}
                className="testimonial-nav-button p-2 rounded-full border border-white/30 hover:bg-white hover:text-[#8c181b] transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="testimonial-nav-button p-2 rounded-full border border-white/30 hover:bg-white hover:text-[#8c181b] transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
