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
    role: "Senior Full-Stack Developer",
    company: "Freelance / Contract",
    location: "Seoul, South Korea",
    type: "Contract",
    description:
      "Specialized in enterprise platform modernization and full-stack development for major Korean financial institutions and government projects. Leading architecture transformation from monolithic to MSA systems.",
    contributions: [
      "Led IBK BOX platform transformation from Monolithic to MSA, improving login speed by 70%",
      "Built AI chatbot service for Shinhan Bank's SOL mobile app with React frontend and Java backend",
      "Led development team for Gwangju AI Industrial Convergence admin platform",
      "Developed CESCO's e-commerce and consulting platform with Vue.js and Spring Boot",
    ],
    stack: ["React", "Java", "Spring Boot", "MSA", "JWT", "Oracle", "PostgreSQL", "Vue.js"],
  },
  {
    period: "2018 — 2022",
    role: "Mid-Level Java Developer",
    company: "Enterprise SI Projects",
    location: "Seoul, South Korea",
    type: "Full-time",
    description:
      "Worked on large-scale enterprise SI projects for major Korean corporations including KB Kookmin Bank, LG U+, Samsung SDS, and Korean Air. Responsible for backend API development, database optimization, and frontend implementation.",
    contributions: [
      "Developed banking system features for KB Kookmin Bank and Daegu Bank",
      "Built telecom service platforms for LG U+ with Java and Spring framework",
      "Contributed to Samsung SDS enterprise solutions with full-stack capabilities",
      "Delivered Korean Air's internal systems with focus on reliability and performance",
    ],
    stack: ["Java", "Spring", "Oracle", "JSP", "jQuery", "Tibero", "MySQL"],
  },
  {
    period: "2014 — 2018",
    role: "Junior Java Developer",
    company: "SI Companies (Seoul)",
    location: "Seoul, South Korea",
    type: "Full-time",
    description:
      "Started career in enterprise SI development, building websites and management systems for government institutions and cultural organizations. Gained foundational skills in Java ecosystem and database management.",
    contributions: [
      "Built digital platforms for National Library of Korea and Korean Folk Village",
      "Developed management systems for KOICA (Korea International Cooperation Agency)",
      "Implemented frontend interfaces with HTML, CSS, JavaScript, and jQuery",
      "Learned enterprise development practices including version control, code review, and deployment",
    ],
    stack: ["Java", "JSP", "jQuery", "HTML", "CSS", "Oracle", "MySQL", "Tomcat"],
  },
];

const education = [
  {
    period: "",
    degree: "B.Ed. Physical Education",
    institution: "Harbin Normal University (하얼빈 사범대학), China",
    note: "Inner Mongolia, Hailar",
  },
  {
    period: "",
    degree: "High School Diploma",
    institution: "Hailar No.3 High School (하이라얼 제3고등학교), Inner Mongolia, China",
    note: "",
  },
];

const certifications = [
  { name: "정보처리기사 (Engineer Information Processing)", year: "2014", issuer: "한국산업인력공단 (HRD Korea)" },
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
                  10+ Years
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
