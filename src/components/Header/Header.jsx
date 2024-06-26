import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 mt-2 px-6 py-8 sm:mt-8 sm:px-14 md:px-20">
      <div className="my-auto mx-auto flex rounded-full flex-col md:flex-row items-center justify-center lg:max-w-7xl">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
