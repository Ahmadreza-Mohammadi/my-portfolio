import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ParticlesBackground from "./components/common/ParticlesBackground";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "fa" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", i18n.language);
    }
  }, [i18n.language]);

  return (
    <div className="min-h-screen flex flex-col gradient-dark text-white relative">
      <ParticlesBackground particleCount={100} staticParticleCount={30} />
      <div className="relative z-10">
        <Navbar />
        <div className="flex flex-col gap-10 px-0 md:px-64 animate-pageFadeIn">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
