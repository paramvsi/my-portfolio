import React from "react";
import AboutMe from "./about-me/about-me";
import Skills from "./skills/skills";
import Experience from "./experience/experience";
import Projects from "./projects/projects";

const Main = () => {
  return (
    <div>
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
};

export default Main;
