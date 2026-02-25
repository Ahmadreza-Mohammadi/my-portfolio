import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const pillarKeys = [
  { labelKey: "information.pillar1_label", textKey: "information.pillar1_text" },
  { labelKey: "information.pillar2_label", textKey: "information.pillar2_text" },
  { labelKey: "information.pillar3_label", textKey: "information.pillar3_text" },
];

function Information() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa";
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [pillarVisibility, setPillarVisibility] = useState([false, false, false]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            pillarKeys.forEach((_, i) => {
              setTimeout(() => {
                setPillarVisibility((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, 200 + i * 120);
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 px-4 md:px-0"
      aria-label="About our work"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12 md:gap-16">
        {/* Statement block */}
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className={`glass-text-container p-8 md:p-12 lg:p-16 flex flex-col gap-6 ${isRtl ? "text-right" : "text-center md:text-left"}`}
            dir={isRtl ? "rtl" : "ltr"}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[#f5c2c7] font-medium">
              {t("information.experience")}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight max-w-4xl">
              {t("information.headline")}
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
              {t("information.body")}
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {pillarKeys.map((pillar, index) => (
            <div
              key={pillar.labelKey}
              className={`card-surface rounded-3xl p-6 md:p-8 flex flex-col gap-3 transition-all duration-600 ease-out ${
                pillarVisibility[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              } ${isRtl ? "text-right" : ""}`}
              dir={isRtl ? "rtl" : "ltr"}
              style={{
                transitionDelay: pillarVisibility[index] ? `${index * 80}ms` : "0ms",
              }}
            >
              <span className="text-xs uppercase tracking-[0.35em] text-[#f5c2c7]">
                {t(pillar.labelKey)}
              </span>
              <p className="text-white font-semibold text-lg md:text-xl tracking-tight">
                {t(pillar.textKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Information;
