import React from "react";
import ProGithub from "../Svg/Project/ProGithub";
import ProLive from "../Svg/Project/ProLive";
import { Link } from "react-router-dom";

const ProMainCard = ({
  imgSrc,
  titlePro,
  lan1,
  lan2,
  lan3,
  lan4,
  lan5,
  descrOfPro,
  codeLink,
  liveLink,
}) => {
  return (
    <>
      <div
        className="w-full overflow-hidden rounded-lg ring-1 shadow-md transition-shadow duration-150 hover:shadow-md"
        style={{ transform: "none" }}
      >
        <div className=" duration-300  hover:scale-[1.05] scale-[1.01] hover:duration-300 ">
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "2.1 / 1" }}
          >
            <img
              loading="lazy"
              className="h-full w-full bg-cover"
              src={imgSrc}
              draggable="false"
              style={{
                aspectRatio: "2.1 / 1",
                opacity: "1",
                zIndex: "1",
                transform: "none",
                userSelect: "none",
                touchAction: "pan-y",
              }}
            />
          </div>
        </div>
        <div className="p-3 text-foreground sm:p-4">
          <Link className="flex items-center gap-3" to="#">
            <span className="text-md font-semibold  hover:underline">
              {titlePro}
            </span>
          </Link>
          <br />
          <div className="flex items-center gap-3">
            <span>{lan1}</span>
            <span>{lan2}</span>
            <span>{lan3}</span>
            <span>{lan4}</span>
            <span>{lan5}</span>
          </div>
          <div className="mt-3">
            <p className="text-xs md:text-sm">{descrOfPro}</p>
          </div>
          <div className="mt-6 flex items-end justify-end gap-6 mb-0">
            <Link
              to={codeLink}
              target="_blank"
              className="flex items-center gap-1 text-xs underline md:text-sm"
            >
              <ProGithub />
              Source code
            </Link>
            <Link
              to={liveLink}
              target="_blank"
              className="flex items-center gap-1 text-xs underline md:text-sm"
            >
              <ProLive />
              Live
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProMainCard;
