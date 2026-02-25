import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function HeroSection() {
  const { t } = useTranslation();
  const tagline = t("hero.tagline");
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const buttonRef = useRef(null);

  const handlePointerMove = (event) => {
    const button = buttonRef.current;
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    button.style.setProperty("--hover-x", `${x}%`);
    button.style.setProperty("--hover-y", `${y}%`);
  };

  const handlePointerLeave = () => {
    const button = buttonRef.current;
    if (!button) return;
    button.style.setProperty("--hover-x", "50%");
    button.style.setProperty("--hover-y", "50%");
  };

  useEffect(() => {
    setTypedText("");
    setIsTyping(true);
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(tagline.slice(0, index + 1));
      index += 1;

      if (index === tagline.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [tagline]);

  return (
    <div className="mt-4 flex flex-col items-center gap-2 hero-sequence">
      <span className="text-[54px] md:text-[94px] tracking-tight text-center">
        {t("common.name")}
      </span>
      <motion.div
        className="hero-avatar flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.82, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 16,
          mass: 0.9,
          delay: 0.25,
        }}
        whileHover={{
          scale: 1.04,
          transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
        }}
      >
        <motion.img
          className="h-48 md:h-96 rounded-t-full object-cover shadow-2xl shadow-black/30 ring-2 ring-white/10"
          src="/public/images/unnamed.jpg"
          alt={t("common.name")}
          initial={{ filter: "blur(8px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          whileHover={{
            boxShadow:
              "0 25px 50px -12px rgba(0,0,0,0.45), 0 0 0 2px rgba(255,255,255,0.25)",
            transition: { duration: 0.25 },
          }}
        />
      </motion.div>
      <p className="text-center text-[20px] md:text-[44px] tracking-tight w-1/2 min-h-16">
        <span>{typedText}</span>
        <span className={`typing-cursor ${isTyping ? "active" : ""}`}>|</span>
      </p>
      <button
        ref={buttonRef}
        className="btn-accent btn-intelligent px-6 py-3 rounded-4xl cursor-pointer text-sm md:text-base font-semibold uppercase tracking-[0.2em]"
        onMouseMove={handlePointerMove}
        onMouseLeave={handlePointerLeave}
      >
        {t("hero.ctaConfirm")}
      </button>
    </div>
  );
}

export default HeroSection;
