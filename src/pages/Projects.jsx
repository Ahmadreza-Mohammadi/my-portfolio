import { useTranslation } from "react-i18next";
import ScrollSection from "../components/common/ScrollSection";
import ProjectCard from "../components/ui/ProjectCard";
import { featuredProjects } from "../components/constants/const";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const methodologyKeys = [
  { titleKey: "projects.discover", descKey: "projects.discover_desc" },
  { titleKey: "projects.designSystems", descKey: "projects.designSystems_desc" },
  { titleKey: "projects.deliver", descKey: "projects.deliver_desc" },
];

function Projects() {
  const { t } = useTranslation();
  const [ctaRef, isCtaVisible] = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <div className="flex flex-col gap-16 py-12">
  

      <ScrollSection
        as="section"
        animationType="fade-up"
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {t("projects.featuredTitle")}
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            {t("projects.featuredSubtitle")}
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
        {methodologyKeys.map((item) => (
          <article
            key={item.titleKey}
            className="card-surface rounded-3xl p-6 flex flex-col gap-3"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-[#f5c2c7]">
              {t("projects.phase")}
            </span>
            <h3 className="text-xl font-semibold text-white">{t(item.titleKey)}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t(item.descKey)}
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
          {t("projects.ctaTitle")}
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
          {t("projects.ctaBody")}
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
            {t("projects.startProject")}
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
