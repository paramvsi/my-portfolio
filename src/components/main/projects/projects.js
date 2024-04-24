import React from "react";
import {
  faMoneyBillWave,
  faExternalLinkAlt,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const projects = ["Touchnote.png", "BCBSMA.png", "Barclays.jpg", "ADIB.jpg"];
  const personalProjects = [
    {
      icon: faMoneyBillWave,
      name: "Stock Market Simulator",
      githubLink: "https://github.com/paramvsi/stock-market-simulator",
    },
    {
      icon: faHamburger,
      name: "Food ordering app",
      githubLink: "https://github.com/paramvsi/namaste-react",
      projectLink: "https://dazzling-babka-3fa2af.netlify.app/",
    },
  ];

  return (
    <section className="py-4 lg:py-10 bg-dark-teal lg:bg-teal-gradient text-center flex flex-col lg:flex-row justify-center items-left">
      <div className="w-full lg:w-[50%] lg:border-r-2 lg:border-white px-6">
        <h1 className="text-white text-2xl mb-10">Highlighted Projects</h1>

        <div className="flex justify-around items-center ">
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
      <div className="w-full lg:w-[50%] mt-10 lg:my-0 px-6">
        <h1 className="text-white text-2xl mb-10 ">Personal Projects</h1>

        <ul className="text-left px-10">
          {personalProjects.map((project) => (
            <li className="text-white mb-2 flex w-[300px] justify-between">
              <p className="flex justify-start gap-4 items-center">
                <FontAwesomeIcon icon={project.icon} />
                {project.name}
              </p>
              <p className="flex justify-end gap-3 items-center">
                {project.projectLink && (
                  <a href={project.projectLink}>
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                )}
                <a href={project.githubLink}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
