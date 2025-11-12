import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

function ProjectCard({ project, index }) {
  const [itemRef, isItemVisible] = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    delay: index * 100,
  });

  return (
    <article
      ref={itemRef}
      className={`group card-surface rounded-3xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 transition-all duration-[350ms] hover:-translate-y-[6px] hover:scale-[1.02] w-full min-w-0 sm:min-w-[280px] max-w-full scroll-stagger-item ${
        isItemVisible ? "visible" : ""
      }`}
    >
      {/* Project Image Placeholder */}
      <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-[rgba(69,0,3,0.4)] to-[rgba(28,27,32,0.6)] border border-white/10 group-hover:border-white/20 transition-all duration-[350ms]">
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-[350ms] group-hover:scale-110">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-16 w-16 text-white/20 group-hover:text-white/30 transition-colors duration-[350ms]"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18" />
            <path d="M9 21V9" />
          </svg>
        </div>
        {/* Overlay effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms]" />
      </div>

      {/* Project Info */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.3em] text-[#f5c2c7] group-hover:text-[#f5c2c7]/80 transition-colors duration-[350ms]">
            {project.category}
          </span>
          <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-[350ms] delay-75">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 .5C5.649.5.5 5.65.5 12.004c0 5.1 3.292 9.426 7.865 10.956.575.105.786-.25.786-.555 0-.275-.01-1.004-.015-1.97-3.2.696-3.876-1.543-3.876-1.543-.523-1.327-1.278-1.681-1.278-1.681-1.044-.714.08-.7.08-.7 1.154.081 1.762 1.186 1.762 1.186 1.027 1.76 2.694 1.252 3.35.957.105-.744.402-1.252.732-1.541-2.554-.29-5.237-1.277-5.237-5.682 0-1.255.45-2.28 1.186-3.083-.12-.29-.513-1.458.112-3.04 0 0 .966-.31 3.165 1.177a10.95 10.95 0 0 1 2.88-.388c.977.005 1.963.132 2.88.388 2.197-1.487 3.16-1.177 3.16-1.177.627 1.582.234 2.75.115 3.04.738.803 1.185 1.828 1.185 3.083 0 4.419-2.688 5.388-5.254 5.673.414.358.78 1.066.78 2.149 0 1.552-.014 2.805-.014 3.188 0 .309.206.667.793.554C20.213 21.424 23.5 17.1 23.5 12.004 23.5 5.65 18.35.5 12 .5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Live Demo"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <path d="m15 3 6 6" />
                  <path d="M10 14 21 3" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white group-hover:text-[#f5c2c7] transition-colors duration-[350ms]">
          {project.title}
        </h3>

        <p className="text-sm md:text-base text-gray-300 leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-[350ms]">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-gray-400 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-gray-300 transition-all duration-[350ms]"
              style={{
                transitionDelay: `${techIndex * 30}ms`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
