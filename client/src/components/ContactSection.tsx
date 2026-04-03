/*
 * ContactSection + Footer — Swiss International Style
 * Clean contact info + availability statement
 * European employers appreciate: clear timezone, response time, preferred contact method
 */

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    type: "job-opportunity",
  });
  const [submitting, setSubmitting] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message sent! I'll respond within 24 hours.", {
        description: "Thank you for reaching out.",
      });
      setFormData({ name: "", email: "", company: "", message: "", type: "job-opportunity" });
    }, 1200);
  };

  return (
    <>
      <section id="contact" ref={sectionRef} className="py-32 bg-[oklch(0.12_0.005_285)] relative overflow-hidden">
        {/* Background number */}
        <div
          className="absolute top-8 right-0 select-none pointer-events-none"
          style={{
            fontSize: "clamp(6rem, 18vw, 16rem)",
            color: "oklch(0.16 0.005 285)",
            lineHeight: 0.9,
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            right: "-0.05em",
            letterSpacing: "-0.05em",
          }}
          aria-hidden="true"
        >
          07
        </div>

        <div className="container relative z-10">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-6 fade-up">
            <span className="block w-12 h-[3px] bg-[oklch(0.52_0.22_25)]" />
            <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-[oklch(0.52_0.22_25)]">
              Contact
            </span>
            <div className="flex-1 h-px bg-[oklch(0.25_0.005_285)]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-start">
            {/* Left: Intro + contact info */}
            <div>
              <div className="mb-12 fade-up" style={{ transitionDelay: "0.05s" }}>
                <h2
                  className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Let's Work
                  <br />
                  <em className="text-[oklch(0.52_0.22_25)] not-italic">Together</em>
                </h2>
                <p
                  className="text-base text-[oklch(0.65_0.01_285)] leading-relaxed max-w-lg"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                >
                  I'm currently open to remote frontend/full-stack positions and freelance projects,
                  particularly with European companies. If you have a legacy system that needs
                  modernization — that's my specialty.
                </p>
              </div>

              {/* Contact details */}
              <div
                className="space-y-6 fade-up"
                style={{ transitionDelay: "0.1s" }}
              >
                {[
                  {
                    label: "Email",
                    value: "alex.kim@example.com",
                    link: "mailto:alex.kim@example.com",
                  },
                  {
                    label: "LinkedIn",
                    value: "linkedin.com/in/alexkim-dev",
                    link: "https://linkedin.com",
                  },
                  {
                    label: "GitHub",
                    value: "github.com/alexkim-dev",
                    link: "https://github.com",
                  },
                  {
                    label: "Timezone",
                    value: "KST (UTC+9) — overlap with EU morning",
                    link: null,
                  },
                  {
                    label: "Response Time",
                    value: "Within 24 hours",
                    link: null,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[120px_1fr] gap-4 pb-4 border-b border-[oklch(0.20_0.005_285)]"
                  >
                    <span className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest uppercase pt-0.5">
                      {item.label}
                    </span>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[oklch(0.75_0.01_285)] hover:text-white transition-colors duration-200"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        className="text-sm text-[oklch(0.65_0.01_285)]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Availability badge */}
              <div
                className="mt-8 inline-flex items-center gap-3 border border-[oklch(0.25_0.005_285)] px-4 py-3 fade-up"
                style={{ transitionDelay: "0.15s" }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span
                  className="text-sm text-[oklch(0.75_0.01_285)]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Available for new projects — Q2 2026
                </span>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="fade-up" style={{ transitionDelay: "0.2s" }}>
              <form
                onSubmit={handleSubmit}
                className="border border-[oklch(0.25_0.005_285)] p-8 space-y-5"
              >
                <h3
                  className="text-lg font-bold text-white mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Send a Message
                </h3>

                {/* Inquiry type */}
                <div>
                  <label className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest uppercase block mb-2">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-[oklch(0.16_0.005_285)] border border-[oklch(0.25_0.005_285)] text-[oklch(0.75_0.01_285)] px-3 py-2.5 text-sm focus:outline-none focus:border-[oklch(0.52_0.22_25)] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <option value="job-opportunity">Job Opportunity</option>
                    <option value="freelance">Freelance Project</option>
                    <option value="legacy-migration">Legacy Migration Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest uppercase block mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full bg-[oklch(0.16_0.005_285)] border border-[oklch(0.25_0.005_285)] text-[oklch(0.85_0.005_285)] px-3 py-2.5 text-sm focus:outline-none focus:border-[oklch(0.52_0.22_25)] transition-colors placeholder:text-[oklch(0.35_0.005_285)]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest uppercase block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@company.com"
                    className="w-full bg-[oklch(0.16_0.005_285)] border border-[oklch(0.25_0.005_285)] text-[oklch(0.85_0.005_285)] px-3 py-2.5 text-sm focus:outline-none focus:border-[oklch(0.52_0.22_25)] transition-colors placeholder:text-[oklch(0.35_0.005_285)]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest uppercase block mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company name (optional)"
                    className="w-full bg-[oklch(0.16_0.005_285)] border border-[oklch(0.25_0.005_285)] text-[oklch(0.85_0.005_285)] px-3 py-2.5 text-sm focus:outline-none focus:border-[oklch(0.52_0.22_25)] transition-colors placeholder:text-[oklch(0.35_0.005_285)]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-mono text-[oklch(0.52_0.22_25)] tracking-widest uppercase block mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-[oklch(0.16_0.005_285)] border border-[oklch(0.25_0.005_285)] text-[oklch(0.85_0.005_285)] px-3 py-2.5 text-sm focus:outline-none focus:border-[oklch(0.52_0.22_25)] transition-colors placeholder:text-[oklch(0.35_0.005_285)] resize-none"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-[oklch(0.52_0.22_25)] text-white text-sm font-medium hover:bg-[oklch(0.45_0.22_25)] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {submitting ? "Sending..." : "Send Message →"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[oklch(0.09_0.005_285)] py-8">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span
                className="font-mono text-xs font-bold tracking-widest text-[oklch(0.52_0.22_25)]"
                style={{ letterSpacing: "0.2em" }}
              >
                AK
              </span>
              <span
                className="text-xs text-[oklch(0.45_0.008_285)]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Alex Kim — Web Developer
              </span>
            </div>
            <p
              className="text-xs text-[oklch(0.35_0.005_285)] font-mono"
            >
              Built with React + TypeScript + Tailwind CSS
            </p>
            <p
              className="text-xs text-[oklch(0.35_0.005_285)]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              © 2026 Alex Kim. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
