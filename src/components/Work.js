import React from "react";
import ProjectCard from "./ProjectCard.js"

const Work = () => {
  // Array con los datos de los proyectos
  const projects = [
    {
      name: 'Proyecto 1',
      image: 'https://yt3.googleusercontent.com/5FB06VH9gLz1ayVOh_gaEQ7vB3RwkOfWYmiLZE7itH9oPtEq1h629oYJzwPwriuMrENf5eUDGQ=s176-c-k-c0x00ffffff-no-rj',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    },
    {
      name: 'Proyecto 2',
      image: 'https://yt3.googleusercontent.com/5FB06VH9gLz1ayVOh_gaEQ7vB3RwkOfWYmiLZE7itH9oPtEq1h629oYJzwPwriuMrENf5eUDGQ=s176-c-k-c0x00ffffff-no-rj',
      technologies: ['Vue.js', 'SASS', 'Firebase'],
    },
    // ...otros proyectos
  ];

  return (
    <div className="section" id="work">
      <div className="section" id="work">
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Work;
