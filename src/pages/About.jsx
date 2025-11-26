import { Link } from "react-router-dom";
import ScrollSection from "../components/common/ScrollSection";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const stats = [
  {
    label: "Years crafting UI",
    value: "6+",
    detail: "Designing production React / Next.js experiences.",
  },
  {
    label: "Products launched",
    value: "28",
    detail: "From fintech dashboards to content platforms.",
  },
  {
    label: "Team velocity gain",
    value: "32%",
    detail: "Measured uplift after introducing design systems.",
  },
  {
    label: "Coffee saved",
    value: "∞",
    detail: "Automations & DX tooling keep the flow uninterrupted.",
  },
];

const timeline = [
  {
    period: "2024 — Present",
    role: "Senior Frontend Engineer · PixelNorth Studio",
    description:
      "Lead a distributed squad building multi-tenant dashboards. Owning accessibility, performance budgets, and motion guidelines.",
  },
  {
    period: "2021 — 2024",
    role: "Product Engineer · Layered Labs",
    description:
      "Shipped internal tooling and public apps with Next.js, GraphQL, and Framer Motion. Built the shared component library adopted by 5 teams.",
  },
  {
    period: "2019 — 2021",
    role: "UI Developer · Freelance",
    description:
      "Partnered with agencies to translate polished Figma systems into responsive, animated interfaces with TypeScript and Tailwind.",
  },
];

const skills = [
  { name: "React & Next.js", level: 93, note: "Server Components, SSR, RSC" },
  { name: "TypeScript + Testing", level: 88, note: "Vitest, Playwright" },
  {
    name: "Framer Motion & micro-interactions",
    level: 85,
    note: "Motion systems",
  },
  { name: "Design systems & tooling", level: 90, note: "Storybook, Chromatic" },
];

const values = [
  {
    title: "Interaction-first design",
    description:
      "Every layout is choreographed with purposeful motion, subtle depth, and tactile controls that feel responsive to intent.",
  },
  {
    title: "Accessible velocity",
    description:
      "Contrast, focus, keyboard flows, and reduced-motion modes are treated as core features, not nice-to-haves.",
  },
  {
    title: "Performance empathy",
    description:
      "Budgets, profiling, and bundle visualization are part of the daily workflow to keep experiences fast on any device.",
  },
];

function About() {
  const [ctaRef, isCtaVisible] = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <div className="flex flex-col gap-16 py-12">
      <ScrollSection
        as="section"
        animationType="fade-up"
        className="glass-text-container p-8 md:p-12 flex flex-col gap-6 hero-sequence"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-[#f5c2c7]">
          About
        </span>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Building expressive, performant interfaces with intent.
        </h1>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          I partner with teams who care about detail. My craft blends
          interaction design, modern front-end architecture, and a systems
          mindset so products scale gracefully as they grow. Whether it is
          orchestrating a motion language, tuning render pipelines, or leading
          UI audits, I obsess over the tiny decisions that compound into premium
          experiences.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card-surface rounded-3xl p-5 flex flex-col gap-2">
            <span className="text-sm text-gray-400 uppercase tracking-[0.35em]">
              Stack
            </span>
            <p className="text-white text-lg font-semibold">
              React, Next.js, TypeScript, Tailwind, Framer Motion
            </p>
          </div>
          <div className="card-surface rounded-3xl p-5 flex flex-col gap-2">
            <span className="text-sm text-gray-400 uppercase tracking-[0.35em]">
              Focus
            </span>
            <p className="text-white text-lg font-semibold">
              Design systems, interaction design, DX tooling
            </p>
          </div>
          <div className="card-surface rounded-3xl p-5 flex flex-col gap-2">
            <span className="text-sm text-gray-400 uppercase tracking-[0.35em]">
              Currently
            </span>
            <p className="text-white text-lg font-semibold">
              Leading UI Platform @ PixelNorth Studio
            </p>
          </div>
        </div>
      </ScrollSection>

      <ScrollSection
        as="section"
        animationType="fade-up"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((item) => (
          <article
            key={item.label}
            className="card-surface rounded-3xl p-6 flex flex-col gap-3"
          >
            <span className="text-sm uppercase tracking-[0.4em] text-gray-400">
              {item.label}
            </span>
            <span className="text-4xl font-semibold text-white">
              {item.value}
            </span>
            <p className="text-sm text-gray-400 leading-relaxed">
              {item.detail}
            </p>
          </article>
        ))}
      </ScrollSection>

      <ScrollSection
        as="section"
        animationType="fade-up"
        className="grid gap-10 lg:grid-cols-[1.2fr_1fr]"
      >
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Journey so far
          </h2>
          <div className="flex flex-col gap-5">
            {timeline.map((item) => (
              <div
                key={item.period}
                className="card-surface rounded-3xl p-6 flex flex-col gap-2"
              >
                <span className="text-xs uppercase tracking-[0.4em] text-[#f5c2c7]">
                  {item.period}
                </span>
                <p className="text-lg font-semibold text-white">{item.role}</p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Tooling & Specialties
          </h2>
          <div className="card-surface rounded-3xl p-6 flex flex-col gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-[#f5c2c7] via-[#f08f9b] to-[#96444c]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                  {skill.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ScrollSection>

      <ScrollSection
        as="section"
        animationType="fade-up"
        className="grid gap-6 md:grid-cols-3"
      >
        {values.map((item) => (
          <article
            key={item.title}
            className="card-surface rounded-3xl p-6 flex flex-col gap-3"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-[#f5c2c7]">
              Principle
            </span>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </article>
        ))}
      </ScrollSection>

      <ScrollSection
        as="section"
        animationType="fade-up"
        className="glass-text-container p-8 md:p-12 flex flex-col gap-6 items-start"
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Let’s build something thoughtful together.
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
          I collaborate best when strategy, design, and engineering sit at the
          same table. If you need an engineer who can shape narratives,
          architect systems, and sweat the final pixel, I am ready to jump in.
        </p>
        <div
          ref={ctaRef}
          className={`transition-all duration-700 ease-out ${
            isCtaVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            to="/contact"
            className="btn-accent btn-intelligent px-6 py-3 rounded-full uppercase tracking-[0.3em] text-sm font-semibold inline-flex items-center gap-3"
          >
            Reach out
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </ScrollSection>
    </div>
  );
}

export default About;
