"use client";

/*
 * AboutSection — Swiss International Style
 * Asymmetric 2-column: left label column (sticky) + right content
 * Personal philosophy + key values + availability
 */

import { useEffect, useRef } from "react";

const values = [
  {
    title: "Code Archaeology",
    desc: "I read legacy codebases the way historians read ancient texts — finding the original intent beneath years of accumulated workarounds.",
  },
  {
    title: "Incremental Modernization",
    desc: "I believe in surgical refactoring over big-bang rewrites. Each migration phase delivers working software while reducing technical debt.",
  },
  {
    title: "Documentation-First",
    desc: "Every architectural decision I make is documented with rationale. Future developers (including myself) deserve to understand the 'why'.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".fade-up");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background number */}
      <div
        className="absolute top-8 left-0 section-number select-none pointer-events-none"
        style={{
          fontSize: "clamp(6rem, 18vw, 16rem)",
          color: "oklch(0.96 0.002 285)",
          lineHeight: 0.9,
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          left: "-0.05em",
          letterSpacing: "-0.05em",
        }}
        aria-hidden="true"
      >
        02
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16 fade-up">
          <span className="accent-line" />
          <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-[oklch(0.52_0.22_25)]">
            About
          </span>
          <div className="flex-1 h-px bg-[oklch(0.88_0.003_285)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">
          {/* Left: Sticky label column */}
          <div className="lg:sticky lg:top-24 lg:self-start fade-up">
            <h2
              className="text-4xl font-bold text-[oklch(0.12_0.005_285)] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Who I Am
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest uppercase mb-1">
                  Location
                </p>
                <p className="text-sm text-[oklch(0.35_0.005_285)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Seoul, South Korea
                </p>
              </div>
              <div>
                <p className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest uppercase mb-1">
                  Availability
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-sm text-[oklch(0.35_0.005_285)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Open to Remote (EU)
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest uppercase mb-1">
                  Languages
                </p>
                <p className="text-sm text-[oklch(0.35_0.005_285)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Korean (Native) · English (Professional)
                </p>
              </div>
              <div>
                <p className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest uppercase mb-1">
                  Focus
                </p>
                <p className="text-sm text-[oklch(0.35_0.005_285)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  React · TypeScript · Legacy Migration
                </p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-10">
            <div className="fade-up">
              <p
                className="text-2xl font-light text-[oklch(0.20_0.005_285)] leading-relaxed mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                I'm a full-stack web developer with a particular expertise in{" "}
                <strong className="font-semibold">legacy system analysis and modern React migration</strong>.
                My most significant project involved reverse-engineering an entire legacy website from its
                source code and rebuilding it as a production-grade SPA.
              </p>
              <p
                className="text-base text-[oklch(0.45_0.008_285)] leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                What sets me apart is my ability to read and understand existing codebases — not just write
                new ones. I approach legacy systems with curiosity rather than frustration, finding the
                business logic embedded in years of accumulated code and preserving it while modernizing
                the architecture.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6 fade-up" style={{ transitionDelay: "0.1s" }}>
              <h3
                className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-[oklch(0.52_0.22_25)]"
              >
                Development Philosophy
              </h3>
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="grid grid-cols-[auto_1fr] gap-6 pb-6 border-b border-[oklch(0.92_0.002_285)] last:border-0"
                >
                  <span
                    className="text-xs font-mono text-[oklch(0.75_0.01_285)] pt-1 w-6"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4
                      className="text-base font-semibold text-[oklch(0.12_0.005_285)] mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {v.title}
                    </h4>
                    <p
                      className="text-sm text-[oklch(0.45_0.008_285)] leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                    >
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
