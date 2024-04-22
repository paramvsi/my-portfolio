import React from "react";

const Projects = () => {
  const projects = ["Touchnote.png", "BCBSMA.png", "Barclays.jpg", "ADIB.jpg"];

  return (
    <section className="py-4 px-6 lg:py-10 lg:px-24 bg-dark-teal text-center">
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
    </section>
  );
};

export default Projects;
