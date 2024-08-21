import React from "react";
import ProMainCard from "./ProMainCard";
import project1 from "../../assets/pro1home.png";
import project2 from "../../assets/pro2home.png";

const Project = () => {
  return (
    <main>
      <section className="flex md:flex-row flex-col align-center px-6  sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl text-center text-accent1 text-blue-500 transition-all ease-in-out duration-300 hover:tracking-wide ">
            Projects
          </h1>
          <div className="my-2 text-center">
            <h6 className="text-md text-muted-foreground tracking-widest">
              Here are <span className="text-zinc-500">some of</span> the{" "}
              <span className="text-zinc-500">PROJECTS</span> I'd like to{" "}
              <span className="text-zinc-500">share</span>
            </h6>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 tracking-wide text-justify">
            <ProMainCard
              titlePro={"Personal Portfolio"}
              imgSrc={project1}
              lan1={"#HTML"}
              lan2={"#CSS"}
              lan3={"#Tailwind"}
              lan4={"#JavaScript"}
              descrOfPro={`
                        Managed the design and development of a personal portfolio website showcasing skills and projects. Implemented responsive design principles for optimal viewing on various devices. Created and curated content to effectively communicate professional experience and accomplishments. Utilized SEO strategies to increase visibility and reach a wider audience.
                        `}
              codeLink={`https://github.com/shiwamshahare/my-portfolio`}
              liveLink={`https://shiwamshahare.netlify.app/`}
            />
            <ProMainCard
              titlePro={"Bootstrap-website"}
              imgSrc={project2}
              lan1={"#HTML"}
              lan2={"#CSS"}
              lan3={"#Bootstrap"}
              descrOfPro={`
                        " Managed the development of a Dummy Bootstrap website from inception to completion, working closely with the developer to ensure all requirements were met. Oversaw the design, layout, and functionality of the website, ensuring a user-friendly experience. Implemented responsive design principles to optimize the site for various devices and screen sizes. "`}
              codeLink={`https://github.com/shiwamshahare/Bootstrap-website`}
              liveLink={`https://shiwamshahare.github.io/Bootstrap-website/`}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Project;
