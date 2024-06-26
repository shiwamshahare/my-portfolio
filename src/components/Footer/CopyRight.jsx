import React from "react";
import CopyRightSvg from "../Svg/Socials/CopyRightSvg";

const CopyRight = () => {
  return (
    <div className=" pointer-events-none">
      <div className="flex flex-col sm:flex-row items-center justify-center text-foreground md:text-xl tracking-widest">
        <span className="text-zinc-500">&lt;/&gt;</span>&ensp;and&ensp;
        <span className="text-zinc-500">crafted&ensp;</span> with&ensp;
        <span className="inline-block item-center mb-0 animate-pulse">
          <CopyRightSvg />
        </span>
        &ensp;by&ensp;
        <span className="text-accent1 text-blue-500">Shiwam Shahare</span>
      </div>
    </div>
  );
};

export default CopyRight;
