import React from "react";
import ProjectItem from "../projects/ProjectItem";
const Projects = () => {
  return (
    <div className="projects">
      <ProjectItem
        name={"MyItems"}
        github={"https://github.com/siwyus/MyItems"}
        demo={"https://github.com/siwyus/MyItems/"}
      />
      <ProjectItem
        name={"Portfolio"}
        github={"https://github.com/siwyus/portfolio"}
        demo={"https://github.com/siwyus/portfolio/"}
      />
    </div>
  );
};

export default Projects;
