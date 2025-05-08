import { IoIosSearch } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";
const SearchFilter = ({
  closeFilter,
  router,
  projectsData,
  opacityFunction,
  slideInOut,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectsData
    .filter((project) =>
      project.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
    )
    .sort((a, b) => {
      const term = searchTerm.trim().toLowerCase();
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();

      const aStarts = aTitle.startsWith(term);
      const bStarts = bTitle.startsWith(term);

      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;

      return aTitle.length - bTitle.length;
    });

  return (
    <>
      <div className="fixed top-0 px-8 py-8 max-md:px-4 max-md:py-4 max-md:w-full z-[100] pointer-events-none">
        <motion.div
          className="relative w-full"
          variants={opacityFunction}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            autoFocus
            onChange={(e) => setSearchTerm(e.target.value)}
            className="relative w-[375px] h-[4rem] px-[1.75rem] max-md:w-full max-md:h-[50px] bg-grey-light backdrop-blur-[24px] rounded-full text-fg placeholder-fg text-[23px] max-md:text-[18px]  
              flex items-center justify-center outline-none pointer-events-auto"
          />
          <IoIosSearch className="absolute right-6 top-4 max-md:top-3 max-md:right-5 text-[28px] text-fg" />
        </motion.div>

        {searchTerm.trim() !== "" && (
          <motion.div
            className="relative w-fit mt-2 overflow-y-auto flex flex-col gap-2 pointer-events-none"
            variants={opacityFunction}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={closeFilter}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.slice(0, 3).map((project) => (
                <a
                  key={project.id}
                  onClick={() => {
                    router.push("/projects/" + project.id, {
                      onTransitionReady: slideInOut,
                    });
                  }}
                  className="w-fit h-[4rem] px-[1.75rem] max-md:w-fit max-md:h-[50px] bg-grey-light backdrop-blur-[24px] rounded-full text-[23px] max-md:text-[18px]  
        flex items-center justify-center cursor-pointer pointer-events-auto"
                >
                  {project.title}
                </a>
              ))
            ) : (
              <div
                className="w-fit h-[4rem] px-[1.75rem] max-md:w-fit max-md:h-[50px] bg-grey-light backdrop-blur-[24px] rounded-full text-[23px] max-md:text-[18px]  
      flex items-center justify-center cursor-pointer"
              >
                No Results
              </div>
            )}
          </motion.div>
        )}
      </div>

      <motion.div
        className="fixed w-screen h-screen inset-0 backdrop-blur-lg z-[99] cursor-default"
        variants={opacityFunction}
        initial="initial"
        animate="animate"
        exit="exit"
        onClick={closeFilter}
      />
    </>
  );
};
export default SearchFilter;
