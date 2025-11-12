import { Link } from "react-router-dom";
import { featuredProjects } from "../constants/const";
import ScrollSection from "../common/ScrollSection";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import ProjectCard from "./ProjectCard";

function PreviewProjects() {
  const [headerRef, isHeaderVisible] = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <ScrollSection
      animationType="fade-up"
      threshold={0.15}
      rootMargin="0px 0px -150px 0px"
      className="mt-20 flex flex-col gap-8"
      as="section"
    >
      <div
        ref={headerRef}
        className={`px-4 lg:px-0 flex flex-col items-center gap-4 md:flex-row md:justify-between transition-all duration-700 ease-out ${
          isHeaderVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-400">
            A selection of my recent work and personal projects
          </p>
        </div>
        <Link
          to="/projects"
          className="group flex items-center gap-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:text-white hover:gap-3"
        >
          <span className="relative">
            View All Projects
            <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 px-4 lg:px-0">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </ScrollSection>
  );
}

export default PreviewProjects;
