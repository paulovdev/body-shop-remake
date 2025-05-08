import projectsData from "@/data/projectsData";
import { useOrderStore } from "@/store/zustand";
import { useTransitionRouter } from "next-view-transitions";
import React from "react";
import ProjectList from "./project";

function slideInOut() {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.2,
        transform: "translateY(-35%)",
      },
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
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      },
    ],
    {
      duration: 700,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}

const ProjectsList = () => {
  const router = useTransitionRouter();
  const { order } = useOrderStore();

  const sortedProjects = [...projectsData].sort((a, b) => {
    if (order === "alphabetical") return a.title.localeCompare(b.title);
    if (order === "oldest") return new Date(a.year) - new Date(b.year);
    return new Date(b.year) - new Date(a.year);
  });

  return (
    <div>
      {sortedProjects.map((project, i) => (
        <ProjectList
          key={i}
          project={project}
          index={i + 1}
          router={router}
          slideInOut={slideInOut}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
