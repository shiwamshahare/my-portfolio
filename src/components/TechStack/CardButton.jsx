import React from "react";

const CardButton = ({ elementSvg, titleName }) => {
  return (
    <div className="-z-20" style={{ opacity: "1" }}>
      <div className="flex w-max items-center gap-2  rounded-lg  px-4 py-3 text-sm  sm:text-base md:px-6 md:py-3 md:text-lg shadow-2xl ring-1 backdrop-blur-md transition-all ease-in-out hover:scale-110 md:flex dark:bg-gray-900 dark:text-white">
        {elementSvg}
        <span className="font-medium tracking-widest">{titleName}</span>
      </div>
    </div>
  );
};

export default CardButton;
