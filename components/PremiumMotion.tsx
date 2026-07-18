"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function PremiumMotion({ children }: { children: React.ReactNode }) {
  const scopeRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = scopeRef.current;

      if (!root) {
        return;
      }

      const q = gsap.utils.selector(root);
      root.classList.add("gsap-motion-ready");

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions as {
            isDesktop: boolean;
            reduceMotion: boolean;
          };

          if (reduceMotion) {
            gsap.set(q("[data-reveal], [data-parallax]"), { clearProps: "all" });
            return;
          }

          gsap.defaults({ ease: "power3.out" });

          const hero = q("#home")[0];
          const heroContent = q(".hero-content")[0];
          const heroGradient = q(".hero-gradient-field")[0];
          const heroDashboard = q(".hero-dashboard-frame")[0];
          const marqueeTrack = q(".capability-marquee-track")[0];
          const promptWords = q(".hero-prompt-word");
          const heroMetricShells = q(".hero-metric-card");
          const heroMetricCards = q(".hero-metric-card-inner");
          const overviewCard = q("[data-float-card='overview']")[0];
          const progressCard = q("[data-float-card='progress']")[0];
          const overviewCardInner = q("[data-float-card='overview'] .hero-metric-card-inner")[0];
          const progressCardInner = q("[data-float-card='progress'] .hero-metric-card-inner")[0];

          if (hero) {
            gsap
              .timeline({
                defaults: { duration: 0.95, ease: "power4.out" },
              })
              .set(promptWords, {
                autoAlpha: 0,
                y: 14,
                filter: "blur(6px)",
              })
              .from(q(".hero-content > *"), {
                autoAlpha: 0,
                y: 36,
                filter: "blur(10px)",
                stagger: 0.08,
                clearProps: "filter,visibility",
              })
              .to(
                promptWords,
                {
                  autoAlpha: 1,
                  y: 0,
                  filter: "blur(0px)",
                  duration: 0.72,
                  ease: "power2.out",
                  stagger: 0.12,
                  clearProps: "visibility",
                },
                "-=0.12"
              )
              .from(
                heroDashboard,
                {
                  autoAlpha: 0,
                  y: 72,
                  scale: 0.965,
                  filter: "blur(14px)",
                  clearProps: "filter,visibility",
                },
                "-=1.25"
              )
              .from(
                heroMetricCards,
                {
                  autoAlpha: 0,
                  y: 28,
                  scale: 0.94,
                  stagger: 0.1,
                  clearProps: "visibility",
                },
                "-=0.42"
              );

            if (marqueeTrack) {
              gsap.to(marqueeTrack, {
                xPercent: -50,
                duration: isDesktop ? 34 : 26,
                ease: "none",
                repeat: -1,
              });
            }

            if (heroGradient) {
              gsap.to(heroGradient, {
                yPercent: isDesktop ? 18 : 9,
                scale: isDesktop ? 1.08 : 1.03,
                ease: "none",
                scrollTrigger: {
                  trigger: hero,
                  start: "top top",
                  end: "bottom top",
                  scrub: 1.1,
                },
              });
            }

            if (heroContent) {
              gsap.to(heroContent, {
                yPercent: isDesktop ? -8 : -4,
                autoAlpha: isDesktop ? 0.78 : 0.9,
                ease: "none",
                scrollTrigger: {
                  trigger: hero,
                  start: "top top",
                  end: "75% top",
                  scrub: 1,
                },
              });
            }

            gsap.set(heroMetricShells, {
              transformOrigin: "50% 50%",
              willChange: "transform",
            });

            gsap.set(heroMetricCards, {
              transformOrigin: "50% 50%",
              willChange: "transform",
            });

            if (overviewCardInner) {
              gsap.fromTo(
                overviewCardInner,
                { y: 0, x: 0, rotation: 0 },
                {
                  y: -20,
                  x: 7,
                  rotation: -1.15,
                  duration: 3.7,
                  repeat: -1,
                  yoyo: true,
                  ease: "sine.inOut",
                  delay: 0.18,
                }
              );
            }

            if (progressCardInner) {
              gsap.fromTo(
                progressCardInner,
                { y: 0, x: 0, rotation: 0 },
                {
                  y: 18,
                  x: -6,
                  rotation: 1,
                  duration: 4.35,
                  repeat: -1,
                  yoyo: true,
                  ease: "sine.inOut",
                  delay: 0.58,
                }
              );
            }

            if (isDesktop) {
              if (overviewCard) {
                gsap.to(overviewCard, {
                  yPercent: -18,
                  xPercent: -4,
                  ease: "none",
                  scrollTrigger: {
                    trigger: hero,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                  },
                });
              }

              if (progressCard) {
                gsap.to(progressCard, {
                  yPercent: -9,
                  xPercent: 4,
                  ease: "none",
                  scrollTrigger: {
                    trigger: hero,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.15,
                  },
                });
              }
            }

            if (heroDashboard) {
              gsap.to(heroDashboard, {
                yPercent: isDesktop ? -9 : -4,
                rotationX: isDesktop ? -1.4 : 0,
                transformPerspective: 1200,
                ease: "none",
                scrollTrigger: {
                  trigger: hero,
                  start: "top top",
                  end: "bottom top",
                  scrub: 1.15,
                },
              });
            }
          }

          ScrollTrigger.batch(q("[data-reveal]"), {
            start: "top 82%",
            once: true,
            interval: 0.08,
            batchMax: isDesktop ? 3 : 1,
            onEnter: (batch) => {
              gsap.fromTo(
                batch,
                { autoAlpha: 0.94, y: 28 },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.85,
                  ease: "power3.out",
                  stagger: 0.08,
                  clearProps: "visibility",
                }
              );
            },
          });

          q("[data-parallax='media'], [data-parallax='panel']").forEach((element) => {
            gsap.to(element, {
              yPercent: element.getAttribute("data-parallax") === "media" ? -7 : -4,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: isDesktop ? 1.2 : 0.7,
              },
            });
          });

          const architectureTargets = q(
            ".flow-node, .architecture-proof-grid > div"
          );

          ScrollTrigger.batch(architectureTargets, {
            start: "top 86%",
            once: true,
            interval: 0.07,
            batchMax: isDesktop ? 6 : 2,
            onEnter: (batch) => {
              gsap.fromTo(
                batch,
                { autoAlpha: 0, y: 18, scale: 0.97 },
                {
                  autoAlpha: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.72,
                  stagger: 0.045,
                  ease: "power3.out",
                  clearProps: "visibility",
                }
              );
            },
          });

          const cardTargets = q(
            ".feature-tabs > div, #services .grid > div, #pricing .grid > div, #faq [class*='cursor-pointer']"
          );

          ScrollTrigger.batch(cardTargets, {
            start: "top 88%",
            once: true,
            interval: 0.08,
            batchMax: isDesktop ? 4 : 2,
            onEnter: (batch) => {
              gsap.fromTo(
                batch,
                { autoAlpha: 0, y: 24, scale: 0.985 },
                {
                  autoAlpha: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.72,
                  stagger: 0.07,
                  ease: "power3.out",
                  clearProps: "visibility",
                }
              );
            },
          });

          const footerWatermark = q("footer h1")[0];

          if (footerWatermark) {
            gsap.to(footerWatermark, {
              yPercent: -18,
              ease: "none",
              scrollTrigger: {
                trigger: footerWatermark,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            });
          }

          const refresh = () => ScrollTrigger.refresh();
          window.addEventListener("load", refresh);
          document.fonts?.ready.then(refresh);

          return () => {
            window.removeEventListener("load", refresh);
          };
        }
      );

      return () => {
        mm.revert();
        root.classList.remove("gsap-motion-ready");
      };
    },
    { scope: scopeRef }
  );

  return (
    <main ref={scopeRef} className="site-shell relative min-h-screen w-full bg-white overflow-hidden font-sans">
      {children}
    </main>
  );
}
