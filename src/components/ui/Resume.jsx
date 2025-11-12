import React, { useRef } from "react";
import ScrollSection from "../common/ScrollSection";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

function Resume() {
  const [textRef, isTextVisible] = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
    delay: 0,
  });

  const [buttonRef, isButtonVisible] = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
    delay: 200,
  });

  const buttonElementRef = useRef(null);

  const handlePointerMove = (event) => {
    const button = buttonElementRef.current;
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    button.style.setProperty("--hover-x", `${x}%`);
    button.style.setProperty("--hover-y", `${y}%`);
  };

  const handlePointerLeave = () => {
    const button = buttonElementRef.current;
    if (!button) return;
    button.style.setProperty("--hover-x", "50%");
    button.style.setProperty("--hover-y", "50%");
  };

  const handleDownload = () => {
    // در اینجا می‌توانید مسیر فایل رزومه را قرار دهید
    const resumeUrl = "/Ahmadreza-Mohammadi_Resume (14).pdf"; // مسیر فایل رزومه
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Ahmadreza-Mohammadi-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ScrollSection
      animationType="fade-up"
      threshold={0.15}
      rootMargin="0px 0px -150px 0px"
      className="mt-20 flex flex-col gap-8"
      as="section"
    >
      <div className="flex flex-col items-center gap-6 text-center px-4 lg:px-0">
        <div
          ref={textRef}
          className={`glass-text-container flex flex-col gap-4 max-w-2xl transition-all duration-700 ease-out ${
            isTextVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Resume
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            Download my resume to learn more about my professional experience,
            skills, and achievements.
          </p>
        </div>

        <div
          ref={buttonRef}
          className={`mt-2 transition-all duration-700 ease-out ${
            isButtonVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <button
            ref={buttonElementRef}
            onClick={handleDownload}
            onMouseMove={handlePointerMove}
            onMouseLeave={handlePointerLeave}
            className="btn-accent btn-intelligent px-8 py-4 rounded-full cursor-pointer text-sm md:text-base font-semibold uppercase tracking-[0.2em] flex items-center gap-3 group relative"
          >
            <span className="relative z-10">Download Resume</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1 relative z-10"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </button>
        </div>
      </div>
    </ScrollSection>
  );
}

export default Resume;
