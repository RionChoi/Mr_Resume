/*
 * CaseStudySection — Swiss International Style
 * THE MAIN FEATURE: Legacy-to-React SPA migration case study
 * European employers love: Problem → Analysis → Solution → Result format
 * Detailed, specific, with metrics and technical decisions
 */

import { useEffect, useRef, useState } from "react";

const CASE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663509717094/YA5pfxp2kKZuuAiquifc3V/case-study-legacy-GpWUTnGBeZgFkVoDfuRVMy.webp";

const phases = [
  {
    num: "01",
    title: "Legacy Code Archaeology",
    duration: "3 weeks",
    tasks: [
      "Mapped all 47 HTML pages and their interdependencies",
      "Identified 12 distinct jQuery plugins with overlapping functionality",
      "Documented all server-side data endpoints (PHP/MySQL)",
      "Catalogued 3,200+ lines of inline CSS across templates",
      "Reverse-engineered business logic from spaghetti code",
    ],
    tools: ["Chrome DevTools", "Regex analysis", "Dependency mapping", "Git blame"],
    outcome: "Complete architectural blueprint of the legacy system",
  },
  {
    num: "02",
    title: "Architecture Design",
    duration: "1 week",
    tasks: [
      "Defined React component hierarchy based on legacy page structure",
      "Chose React Router v6 for client-side routing (replaces server-side PHP routing)",
      "Selected Zustand for state management (lightweight vs. Redux overhead)",
      "Designed API contract between React frontend and legacy PHP backend",
      "Planned phased migration to minimize downtime",
    ],
    tools: ["React", "React Router v6", "Zustand", "Vite", "TypeScript"],
    outcome: "Approved architecture document with team consensus",
  },
  {
    num: "03",
    title: "Component Development",
    duration: "8 weeks",
    tasks: [
      "Built 34 reusable React components from scratch",
      "Migrated all jQuery DOM manipulation to React state/refs",
      "Converted PHP template variables to React props/context",
      "Implemented lazy loading for route-based code splitting",
      "Wrote unit tests for all business-critical components",
    ],
    tools: ["React 18", "TypeScript", "Tailwind CSS", "Vitest", "React Testing Library"],
    outcome: "100% feature parity with legacy system",
  },
  {
    num: "04",
    title: "Performance Optimization",
    duration: "2 weeks",
    tasks: [
      "Reduced initial bundle size from 2.4MB to 380KB (gzipped)",
      "Implemented React.memo and useMemo for expensive renders",
      "Added service worker for offline capability",
      "Optimized images with WebP conversion and lazy loading",
      "Achieved Lighthouse score: 94 Performance / 98 Accessibility",
    ],
    tools: ["Webpack Bundle Analyzer", "Lighthouse", "Chrome Performance", "Workbox"],
    outcome: "4.2x faster page load vs. legacy system",
  },
];

const metrics = [
  { label: "Page Load Time", before: "8.4s", after: "2.0s", improvement: "76% faster" },
  { label: "Bundle Size", before: "2.4 MB", after: "380 KB", improvement: "84% smaller" },
  { label: "Lighthouse Score", before: "42", after: "94", improvement: "+52 points" },
  { label: "Code Lines", before: "18,400", after: "6,200", improvement: "66% reduced" },
];

const techDecisions = [
  {
    decision: "Zustand over Redux",
    rationale:
      "The legacy app had minimal global state. Redux's boilerplate would have added complexity without benefit. Zustand provided the same patterns with 80% less code.",
    tradeoff: "Less ecosystem tooling, but sufficient for project scale.",
  },
  {
    decision: "Vite over CRA",
    rationale:
      "Legacy build process took 4+ minutes. Vite's ESM-based dev server reduced this to under 300ms HMR. Critical for developer productivity during the long migration.",
    tradeoff: "Required custom plugin configuration for legacy asset handling.",
  },
  {
    decision: "Incremental Migration",
    rationale:
      "Rather than a big-bang rewrite, I migrated one page group at a time. This allowed the legacy PHP backend to remain live while the React frontend was developed.",
    tradeoff: "Required maintaining two codebases for 3 months, but eliminated downtime risk.",
  },
];

export default function CaseStudySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08 }
    );
    const els = sectionRef.current?.querySelectorAll(".fade-up");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="case-study" ref={sectionRef} className="py-32 bg-[oklch(0.98_0.001_285)] relative overflow-hidden">
      {/* Background number */}
      <div
        className="absolute top-8 right-0 select-none pointer-events-none"
        style={{
          fontSize: "clamp(6rem, 18vw, 16rem)",
          color: "oklch(0.94 0.002 285)",
          lineHeight: 0.9,
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          right: "-0.05em",
          letterSpacing: "-0.05em",
        }}
        aria-hidden="true"
      >
        03
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6 fade-up">
          <span className="accent-line" />
          <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-[oklch(0.52_0.22_25)]">
            Featured Case Study
          </span>
          <div className="flex-1 h-px bg-[oklch(0.88_0.003_285)]" />
        </div>

        <div className="mb-16 fade-up" style={{ transitionDelay: "0.05s" }}>
          <h2
            className="text-4xl md:text-5xl font-bold text-[oklch(0.12_0.005_285)] leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Legacy Website → React SPA
            <br />
            <em style={{ fontStyle: "italic", color: "oklch(0.52_0.22_25)" }}>Full Migration</em>
          </h2>
          <p
            className="text-base text-[oklch(0.45_0.008_285)] max-w-2xl leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            A complete analysis and reconstruction of a legacy multi-page PHP/jQuery website
            into a modern, performant React Single-Page Application — without losing a single
            feature or business logic rule.
          </p>
        </div>

        {/* Project overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Image */}
          <div className="fade-up">
            <img
              src={CASE_IMG}
              alt="Legacy Code to React SPA Migration Diagram"
              className="w-full h-auto object-cover border border-[oklch(0.88_0.003_285)]"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>

          {/* Problem statement */}
          <div className="fade-up" style={{ transitionDelay: "0.1s" }}>
            <div className="h-full border border-[oklch(0.88_0.003_285)] p-8 bg-white">
              <h3
                className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-[oklch(0.52_0.22_25)] mb-4"
              >
                The Problem
              </h3>
              <p
                className="text-base text-[oklch(0.25_0.005_285)] leading-relaxed mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                The client had a 5-year-old PHP website with no version control, 47 separate HTML
                pages, and a jQuery codebase that had grown organically without architecture.
                Page load times averaged <strong>8.4 seconds</strong>. Mobile experience was
                broken on 60% of devices.
              </p>
              <div className="space-y-3">
                {[
                  "No component reusability — every page duplicated navigation",
                  "jQuery version conflicts causing silent failures",
                  "No build process — all assets served unminified",
                  "Zero test coverage across 18,000+ lines of code",
                  "Business logic mixed with presentation in PHP templates",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="5" stroke="oklch(0.52 0.22 25)" strokeWidth="1.5"/>
                        <path d="M4 6l1.5 1.5L8 4" stroke="oklch(0.52 0.22 25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span
                      className="text-sm text-[oklch(0.45_0.008_285)]"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Migration Phases */}
        <div className="mb-20 fade-up" style={{ transitionDelay: "0.15s" }}>
          <h3
            className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-[oklch(0.52_0.22_25)] mb-8"
          >
            Migration Process — 14 Weeks Total
          </h3>

          {/* Phase tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {phases.map((phase, i) => (
              <button
                key={phase.num}
                onClick={() => setActivePhase(i)}
                className={`px-4 py-2 text-sm font-mono transition-all duration-200 ${
                  activePhase === i
                    ? "bg-[oklch(0.12_0.005_285)] text-white"
                    : "border border-[oklch(0.88_0.003_285)] text-[oklch(0.55_0.01_285)] hover:border-[oklch(0.52_0.22_25)] hover:text-[oklch(0.52_0.22_25)]"
                }`}
              >
                Phase {phase.num}
              </button>
            ))}
          </div>

          {/* Active phase detail */}
          <div className="border border-[oklch(0.88_0.003_285)] bg-white">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-0">
              <div className="p-8 border-b md:border-b-0 md:border-r border-[oklch(0.88_0.003_285)]">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest">
                      Phase {phases[activePhase].num}
                    </span>
                    <h4
                      className="text-xl font-bold text-[oklch(0.12_0.005_285)] mt-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {phases[activePhase].title}
                    </h4>
                  </div>
                  <span className="text-xs font-mono bg-[oklch(0.96_0.002_285)] px-3 py-1 text-[oklch(0.45_0.008_285)]">
                    {phases[activePhase].duration}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {phases[activePhase].tasks.map((task) => (
                    <li key={task} className="flex items-start gap-3">
                      <span className="text-[oklch(0.52_0.22_25)] mt-1 flex-shrink-0">→</span>
                      <span
                        className="text-sm text-[oklch(0.35_0.005_285)]"
                        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                      >
                        {task}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[oklch(0.92_0.002_285)]">
                  <p className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest uppercase mb-2">
                    Outcome
                  </p>
                  <p
                    className="text-sm font-medium text-[oklch(0.25_0.005_285)]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {phases[activePhase].outcome}
                  </p>
                </div>
              </div>

              <div className="p-8 min-w-[200px]">
                <p className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest uppercase mb-4">
                  Tools Used
                </p>
                <div className="flex flex-col gap-2">
                  {phases[activePhase].tools.map((tool) => (
                    <span key={tool} className="skill-tag text-center">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results / Metrics */}
        <div className="mb-20 fade-up" style={{ transitionDelay: "0.2s" }}>
          <h3
            className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-[oklch(0.52_0.22_25)] mb-8"
          >
            Measured Results
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[oklch(0.88_0.003_285)] border border-[oklch(0.88_0.003_285)]">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white p-6">
                <p
                  className="text-xs font-mono text-[oklch(0.55_0.01_285)] tracking-widest uppercase mb-4"
                >
                  {m.label}
                </p>
                <div className="flex items-end gap-3 mb-2">
                  <div>
                    <p className="text-xs text-[oklch(0.65_0.01_285)] mb-1">Before</p>
                    <p
                      className="text-lg font-mono text-[oklch(0.65_0.01_285)] line-through"
                    >
                      {m.before}
                    </p>
                  </div>
                  <span className="text-[oklch(0.52_0.22_25)] mb-1">→</span>
                  <div>
                    <p className="text-xs text-[oklch(0.65_0.01_285)] mb-1">After</p>
                    <p
                      className="text-lg font-mono font-bold text-[oklch(0.12_0.005_285)]"
                    >
                      {m.after}
                    </p>
                  </div>
                </div>
                <span className="inline-block text-xs font-mono bg-[oklch(0.52_0.22_25)] text-white px-2 py-0.5">
                  {m.improvement}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Decisions */}
        <div className="fade-up" style={{ transitionDelay: "0.25s" }}>
          <h3
            className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-[oklch(0.52_0.22_25)] mb-8"
          >
            Key Technical Decisions & Rationale
          </h3>
          <div className="space-y-4">
            {techDecisions.map((td, i) => (
              <div
                key={td.decision}
                className="border border-[oklch(0.88_0.003_285)] bg-white"
              >
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-0">
                  <div className="p-6 border-b md:border-b-0 md:border-r border-[oklch(0.88_0.003_285)] flex items-center">
                    <span
                      className="text-3xl font-bold text-[oklch(0.92_0.002_285)]"
                      style={{ fontFamily: "'Playfair Display', serif", minWidth: "2rem" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-6 border-b md:border-b-0 md:border-r border-[oklch(0.88_0.003_285)]">
                    <p className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest uppercase mb-2">
                      Decision
                    </p>
                    <h4
                      className="text-base font-bold text-[oklch(0.12_0.005_285)] mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {td.decision}
                    </h4>
                    <p
                      className="text-sm text-[oklch(0.45_0.008_285)] leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                    >
                      {td.rationale}
                    </p>
                  </div>
                  <div className="p-6 bg-[oklch(0.98_0.001_285)]">
                    <p className="text-xs font-mono text-[oklch(0.55_0.01_285)] tracking-widest uppercase mb-2">
                      Trade-off Acknowledged
                    </p>
                    <p
                      className="text-sm text-[oklch(0.45_0.008_285)] leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                    >
                      {td.tradeoff}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
