import React, { useState, useEffect, useRef } from "react";

function Information() {
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 800
  );
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const text =
    "With years of experience across various industries, my portfolio speaks to the diversity and versatility of our work";
  const words = text.split(" ");

  // Hook برای نمایش fade-in اولیه
  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -200px 0px",
      }
    );

    observer.observe(sectionElement);

    return () => {
      observer.unobserve(sectionElement);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const currentWindowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const sectionTop = section.offsetTop;
      const stickyOffset = currentWindowHeight / 2;
      const scrollStart = sectionTop - stickyOffset;

      // 🔹 سرعت اسکرول هر کلمه (responsive)
      const isMobileDevice =
        currentWindowHeight < 768 || window.innerWidth < 768;
      const wordCount = words.length;
      const scrollRangePerWord = isMobileDevice
        ? currentWindowHeight * 0.12
        : currentWindowHeight * 0.15;
      const totalScrollRange = scrollRangePerWord * wordCount;

      const currentScrollRange = scrollY - scrollStart;
      const progress = Math.max(
        0,
        Math.min(1, currentScrollRange / totalScrollRange)
      );

      setScrollProgress(progress);

      // 🔹 سرعت هایلایت چندکلمه‌ای
      const speedMultiplier = 2.5;
      const highlightedWordIndex =
        progress > 0 ? Math.floor(progress * wordCount * speedMultiplier) : -1;

      const finalIndex = Math.min(
        Math.max(highlightedWordIndex, -1),
        wordCount - 1
      );

      if (progress >= 1) {
        setHighlightedIndex(wordCount - 1);
      } else {
        setHighlightedIndex(finalIndex);
      }
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
      setTimeout(handleScroll, 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    setWindowWidth(window.innerWidth); // Initial set
    handleResize(); // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [words.length]);

  // 🔹 پدینگ و ارتفاع بهینه‌شده (responsive)
  const isMobile = windowWidth < 768;
  const minPadding = isMobile ? 0 : 0; // وقتی progress = 1، padding به صفر می‌رسد
  const maxPadding = isMobile ? 128 : 256;

  // وقتی progress نزدیک به 1 (آخرین کلمات highlight شدند)، padding به صفر برسد
  // برای اینکه بخش بعدی بلافاصله شروع شود
  // استفاده از 0.95 برای smooth transition قبل از رسیدن به 1
  const progressThreshold = 0.95;
  const dynamicPadding =
    scrollProgress >= progressThreshold
      ? 0
      : maxPadding - scrollProgress * (maxPadding - minPadding);

  const wordCount = words.length;
  // برای موبایل scroll range کمتر برای تجربه بهتر
  const scrollRangePerWord = isMobile
    ? windowHeight * 0.12
    : windowHeight * 0.15;
  const totalScrollRange = scrollRangePerWord * wordCount;

  // 🔸 ارتفاع نهایی: دقیقاً برای highlight شدن آخرین کلمه
  // منطق sticky positioning:
  // - scrollStart = sectionTop - stickyOffset (در handleScroll محاسبه می‌شود)
  // - scrollEnd = scrollStart + totalScrollRange (وقتی progress = 1)
  // - وقتی scrollY = scrollEnd، sticky element در پایین section است
  // - sectionHeight باید دقیقاً totalScrollRange باشد
  // - paddingTop و paddingBottom جداگانه برای spacing
  // ارتفاع دقیق: totalScrollRange برای اسکرول sticky element
  // وقتی progress >= 0.95، dynamicPadding = 0 و بخش بعدی شروع می‌شود
  const requiredHeight = totalScrollRange;

  // Padding top responsive - برای موبایل کمتر تا متن به بالا نرود
  const paddingTop = isMobile ? "6rem" : "16rem";

  return (
    <div
      ref={sectionRef}
      className={`relative w-full transition-opacity duration-1000 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        paddingTop: paddingTop,
        paddingBottom: `${Math.max(0, dynamicPadding)}px`,
        height: `${requiredHeight}px`, // ارتفاع ثابت برای sticky positioning
      }}
    >
      <div
        className="sticky w-full flex justify-center items-center z-10"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          paddingLeft: isMobile ? "1rem" : "0",
          paddingRight: isMobile ? "1rem" : "0",
        }}
      >
        <p
          className={`font-bold text-center leading-relaxed ${
            isMobile
              ? "text-lg sm:text-xl w-full max-w-[95%] px-2"
              : "text-5xl w-1/2"
          }`}
        >
          {words.map((word, index) => {
            const isHighlighted = index === highlightedIndex;
            const isPast = index < highlightedIndex;
            const distance = Math.abs(index - highlightedIndex);

            // محاسبه blur بر اساس فاصله از کلمه highlighted (responsive)
            // برای موبایل blur کمتر برای خوانایی بهتر
            const isMobileBlur = windowWidth < 768;
            const blurMultiplier = isMobileBlur ? 0.7 : 1;
            let blurValue = 0;
            if (highlightedIndex === -1) {
              // اگر هنوز هیچ کلمه‌ای highlight نشده، همه تار باشند
              blurValue = 4 * blurMultiplier;
            } else if (isHighlighted) {
              // کلمه highlight شده کاملاً واضح
              blurValue = 0;
            } else if (isPast) {
              // کلمات گذشته: blur کمتر (بر اساس فاصله)
              // با استفاده از تابع نمایی برای transition نرم‌تر
              blurValue = Math.max(
                0,
                1.2 * Math.exp(-distance * 0.45) * blurMultiplier
              );
            } else {
              // کلمات آینده: blur بیشتر (بر اساس فاصله)
              blurValue = Math.min(
                5 * blurMultiplier,
                (2.8 + distance * 0.4) * blurMultiplier
              );
            }

            // محاسبه opacity بر اساس blur و distance
            let opacity = 1;
            if (isHighlighted) {
              opacity = 1;
            } else if (isPast) {
              // کلمات گذشته: opacity بالاتر
              opacity = Math.max(0.75, 1 - distance * 0.08);
            } else {
              // کلمات آینده: opacity پایین‌تر
              opacity = Math.max(0.35, 0.65 - distance * 0.06);
            }

            // محاسبه scale (responsive - برای موبایل scale کمتر)
            const isMobileScale = windowWidth < 768;
            const baseScale = isMobileScale ? 1.05 : 1.1;
            const scale = isHighlighted
              ? baseScale
              : isPast
              ? isMobileScale
                ? 1.02
                : 1.05
              : isMobileScale
              ? 0.97
              : 0.95;

            return (
              <span
                key={index}
                className={`inline-block ${
                  isHighlighted
                    ? `text-[#f5c2c7] font-extrabold ${
                        windowWidth < 768
                          ? "drop-shadow-[0_0_8px_rgba(245,194,199,0.4)]"
                          : "drop-shadow-[0_0_15px_rgba(245,194,199,0.5)]"
                      }`
                    : isPast
                    ? "text-[#f5c2c7]"
                    : "text-white"
                }`}
                style={{
                  opacity: opacity,
                  transform: `scale(${scale})`,
                  filter: `blur(${blurValue}px)`,
                  transition:
                    "opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                  transitionDelay: isHighlighted
                    ? "0ms"
                    : `${Math.min(distance * 20, 180)}ms`,
                  transformOrigin: "center",
                  willChange: "filter, opacity, transform",
                  backfaceVisibility: "hidden",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                {word}
                {index < words.length - 1 && "\u00A0"}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}

export default Information;
