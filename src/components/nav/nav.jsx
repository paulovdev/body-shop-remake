"use client";

import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import NavLink from "./nav-link";
import NavFilterOrderButton from "./nav-filter-order";
import NavQuestionButton from "./nav-question";
import NavListAndCascateButton from "./nav-list-cascate";
import NavGridButton from "./nav-grid";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

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
  const [scrollDirection, setScrollDirection] = useState("down");
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const diff = current - scrollYProgress.getPrevious();
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  const slideUpAnimation = {
    initial: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    animate: {
      y: 250,
      transition: {
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <>
      {!isProjectPage && (
        <>
          <motion.nav
            className="fixed w-full bottom-0 px-8 py-8 max-md:px-4 max-md:py-4 flex items-end justify-between gap-2 z-[999]"
            variants={slideUpAnimation}
            initial="initial"
            animate={scrollDirection === "down" ? "animate" : "initial"}
          >
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
          </motion.nav>
        </>
      )}
    </>
  );
};

export default Nav;
