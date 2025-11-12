import Cards from "../components/ui/Cards";
import HeroSection from "../components/ui/HeroSection";
import Information from "../components/ui/Information";
import PreviewProjects from "../components/ui/PreviewProjects";
import Resume from "../components/ui/Resume";

function Home() {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Information />
      <PreviewProjects />
      <Resume />
    </div>
  );
}

export default Home;
