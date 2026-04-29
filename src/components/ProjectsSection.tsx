"use client";

/*
 * ProjectsSection — Swiss International Style
 * Grid of project cards with hover reveal details
 * Each card: Problem → Tech → Result format
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "IBK BOX Platform Modernization",
    type: "Enterprise SaaS",
    year: "2024–2025",
    problem:
      "IBK Industrial Bank's SME investment platform was built on a monolithic ExBuilder framework with server-side rendering. The system suffered from tight coupling, slow deployments, and no CI/CD — login alone took 20 seconds.",
    solution:
      "Led full-stack transformation to MSA architecture with React SPA frontend, Spring Boot REST APIs, JWT gateway middleware, and CI/CD pipeline. Implemented React Native WebView for mobile hybrid strategy.",
    result: "Login speed improved 70% (20s→5s). Mobile dev teams reduced from 3 to 1. Achieved independent service deployment with automated CI/CD.",
    stack: ["React", "Spring Boot", "Java", "MSA", "JWT", "Jenkins", "Tibero", "React Native"],
    highlight: "Monolithic → MSA with 70% login speed improvement",
    color: "oklch(0.52_0.22_25)",
  },
  {
    num: "02",
    title: "Shinhan NewSOL Hybrid Chatbot",
    type: "Hybrid App / FinTech",
    year: "2023–2024",
    problem:
      "Shinhan Bank's NewSOL mobile app required an AI chatbot for customer service — but the WebView-based architecture had no bridge to native device APIs. Real-time agent hand-off and OTA deployment (bypassing App Store review cycles) were non-negotiable requirements.",
    solution:
      "Built the chatbot frontend with React 18 + Redux Toolkit + Redux-Saga, implementing a custom JS Bridge layer (sh.native.*) with 21 defined ACTION_TYPEs for native↔WebView communication. Integrated Spectra real-time agent escalation and added XSS filtering across all user inputs.",
    result: "Delivered OTA deployment capability — live bug fixes and feature updates without App Store submission delays. Real-time agent hand-off working in production. XSS vulnerabilities eliminated across the entire chatbot surface.",
    stack: ["React 18", "Redux Toolkit", "Redux-Saga", "TypeScript", "JS Bridge", "OTA Deploy", "Spring Boot"],
    highlight: "OTA deployment + JS Bridge for Korea's #1 banking app",
    color: "oklch(0.45_0.12_200)",
  },
  {
    num: "03",
    title: "AICA — Gwangju AI Industrial Platform",
    type: "Gov't AI Platform / Frontend Lead",
    year: "2022–2023",
    problem:
      "Gwangju Metropolitan City's AI convergence initiative needed a large-scale admin platform — 90+ pages across two portals (admin + public user). The team had no shared component standards, and the menu structure was managed server-side, requiring a dynamic routing solution.",
    solution:
      "Served as Frontend Lead. Built with TypeScript + React 17 + Zustand + React Query. Architected a server menu API-driven dynamic router eliminating hardcoded routes. Developed 20+ shared MUI v5 components with Storybook documentation and set up a Lerna monorepo for multi-package management. Implemented JWT SSO + PKI certificate auth + 4 OAuth providers.",
    result: "Delivered 90+ pages (50 admin + 40 public user) on schedule. Shared component library cut per-page development time by ~50%. Storybook became the team's live design system reference.",
    stack: ["TypeScript", "React 17", "Zustand", "React Query", "MUI v5", "Storybook", "Lerna", "PostgreSQL", "Spring Boot"],
    highlight: "Frontend Lead — 90+ pages, dynamic router, Storybook design system",
    color: "oklch(0.35_0.01_285)",
  },
  {
    num: "04",
    title: "CESCO Food Label Consulting Platform",
    type: "B2B Platform / Food Safety",
    year: "2021–2022",
    problem:
      "CESCO (Korea's major pest control & food safety firm) needed a B2B platform for food label consulting — replacing a fragmented email/phone workflow. Key requirements: real-time collaboration between consultants and clients, large document uploads (up to 500MB), and a 3-role permission model (customer / operator / admin).",
    solution:
      "Developed the full platform with Vue 2.x inline CDN + Thymeleaf server-side templates + Spring Boot backend + MS-SQL. Implemented WebSocket for real-time consulting chat, SFTP-based file transfer handling up to 500MB, and a 4-layer domain architecture (sys / co / fs / hc). Built email automation covering 10 notification templates across the consulting lifecycle.",
    result: "Replaced manual workflows with an end-to-end digital consulting process. 3-role access control enforced consistently. Email automation reduced manual notification overhead. 500MB SFTP uploads handled reliably in production.",
    stack: ["Vue 2.x", "Thymeleaf", "Spring Boot", "MS-SQL", "WebSocket", "SFTP", "Java"],
    highlight: "WebSocket real-time consulting + 500MB SFTP for food safety B2B",
    color: "oklch(0.42_0.08_150)",
  },
  {
    num: "05",
    title: "Early Career — Enterprise SI (2014–2022)",
    type: "7y 8m SI Experience",
    year: "2014–2021",
    problem:
      "Across 19 enterprise SI projects over nearly 8 years, built mission-critical systems for major Korean institutions in finance, public sector, telecom, and culture — progressing from junior developer to senior engineer.",
    solution:
      "Delivered systems for KB Kookmin Bank, Korean Air, Samsung SDS, KOICA, LG U+, and more. Progressed through the full Java/Spring ecosystem (JSP → Spring MVC → AngularJS → Python/Flask/AWS). Took on increasingly senior responsibilities: system design, code review, and junior mentoring.",
    result: "Deep expertise in enterprise architecture, large-team collaboration, and regulated-industry delivery practices across finance, government, and public infrastructure domains.",
    stack: ["Java", "Spring MVC", "Oracle", "JSP", "AngularJS", "jQuery", "Python", "Flask", "AWS", "MySQL"],
    highlight: "19 SI projects — KB Bank, Korean Air, Samsung SDS, KOICA",
    color: "oklch(0.40_0.05_60)",
  },
];

export default function ProjectsSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-white">
      {/* Background number */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="absolute top-8 left-0 select-none pointer-events-none"
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
        04
      </motion.div>

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="accent-line" />
          <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-[oklch(0.52_0.22_25)]">
            Projects
          </span>
          <div className="flex-1 h-px bg-[oklch(0.88_0.003_285)]" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-[oklch(0.12_0.005_285)] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Selected Work
          </h2>
        </motion.div>

        {/* Projects list */}
        <div className="border-t border-[oklch(0.88_0.003_285)]">
          {projects.map((project, i) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="border-b border-[oklch(0.88_0.003_285)] group cursor-pointer relative overflow-hidden"
              style={{
                backgroundColor: hoveredIdx === i ? "oklch(0.98 0.001 285)" : "transparent",
                transition: "background-color 0.4s ease",
              }}
            >
              {/* Main Content Area */}
              <div className="relative z-10 grid grid-cols-[auto_1fr_auto] gap-6 items-center p-6 md:p-8">
                {/* Number */}
                <motion.span
                  animate={{ 
                    color: hoveredIdx === i ? "var(--primary)" : "oklch(0.88 0.003 285)",
                    scale: hoveredIdx === i ? 1.05 : 1
                  }}
                  className="text-2xl font-bold transition-colors duration-300"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: hoveredIdx === i ? project.color : "oklch(0.88 0.003 285)",
                  }}
                >
                  {project.num}
                </motion.span>

                {/* Title and Highlight */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3
                      className="text-lg md:text-xl font-bold text-[oklch(0.12_0.005_285)] group-hover:text-[oklch(0.52_0.22_25)] transition-colors duration-300"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-mono bg-[oklch(0.94_0.002_285)] px-2 py-0.5 text-[oklch(0.55_0.01_285)] uppercase tracking-wider">
                      {project.type}
                    </span>
                  </div>
                  <motion.p
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm text-[oklch(0.52_0.22_25)] font-mono flex items-center gap-2"
                  >
                    <span className="text-[10px] opacity-60">✦</span> {project.highlight}
                  </motion.p>
                </div>

                {/* Year */}
                <span className="text-sm font-mono text-[oklch(0.65_0.01_285)] self-center pt-1">
                  {project.year}
                </span>
              </div>

              {/* Accordion Expansion */}
              <AnimatePresence initial={false}>
                {hoveredIdx === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-8">
                      <div className="border-t border-[oklch(0.92_0.002_285)] pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                          <div>
                            <p className="text-[10px] font-mono text-[oklch(0.52_0.22_25)] tracking-[0.2em] uppercase mb-3">
                              Problem
                            </p>
                            <p
                              className="text-sm text-[oklch(0.35_0.005_285)] leading-relaxed"
                              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                            >
                              {project.problem}
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] font-mono text-[oklch(0.52_0.22_25)] tracking-[0.2em] uppercase mb-3">
                              Solution
                            </p>
                            <p
                              className="text-sm text-[oklch(0.35_0.005_285)] leading-relaxed"
                              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                            >
                              {project.solution}
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] font-mono text-[oklch(0.52_0.22_25)] tracking-[0.2em] uppercase mb-3">
                              Result
                            </p>
                            <p
                              className="text-sm font-medium text-[oklch(0.25_0.005_285)] leading-relaxed"
                              style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                              {project.result}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4">
                          {project.stack.map((tech) => (
                            <span key={tech} className="skill-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Interaction Guide Line (only shows on hover) */}
              <motion.div 
                className="absolute left-0 top-0 bottom-0 w-1 bg-[oklch(0.52_0.22_25)]"
                animate={{ scaleY: hoveredIdx === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
