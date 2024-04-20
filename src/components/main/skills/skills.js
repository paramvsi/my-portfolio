import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      experience: 8,
    },
    {
      name: "Angular",
      experience: 8,
    },
    {
      name: "React",
      experience: 5,
    },
    {
      name: "HTML5",
      experience: 8,
    },
    {
      name: "CSS3",
      experience: 8,
    },
    {
      name: "Java",
      experience: 5,
    },
    {
      name: "SpringBoot",
      experience: 5,
    },
    {
      name: "NextJS",
      experience: 1,
    },
    {
      name: "NodeJs",
      experience: 1,
    },
    {
      name: "AWS",
      experience: 1,
    },
    {
      name: "TailwindCSS",
      experience: 1,
    },
  ];

  return (
    <section className="py-4 px-6 lg:py-10 lg:px-24">
      <h1 className="text-dark-teal text-2xl">Professional Skills</h1>

      <div className="my-4 flex items-center justify-start gap-5 flex-wrap text-center">
        {skills.map((skill) => (
          <div className="w-[96px] h-auto" key={skill.name}>
            <img src={`/assets/images/${skill.name}.png`} alt={skill.name} />
            <p>{skill.name}</p>
            <p>{skill.experience} years</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
