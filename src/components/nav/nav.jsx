"use client";

import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";

import NavLink from "./nav-link";
import NavFilterOrderButton from "./nav-filter-order";
import NavQuestionButton from "./nav-question";
import NavListAndCascateButton from "./nav-list-cascate";
import NavGridButton from "./nav-grid";

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

const Nav = () => {
  const router = useTransitionRouter();
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/projects");

  return (
    <>
      {!isProjectPage && (
        <>
          <nav className="fixed w-full bottom-0 px-8 py-8 max-md:px-4 max-md:py-4 flex items-end justify-between gap-2 z-[999]">
            <NavFilterOrderButton />
            <NavLink
              pathname={pathname}
              router={router}
              slideInOut={slideInOut}
            />
            <div className="flex flex-col items-start gap-2">
              <NavQuestionButton />
              <NavListAndCascateButton pathname={pathname} />
              <NavGridButton
                router={router}
                pathname={pathname}
                slideInOut={slideInOut}
              />
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Nav;
