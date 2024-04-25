import React from "react";
import ProjectItem from "./ProjectItem";

// This is the ProjectList component. It takes a props object as an argument, which contains a projects property.
function ProjectList({ projects }) {
  // The map() method creates a new array by calling a specified function on every element in the projects array.
  // In this case, the function returns a <ProjectItem /> component for each project in the array.
  const projectItems = projects.map((project) => {
    // The key prop is used to uniquely identify each ProjectItem component.
    // React uses this key to track components as they are added, updated, and removed from the DOM.
    return (
      <ProjectItem
        key={project.id}
        technologies={project.technologies}
        name={project.name}
        about={project.about}
      />
    );
  });

  // The return statement returns the JSX for the ProjectList component.
  // The JSX includes a div with the id "projects", an h2 element with the text "My Projects", and a div with the id "project-list" that contains the projectItems array.
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

// The export default statement exports the ProjectList component so that it can be imported and used in other modules.
export default ProjectList;
