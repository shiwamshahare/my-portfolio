import React from "react";
import { NavLink } from "react-router-dom";
//import ActiveSvg from "../Svg/ActiveClass/ActiveSvg";

const Navbar_list = ({ before_span, after_span, to }) => {
  return (
    <>
      <ul className="md:flex p-2 flex-col md:flex-row align-center justify-center font-medium grid uppercase md:w-auto w-screen">
        <NavLink
          to={to}
          className={({
            isActive,
          }) => `text-foreground transition-transform duration-700 ease-in-out relative mx-2 rounded-full px-2 py-2 text-accent1 tracking-widest hover:font-bold hover:text-green-500 font-light z-50
          ${isActive ? "text-green-500" : " "}`}
        >
          {before_span}
          <span className="text-zinc-400 text-accent1">O</span>
          {after_span}
        </NavLink>
      </ul>
    </>
  );
};

export default Navbar_list;
