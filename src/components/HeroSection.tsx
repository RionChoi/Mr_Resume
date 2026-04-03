"use client";

/*
 * HeroSection — Swiss International Style
 * Asymmetric layout: large typographic statement left, key stats right
 * Red accent line, section number background, scroll indicator
 */

import { useEffect, useRef } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663509717094/YA5pfxp2kKZuuAiquifc3V/hero-bg-FabyHTdsWTqNWPZZoKubdG.webp";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "1", label: "Full SPA Migration" },
  { value: "12k+", label: "Lines Refactored" },
  { value: "3", label: "EU Projects" },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--mouse-x", `${x * 20}px`);
      el.style.setProperty("--mouse-y", `${y * 20}px`);
    };
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ paddingTop: "4rem" }}
    >
      {/* Background image — subtle */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Large background section number */}
      <div
        className="absolute top-0 right-0 section-number select-none pointer-events-none"
        style={{
          fontSize: "clamp(8rem, 25vw, 22rem)",
          color: "oklch(0.94 0.002 285)",
          lineHeight: 0.9,
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          right: "-0.05em",
          top: "2rem",
          letterSpacing: "-0.05em",
        }}
        aria-hidden="true"
      >
        01
      </div>

      {/* Main content */}
      <div className="container relative z-10 pb-20 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-end">
          {/* Left: Main text */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <span className="accent-line" />
              <span
                className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-[oklch(0.52_0.22_25)]"
              >
                Full-Stack Web Developer
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="text-[clamp(2.8rem,7vw,6rem)] font-bold leading-[1.05] tracking-tight text-[oklch(0.12_0.005_285)] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Turning Legacy
              <br />
              <em className="not-italic text-[oklch(0.52_0.22_25)]">Code</em> into
              <br />
              Modern{" "}
              <span className="relative inline-block">
                React SPA
                <span
                  className="absolute bottom-1 left-0 right-0 h-[3px] bg-[oklch(0.52_0.22_25)]"
                  style={{ bottom: "0.1em" }}
                />
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg text-[oklch(0.45_0.008_285)] max-w-xl leading-relaxed mb-10"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              I specialize in analyzing legacy web systems and rebuilding them as
              high-performance, maintainable Single-Page Applications with React.
              Based in Seoul — open to European remote opportunities.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#case-study"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("case-study")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.12_0.005_285)] text-white text-sm font-medium hover:bg-[oklch(0.52_0.22_25)] transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                View Case Study
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[oklch(0.12_0.005_285)] text-[oklch(0.12_0.005_285)] text-sm font-medium hover:border-[oklch(0.52_0.22_25)] hover:text-[oklch(0.52_0.22_25)] transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-px bg-[oklch(0.88_0.003_285)] border border-[oklch(0.88_0.003_285)]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-6 flex flex-col gap-1"
              >
                <span
                  className="text-3xl font-bold text-[oklch(0.52_0.22_25)]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs text-[oklch(0.55_0.01_285)] leading-tight"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex items-center gap-3 mt-16">
          <div className="flex flex-col gap-1 items-center">
            <div className="w-px h-12 bg-[oklch(0.88_0.003_285)]" />
            <div
              className="w-px h-4 bg-[oklch(0.52_0.22_25)]"
              style={{
                animation: "scrollDot 1.5s ease-in-out infinite",
              }}
            />
          </div>
          <span
            className="text-xs font-mono tracking-widest text-[oklch(0.65_0.01_285)] uppercase"
            style={{ writingMode: "horizontal-tb" }}
          >
            Scroll to explore
          </span>
        </div>
      </div>

      <style>{`
        @keyframes scrollDot {
          0%, 100% { opacity: 0.3; transform: translateY(-8px); }
          50% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
