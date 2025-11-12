import { useEffect, useRef } from "react";

function ParticlesBackground({
  particleCount = 50,
  staticParticleCount = 15,
  className = "",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particles = [];

    // ایجاد static particles (ثابت در پس‌زمینه)
    for (let i = 0; i < staticParticleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle particle-static";

      // موقعیت تصادفی در صفحه
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      // اندازه کوچک‌تر برای static particles
      const size = Math.random() * 3 + 1.5; // بین 1.5 تا 4.5 پیکسل
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // opacity اولیه - در animation تغییر می‌کند اما برای شروع نیاز است
      // opacity در CSS animation کنترل می‌شود

      // تاخیر تصادفی برای انیمیشن (برای تنوع)
      particle.style.animationDelay = `${Math.random() * 5}s`;

      // مدت زمان انیمیشن کمی متفاوت برای هر particle
      const animationDuration = 15 + Math.random() * 10; // بین 15 تا 25 ثانیه
      particle.style.animationDuration = `${animationDuration}s`;
      particle.style.animationTimingFunction = "ease-in-out";
      particle.style.animationIterationCount = "infinite";

      container.appendChild(particle);
      particles.push(particle);
    }

    // ایجاد moving particles (در حال حرکت)
    const movingParticleCount = particleCount - staticParticleCount;
    for (let i = 0; i < movingParticleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      // تعیین جهت حرکت
      const direction = i % 4;
      if (direction === 0) {
        // از پایین به بالا
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = "100%";
      } else if (direction === 1) {
        // از بالا به پایین
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = "-10%";
      } else if (direction === 2) {
        // از راست به چپ
        particle.style.left = "100%";
        particle.style.top = `${Math.random() * 100}%`;
      } else {
        // از چپ به راست
        particle.style.left = "-10%";
        particle.style.top = `${Math.random() * 100}%`;
      }

      // اندازه تصادفی
      const size = Math.random() * 4 + 2; // بین 2 تا 6 پیکسل
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // تاخیر و مدت زمان انیمیشن تصادفی
      particle.style.animationDelay = `${Math.random() * 5}s`;
      const duration = 15 + Math.random() * 20; // بین 15 تا 35 ثانیه
      particle.style.animationDuration = `${duration}s`;

      // opacity تصادفی
      const opacity = Math.random() * 0.5 + 0.2; // بین 0.2 تا 0.7
      particle.style.opacity = opacity.toString();

      // تعیین نوع انیمیشن بر اساس جهت
      if (direction === 1) {
        particle.style.animationName = "particleFloatReverse";
      } else if (direction === 2) {
        particle.style.animationName = "particleFloatLeft";
      } else if (direction === 3) {
        particle.style.animationName = "particleFloatRight";
      } else {
        // direction === 0: از پایین به بالا (default)
        particle.style.animationName = "particleFloat";
      }

      // تنظیم animation timing
      particle.style.animationTimingFunction = "linear";
      particle.style.animationIterationCount = "infinite";

      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach((particle) => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, [particleCount, staticParticleCount]);

  return (
    <div
      ref={containerRef}
      className={`particles-background ${className}`}
      aria-hidden="true"
    />
  );
}

export default ParticlesBackground;
