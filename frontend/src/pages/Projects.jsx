import styles from "./Projects.module.css";
import boilerplate from "./Boilerplate.module.css";
import { Link } from "react-router-dom";
import ProjectItem from "../components/ProjectItem/ProjectItem.jsx";
import data from "../data/projects.json";

function Projects() {
  const projects = data.sort((a, b) => new Date(b.date) - new Date(a.date));
  return <>
    <div className={boilerplate.page}>
      <div>
        <h1>Projects</h1>
        <p className={boilerplate.info}>Things that I've worked on</p>
      </div>
    </div>
    <ul className={styles.list}>
      {projects.map((project) => <ProjectItem key={project.id} name={project.name} blurb={project.blurb} url={project.url}></ProjectItem>)}
    </ul>
  </>
}
export default Projects;
