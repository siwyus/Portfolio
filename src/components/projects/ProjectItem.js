import React from "react";
import foto from "../layout/background.jpg";

const ProjectItem = ({ name, github, demo }) => {
  return (
    <div className="project-item">
      <h1>{name}</h1>
      <img alt={name} src={foto}></img>
      <ul>
        <li>
          <p>DEMO</p>
          {/* eslint-disable-next-line */}
          <a
            className="fas fa-laptop fa-3x"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </li>
        <li>
          <p>CODE</p>
          {/* eslint-disable-next-line */}
          <a
            className="fab fa-github fa-3x"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </li>
      </ul>
    </div>
  );
};

export default ProjectItem;
