import { GoListUnordered } from "react-icons/go";

import { IoAlbumsOutline } from "react-icons/io5";
import { useLayoutStore } from "@/store/zustand";

const NavListAndCascateButton = ({ pathname }) => {
  const isAllPage = pathname.startsWith("/all");
  const { layoutMode, toggleLayoutMode } = useLayoutStore();

  if (isAllPage) return null;

  return (
    <button
      className="w-[4rem] h-[4rem] max-md:w-[50px] max-md:h-[50px] bg-grey-light backdrop-blur-[24px] rounded-full 
      flex items-center justify-center cursor-pointer select-none transition-all "
      onClick={toggleLayoutMode}
    >
      {layoutMode === "grid" ? (
        <IoAlbumsOutline className="text-[28px] max-md:text-[20px] text-fg" />
      ) : (
        <GoListUnordered className="text-[32px] max-md:text-[20px] text-fg" />
      )}
    </button>
  );
};
export default NavListAndCascateButton;
