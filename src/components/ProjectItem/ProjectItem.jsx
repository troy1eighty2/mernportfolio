import styles from "./ProjectItem.module.css";
function ProjectItem({ name, blurb, url, date }) {
  const reDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  });
  return <li className={styles.item}>
    <div className={styles.row1}>
      <a href={url} target="_blank">{name}</a>
      <p className={styles.date}>{reDate}</p>
    </div>
    <div className={styles.row2}>
      <p>{blurb}</p>
    </div>
  </li>
}
export default ProjectItem;
