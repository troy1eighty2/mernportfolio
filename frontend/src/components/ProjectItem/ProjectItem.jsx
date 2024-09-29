import styles from "./ProjectItem.module.css";
function ProjectItem({ name, blurb, url, date }) {
  const reDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return <li className={styles.item}>
    <div>
      <a href={url} target="_blank">{name}</a>
      <p>{blurb}</p>
    </div>
    <div className={styles.date}>
      {reDate}
    </div>
  </li>
}
export default ProjectItem;
