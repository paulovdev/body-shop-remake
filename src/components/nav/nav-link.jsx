const NavLink = ({ router, pathname, slideInOut }) => {
  const navLink = [
    { title: "Body", href: "/" },
    { title: "Shop", href: "/shop" },
  ];

  return (
    <div
      className="w-fit h-[4rem] p-[5px_6px] max-md:h-[50px]
        bg-[#dfdfdfa2] backdrop-blur-sm rounded-full text-[23px] max-md:text-[18px] 
      flex items-center justify-center cursor-pointer select-none"
    >
      {navLink.map((nav, i) => {
        const navActive = pathname === nav.href;
        return (
          <a
            key={i}
            className={`w-fit h-[54px] px-[1.75rem] text-[23px] max-md:text-[18px] max-md:h-[40px] max-md:px-[1rem]
                flex items-center justify-center ${
                  navActive ? "bg-bg opacity-100" : "opacity-50"
                } rounded-full hover:opacity-100 transition-all`}
            onClick={() =>
              router.push(nav.href, {
                onTransitionReady: slideInOut,
              })
            }
          >
            {nav.title}
          </a>
        );
      })}
    </div>
  );
};
export default NavLink;
