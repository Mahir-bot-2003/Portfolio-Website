"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const children = el.querySelectorAll("[data-animate]");
    children.forEach((child, i) => {
      setTimeout(() => {
        (child as HTMLElement).style.opacity = "1";
        (child as HTMLElement).style.transform = "translateY(0)";
      }, 200 + i * 150);
    });
  }, []);

  return (
    <section ref={sectionRef} className="hero-section" id="hero">
      <div className="container-wide">
        {/* Main hero typography */}
        <div className="flex flex-col gap-2">
          <div
            data-animate
            style={{
              opacity: 0,
              transform: "translateY(40px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <span className="hero-title">Future</span>
            <span className="hero-title" style={{ marginLeft: "2vw" }}>
              forward
            </span>
          </div>

          <div
            className="flex items-start gap-6 flex-wrap"
            data-animate
            style={{
              opacity: 0,
              transform: "translateY(40px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <span className="hero-title accent-word">creative</span>
            <span className="hero-subtitle" style={{ marginTop: "1.5vw" }}>
              blending machine learning expertise with
              engineering clarity to build systems that
              stand out, move fast, and stay unforgettable.
            </span>
            <span className="hero-title">engineer.</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="hero-bottom">
        <div
          data-animate
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--accent)",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            Based in Jaipur, building globally.
          </p>
        </div>

        <div className="section-number" data-animate style={{
          opacity: 0, transform: "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
          01
        </div>

        <div
          data-animate
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "var(--muted)", textAlign: "right", maxWidth: "280px" }}>
            I Deconstruct, Rebuild, and Engineer Your Ideas
          </p>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="hero-scroll-hint"
        style={{ position: "absolute", bottom: "6rem", right: "2rem" }}
        data-animate
      >
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="1" width="14" height="22" rx="7" />
          <circle cx="8" cy="7" r="2" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
