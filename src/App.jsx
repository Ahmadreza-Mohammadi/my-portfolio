import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col gradient-dark text-white">
      <Navbar />
      <div className="flex flex-col gap-10 px-0 md:px-64 animate-pageFadeIn">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
