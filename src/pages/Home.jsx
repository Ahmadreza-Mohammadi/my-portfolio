import { lazy, Suspense } from "react";
import HeroSection from "../components/ui/HeroSection";

// Lazy load components for better performance
const Cards = lazy(() => import("../components/ui/Cards"));
const Information = lazy(() => import("../components/ui/Information"));
const PreviewProjects = lazy(() => import("../components/ui/PreviewProjects"));
const Resume = lazy(() => import("../components/ui/Resume"));

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="w-12 h-12 border-4 border-[#f5c2c7] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <HeroSection />
      <Suspense fallback={<LoadingFallback />}>
        <Cards />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Information />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <PreviewProjects />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Resume />
      </Suspense>
    </div>
  );
}

export default Home;
