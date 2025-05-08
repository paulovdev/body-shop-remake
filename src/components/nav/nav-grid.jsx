import { IoMdClose } from "react-icons/io";
import { BsGrid3X3Gap } from "react-icons/bs";

const NavGridButton = ({ router, pathname, slideInOut }) => {
  const isAllPage = pathname.startsWith("/all");
  return (
    <>
      {!isAllPage ? (
        <a
          className="w-[4rem] h-[4rem] max-md:w-[50px] max-md:h-[50px] bg-grey-light backdrop-blur-[24px] rounded-full 
            flex items-center justify-center cursor-pointer select-none transition-all 
            "
          onClick={() =>
            router.push("all", {
              onTransitionReady: slideInOut,
            })
          }
        >
          <BsGrid3X3Gap className="text-[28px] max-md:text-[20px] text-fg" />
        </a>
      ) : (
        <a
          className="w-[4rem] h-[4rem] max-md:w-[50px] max-md:h-[50px] bg-grey-light backdrop-blur-[24px] rounded-full 
            flex items-center justify-center cursor-pointer select-none"
          onClick={() =>
            router.push("/", {
              onTransitionReady: slideInOut,
            })
          }
        >
          <IoMdClose className="text-[28px] max-md:text-[24px] text-fg" />
        </a>
      )}
    </>
  );
};
export default NavGridButton;
