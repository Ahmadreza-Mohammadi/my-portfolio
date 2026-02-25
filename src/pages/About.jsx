import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollSection from "../components/common/ScrollSection";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const statKeys = [
  { labelKey: "about.stats_years", value: "6+", detailKey: "about.stats_years_detail" },
  { labelKey: "about.stats_products", value: "28", detailKey: "about.stats_products_detail" },
  { labelKey: "about.stats_velocity", value: "32%", detailKey: "about.stats_velocity_detail" },
  { labelKey: "about.stats_coffee", value: "∞", detailKey: "about.stats_coffee_detail" },
];

const timelineKeys = [
  { periodKey: "about.timeline1_period", roleKey: "about.timeline1_role", descKey: "about.timeline1_desc" },
  { periodKey: "about.timeline2_period", roleKey: "about.timeline2_role", descKey: "about.timeline2_desc" },
  { periodKey: "about.timeline3_period", roleKey: "about.timeline3_role", descKey: "about.timeline3_desc" },
];

const skillBars = [
  { nameKey: "about.skill_react", level: 93, noteKey: "about.skill_react_note" },
  { nameKey: "about.skill_ts", level: 88, noteKey: "about.skill_ts_note" },
  { nameKey: "about.skill_motion", level: 85, noteKey: "about.skill_motion_note" },
  { nameKey: "about.skill_ds", level: 90, noteKey: "about.skill_ds_note" },
];

const valueKeys = [
  { titleKey: "about.value1_title", descKey: "about.value1_desc" },
  { titleKey: "about.value2_title", descKey: "about.value2_desc" },
  { titleKey: "about.value3_title", descKey: "about.value3_desc" },
];

function About() {
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
        className="glass-text-container p-8 md:p-12 flex flex-col gap-6 hero-sequence"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-[#f5c2c7]">
          {t("about.label")}
        </span>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          {t("about.headline")}
        </h1>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          {t("about.body")}
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card-surface rounded-3xl p-5 flex flex-col gap-2">
            <span className="text-sm text-gray-400 uppercase tracking-[0.35em]">
              {t("about.stack")}
            </span>
            <p className="text-white text-lg font-semibold">
              {t("about.stackValue")}
            </p>
          </div>
          <div className="card-surface rounded-3xl p-5 flex flex-col gap-2">
            <span className="text-sm text-gray-400 uppercase tracking-[0.35em]">
              {t("about.focus")}
            </span>
            <p className="text-white text-lg font-semibold">
              {t("about.focusValue")}
            </p>
          </div>
          <div className="card-surface rounded-3xl p-5 flex flex-col gap-2">
            <span className="text-sm text-gray-400 uppercase tracking-[0.35em]">
              {t("about.currently")}
            </span>
            <p className="text-white text-lg font-semibold">
              {t("about.currentlyValue")}
            </p>
          </div>
        </div>
      </ScrollSection>

      <ScrollSection
        as="section"
        animationType="fade-up"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {statKeys.map((item) => (
          <article
            key={item.labelKey}
            className="card-surface rounded-3xl p-6 flex flex-col gap-3"
          >
            <span className="text-sm uppercase tracking-[0.4em] text-gray-400">
              {t(item.labelKey)}
            </span>
            <span className="text-4xl font-semibold text-white">
              {item.value}
            </span>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t(item.detailKey)}
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
            {t("about.journey")}
          </h2>
          <div className="flex flex-col gap-5">
            {timelineKeys.map((item) => (
              <div
                key={item.periodKey}
                className="card-surface rounded-3xl p-6 flex flex-col gap-2"
              >
                <span className="text-xs uppercase tracking-[0.4em] text-[#f5c2c7]">
                  {t(item.periodKey)}
                </span>
                <p className="text-lg font-semibold text-white">{t(item.roleKey)}</p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {t(item.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {t("about.tooling")}
          </h2>
          <div className="card-surface rounded-3xl p-6 flex flex-col gap-6">
            {skillBars.map((skill) => (
              <div key={skill.nameKey} className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>{t(skill.nameKey)}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="skill-bar-fill h-full rounded-full bg-linear-to-r from-[#f5c2c7] via-[#f08f9b] to-[#96444c]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                  {t(skill.noteKey)}
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
        {valueKeys.map((item) => (
          <article
            key={item.titleKey}
            className="card-surface rounded-3xl p-6 flex flex-col gap-3"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-[#f5c2c7]">
              {t("about.principle")}
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
          {t("about.ctaTitle")}
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
          {t("about.ctaBody")}
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
            {t("about.reachOut")}
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
