"use client";
import projectsData from "@/data/projectsData";
import Image from "next/image";
import { useTransitionRouter } from "next-view-transitions";

import { useEffect, useState } from "react";
import { useFilterStore, useOrderStore } from "@/store/zustand";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav";
import SearchFilter from "./search-filter";
import Project from "./project";
import ProjectCascate from "./project";

function slideInOut() {
  document.documentElement.animate(
    [
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0.2, transform: "translateY(-35%)" },
    ],
    {
      duration: 700,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
      { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
    ],
    {
      duration: 700,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}

const opacityFunction = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};

const ProjectsCascate = () => {
  const router = useTransitionRouter();
  const { isFilterOpen, openFilter, closeFilter } = useFilterStore();
  const { order } = useOrderStore();

  const sortedProjects = [...projectsData].sort((a, b) => {
    if (order === "alphabetical") return a.title.localeCompare(b.title);
    if (order === "oldest") return new Date(a.year) - new Date(b.year);
    return new Date(b.year) - new Date(a.year);
  });

  const [currentProject, setCurrentProject] = useState(sortedProjects[0]);

  useEffect(() => {
    const handleScroll = () => {
      sortedProjects.forEach((project) => {
        const section = document.getElementById(`project-${project.id}`);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= 0 /* desktop = 95 */ &&
            rect.bottom >= 0 /* desktop = 0 */
          ) {
            setCurrentProject(project);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sortedProjects]);

  return (
    <>
      <AnimatePresence>
        {!isFilterOpen && (
          <Nav
            title={currentProject.title}
            projectId={currentProject.id}
            router={router}
            onClick={openFilter}
            opacityFunction={opacityFunction}
            slideInOut={slideInOut}
            key="project-nav"
          />
        )}
      </AnimatePresence>

      <section className="cursor-pointer">
        {sortedProjects.map((project, i) => (
          <ProjectCascate
            key={i}
            project={project}
            router={router}
            slideInOut={slideInOut}
          />
        ))}
      </section>

      <AnimatePresence>
        {isFilterOpen && (
          <SearchFilter
            key="search-filter"
            closeFilter={closeFilter}
            router={router}
            projectsData={projectsData}
            opacityFunction={opacityFunction}
            slideInOut={slideInOut}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsCascate;
