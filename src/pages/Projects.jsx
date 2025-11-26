import ScrollSection from "../components/common/ScrollSection";
import ProjectCard from "../components/ui/ProjectCard";
import { featuredProjects } from "../components/constants/const";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const methodology = [
  {
    title: "Discover",
    description:
      "Clarify user journeys, success metrics, and experiential pillars before touching code.",
  },
  {
    title: "Design systems",
    description:
      "Codify tokens, components, and motion patterns so every surface scales predictably.",
  },
  {
    title: "Deliver",
    description:
      "Ship measurable improvements with performance budgets, rigorous testing, and observability.",
  },
];

const filterTags = ["All", "Web App", "Full Stack", "Frontend", "Product"];

function Projects() {
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
          Projects
        </span>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Selected builds that balance craft and velocity.
        </h1>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          Each engagement pairs tasteful interaction design with resilient
          engineering. Below is a snapshot of products I have helped shape—from
          dashboards and platforms to experimental interfaces.
        </p>
        <div className="flex flex-wrap gap-3">
          {filterTags.map((tag) => (
            <span
              key={tag}
              className={`px-4 py-2 rounded-full border text-xs uppercase tracking-[0.2em] ${
                tag === "All"
                  ? "border-white/30 bg-white/10 text-white"
                  : "border-white/10 text-gray-400"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </ScrollSection>

      <ScrollSection
        as="section"
        animationType="fade-up"
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Featured work
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Deep collaborations where I owned frontend architecture, design
            systems, and delivery.
          </p>
        </div>
        <div className="projects-grid grid gap-4 sm:gap-6 lg:gap-6 w-full px-0">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </ScrollSection>

      <ScrollSection
        as="section"
        animationType="fade-up"
        className="grid gap-6 md:grid-cols-3"
      >
        {methodology.map((item) => (
          <article
            key={item.title}
            className="card-surface rounded-3xl p-6 flex flex-col gap-3"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-[#f5c2c7]">
              Phase
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
          Have a build on deck?
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
          I love partnering early—reviewing flows, defining constraints, and
          mapping how the first release grows into a platform. Let me know what
          you need and I will share a tailored plan, timeline, and collaboration
          model.
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
            href="mailto:hello@example.com"
            className="btn-accent btn-intelligent px-6 py-3 rounded-full uppercase tracking-[0.3em] text-sm font-semibold inline-flex items-center gap-3"
          >
            Start a project
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

export default Projects;
