import { AnimatePresence, motion } from "framer-motion";
import { useOrderStore } from "@/store/zustand";
import { TbCaretUpDownFilled } from "react-icons/tb";
import { useState } from "react";

const NavFilterOrderButton = () => {
  const [filterOrderModal, setFilterOrderModal] = useState(false);

  return (
    <div className="">
      <AnimatePresence>
        {filterOrderModal && (
          <NavFilterOrder setFilterOrderModal={setFilterOrderModal} />
        )}
      </AnimatePresence>
      <button
        className="w-[4rem] h-[4rem] max-md:w-[50px] max-md:h-[50px] bg-grey-light backdrop-blur-[24px] rounded-full
    flex items-center justify-center cursor-pointer select-none transition-all "
        onClick={() => setFilterOrderModal(!filterOrderModal)}
      >
        <TbCaretUpDownFilled className="text-[28px] max-md:text-[20px] text-fg " />
      </button>
    </div>
  );
};

const NavFilterOrder = ({ setFilterOrderModal }) => {
  const { order, setOrder } = useOrderStore();

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

  const navFilterOrder = [
    { title: "Most recent", value: "date", border: true },
    { title: "Oldest first", value: "oldest", border: true },
    { title: "Alphabetical", value: "alphabetical", border: false },
  ];

  return (
    <>
      <motion.div
        className="fixed bottom-[calc(4rem_+_30px)] w-fit h-fit mb-2 rounded-2xl bg-grey-light  backdrop-blur-[24px] 
      flex flex-col items-start max-md:bottom-[4rem]"
        variants={opacityFunction}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {navFilterOrder.map((nav, i) => {
          const navActive = order === nav.value;
          return (
            <button
              key={i}
              className={`w-full h-[2rem] px-[1rem] pr-[2rem] py-[1.75rem] ${
                nav.border ? "border-b border-[#2b2b2b49]" : ""
              } text-[23px] max-md:text-[18px] max-md:py-[1.4rem]
              flex items-center cursor-pointer`}
              onClick={() => {
                setOrder(nav.value);
                setFilterOrderModal(false);
                scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span
                className={`relative mr-4 w-2 h-2 rounded-full ${
                  navActive ? "bg-fg" : ""
                }`}
              ></span>
              {nav.title}
            </button>
          );
        })}
      </motion.div>
      <motion.div
        variants={opacityFunction}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed w-screen h-screen inset-0 backdrop-blur-lg cursor-default z-[-1]"
        onClick={() => setFilterOrderModal(false)}
      />
    </>
  );
};

export default NavFilterOrderButton;
