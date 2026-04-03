"use client";

/*
 * SkillsSection — Swiss International Style
 * Categorized skill grid with proficiency indicators
 * Focus on legacy analysis + React ecosystem
 */

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Core Expertise",
    note: "Daily use, production-grade",
    skills: [
      { name: "React 18", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "JavaScript (ES2022+)", level: 5 },
      { name: "HTML5 / CSS3", level: 5 },
      { name: "Legacy Code Analysis", level: 5 },
    ],
  },
  {
    category: "React Ecosystem",
    note: "State, routing, data fetching",
    skills: [
      { name: "React Router v6", level: 5 },
      { name: "Zustand", level: 4 },
      { name: "React Query", level: 4 },
      { name: "Redux Toolkit", level: 4 },
      { name: "Framer Motion", level: 3 },
    ],
  },
  {
    category: "Build & Tooling",
    note: "Modern development workflow",
    skills: [
      { name: "Vite", level: 5 },
      { name: "Webpack", level: 4 },
      { name: "Git / GitHub", level: 5 },
      { name: "ESLint / Prettier", level: 5 },
      { name: "Vitest / Jest", level: 4 },
    ],
  },
  {
    category: "Styling",
    note: "UI implementation",
    skills: [
      { name: "Tailwind CSS", level: 5 },
      { name: "CSS Modules", level: 4 },
      { name: "Styled Components", level: 4 },
      { name: "SCSS / Sass", level: 4 },
      { name: "shadcn/ui", level: 4 },
    ],
  },
  {
    category: "Backend / API",
    note: "Full-stack capability",
    skills: [
      { name: "Node.js / Express", level: 4 },
      { name: "REST API Design", level: 4 },
      { name: "PostgreSQL", level: 3 },
      { name: "PHP (Legacy Reading)", level: 4 },
      { name: "MySQL", level: 3 },
    ],
  },
  {
    category: "Migration Skills",
    note: "Unique specialization",
    skills: [
      { name: "jQuery → React", level: 5 },
      { name: "MPA → SPA", level: 5 },
      { name: "Code Archaeology", level: 5 },
      { name: "Incremental Refactor", level: 5 },
      { name: "Performance Audit", level: 4 },
    ],
  },
];

const levelLabels = ["Beginner", "Basic", "Intermediate", "Advanced", "Expert"];

export default function SkillsSection() {
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
      { threshold: 0.08 }
    );
    const els = sectionRef.current?.querySelectorAll(".fade-up");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-32 bg-[oklch(0.98_0.001_285)] relative overflow-hidden">
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
        05
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6 fade-up">
          <span className="accent-line" />
          <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-[oklch(0.52_0.22_25)]">
            Skills
          </span>
          <div className="flex-1 h-px bg-[oklch(0.88_0.003_285)]" />
        </div>

        <div className="mb-16 fade-up" style={{ transitionDelay: "0.05s" }}>
          <h2
            className="text-4xl md:text-5xl font-bold text-[oklch(0.12_0.005_285)] leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Technical Expertise
          </h2>
          <p
            className="text-base text-[oklch(0.45_0.008_285)] max-w-xl"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            Five filled squares = Expert (production use). Four = Advanced. Three = Proficient.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[oklch(0.88_0.003_285)] border border-[oklch(0.88_0.003_285)]">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className="bg-white p-8 fade-up"
              style={{ transitionDelay: `${gi * 0.07}s` }}
            >
              <div className="mb-6">
                <h3
                  className="text-base font-bold text-[oklch(0.12_0.005_285)] mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {group.category}
                </h3>
                <p className="text-xs font-mono text-[oklch(0.65_0.01_285)]">
                  {group.note}
                </p>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between gap-4">
                    <span
                      className="text-sm text-[oklch(0.35_0.005_285)] flex-1"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {skill.name}
                    </span>
                    <div className="flex gap-1" title={levelLabels[skill.level - 1]}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 transition-colors duration-200 ${
                            i < skill.level
                              ? "bg-[oklch(0.52_0.22_25)]"
                              : "bg-[oklch(0.92_0.002_285)]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special note about migration expertise */}
        <div
          className="mt-8 border-l-4 border-[oklch(0.52_0.22_25)] pl-6 py-4 fade-up"
          style={{ transitionDelay: "0.4s" }}
        >
          <p
            className="text-sm text-[oklch(0.35_0.005_285)] leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            <strong className="font-semibold text-[oklch(0.12_0.005_285)]">Note on Migration Skills:</strong>{" "}
            My ability to read and understand legacy PHP, jQuery, and unstructured HTML/CSS is a deliberate skill,
            not a relic. Understanding old code is the prerequisite for replacing it correctly.
            I've read codebases with no documentation, no version control, and no original developers available.
          </p>
        </div>
      </div>
    </section>
  );
}
