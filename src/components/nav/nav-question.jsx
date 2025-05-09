import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineQuestionMark } from "react-icons/md";

const NavQuestionButton = () => {
  const [questionModal, setQuestionModal] = useState(false);
  return (
    <>
      <button
        className="w-[4rem] h-[4rem] max-md:w-[50px] max-md:h-[50px] bg-grey-light backdrop-blur-[24px] rounded-full 
  flex items-center justify-center cursor-pointer select-none transition-all "
        onClick={() => setQuestionModal(true)}
      >
        <MdOutlineQuestionMark className="text-[26px] max-md:text-[20px] text-fg" />
      </button>
      <AnimatePresence>
        {questionModal && <QuestionModal setQuestionModal={setQuestionModal} />}
      </AnimatePresence>
    </>
  );
};

const QuestionModal = ({ setQuestionModal }) => {
  const opacityFunction = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };
  return (
    <motion.div
      className="fixed w-screen h-screen inset-0 bg-[#f0f0f0e3] backdrop-blur-sm  z-[1000]"
      variants={opacityFunction}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <header className="fixed top-0 px-8 py-8 max-md:px-4 max-md:py-4  w-full flex items-end justify-end">
        <a
          className="w-[4rem] h-[4rem] max-md:w-[50px] max-md:h-[50px] bg-bg rounded-full 
                flex items-center justify-center cursor-pointer select-none"
          onClick={() => setQuestionModal(false)}
        >
          <IoMdClose className="text-[28px] max-md:text-[24px] text-fg" />
        </a>
      </header>

      <div className="size-full max-w-[600px] mx-auto my-0 px-4 flex flex-col items-center justify-center">
        <h2 className="text-fg text-[23px] max-md:text-[18px] text-center">
          WHAT IS BODY SHOP?
        </h2>
        <p className="text-fg text-[23px] max-md:text-[18px] text-center">
          Body Shop builds and ships cohesive and compelling products through
          highly custom, high-performance, and culturally iconic stories.
        </p>
        <span className="text-fg text-[23px] max-md:text-[18px]">🛠️</span>
        <h2 className="text-fg text-[23px] max-md:text-[18px] text-center">
          WHAT DO YOU DO?
        </h2>
        <p className="text-fg text-[23px] max-md:text-[18px] text-center">
          We specialize in: industrial design 🔩, visual identity 🎨, graphic
          systems 🔠, product strategy 🧠, web identity 🛜, and branding 🌐.
        </p>
        <span className=" text-[23px] max-md:text-[18px] text-center">🤹‍♂️</span>
        <h2 className="text-fg text-[23px] max-md:text-[18px]">
          HOW CAN I REACH YOU?
        </h2>
        <a
          href="#"
          className="text-fg text-[23px] max-md:text-[18px] text-center underline"
        >
          hello@body-shop.co
        </a>
        <span className=" text-[23px] max-md:text-[18px]">💌</span>
        <h2 className="text-fg text-[23px] max-md:text-[18px] text-center">
          EST. 2025
        </h2>
      </div>
    </motion.div>
  );
};

export default NavQuestionButton;
