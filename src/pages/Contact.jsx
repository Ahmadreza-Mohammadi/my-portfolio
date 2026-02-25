import { useTranslation } from "react-i18next";
import ScrollSection from "../components/common/ScrollSection";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const contactChannelKeys = [
  { titleKey: "contact.directEmail", descKey: "contact.directEmail_desc", actionKey: "contact.directEmail_action", href: "mailto:hello@example.com" },
  { titleKey: "contact.bookCall", descKey: "contact.bookCall_desc", actionKey: "contact.bookCall_action", href: "https://cal.com/" },
  { titleKey: "contact.collabDocs", descKey: "contact.collabDocs_desc", actionKey: "contact.collabDocs_action", href: "mailto:hello@example.com?subject=Project%20Proposal%20Request" },
];

const officeHourKeys = [
  { dayKey: "contact.office_mon", timeKey: "contact.office_mon_time" },
  { dayKey: "contact.office_fri", timeKey: "contact.office_fri_time" },
  { dayKey: "contact.office_response", timeKey: "contact.office_response_time" },
];

const faqKeys = [
  { questionKey: "contact.faq1_q", answerKey: "contact.faq1_a" },
  { questionKey: "contact.faq2_q", answerKey: "contact.faq2_a" },
  { questionKey: "contact.faq3_q", answerKey: "contact.faq3_a" },
];

function Contact() {
  const { t } = useTranslation();
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
          {t("contact.label")}
        </span>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Let’s {t("contact.headline")}
        </h1>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          {t("contact.body")}
        </p>
        <p className="text-sm text-gray-400">
          {t("contact.asyncNote")}
        </p>
      </ScrollSection>

      <ScrollSection
        as="section"
        animationType="fade-up"
        className="grid gap-6 md:grid-cols-3"
      >
        {contactChannelKeys.map((channel) => (
          <article
            key={channel.titleKey}
            className="card-surface rounded-3xl p-6 flex flex-col gap-3"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-[#f5c2c7]">
              {t(channel.titleKey)}
            </span>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t(channel.descKey)}
            </p>
            <a
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              className="text-white font-semibold inline-flex items-center gap-2 group"
            >
              {t(channel.actionKey)}
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
              {t("contact.sendNote")}
            </h2>
            <p className="text-sm text-gray-400">
              {t("contact.sendNote_desc")}
            </p>
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-gray-300">
                {t("contact.formName")}
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t("contact.formPlaceholderName")}
                  className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/30 focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-gray-300">
                {t("contact.formEmail")}
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t("contact.formPlaceholderEmail")}
                  className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/30 focus:outline-none"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm text-gray-300">
              {t("contact.formCompany")}
              <input
                type="text"
                name="company"
                placeholder={t("contact.formPlaceholderCompany")}
                className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/30 focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-gray-300">
              {t("contact.formProject")}
              <textarea
                name="project"
                required
                rows={4}
                placeholder={t("contact.formPlaceholderProject")}
                className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/30 focus:outline-none resize-none"
              />
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-gray-300">
                {t("contact.formKickoff")}
                <input
                  type="text"
                  name="timeline"
                  placeholder={t("contact.formPlaceholderKickoff")}
                  className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/30 focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-gray-300">
                {t("contact.formBudget")}
                <input
                  type="text"
                  name="budget"
                  placeholder={t("contact.formPlaceholderBudget")}
                  className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/30 focus:outline-none"
                />
              </label>
            </div>
            <button
              type="submit"
              className="btn-accent btn-intelligent px-6 py-3 rounded-full uppercase tracking-[0.3em] text-sm font-semibold inline-flex items-center gap-3 justify-center"
            >
              {t("contact.sendMessage")}
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-8">
          <div className="card-surface rounded-3xl p-6 flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-white">{t("contact.officeHours")}</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              {officeHourKeys.map((slot) => (
                <li key={slot.dayKey} className="flex justify-between">
                  <span>{t(slot.dayKey)}</span>
                  <span className="text-white">{t(slot.timeKey)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-surface rounded-3xl p-6 flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-white">{t("contact.faq")}</h3>
            <div className="flex flex-col gap-4 text-sm text-gray-400">
              {faqKeys.map((item) => (
                <div key={item.questionKey} className="flex flex-col gap-2">
                  <p className="text-white font-semibold">{t(item.questionKey)}</p>
                  <p className="leading-relaxed">{t(item.answerKey)}</p>
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
          {t("contact.briefTitle")}
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
          {t("contact.briefBody")}
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
            {t("contact.shareFiles")}
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
