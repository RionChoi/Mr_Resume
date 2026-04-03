"use client";

/*
 * ExperienceSection — Swiss International Style
 * Timeline layout with detailed role descriptions
 * European format: specific contributions + measurable outcomes
 */

import { useEffect, useRef } from "react";

const experiences = [
  {
    period: "2022 — Present",
    role: "Frontend Developer (Freelance)",
    company: "Self-Employed",
    location: "Seoul, South Korea (Remote)",
    type: "Freelance",
    description:
      "Specialized in legacy web system analysis and React SPA migration. Clients primarily from South Korea and Europe (Netherlands, Germany).",
    contributions: [
      "Delivered 4 complete legacy-to-React migrations, each with full feature parity",
      "Reduced average page load time by 70% across all projects",
      "Established a repeatable 4-phase migration methodology now used as a template",
      "Maintained 100% client retention — all clients returned for additional projects",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js"],
  },
  {
    period: "2020 — 2022",
    role: "Junior Web Developer",
    company: "Digital Agency (Seoul)",
    location: "Seoul, South Korea",
    type: "Full-time",
    description:
      "Worked on a team of 8 developers building and maintaining client websites. Primary responsibility was frontend implementation and legacy system maintenance.",
    contributions: [
      "Maintained and extended 12 legacy jQuery-based client websites",
      "Led the migration of the agency's internal project management tool from PHP to React",
      "Introduced ESLint and Prettier to the team's workflow, reducing code review time by 30%",
      "Mentored 2 junior developers in modern JavaScript practices",
    ],
    stack: ["React", "JavaScript", "jQuery", "PHP", "MySQL", "SCSS"],
  },
  {
    period: "2019 — 2020",
    role: "Web Development Intern",
    company: "Startup (E-Commerce)",
    location: "Seoul, South Korea",
    type: "Internship",
    description:
      "First professional role. Responsible for frontend bug fixes and feature additions on a WooCommerce-based e-commerce platform.",
    contributions: [
      "Fixed 40+ frontend bugs in the first 3 months",
      "Built a custom product filter component in vanilla JavaScript",
      "Learned to navigate a large, undocumented legacy codebase independently",
      "Completed the company's first mobile-responsive redesign of the checkout flow",
    ],
    stack: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress", "PHP"],
  },
];

const education = [
  {
    period: "2015 — 2019",
    degree: "B.Sc. Computer Science",
    institution: "Seoul National University",
    note: "Focus: Software Engineering, Web Technologies",
  },
];

const certifications = [
  { name: "AWS Certified Cloud Practitioner", year: "2023", issuer: "Amazon Web Services" },
  { name: "Google Analytics Certified", year: "2022", issuer: "Google" },
];

export default function ExperienceSection() {
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
    <section id="experience" ref={sectionRef} className="py-32 relative overflow-hidden">
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
        06
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6 fade-up">
          <span className="accent-line" />
          <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-[oklch(0.52_0.22_25)]">
            Experience
          </span>
          <div className="flex-1 h-px bg-[oklch(0.88_0.003_285)]" />
        </div>

        <div className="mb-16 fade-up" style={{ transitionDelay: "0.05s" }}>
          <h2
            className="text-4xl md:text-5xl font-bold text-[oklch(0.12_0.005_285)] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Work History
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">
          {/* Left: Quick summary */}
          <div className="lg:sticky lg:top-24 lg:self-start fade-up">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest uppercase mb-2">
                  Total Experience
                </p>
                <p
                  className="text-3xl font-bold text-[oklch(0.12_0.005_285)]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  5+ Years
                </p>
              </div>
              <div className="h-px bg-[oklch(0.88_0.003_285)]" />
              <div>
                <p className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest uppercase mb-3">
                  Education
                </p>
                {education.map((edu) => (
                  <div key={edu.degree} className="mb-3">
                    <p
                      className="text-sm font-semibold text-[oklch(0.12_0.005_285)]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {edu.degree}
                    </p>
                    <p className="text-xs text-[oklch(0.55_0.01_285)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {edu.institution}
                    </p>
                    <p className="text-xs font-mono text-[oklch(0.65_0.01_285)]">{edu.period}</p>
                    <p className="text-xs text-[oklch(0.65_0.01_285)] mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {edu.note}
                    </p>
                  </div>
                ))}
              </div>
              <div className="h-px bg-[oklch(0.88_0.003_285)]" />
              <div>
                <p className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest uppercase mb-3">
                  Certifications
                </p>
                {certifications.map((cert) => (
                  <div key={cert.name} className="mb-3">
                    <p
                      className="text-sm font-medium text-[oklch(0.12_0.005_285)]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {cert.name}
                    </p>
                    <p className="text-xs text-[oklch(0.55_0.01_285)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div
                key={exp.period}
                className="fade-up relative pl-8 pb-12 last:pb-0"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Timeline line */}
                {i < experiences.length - 1 && (
                  <div className="absolute left-0 top-6 bottom-0 w-px bg-[oklch(0.88_0.003_285)]" />
                )}
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-2 h-2 bg-[oklch(0.52_0.22_25)] -translate-x-[3px]" />

                <div className="border border-[oklch(0.88_0.003_285)] bg-white p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono bg-[oklch(0.94_0.002_285)] px-2 py-0.5 text-[oklch(0.55_0.01_285)]">
                          {exp.type}
                        </span>
                        <span className="text-xs font-mono text-[oklch(0.65_0.01_285)]">
                          {exp.location}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-bold text-[oklch(0.12_0.005_285)]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        className="text-sm text-[oklch(0.45_0.008_285)]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm font-mono text-[oklch(0.52_0.22_25)] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm text-[oklch(0.45_0.008_285)] leading-relaxed mb-5"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                  >
                    {exp.description}
                  </p>

                  {/* Contributions */}
                  <div className="mb-5">
                    <p className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest uppercase mb-3">
                      Key Contributions
                    </p>
                    <ul className="space-y-2">
                      {exp.contributions.map((c) => (
                        <li key={c} className="flex items-start gap-3">
                          <span className="text-[oklch(0.52_0.22_25)] mt-0.5 flex-shrink-0 text-sm">→</span>
                          <span
                            className="text-sm text-[oklch(0.35_0.005_285)]"
                            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                          >
                            {c}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="skill-tag">
                        {tech}
                      </span>
                    ))}
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
