import React from "react";
import Resume from "../../assets/Resume_web.pdf";
import { Link } from "react-router-dom";
import DownloadBtnSvg from "../Svg/HomeSvg/DownloadBtnSvg";

const BtnResume = () => {
  return (
    <button
      type="submit"
      className="rounded-2xl rounded-tr-none sm:ml-10 ring-2 px-4 py-2 mt-4 ml-0 text-accent1 text-zinc-500 pointer-events-auto shadow-2xl backdrop-blur-md"
    >
      <Link
        target="_parent"
        to={Resume}
        download="Web_Resume"
        className="flex flex-row gap-3"
      >
        <span className="animate-bounce">
          <DownloadBtnSvg />
        </span>
        <span className="tracking-widest">Resume</span>
      </Link>
    </button>
  );
};

export default BtnResume;
