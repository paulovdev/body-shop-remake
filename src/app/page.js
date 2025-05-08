"use client";
import { useLayoutStore } from "@/store/zustand";
import ProjectsList from "@/components/projects-list/projects-list";
import ProjectsCascate from "@/components/projects-cascate/projects-cascate";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "@/components/footer/footer";

export default function Home() {
  const { layoutMode } = useLayoutStore();

  return (
    <>
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.25,
              ease: [0.33, 1, 0.68, 1],
            },
          }}
          key={layoutMode}
        >
          {layoutMode === "grid" ? <ProjectsList /> : <ProjectsCascate />}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
