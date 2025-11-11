import { useEffect, useRef, useState } from "react";

function HeroSection() {
  const tagline =
    "Crafting clean, responsive UIs with modern Next js and React js.";
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
        Ahmadreza Mohammadi
      </span>
      <div className="flex justify-center items-center">
        <img
          className="h-48 md:h-96 rounded-t-full"
          src="/public/images/unnamed.jpg"
        />
      </div>
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
        Confirm Your Seat
      </button>
    </div>
  );
}

export default HeroSection;
