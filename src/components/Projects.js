import React from "react";
import Carousel from "react-elastic-carousel";

import { Project } from "../data";

const Projects = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 840, itemsToShow: 2 },
    { width: 1250, itemsToShow: 3 },
  ];
  return (
    <section className="projects" id="projects">
      <div className="projects__heading">
        <h2>Featured Projects</h2>
        <p>Here are a few projects I've worked on.</p>
      </div>

      <div className="projects__slider">
        <Carousel breakPoints={breakPoints}>
          {Project.map((item) => (
            <div className="projects__card" key={item.id}>
              <img
                src={item.img}
                alt="projectImg"
                className="projects__card-img"
              />
              <div className="projects__card-details">
                <h3>{item.name}</h3>
                <p>{item.info}</p>
                <a href={item.link} className="projects__card-details-btn">
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
