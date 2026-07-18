import React from "react";
import { ArchitectureFlow } from "./ArchitectureFlow";

export function AboutSection() {
  return (
    <section id="about" className="relative z-20 mx-auto max-w-7xl px-6 py-16 lg:px-8" data-reveal>
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-kicker">Next-generation enterprise AI</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black leading-[1.15]">
          The UnityAlgo AI Operating Core Is Here
        </h2>
        <p className="mx-auto mt-6 text-lg text-gray-600 leading-relaxed">
          Connect finance, stock, purchasing, sales, HR, and support into one governed ERP layer that automates work without hiding the business logic.
        </p>
      </div>

      <div data-parallax="panel" className="architecture-board architecture-flow-board mt-16">
        <ArchitectureFlow />
      </div>

      <div className="architecture-proof-grid mt-12">
        <div>
          <strong>2.5x</strong>
          <span>Faster implementation cycles</span>
        </div>
        <div>
          <strong>No per-user fee</strong>
          <span>Costs scale with hosting, not seat count</span>
        </div>
        <div>
          <strong>Open workflows</strong>
          <span>Customize process logic without starting over</span>
        </div>
      </div>
    </section>
  );
}
