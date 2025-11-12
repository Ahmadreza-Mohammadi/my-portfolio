import Cards from "../components/ui/Cards";
import HeroSection from "../components/ui/HeroSection";
import Information from "../components/ui/Information";
import PreviewProjects from "../components/ui/PreviewProjects";

function Home() {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Information />
      <PreviewProjects />
    </div>
  );
}

export default Home;
