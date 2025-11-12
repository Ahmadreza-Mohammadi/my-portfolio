import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

/**
 * Component wrapper برای انیمیشن‌های scroll-based
 * @param {React.ReactNode} children - محتوای کامپوننت
 * @param {string} animationType - نوع انیمیشن: 'fade-up', 'fade-in', 'slide-left', 'slide-right', 'scale-in'
 * @param {number} delay - تاخیر انیمیشن (میلی‌ثانیه)
 * @param {number} threshold - حد آستانه Intersection Observer
 * @param {string} rootMargin - margin برای Intersection Observer
 * @param {boolean} triggerOnce - آیا انیمیشن فقط یک بار اجرا شود
 * @param {string} className - کلاس‌های اضافی
 * @param {string} as - نوع تگ HTML (div, section, etc.)
 */
function ScrollSection({
  children,
  animationType = "fade-up",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -100px 0px",
  triggerOnce = true,
  className = "",
  as = "div",
}) {
  const [ref, isVisible] = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce,
    delay,
  });

  const animationClass = `scroll-${animationType} ${
    isVisible ? "visible" : ""
  }`;

  return React.createElement(
    as,
    {
      ref,
      className: `${animationClass} ${className}`.trim(),
    },
    children
  );
}

export default ScrollSection;
