import React from "react";
import FlagSvg from "../Svg/About/FlagSvg";
import NewAboutSvg from "../Svg/About/NewAboutSvg";
import { Link } from "react-router-dom";
import TiltSvg from "../Svg/TiltSvg";

const About = () => {
  return (
    <main>
      <section
        className="flex justify-space-between align-center pb-32"
        id="about"
      >
        <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-48 px-6 pt-2  text-center sm:px-8 md:mt-16 lg:mt-0 lg:flex-row lg:text-left tracking-widest">
          <div className="w-full overflow-hidden drop-shadow-2xl sm:w-1/2 lg:inline-block ">
            <div
              style={{ transform: "none" }}
              className="w-full justify-center align-center"
            >
              <TiltSvg
                style={{ opacity: 1 }}
                className="flex justify-center align-center ease-in-out duration-75"
                SvgContet={<NewAboutSvg />}
              />
            </div>
          </div>
          <div className="sm:1/2 mt-10 w-full lg:w-1/2">
            <div style={{ opacity: 1, transform: "none" }}>
              <h1 className="text-6xl font-bold sm:text-6xl md:text-5xl lg:text-4xl xl:text-7xl text-accent1 text-blue-500 pointer-events-none tracking-wide">
                Hi, I'm Shiwam Shahare
              </h1>
            </div>
            <div style={{ opacity: 1, transform: "none" }}>
              <p className="mt-8  font-medium sm:text-lg md:text-lg pointer-events-none">
                "I turn vision into reality with code. Whether I'm working on a
                website or any digital product, I bring my commitment to design
                excellence and user-centered thinking to every project I work
                on."
              </p>
            </div>
            <div style={{ opacity: 1, transform: "none" }}>
              <p className="mt-8 font-medium sm:text-lg md:text-lg pointer-events-none">
                <br />
                ~ Apart from coding, some other activities that I love to do!
                <br />
                <br />
                <li className="list-none">💛 Playing Games</li>
                <li className="list-none">💙 Watching Movies</li>
                <li className="list-none">💚 Travelling</li>
              </p>
            </div>
            <div
              className="mr-0 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
              style={{ opacity: 1 }}
            >
              <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
                <FlagSvg />
              </div>
              <Link
                to="https://maps.app.goo.gl/N1NeHPjJhmpQCyVu9"
                target="_blank"
                className="text-lg hover:underline font-medium text-foreground pointer-events-all"
              >
                Maharashtra, India
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
