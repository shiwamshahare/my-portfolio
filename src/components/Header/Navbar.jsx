import React, { useState } from "react";
import Navbar_list from "./Navbar_list";
import ThemeButton from "./ThemeButton";
import CloseMenuSvg from "../Svg/HeaderSvg/CloseMenuSvg";
import OpenMenuSvg from "../Svg/HeaderSvg/OpenMenuSvg";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleMenubtn = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <button
        className="relative z-[999] flex h-12 text-3xl w-12 select-none items-center justify-center rounded-full  ring-1  md:hidden"
        onClick={toggleMenubtn}
      >
        {isOpened ? <CloseMenuSvg /> : <OpenMenuSvg />}
      </button>
      <nav
        className={`${
          isOpened ? " " : "hidden"
        } text-center items-center gap-2 rounded-lg flex-col md:flex-row md:rounded-full px-2 md:py-2 py-48 shadow-2xl ring-1 backdrop-blur-md md:h-auto h-dvh justify-center grid md:flex`}
      >
        <Navbar_list before_span={"h"} after_span={"me"} to={""} />
        <Navbar_list before_span={"ab"} after_span={"ut"} to={"/about"} />
        <Navbar_list before_span={"pr"} after_span={"ject"} to={"/project"} />
        <Navbar_list before_span={"c"} after_span={"ntact"} to={"/contact"} />
        <ThemeButton />
      </nav>
    </>
  );
};

export default Navbar;
