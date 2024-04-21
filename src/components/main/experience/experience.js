import React from "react";

const Experience = () => {
  const experience = [
    {
      name: "Touchnote",
      startTime: "09/2020",
      endTime: "Present",
      designation: "Senior Web Developer",
      designationStarted: "Web Developer",
      projects: "Touchnote Website, Touchnote Webapp, CMS, Admin website",
      skills: "NextJS, React, Angular, Tailwind CSS, React Admin",
      description: [
        "Spearheaded the development of interactive, user-friendly front-end architectures using React and Angular frameworks.",
        "Managed end-to-end lifecycle of web development projects, from conception through deployment, ensuring timely delivery within budget.",
        "Enhanced application performance by optimizing both the front-end and server interactions, significantly reducing load times and improving user experience.",
        "Collaborated closely with design and server teams to align technical implementations with business goals and user needs.",
        " Upheld high standards of code quality through rigorous testing, peer reviews, and incorporation of best practices in software development.",
      ],
    },
    {
      name: "IBM India PVT LTD",
      startTime: "09/2016",
      endTime: "08/2020",
      designation: "Java Full Stack Developer",
      designationStarted: "Associate Software Developer",
      projects:
        "ADIB bank services, Barclays bank services, BCBSMA insurance admin webapp",
      skills: "Java, Spring, SpringBoot, Angular, BootStrap",
      description: [
        "Led full-stack web application development projects using Angular and the Spring framework, ensuring seamless functionality from front-end to back-end.",
        "Crafted detailed software designs and architectures that met specific client requirements, focusing on scalability and security.",
        "Worked directly with clients to gather requirements, provide technical insights, and ensure the final products aligned with their expectations.",
        "Optimized existing systems for improved performance and efficiency, reducing operational costs and increasing user satisfaction.",
        "Employed Agile methodologies to manage development projects, enhancing team productivity and project adaptability.",
        "Acted as a technical lead, mentoring junior developers and promoting a culture of innovation and continuous learning within the team.",
      ],
    },
  ];

  return (
    <section className="py-4 px-6 lg:py-10 lg:px-24">
      <h1 className="text-dark-teal text-2xl">Professional experience</h1>
      {experience.map((exp) => (
        <div className="flex justify-start items-start gap-9 my-3">
          <div className="w-16">{exp.endTime}</div>
          <diV>
            <h4 className="text-dark-teal mb-1">{exp.name}</h4>
            <h5 className="text-dark-teal mb-1">{exp.designation}</h5>
            <p>
              <span className="font-bold">Projects: </span> {exp.projects}
            </p>
            <p className="mb-1">
              <span className="font-bold">Skills: </span>
              {exp.skills}
            </p>
            <p className="font-bold my-1">Roles and Responsiblities: </p>
            <ul className="list-disc">
              {exp.description.map((desp) => (
                <li className="ml-5">{desp}</li>
              ))}
            </ul>
          </diV>
        </div>
      ))}
    </section>
  );
};

export default Experience;
