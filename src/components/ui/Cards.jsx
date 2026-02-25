import { useTranslation } from "react-i18next";
import { skillKeys } from "../constants/const";
import ScrollSection from "../common/ScrollSection";

function Cards() {
  const { t } = useTranslation();
  /* Three copies so scroll loops seamlessly with no empty gap */
  const skillsLoop = [...skillKeys, ...skillKeys, ...skillKeys];

  return (
    <ScrollSection
      animationType="fade-up"
      threshold={0.2}
      rootMargin="0px 0px -150px 0px"
      className="mt-16 flex flex-col gap-6 md:-mx-64"
      as="section"
    >
      <div className="auto-scroll-wrapper">
        <div className="auto-scroll-track">
          {skillsLoop.map((item, index) => (
            <article
              key={`${item.id}-${index}`}
              className="card-surface shrink-0 w-60 md:w-72 rounded-3xl p-6 flex flex-col gap-4"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-[#f5c2c7]">
                {t(item.tagKey)}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
                {t(`skills.${item.id}_title`)}
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {t(`skills.${item.id}_desc`)}
              </p>
            </article>
          ))}
        </div>
        <span className="auto-scroll-fade left hidden md:block" />
        <span className="auto-scroll-fade right hidden md:block" />
      </div>
    </ScrollSection>
  );
}

export default Cards;
