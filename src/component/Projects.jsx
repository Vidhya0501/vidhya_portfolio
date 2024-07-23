import React from "react";

import { projectData } from "./data/projectData";
import Card from "./cards/Card";
import { miniprojectData } from "./data/miniProjectData";
import MiniProjectsCard from "./cards/MiniProjectsCard";
function Projects() {
  return (
    <>
      <div
        className="container-fluid bg-dark bg-image project p-5 text-white"
        id="projects"
      >
        <h4 className="fst-italic fw-bold fs-4 text-center heading mt-5 pt-5">
          PROJECTS
        </h4>
        <div className="row pt-3">
          {projectData.map((project) => {
            return <Card data={project} />;
          })}
        </div>

        <h4 className="fst-italic fw-bold fs-4 text-center heading mt-5 pt-5">
          MINI PROJECTS
        </h4>
        <div className="row pt-3">
          {miniprojectData.map((project) => {
            return <MiniProjectsCard data={project} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
