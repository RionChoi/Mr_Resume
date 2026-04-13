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
    year: "2024",
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
    title: "Shinhan SOL App AI Chatbot",
    type: "AI Chatbot / FinTech",
    year: "2023",
    problem:
      "Shinhan Bank's mobile banking app needed an AI-powered chatbot for customer service automation. The existing system lacked natural language processing capabilities and had no admin management interface.",
    solution:
      "Developed new AI chatbot service integrated with Shinhan SOL mobile app. Built React-based admin management pages for chatbot training data and conversation flow management. Implemented backend APIs with Java and Oracle.",
    result: "Successfully launched AI chatbot service on Shinhan SOL App. Admin system enabled non-technical staff to manage chatbot responses.",
    stack: ["React", "Java", "Oracle", "Spring Boot", "AI/NLP", "REST API"],
    highlight: "AI chatbot for Korea's major banking app",
    color: "oklch(0.45_0.12_200)",
  },
  {
    num: "03",
    title: "Gwangju AI Industrial Convergence",
    type: "AI Platform / Admin System",
    year: "2022",
    problem:
      "Gwangju Metropolitan City's AI convergence initiative needed a comprehensive admin management system for their industrial platform. The project required leading a development team and building the full admin infrastructure from scratch.",
    solution:
      "Led the development team as technical lead. Built comprehensive admin site using React frontend with Material-UI (MUI) shared component library, Java/Spring Boot backend, and PostgreSQL database. Designed reusable MUI common components for consistent UI across all modules and added interactive data visualization features.",
    result: "Delivered complete admin platform on schedule. MUI common component library improved development efficiency by 50%. Interactive features significantly enhanced user experience and data accessibility.",
    stack: ["React", "Java", "Spring Boot", "PostgreSQL", "Material-UI", "Admin Dashboard"],
    highlight: "MUI components boosted dev efficiency 50%",
    color: "oklch(0.35_0.01_285)",
  },
  {
    num: "04",
    title: "CESCO Labeling Consulting Platform",
    type: "E-Commerce / Consulting",
    year: "2021",
    problem:
      "CESCO, a major Korean pest control and food safety company, needed a new e-commerce shopping mall and consulting website for their labeling services. The existing system was outdated and couldn't handle modern e-commerce requirements.",
    solution:
      "Developed new shopping mall and consulting website using Vue.js for frontend with Java/Spring Boot backend and Oracle database. Implemented product catalog, order management, and consulting request workflows.",
    result: "Launched new e-commerce platform and consulting site. Modernized the customer-facing digital experience for CESCO's labeling services division.",
    stack: ["Vue.js", "Java", "Spring Boot", "Oracle", "E-Commerce"],
    highlight: "Full e-commerce platform for enterprise client",
    color: "oklch(0.42_0.08_150)",
  },
  {
    num: "05",
    title: "Enterprise SI Portfolio (2014–2021)",
    type: "7+ Years SI Experience",
    year: "2014–2021",
    problem:
      "Accumulated extensive enterprise SI experience across major Korean corporations including KB Kookmin Bank, LG U+, Samsung SDS, Korean Air, National Library, KOICA, and Korean Folk Village — building mission-critical systems in finance, telecom, and public sector.",
    solution:
      "Delivered 10+ enterprise projects spanning banking systems, telecom platforms, government portals, and cultural institution websites. Progressed from junior developer to senior role, gaining deep expertise in Java ecosystem and enterprise architecture patterns.",
    result: "Built foundation in enterprise-grade development practices, team collaboration, and large-scale system maintenance across diverse industries.",
    stack: ["Java", "Spring", "Oracle", "JSP", "jQuery", "MySQL", "Tomcat"],
    highlight: "10+ enterprise projects across finance, telecom & public sector",
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
