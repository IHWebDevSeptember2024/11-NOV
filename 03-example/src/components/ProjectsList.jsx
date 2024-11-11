import projectsArray from "../data/projects.json";
import ProjectCard from "./ProjectCard";
import "./ProjectsList.css"

function ProjectsList() {
  console.log(projectsArray);
  return (
    <ul className="projects-container">
      {projectsArray.map((eachProject, index) => {
        return <ProjectCard key={index} eachProject={eachProject} />;
      })}
    </ul>
  );
}

export default ProjectsList;
