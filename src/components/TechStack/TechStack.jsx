import React from "react";
import MainTechStackSvg from "../Svg/TechStack/MainTechStackSvg";
import TechStackContent from "./TechStackContent";
import CardButton from "./CardButton";
import {
  HtmlSvg,
  CssSvg,
  JavaScriptSvg,
  ReactJsSvg,
  JquerySvg,
  TailwindSvg,
  BootstrapSvg,
  GitSvg,
  GhubSvg,
} from "../Svg/TechStack/techStack";
import TiltSvg from "../Svg/TiltSvg";

const TechStack = () => {
  return (
    <section className=" flex md:flex-row flex-col align-center px-6 py-32 sm:px-14 md:px-20">
      <TiltSvg
        className="lg:w-3/5 w-full sm:4/5 md:1/2 ease-in-out duration-75"
        SvgContet={<MainTechStackSvg />}
      />

      <div className="relative mx-auto max-w-7xl select-none">
        <h2 className="text-xl font-semibold text-accent1 text-blue-500 pt-16 sm:text-4xl text-center transition-all ease-in-out duration-300 hover:tracking-wide select-none">
          TECH STACK :{" "}
        </h2>
        <TechStackContent
          skill="Languages"
          skillName1={
            <CardButton elementSvg={<HtmlSvg />} titleName={"HTML"} />
          }
          skillName2={<CardButton elementSvg={<CssSvg />} titleName={"CSS"} />}
          skillName3={
            <CardButton
              elementSvg={<JavaScriptSvg />}
              titleName={"JavaScript"}
            />
          }
        />
        <TechStackContent
          skill="Libraries and Frameworks"
          skillName1={
            <CardButton elementSvg={<ReactJsSvg />} titleName={"ReactJS"} />
          }
          skillName2={
            <CardButton elementSvg={<BootstrapSvg />} titleName={"Bootstrap"} />
          }
          skillName3={
            <CardButton elementSvg={<TailwindSvg />} titleName={"Tailwind"} />
          }
          skillName4={
            <CardButton elementSvg={<JquerySvg />} titleName={"jQuery"} />
          }
        />
        <TechStackContent
          skill="Virsion Control"
          skillName1={<CardButton elementSvg={<GitSvg />} titleName={"Git"} />}
          skillName2={
            <CardButton elementSvg={<GhubSvg />} titleName={"Github"} />
          }
        />
      </div>
    </section>
  );
};

export default TechStack;
