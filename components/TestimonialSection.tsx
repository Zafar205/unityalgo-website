"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "UnityAlgo exceeded expectations. Sleek design, easy to customize, and packed with powerful features that elevated our business efficiency and user experience!",
    name: "Henry D. Suza",
    role: "Founder & CEO at HBAC",
    image: "/testimonial.png"
  },
  {
    quote: "The multitenancy feature saved us months of development. It is robust, secure, and incredibly easy to deploy across all of our client environments.",
    name: "Sarah Jenkins",
    role: "CTO at TechCloud",
    image: "/testimonial_1.png" // Can be changed later
  },
  {
    quote: "From customer management to sales pipelines, everything is beautifully integrated. The UI is stunning and the performance is unmatched in the industry.",
    name: "Michael Chen",
    role: "Director of Operations at Innovate",
    image: "/testimonial_portrait.png" // Can be changed later
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
    <section className="relative w-full bg-[#8c181b] overflow-hidden py-24">
      {/* Wave Background Graphic */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,213.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Portrait */}
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-[2rem] overflow-hidden shadow-2xl">
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
          <div className="flex flex-col text-white min-h-[400px] justify-center">
            <Quote className="h-16 w-16 text-white/20 mb-8" />
            
            {/* Wrapper for animation keying */}
            <div key={currentIndex} className="animate-in slide-in-from-right-4 fade-in duration-500 fill-mode-both">
              <h3 className="text-3xl sm:text-4xl font-semibold leading-snug mb-10">
                "{current.quote}"
              </h3>

              <div className="mb-10">
                <p className="font-bold text-lg">{current.name}</p>
                <p className="text-white/70">{current.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-white/30 hover:bg-white hover:text-[#8c181b] transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-white/30 hover:bg-white hover:text-[#8c181b] transition-colors"
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
