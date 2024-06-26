import React, { useState } from "react";
import MoonSvg from "../Svg/HeaderSvg/MoonSvg";
import SunSvg from "../Svg/HeaderSvg/SunSvg";
// import { Key } from "lucide-react";

const ThemeButton = () => {
  const [isDark, setIsDark] = useState(true);
  const [isAreaPressed, setIsAreaPressed] = useState(true);

  const darkTheme = () => {
    setIsDark(!isDark);
    if (!document.startViewTransition) switches();
    document.startViewTransition(switches);
  };

  const setStorage = () => {
    window.localStorage.setItem("data-theme", "light");

    document.documentElement.setAttribute("class", "light");

    window.localStorage.setItem("data-theme", "dark");
    document.documentElement.setAttribute("class", "dark");
  };

  const switches = () => {
    setIsAreaPressed(!isAreaPressed);

    // const savedtheme = JSON.parse(window.localStorage.getItem(Value));
    // console.log(savedtheme);
    document.documentElement.className = isDark ? "light" : "dark";
  };
  return (
    <>
      <button
        aria-pressed={isAreaPressed.toString()}
        className="theme-toggle text-foreground flex justify-center align-center place-self-center relative md:mx-1 m-auto rounded-full md:px-1 md:py-3 duration-400 "
        onClick={darkTheme}
      >
        {isDark ? (
          <SunSvg name="sunny-outline" className="theme-icon text-2xl" />
        ) : (
          <MoonSvg name="moon-outline" className="text-2xl" />
        )}
      </button>
    </>
  );
};

export default ThemeButton;
