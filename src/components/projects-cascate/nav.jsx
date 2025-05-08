import { motion } from "framer-motion";
import { IoIosSearch } from "react-icons/io";

const Nav = ({
  title,
  projectId,
  router,
  onClick,
  slideInOut,
  opacityFunction,
}) => (
  <motion.header
    className="fixed px-8 py-8 max-md:px-4 max-md:py-4 w-full flex items-center gap-2 z-50"
    variants={opacityFunction}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    <a
      className="w-fit h-[4rem] px-[1.75rem] max-md:h-[50px] bg-grey-light backdrop-blur-[24px] rounded-full text-[23px] max-md:text-[18px] text-fg 
        flex items-center justify-center cursor-pointer select-none"
      onClick={() => {
        router.push("/projects/" + projectId, {
          onTransitionReady: slideInOut,
        });
      }}
    >
      {title}
    </a>
    <button
      className="w-[4rem] h-[4rem] max-md:w-[50px] max-md:h-[50px] bg-grey-light backdrop-blur-[24px] rounded-full text-[23px] max-md:text-[18px] 
        flex items-center justify-center cursor-pointer select-none"
      onClick={onClick}
    >
      <IoIosSearch className="text-[28px] max-md:text-[24px] text-fg" />
    </button>
  </motion.header>
);

export default Nav;
