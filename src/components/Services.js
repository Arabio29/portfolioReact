import React from "react";
//icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

//services data
const service = [
  {
    name: "UI/UX Desing",
    description:
      "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.",
    link: "Learn more",
  },
  {
    name: "Development",
    description:
      "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.",
    link: "Learn more",
  },
  {
    name: "Back-End",
    description:
      "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.",
    link: "Learn more",
  },
  {
    name: "Front-End",
    description:
      "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="">
          {/*text and image*/}
          <div className="">
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 mx-w-[455px] mb-6">
              I'am a Full-stack Developer
            </h3>
            <button className="btn btn-sm">See mym work</button>
          </div>
          {/*service */}
          <div className="">Service</div>
        </div>
      </div>
    </section>
  );
};

export default Services;
