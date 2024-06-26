import React from "react";
import { Link } from "react-router-dom";

const Socials = ({ media, mediaSvg, socialLink }) => {
  return (
    <Link
      target="_blank"
      className="flex h-20 w-20 flex-col items-center justify-center rounded-lg duration-300 transition-all ease-in-out pointer-events-auto hover:tracking-widest"
      to={socialLink}
    >
      <h1>{mediaSvg}</h1>
      <h1>{media}</h1>
    </Link>
  );
};

export default Socials;
