import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ParticlesBackground from "./components/common/ParticlesBackground";

function App() {
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
