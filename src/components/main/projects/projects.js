import React from "react";

const Projects = () => {
  const projects = ["Touchnote.png", "BCBSMA.png", "Barclays.jpg", "ADIB.jpg"];
  const personalProjects = ["ABC", "BDC"];

  return (
    <section className="py-4 px-6 lg:py-10 lg:px-24 bg-dark-teal lg:bg-teal-gradient text-center flex flex-col lg:flex-row justify-center items-center">
      <div className="w-full lg:w-[50%] lg:border-r-2 lg:border-white">
        <h1 className="text-white text-2xl mb-10">Highlighted Projects</h1>

        <div className="flex justify-around items-center">
          {projects.map((project) => (
            <div
              key={project}
              className="text-center cursor-pointer transform transition duration-300 hover:scale-105"
            >
              <img
                className="w-16 h-16 mx-auto lg:w-28 lg:h-28 bg-white"
                src={`/assets/images/${project}`}
                alt={project.split(".")[0]}
              />
              <p className="text-white font-semibold mt-3">
                {project.split(".")[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[50%] my-5 lg:my-0">
        <h1 className="text-white text-2xl mb-10 ">Personal Projects</h1>

        <div className="flex justify-around items-center">
          {personalProjects.map((project) => (
            <div
              key={project}
              className="text-center cursor-pointer transform transition duration-300 hover:scale-105"
            >
              <img
                className="w-16 h-16 mx-auto lg:w-28 lg:h-28 bg-white"
                src={`/assets/images/${project}`}
                alt={project.split(".")[0]}
              />
              <p className="text-white font-semibold mt-3">
                {project.split(".")[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
