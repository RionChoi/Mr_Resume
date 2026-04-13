"use client";

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
    title: "MSA Architecture Transformation",
    duration: "Analysis, Design, Build",
    tasks: [
      "Analyzed AS-IS monolithic architecture: ExBuilder + JSP SSR with tight coupling, no CI/CD, complex procedural deployment",
      "Designed TO-BE MSA with independent service deployment, separation of concerns (React SPA + Spring Boot REST API)",
      "Built Gateway middleware with JWT parsing for forwarding user identity across microservices",
      "Migrated Spring Legacy XML configuration to Spring Boot auto-configuration",
      "Planned phased transition from monolithic to distributed system",
    ],
    tools: ["Spring Boot", "Docker", "Kubernetes", "JWT", "Gateway", "Git"],
    outcome: "Microservices-ready architecture with independent deployment capability",
  },
  {
    num: "02",
    title: "React Frontend Development",
    duration: "User & Back Office + Mobile",
    tasks: [
      "Developed React SPA for User Interface and Back Office Console",
      "Implemented React Native + WebView hybrid app strategy (One Source, Multi-Use)",
      "Reduced mobile team requirement from 3 separate teams (web + iOS + Android) to 1 unified team",
      "Built real-time updates without app store review cycles",
      "Designed responsive component architecture for seamless web and mobile experience",
    ],
    tools: ["React", "React Native", "TypeScript", "Responsive Design", "WebView"],
    outcome: "Single codebase supporting web and hybrid mobile applications",
  },
  {
    num: "03",
    title: "Backend API Modernization",
    duration: "Java, Spring Boot Development",
    tasks: [
      "Built RESTful APIs with Spring Boot replacing legacy JSP endpoints",
      "Eliminated configuration hell: migrated from web.xml + context-*.xml to auto-configuration",
      "Implemented embedded WAS (Tomcat in Jar) ensuring consistent environments across deployments",
      "Resolved Jar Hell with Spring Boot Starter dependencies",
      "Enabled independent service scaling and fault isolation",
    ],
    tools: ["Java", "Spring Boot", "Mybatis", "Tibero", "Maven", "DevEye"],
    outcome: "Scalable, maintainable API layer with environment consistency",
  },
  {
    num: "04",
    title: "SSO Integration & Performance Optimization",
    duration: "Jennifer Monitoring, Root Cause Analysis",
    tasks: [
      "Identified login bottleneck: 20s → 5s target through Jennifer monitoring (X-View charts, transaction profiling)",
      "Root Cause 1: SSO token issuance speed (8s improvement via optimization)",
      "Root Cause 2: Session info DB table query overload (2s improvement via strategic indexing)",
      "Root Cause 3: Unmaintained magicsso MySQL database (5s improvement via cleanup)",
      "Implemented centralized SSO via Gateway, forwarding authenticated user info across all MSA services",
    ],
    tools: ["Jennifer", "MySQL", "Indexing", "Gateway Middleware", "Monitoring", "Tibero"],
    outcome: "Login speed improved 70% (20s → 5s) with fault isolation across services",
  },
];

const metrics = [
  { label: "Login Speed", before: "~20s", after: "~5s", improvement: "70% faster" },
  { label: "Architecture", before: "Monolithic", after: "MSA", improvement: "Independent Deploy" },
  { label: "Mobile Dev Teams", before: "3 Teams", after: "1 Team", improvement: "66% reduced" },
  { label: "Deployment", before: "Manual", after: "Automated", improvement: "Jenkins Pipeline" },
];

const techDecisions = [
  {
    decision: "React SPA over JSP/SSR",
    rationale:
      "Separation of concerns enables frontend and backend teams to work independently. React components are reusable across web and mobile (React Native WebView). Independent deployment decouples frontend changes from backend release cycles.",
    tradeoff: "Initial learning curve for team experienced in JSP/SSR paradigm. Requires frontend state management discipline.",
  },
  {
    decision: "Spring Boot over Spring Legacy",
    rationale:
      "Auto-configuration eliminates XML hell (web.xml, context-*.xml, property file chaos). Embedded WAS (Tomcat in Jar) ensures environment consistency from dev to production. Spring Boot Starters prevent Jar Hell and dependency conflicts.",
    tradeoff: "Required systematic migration of existing XML configurations and testing of auto-configuration overrides.",
  },
  {
    decision: "JWT Gateway Middleware",
    rationale:
      "Centralized authentication across MSA services. Gateway parses JWT and forwards user identity via headers to all downstream services. Eliminates N-way SSO complexity and reduces session database load.",
    tradeoff: "Gateway becomes critical infrastructure (single point of failure mitigated with load balancing and circuit breakers).",
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
            Monolithic → MSA
            <br />
            <em style={{ fontStyle: "italic", color: "oklch(0.52_0.22_25)" }}>Platform Modernization</em>
          </h2>
          <p
            className="text-base text-[oklch(0.45_0.008_285)] max-w-2xl leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            A complete transformation of IBK Industrial Bank's enterprise investment platform from monolithic architecture to microservices — achieving 70% login speed improvement and enabling independent service deployment with CI/CD automation.
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
                IBK BOX platform was built on ExBuilder with Monolithic architecture and Server-Side Rendering. Login times exceeded <strong>20 seconds</strong>. The system suffered from tight coupling, slow deployment cycles, and limited scalability.
              </p>
              <div className="space-y-3">
                {[
                  "Tight coupling made small changes risky for the entire system",
                  "JSP mixed presentation with business logic, blocking frontend/backend separation",
                  "No horizontal scalability — traffic spikes required scaling the entire server",
                  "Slow builds and deployment cycles due to monolithic codebase",
                  "Spring Legacy XML configuration was complex and error-prone",
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
            Modernization Roadmap — 4 Major Phases (Aug 2024 - Dec 2025)
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
