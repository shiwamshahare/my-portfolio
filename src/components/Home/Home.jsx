import React from "react";
import HomeSection from "./HomeSection";
import TechStack from "../TechStack/TechStack";
const Home = () => {
  return (
    <>
      <section className=" flex h-[calc(100vh-112px)] md:flex-row flex-col py-12 md:py-32 items-center px-6 sm:px-14 md:px-20">
        <div className="-mt-[112px] w-full flex flex-col md:flex-row  justify-center min-h-screen h-full m items-center">
          <HomeSection />
        </div>
      </section>
      <TechStack />
    </>
  );
};

export default Home;
