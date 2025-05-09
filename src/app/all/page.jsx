"use client";
import projectsData from "@/data/projectsData";
import { useTransitionRouter } from "next-view-transitions";
import Image from "next/image";
import React from "react";
import { useOrderStore } from "@/store/zustand";

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

const AllGridGallery = ({ project, router }) => {
  return (
    <div>
      <figure
        className="size-full"
        onClick={() => {
          router.push("/projects/" + project.id, {
            onTransitionReady: slideInOut,
          });
        }}
      >
        <Image
          src={project.img}
          width={480}
          height={480}
          alt={project.title}
          className="w-full max-h-[350px] h-full object-cover "
        />
      </figure>
    </div>
  );
};

const All = () => {
  const router = useTransitionRouter();
  const { order } = useOrderStore();

  const sortedProjects = [...projectsData].sort((a, b) => {
    if (order === "alphabetical") return a.title.localeCompare(b.title);
    if (order === "oldest") return new Date(a.year) - new Date(b.year);
    return new Date(b.year) - new Date(a.year);
  });

  return (
    <section className="grid grid-cols-6 max-lg:grid-cols-3">
      {sortedProjects.map((project, i) => (
        <AllGridGallery key={i} project={project} router={router} />
      ))}
    </section>
  );
};

export default All;
