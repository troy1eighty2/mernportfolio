import styles from "./Projects.module.css";
import boilerplate from "./Boilerplate.module.css";
import { Link } from "react-router-dom";
import ProjectItem from "../components/ProjectItem/ProjectItem.jsx";
import data from "../data/projects.json";

function Projects() {
  const projects = data.sort((a, b) => new Date(b.date) - new Date(a.date));
  return <>
    <div className={boilerplate.page}>
      <div >
        <div>
          <h1>Projects</h1>
          <p className={boilerplate.info}>Things that I am or have worked on. </p>
        </div>
      </div>
      <div>
        <i>"Once you stop learning, you start dying."</i>
      </div>
      <ul className={styles.list}>
        {projects.map((project) => <ProjectItem key={project.id} name={project.name} blurb={project.blurb} url={project.url} date={project.date}></ProjectItem>)}
      </ul>
    </div>
  </>
}
export default Projects;
