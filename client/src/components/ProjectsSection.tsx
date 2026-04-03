/*
 * ProjectsSection — Swiss International Style
 * Grid of project cards with hover reveal details
 * Each card: Problem → Tech → Result format
 */

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    num: "01",
    title: "E-Commerce SPA Migration",
    type: "Legacy Migration",
    year: "2024",
    problem:
      "A 7-year-old WooCommerce site with 3-second TTFB and poor mobile conversion rates needed modernization without losing SEO rankings.",
    solution:
      "Analyzed the existing PHP templates and WooCommerce hooks, then rebuilt the frontend as a React SPA with Next.js for SSR/SSG to preserve SEO.",
    result: "TTFB reduced from 3.2s to 0.4s. Mobile conversion rate +34%.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "WooCommerce REST API"],
    highlight: "SEO-safe migration with zero ranking loss",
    color: "oklch(0.52_0.22_25)",
  },
  {
    num: "02",
    title: "Internal Dashboard Rebuild",
    type: "Greenfield + Migration",
    year: "2023",
    problem:
      "A logistics company's internal tool was built with jQuery and Bootstrap 3. Data tables were slow with 10,000+ rows and no filtering.",
    solution:
      "Rebuilt as React SPA with TanStack Table for virtualized rendering, React Query for server state, and a custom filter system.",
    result: "Table render time: 4.8s → 180ms. User satisfaction score +62%.",
    stack: ["React 18", "TanStack Table", "React Query", "Zustand", "Recharts"],
    highlight: "10,000+ rows rendered in 180ms",
    color: "oklch(0.35_0.01_285)",
  },
  {
    num: "03",
    title: "Multi-Language Corporate Site",
    type: "New Development",
    year: "2024",
    problem:
      "A mid-size European manufacturer needed a new corporate website supporting 4 languages with CMS integration and GDPR compliance.",
    solution:
      "Built with React + i18next for internationalization, Contentful as headless CMS, and implemented cookie consent management per GDPR.",
    result: "Launched in 6 weeks. 4 languages live. GDPR audit passed.",
    stack: ["React", "i18next", "Contentful", "Vite", "Framer Motion"],
    highlight: "GDPR-compliant, 4-language SPA",
    color: "oklch(0.45_0.12_200)",
  },
  {
    num: "04",
    title: "Real Estate Listing Platform",
    type: "Full-Stack SPA",
    year: "2023",
    problem:
      "A real estate agency was using a third-party platform that charged per listing. They needed an owned solution with map integration.",
    solution:
      "Built a full-stack SPA with React frontend, Node.js/Express API, PostgreSQL database, and Google Maps integration for property visualization.",
    result: "Saved €800/month in platform fees. 200+ listings managed.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Google Maps API"],
    highlight: "€800/month cost savings achieved",
    color: "oklch(0.42_0.08_150)",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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
    <section id="projects" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background number */}
      <div
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
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6 fade-up">
          <span className="accent-line" />
          <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-[oklch(0.52_0.22_25)]">
            Projects
          </span>
          <div className="flex-1 h-px bg-[oklch(0.88_0.003_285)]" />
        </div>

        <div className="mb-16 fade-up" style={{ transitionDelay: "0.05s" }}>
          <h2
            className="text-4xl md:text-5xl font-bold text-[oklch(0.12_0.005_285)] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Selected Work
          </h2>
        </div>

        {/* Projects list */}
        <div className="space-y-0 border-t border-[oklch(0.88_0.003_285)]">
          {projects.map((project, i) => (
            <div
              key={project.num}
              className={`fade-up border-b border-[oklch(0.88_0.003_285)] transition-all duration-300 cursor-pointer ${
                hoveredIdx === i ? "bg-[oklch(0.98_0.001_285)]" : "bg-white"
              }`}
              style={{ transitionDelay: `${i * 0.07}s` }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Header row */}
              <div className="grid grid-cols-[auto_1fr_auto] gap-6 items-center p-6 md:p-8">
                <span
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: hoveredIdx === i ? `${project.color}` : "oklch(0.88 0.003 285)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {project.num}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3
                      className="text-lg md:text-xl font-bold text-[oklch(0.12_0.005_285)]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono bg-[oklch(0.94_0.002_285)] px-2 py-0.5 text-[oklch(0.55_0.01_285)]">
                      {project.type}
                    </span>
                  </div>
                  <p
                    className="text-sm text-[oklch(0.52_0.22_25)] font-mono"
                  >
                    ✦ {project.highlight}
                  </p>
                </div>
                <span className="text-sm font-mono text-[oklch(0.65_0.01_285)]">
                  {project.year}
                </span>
              </div>

              {/* Expanded detail */}
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  hoveredIdx === i ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 md:px-8 pb-8">
                  <div className="border-t border-[oklch(0.92_0.002_285)] pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <p className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest uppercase mb-2">
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
                        <p className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest uppercase mb-2">
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
                        <p className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest uppercase mb-2">
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
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="skill-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
