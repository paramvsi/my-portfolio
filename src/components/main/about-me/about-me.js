/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const AboutMe = () => {
  return (
    <section className="py-10 lg:py-16 flex flex-col lg:flex-row justify-center gap-8 items-center  shadow-md">
      <img
        className="w-64 h-64 rounded-full"
        src="/assets/images/mypic.jpeg"
        alt="my image"
      />
      <p className="px-2 lg:px-0 max-w-[400px]">
        As a{" "}
        <span className="text-dark-teal font-semibold">
          Senior Fullstack Web Developer
        </span>{" "}
        with over 8 years of experience, I specialize in creating dynamic,
        user-friendly digital solutions that enhance user engagement and drive
        business success.
        <br />
        <br />
        My technical expertise spans a wide range of modern technologies
        including <span className="text-dark-teal font-semibold">
          React
        </span>,{" "}
        <span className="text-dark-teal font-semibold">JavaScript</span>,{" "}
        <span className="text-dark-teal font-semibold">Angular</span> and{" "}
        <span className="text-dark-teal font-semibold">Java</span>, which I
        leverage to deliver robust front-end development for diverse
        applications.
      </p>{" "}
    </section>
  );
};

export default AboutMe;
