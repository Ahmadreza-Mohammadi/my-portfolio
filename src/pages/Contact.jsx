import ScrollSection from "../components/common/ScrollSection";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const contactChannels = [
  {
    title: "Direct email",
    description: "Share a brief about your team, timeline, and goals.",
    action: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    title: "Book a call",
    description: "30-minute discovery sessions, Mon–Thu.",
    action: "Schedule via Cal.com",
    href: "https://cal.com/",
  },
  {
    title: "Collaboration docs",
    description: "Receive a tailored plan, scope, and pricing sheet.",
    action: "Request a proposal",
    href: "mailto:hello@example.com?subject=Project%20Proposal%20Request",
  },
];

const officeHours = [
  { day: "Mon — Thu", time: "10:00 – 18:00 CET" },
  { day: "Fri", time: "Remote deep work · async only" },
  { day: "Response time", time: "< 24h on weekdays" },
];

const faqs = [
  {
    question: "How do engagements typically start?",
    answer:
      "We begin with a discovery call to unpack requirements, constraints, and success metrics. From there, I share a lightweight roadmap plus an initial estimate.",
  },
  {
    question: "Do you work with existing teams?",
    answer:
      "Yes. I often plug into design-engineering pods, acting as the front-end lead who shapes the system, reviews PRs, and keeps motion/performance cohesive.",
  },
  {
    question: "What stack do you prefer?",
    answer:
      "React, Next.js, TypeScript, Tailwind, and Framer Motion are my defaults, but I adapt to whatever keeps the experience performant and maintainable.",
  },
];

function Contact() {
  const [ctaRef, isCtaVisible] = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col gap-16 py-12">
      <ScrollSection
        as="section"
        animationType="fade-up"
        className="glass-text-container p-8 md:p-12 flex flex-col gap-6 hero-sequence"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-[#f5c2c7]">
          Contact
        </span>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Let’s plan the next release together.
        </h1>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          I work with founders, product squads, and agencies who value
          interaction quality and predictable delivery. Tell me what you are
          shipping next and we will map out a collaboration that fits your
  cadence.
        </p>
        <p className="text-sm text-gray-400">
          Prefer async? Email works best—I typically respond within one business
          day.
        </p>
      </ScrollSection>

      <ScrollSection
        as="section"
        animationType="fade-up"
        className="grid gap-6 md:grid-cols-3"
      >
        {contactChannels.map((channel) => (
          <article
            key={channel.title}
            className="card-surface rounded-3xl p-6 flex flex-col gap-3"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-[#f5c2c7]">
              {channel.title}
            </span>
            <p className="text-sm text-gray-400 leading-relaxed">
              {channel.description}
            </p>
            <a
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              className="text-white font-semibold inline-flex items-center gap-2 group"
            >
              {channel.action}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </article>
        ))}
      </ScrollSection>

  <ScrollSection
        as="section"
        animationType="fade-up"
        className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="card-surface rounded-3xl p-8 flex flex-col gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Send a note
            </h2>
            <p className="text-sm text-gray-400">
              Share as much detail as you can—timeline, deliverables, links to
              files—and I will follow up with next steps.
            </p>
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-gray-300">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Alex Product"
                  className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/30 focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-gray-300">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="team@studio.com"
                  className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/30 focus:outline-none"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm text-gray-300">
              Company / Team
              <input
                type="text"
                name="company"
                placeholder="Northwind Product"
                className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/30 focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-gray-300">
              Project context
              <textarea
                name="project"
                required
                rows={4}
                placeholder="What are you building? What does success look like?"
                className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/30 focus:outline-none resize-none"
              />
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-gray-300">
                Ideal kickoff
                <input
                  type="text"
                  name="timeline"
                  placeholder="e.g. Mid January"
                  className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/30 focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-gray-300">
                Budget range
                <input
                  type="text"
                  name="budget"
                  placeholder="$15k – $25k"
                  className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/30 focus:outline-none"
                />
              </label>
            </div>
            <button
              type="submit"
              className="btn-accent btn-intelligent px-6 py-3 rounded-full uppercase tracking-[0.3em] text-sm font-semibold inline-flex items-center gap-3 justify-center"
            >
              Send message
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-8">
          <div className="card-surface rounded-3xl p-6 flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-white">Office hours</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              {officeHours.map((slot) => (
                <li key={slot.day} className="flex justify-between">
                  <span>{slot.day}</span>
                  <span className="text-white">{slot.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-surface rounded-3xl p-6 flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-white">FAQ</h3>
            <div className="flex flex-col gap-4 text-sm text-gray-400">
              {faqs.map((item) => (
                <div key={item.question} className="flex flex-col gap-2">
                  <p className="text-white font-semibold">{item.question}</p>
                  <p className="leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollSection>

      <ScrollSection
        as="section"
        animationType="fade-up"
        className="glass-text-container p-8 md:p-12 flex flex-col gap-6 items-start"
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Have a brief or RFP ready?
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
          Send over any documents, prototypes, or Looms. I will review, highlight
          risks and opportunities, then follow up with a plan you can share with
          stakeholders.
        </p>
        <div
          ref={ctaRef}
          className={`transition-all duration-700 ease-out ${
            isCtaVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="mailto:hello@example.com?subject=Share%20a%20brief"
            className="btn-accent btn-intelligent px-6 py-3 rounded-full uppercase tracking-[0.3em] text-sm font-semibold inline-flex items-center gap-3"
          >
            Share files
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
          </a>
        </div>
      </ScrollSection>
    </div>
  );
}

export default Contact;
