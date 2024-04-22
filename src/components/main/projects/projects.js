import React from "react";

const Projects = () => {
  const projects = ["Touchnote.png", "BCBSMA.png", "Barclays.jpg", "ADIB.jpg"];
  const personalProjects = [
    {
      name: "Stock Market Simulator",
    },
    {
      name: "Food ordering app",
    },
  ];

  return (
    <section className="py-4 px-6 lg:py-10 lg:px-24 bg-dark-teal lg:bg-teal-gradient text-center flex flex-col lg:flex-row justify-center items-left">
      <div className="w-full lg:w-[50%] lg:border-r-2 lg:border-white">
        <h1 className="text-white text-2xl mb-10">Highlighted Projects</h1>

        <div className="flex justify-around items-center">
          {projects.map((project) => (
            <div
              key={project}
              className="text-center cursor-pointer transform transition duration-300 hover:scale-105"
            >
              <img
                className="w-16 h-16 mx-auto lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-white"
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
      <div className="w-full lg:w-[50%] mt-10 lg:my-0">
        <h1 className="text-white text-2xl mb-10 ">Personal Projects</h1>

        <ul className="text-left px-10">
          {personalProjects.map((project) => (
            <li className="text-white">{project.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
