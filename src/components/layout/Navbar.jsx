import { useEffect, useRef, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion as Motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { navLinks } from "../constants/const";

const MOBILE_MENU_ANIMATION_DURATION = 250;

function Navbar() {
  const [menuState, setMenuState] = useState("closed");
  const animationTimeoutRef = useRef(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const clearAnimationTimeout = useCallback(() => {
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
      animationTimeoutRef.current = null;
    }
  }, []);

  useEffect(
    () => () => {
      clearAnimationTimeout();
    },
    [clearAnimationTimeout]
  );

  const openMenu = useCallback(() => {
    if (menuState === "open" || menuState === "opening") {
      return;
    }
    clearAnimationTimeout();
    setMenuState("opening");
    animationTimeoutRef.current = window.setTimeout(() => {
      setMenuState("open");
      animationTimeoutRef.current = null;
    }, MOBILE_MENU_ANIMATION_DURATION);
  }, [menuState, clearAnimationTimeout]);

  const closeMenu = useCallback(() => {
    if (menuState === "closing" || menuState === "closed") {
      return;
    }
    clearAnimationTimeout();
    setMenuState("closing");
    /* "closed" is set in onAnimationComplete of the mobile menu motion.div */
  }, [menuState, clearAnimationTimeout]);

  // Close menu when clicking outside
  useEffect(() => {
    // Only add listener when menu is open (not closed or closing)
    if (menuState === "closed" || menuState === "closing") return;

    const handleClickOutside = (event) => {
      // Check if click is outside menu and button
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    // Add event listener with a small delay to avoid closing immediately when opening
    const timeoutId = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuState, closeMenu]);

  const linkIcons = {
    "/": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M3.5 11 12 3l8.5 8" />
        <path d="M5 11v9.5a.5.5 0 0 0 .5.5H18.5a.5.5 0 0 0 .5-.5V11" />
        <path d="M10.5 20.5V16h3v4.5" />
      </svg>
    ),
    "/projects": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="5" height="16" rx="1.5" />
        <rect x="11" y="8" width="10" height="12" rx="1.5" />
        <path d="M14 12h3" />
        <path d="M14 15h5" />
      </svg>
    ),
    "/about": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <circle cx="12" cy="7" r="3.5" />
        <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
      </svg>
    ),
    "/contact": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m5 7 7 5 7-5" />
      </svg>
    ),
  };

  const toggleMenu = (event) => {
    // Prevent event from bubbling to document click handler
    if (event) {
      event.stopPropagation();
    }
    if (menuState === "open" || menuState === "opening") {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const isMenuVisible = menuState !== "closed";
  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <Motion.nav
      className="sticky top-0 z-50 flex justify-center"
      dir="ltr"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 24,
        mass: 0.6,
        delay: 0.05,
      }}
    >
      <div className="navbar-inner relative flex w-full items-center justify-between gap-2 bg-white/10 px-2 py-2 text-gray-300 shadow-lg shadow-black/30 backdrop-blur-xl sm:px-4 sm:py-3 md:px-6 md:py-4 lg:px-8">
        <Link
          to="/about"
          className="text-[16px] sm:text-sm md:text-lg font-semibold uppercase tracking-tight sm:tracking-[0.2em] text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis shrink min-w-0"
          style={{ maxWidth: "calc(100% - 3.5rem)" }}
        >
          <span className="hidden min-[400px]:inline">
            {t("nav.brandName")}
          </span>
          <span className="min-[400px]:hidden">{t("nav.brandShort")}</span>
        </Link>
        <div
          dir={i18n.language === "fa" ? "rtl" : "ltr"}
          className="hidden gap-6 text-lg font-medium tracking-wide md:flex"
        >
          {navLinks.map((link) => (
            <Link
              to={link.path}
              key={link.nameKey}
              aria-current={isActive(link.path) ? "page" : undefined}
              className={`relative flex items-center gap-2 rounded-full px-3 py-1 transition-all duration-300 hover:text-white hover:drop-shadow-lg after:absolute after:left-3 after:-bottom-0.5 after:h-px after:w-0 after:bg-white after:opacity-70 after:transition-all after:duration-300 ${
                isActive(link.path)
                  ? "text-white drop-shadow-md bg-white/10 after:w-0"
                  : "text-gray-300 hover:after:w-[calc(100%-1.5rem)]"
              } ${i18n.language === "fa" ? "after:left-auto after:right-3" : ""}`}
            >
              <span className="opacity-70">{linkIcons[link.path] ?? null}</span>
              {t(link.nameKey)}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => i18n.changeLanguage(i18n.language === "fa" ? "en" : "fa")}
            className="cursor-pointer rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white/90 transition-all duration-300 hover:bg-white/20 hover:text-white"
            aria-label={i18n.language === "fa" ? "Switch to English" : "تبدیل به فارسی"}
          >
            {i18n.language === "fa" ? "EN" : "FA"}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 transition-all duration-300 hover:bg-white/20 hover:text-white cursor-pointer"
            aria-label={theme === "dark" ? "حالت روشن" : "Dark mode"}
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                <path d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            )}
          </button>
          <a
            href="https://github.com/Ahmadreza-Mohammadi"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 transition-all duration-300 hover:bg-white/20 hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 .5C5.649.5.5 5.65.5 12.004c0 5.1 3.292 9.426 7.865 10.956.575.105.786-.25.786-.555 0-.275-.01-1.004-.015-1.97-3.2.696-3.876-1.543-3.876-1.543-.523-1.327-1.278-1.681-1.278-1.681-1.044-.714.08-.7.08-.7 1.154.081 1.762 1.186 1.762 1.186 1.027 1.76 2.694 1.252 3.35.957.105-.744.402-1.252.732-1.541-2.554-.29-5.237-1.277-5.237-5.682 0-1.255.45-2.28 1.186-3.083-.12-.29-.513-1.458.112-3.04 0 0 .966-.31 3.165 1.177a10.95 10.95 0 0 1 2.88-.388c.977.005 1.963.132 2.88.388 2.197-1.487 3.16-1.177 3.16-1.177.627 1.582.234 2.75.115 3.04.738.803 1.185 1.828 1.185 3.083 0 4.419-2.688 5.388-5.254 5.673.414.358.78 1.066.78 2.149 0 1.552-.014 2.805-.014 3.188 0 .309.206.667.793.554C20.213 21.424 23.5 17.1 23.5 12.004 23.5 5.65 18.35.5 12 .5Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/Ahmadreza-Mohammadi"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 transition-all duration-300 hover:bg-white/20 hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M4.983 3.5C4.983 4.604 4.105 5.5 3 5.5s-1.983-.896-1.983-2C1.017 2.395 1.895 1.5 3 1.5s1.983.895 1.983 2Zm.034 3.5H1V22h4.017V7ZM8.171 7H12.1v2.05h.058c.546-1.034 1.884-2.124 3.876-2.124C21.356 6.926 22 9.669 22 13.266V22h-4.017v-7.574c0-1.808-.031-4.132-2.517-4.132-2.517 0-2.903 1.964-2.903 3.997V22H8.546V7h-.375Z" />
            </svg>
          </a>
        </div>
        <button
          ref={buttonRef}
          type="button"
          aria-expanded={isMenuVisible}
          onClick={toggleMenu}
          style={{
            width: "2.5rem",
            height: "2.5rem",
            minWidth: "2.5rem",
            minHeight: "2.5rem",
            flexShrink: 0,
            aspectRatio: "1 / 1",
          }}
          className="relative flex items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 transition-all duration-300 hover:bg-white/20 hover:text-white md:hidden"
        >
          <div className="hamburger-icon-wrapper">
            {/* Hamburger Icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`hamburger-icon-svg h-5 w-5 ${
                isMenuVisible ? "hiding" : ""
              }`}
              aria-hidden="true"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
            {/* Close Icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`close-icon-svg h-5 w-5 ${
                isMenuVisible ? "showing" : "hiding"
              }`}
              aria-hidden="true"
            >
              <path d="M6 6 18 18" />
              <path d="M18 6 6 18" />
            </svg>
          </div>
        </button>
        {isMenuVisible && (
          <Motion.div
            ref={menuRef}
            className="absolute left-0 right-0 top-[calc(100%+0.75rem)] origin-top md:hidden"
            initial={{ opacity: 0, scaleY: 0.92 }}
            animate={
              menuState === "closing"
                ? { opacity: 0, scaleY: 0.92 }
                : { opacity: 1, scaleY: 1 }
            }
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
              mass: 0.6,
            }}
            onAnimationComplete={() => {
              if (menuState === "closing") {
                setMenuState("closed");
              }
            }}
          >
            <div
              dir={i18n.language === "fa" ? "rtl" : "ltr"}
              className={`mobile-menu-surface flex flex-col gap-2 rounded-3xl border border-white/10 p-4 text-sm font-medium text-gray-100 shadow-2xl shadow-black/40 backdrop-blur-2xl ${i18n.language === "fa" ? "text-right" : ""}`}
            >
              <div className={`flex items-center gap-2 pb-2 border-b border-white/10 ${i18n.language === "fa" ? "justify-start" : "justify-end"}`}>
                <button
                  type="button"
                  onClick={() => i18n.changeLanguage(i18n.language === "fa" ? "en" : "fa")}
                  className="cursor-pointer rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white/90"
                >
                  {i18n.language === "fa" ? "EN" : "FA"}
                </button>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 transition-all duration-300 hover:bg-white/20 hover:text-white cursor-pointer"
                  aria-label={theme === "dark" ? "حالت روشن" : "Dark mode"}
                >
                  {theme === "dark" ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                      <path d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                  )}
                </button>
                <a
                  href="https://github.com/Ahmadreza-Mohammadi"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 transition-all duration-300 hover:bg-white/20 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 .5C5.649.5.5 5.65.5 12.004c0 5.1 3.292 9.426 7.865 10.956.575.105.786-.25.786-.555 0-.275-.01-1.004-.015-1.97-3.2.696-3.876-1.543-3.876-1.543-.523-1.327-1.278-1.681-1.278-1.681-1.044-.714.08-.7.08-.7 1.154.081 1.762 1.186 1.762 1.186 1.027 1.76 2.694 1.252 3.35.957.105-.744.402-1.252.732-1.541-2.554-.29-5.237-1.277-5.237-5.682 0-1.255.45-2.28 1.186-3.083-.12-.29-.513-1.458.112-3.04 0 0 .966-.31 3.165 1.177a10.95 10.95 0 0 1 2.88-.388c.977.005 1.963.132 2.88.388 2.197-1.487 3.16-1.177 3.16-1.177.627 1.582.234 2.75.115 3.04.738.803 1.185 1.828 1.185 3.083 0 4.419-2.688 5.388-5.254 5.673.414.358.78 1.066.78 2.149 0 1.552-.014 2.805-.014 3.188 0 .309.206.667.793.554C20.213 21.424 23.5 17.1 23.5 12.004 23.5 5.65 18.35.5 12 .5Z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/Ahmadreza-Mohammadi"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 transition-all duration-300 hover:bg-white/20 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d="M4.983 3.5C4.983 4.604 4.105 5.5 3 5.5s-1.983-.896-1.983-2C1.017 2.395 1.895 1.5 3 1.5s1.983.895 1.983 2Zm.034 3.5H1V22h4.017V7ZM8.171 7H12.1v2.05h.058c.546-1.034 1.884-2.124 3.876-2.124C21.356 6.926 22 9.669 22 13.266V22h-4.017v-7.574c0-1.808-.031-4.132-2.517-4.132-2.517 0-2.903 1.964-2.903 3.997V22H8.546V7h-.375Z" />
                  </svg>
                </a>
              </div>
              {navLinks.map((link) => (
                <Link
                  to={link.path}
                  key={link.nameKey}
                  onClick={(e) => {
                    e.stopPropagation();
                    closeMenu();
                  }}
                  aria-current={isActive(link.path) ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-2xl px-3 py-2 transition-all duration-300 hover:bg-white/10 ${
                    isActive(link.path) ? "bg-white/10 text-white" : ""
                  }`}
                >
                  <span className="opacity-70">
                    {linkIcons[link.path] ?? null}
                  </span>
                  {t(link.nameKey)}
                </Link>
              ))}
            </div>
          </Motion.div>
        )}
      </div>
    </Motion.nav>
  );
}

export default Navbar;
