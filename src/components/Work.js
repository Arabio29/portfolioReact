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
<>
<div className="" id="work">
<div className="sectionGrid">
      <div className="grid grid-cols-8 gap-4 h-[100v] ">
        <div className="card col-span-6 row-span-5">1</div>
        <div className="card col-span-2">2</div>
        <div className="card col-span-2 row-span-6">3</div>
        <div className="card col-span-2 row-span-2">4</div>
        <div className="card col-span-4 row-span-2">5</div>
        <div className="card">6</div>
        <div className="card">7</div>
        <div className="card col-span-2">8</div>
        <div className="card">9</div>
      </div>
    </div>

</div>
    <div>

    
     

     {/* <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>*/}

    </div>
    </>
  );
};

export default Work;
