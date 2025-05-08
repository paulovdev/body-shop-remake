"use client";

import { useParams } from "next/navigation";
import projectsData from "@/data/projectsData";
import { IoMdClose } from "react-icons/io";
import { useTransitionRouter } from "next-view-transitions";
const ProjectsDetail = () => {
  const { slug } = useParams();
  const project = projectsData.find((item) => item.id === String(slug));
  const router = useTransitionRouter();
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
  if (!project) {
    return <div>Nothing to show at the moment.</div>;
  }

  return (
    <div className="">
      <nav className="fixed px-8 py-8 max-md:px-4 max-md:py-4  w-full flex items-center justify-between">
        <a
          className="w-fit h-[4rem] px-[1.75rem] max-md:h-[50px] bg-grey-light backdrop-blur-[24px] rounded-full text-[23px] max-md:text-[18px]  text-fg flex items-center justify-center cursor-pointer select-none"
          onClick={() => {
            router.push("/projects/" + project.id, {
              onTransitionReady: slideInOut,
            });
          }}
        >
          {project.title}
        </a>
        <button
          className="w-[4rem] h-[4rem] max-md:w-[50px] max-md:h-[50px] bg-grey-light backdrop-blur-[24px] rounded-full text-[23px] max-md:text-[18px]  flex items-center justify-center cursor-pointer select-none"
          onClick={() => {
            router.push("/", {
              onTransitionReady: slideInOut,
            });
          }}
        >
          <IoMdClose className="text-[28px] text-fg" />
        </button>
      </nav>

      <div className="flex justify-between mb-8 max-md:flex-col">
        <div className="flex-[2]">
          <h1 className="font-acid-b text-[1rem] text-t">{project.title}</h1>
        </div>
        <div className="flex-[2]">
          <p className="font-acid-r text-[.75rem] text-t text-end opacity-75 max-md:text-start">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetail;
