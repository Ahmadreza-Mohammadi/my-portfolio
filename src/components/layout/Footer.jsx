import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import { navLinks } from "../constants/const";

function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Ahmadreza-Mohammadi",
      icon: (
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
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/Ahmadreza-Mohammadi",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M4.983 3.5C4.983 4.604 4.105 5.5 3 5.5s-1.983-.896-1.983-2C1.017 2.395 1.895 1.5 3 1.5s1.983.895 1.983 2Zm.034 3.5H1V22h4.017V7ZM8.171 7H12.1v2.05h.058c.546-1.034 1.884-2.124 3.876-2.124C21.356 6.926 22 9.669 22 13.266V22h-4.017v-7.574c0-1.808-.031-4.132-2.517-4.132-2.517 0-2.903 1.964-2.903 3.997V22H8.546V7h-.375Z" />
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:ahmadreza.mohammadi@example.com",
      icon: (
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
    },
  ];

  return (
    <footer className="mt-10">
      <div
        className="relative isolate border-t border-white/10 backdrop-blur-[20px]"
        style={{
          background:
            "radial-gradient(120% 120% at 90% 100%, rgba(69, 0, 3, 0.35) 0%, rgba(0, 0, 0, 0) 55%), radial-gradient(120% 130% at -10% 100%, rgba(69, 0, 3, 0.25) 0%, rgba(0, 0, 0, 0.05) 60%), linear-gradient(0deg, rgba(9, 9, 11, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 -20px 45px -20px rgba(37, 7, 10, 0.5)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Before pseudo-element effect */}
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0) 30%)",
            mixBlendMode: "screen",
          }}
        />
        {/* After pseudo-element effect */}
        <div
          className="pointer-events-none absolute inset-0 -top-[20%] opacity-30"
          style={{
            background:
              "radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0) 50%)",
            mixBlendMode: "soft-light",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
            {/* Brand Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-white">
                {t("common.name")}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {t("footer.brandDesc")}
              </p>
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={
                      social.url.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      social.url.startsWith("mailto:")
                        ? undefined
                        : "noreferrer"
                    }
                    aria-label={social.name}
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 transition-all duration-300 hover:scale-110 hover:border-white/25 hover:bg-white/20 hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-300">
                {t("footer.quickLinks")}
              </h4>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.nameKey}
                    to={link.path}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-all duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-white/60 transition-all duration-300 group-hover:w-4" />
                    {t(link.nameKey)}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-300">
                {t("footer.getInTouch")}
              </h4>
              <div className="flex flex-col gap-3 text-sm text-gray-400">
                <a
                  href="mailto:ahmadreza.mohammadi@example.com"
                  className="group flex items-center gap-3 transition-colors duration-300 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 opacity-70"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2.5" />
                    <path d="m5 7 7 5 7-5" />
                  </svg>
                  <span>ahmadrezamohammadi777@gmail.com</span>
                </a>
                <div className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 opacity-70"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+98-9128809474</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-xs text-gray-500">
                {t("footer.rights", { year: currentYear })}
              </p>
              <p className="text-xs text-gray-500">
                <Trans i18nKey="footer.builtWith" components={{ 1: <span className="text-[#f5c2c7]" />, 2: <span className="text-[#f5c2c7]" /> }} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
