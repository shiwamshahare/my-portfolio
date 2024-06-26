import React from "react";
import HomeSvg from "../Svg/HomeSvg/HomeSvg";
import TiltSvg from "../Svg/TiltSvg";

const HomeImg = () => {
  return (
    <TiltSvg
      className="md:w-2/5 w-3/5 pt-20 sm:pt-12 ease-in-out duration-75"
      SvgContet={<HomeSvg />}
    />
  );
};

export default HomeImg;
