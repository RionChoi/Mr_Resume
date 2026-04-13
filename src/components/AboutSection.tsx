"use client";

/*
 * AboutSection — Swiss International Style
 * Asymmetric 2-column: left label column (sticky) + right content
 * Personal philosophy + key values + availability
 */

import { useEffect, useRef } from "react";

const values = [
  {
    title: "Architecture-Driven Thinking",
    desc: "I approach every project by understanding the system as a whole first — analyzing AS-IS architecture, identifying bottlenecks, and designing TO-BE solutions that scale. My MSA transformation of IBK BOX exemplifies this methodology.",
  },
  {
    title: "Full-Stack Ownership",
    desc: "From React frontend to Spring Boot backend, from database optimization to CI/CD pipeline setup — I take end-to-end responsibility. This holistic view enables me to make better architectural decisions at every layer.",
  },
  {
    title: "Performance as a Feature",
    desc: "I treat performance optimization as a core deliverable, not an afterthought. Using monitoring tools like Jennifer APM, I identify bottlenecks through data — reducing IBK BOX login time from 20s to 5s through systematic analysis.",
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
                  Java · Spring Boot · React · MSA
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
                I'm a senior full-stack developer with 10+ years of experience building{" "}
                <strong className="font-semibold">enterprise platforms for Korean financial institutions and public sector</strong>.
                My most impactful project was transforming IBK Industrial Bank's investment platform
                from monolithic architecture to microservices, achieving 70% login speed improvement.
              </p>
              <p
                className="text-base text-[oklch(0.45_0.008_285)] leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                What sets me apart is my ability to bridge the gap between legacy enterprise systems
                and modern architecture. With deep expertise in both Java/Spring Boot backend and React
                frontend, I deliver end-to-end solutions — from MSA architecture design and API development
                to responsive UI implementation and CI/CD pipeline automation.
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
