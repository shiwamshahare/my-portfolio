import React from "react";
import ErrorPageSvg from "../Svg/ErrorPage/ErrorPageSvg";

const ErrorPage = () => {
  return (
    <>
      <div className="flex  flex-col justify-center items-center">
        <ErrorPageSvg />
        <div className="flex justify-center items-center">
          <div className="border-r-2-gray-400 mr-5">
            <h1 className="text-7xl text-zinc-500 justify-center item-center ">
              404{" "}
            </h1>
          </div>
          <div className="">
            <h1 className="text-3xl justify-center items-center">
              This page could not be found.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
