import React from "react";
import HomeImg from "./HomeImg";
import BtnResume from "./BtnResume";
import TypingTextAnime from "./TypingTextAnime";

const HomeSection = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <div style={{ opacity: 1 }}>
          <h1
            className="text-blue-500 text-accent1"
            style={{ fontSize: "clamp(1rem, 4vw + 1rem, 4rem)" }}
          >
            Shiwam Shahare
          </h1>
          <span className="text-xl flex font-semibold md:text-3xl">
            a&ensp;
            <TypingTextAnime />
          </span>
        </div>
        <div style={{ opacity: 1 }}>
          <div className="mt-8 max-w-3xl text-base font-semibold  sm:text-base md:text-2xl">
            <span className="text-xl text-accent1 text-blue-500   sm:text-3xl">
              Hi{" "}
            </span>
            , I'm{" "}
            <span className="text-accent1 text-blue-500">Shiwam Shahare</span>
            , <br />
            turning{" "}
            <span className="text-zinc-500 font-semibold tracking-widest">
              creativity
            </span>{" "}
            into{" "}
            <span className="text-zinc-500 font-semibold tracking-widest">
              code
            </span>
            .
          </div>
          <BtnResume />
        </div>
      </div>
      <HomeImg />
    </>
  );
};

export default HomeSection;
