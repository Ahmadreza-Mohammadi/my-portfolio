import { useEffect, useRef, useState } from "react";

/**
 * Hook برای انیمیشن‌های scroll-based
 * @param {Object} options - تنظیمات hook
 * @param {number} options.threshold - حد آستانه برای Intersection Observer (0-1)
 * @param {string} options.rootMargin - margin برای Intersection Observer
 * @param {boolean} options.triggerOnce - آیا انیمیشن فقط یک بار اجرا شود
 * @param {number} options.delay - تاخیر انیمیشن بر حسب میلی‌ثانیه
 * @returns {[React.RefObject, boolean]} - [ref, isVisible]
 */
export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = "0px 0px -100px 0px",
  triggerOnce = true,
  delay = 0,
} = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => {
                setIsVisible(true);
                if (triggerOnce) {
                  setHasAnimated(true);
                }
              }, delay);
            } else {
              setIsVisible(true);
              if (triggerOnce) {
                setHasAnimated(true);
              }
            }
          } else if (!triggerOnce && !hasAnimated) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasAnimated]);

  return [elementRef, isVisible];
}

/**
 * Hook برای انیمیشن‌های staggered (تدریجی)
 * @param {Object} options - تنظیمات hook
 * @param {number} options.threshold - حد آستانه برای Intersection Observer
 * @param {string} options.rootMargin - margin برای Intersection Observer
 * @param {number} options.staggerDelay - تاخیر بین هر آیتم (میلی‌ثانیه)
 * @returns {[React.RefObject, boolean, number]} - [ref, isVisible, itemIndex]
 */
export function useStaggeredAnimation({
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  staggerDelay = 100,
} = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin]);

  return [elementRef, isVisible, staggerDelay];
}
