import styles from "./BlogItem.module.css";
import { Link } from "react-router-dom";

function BlogItem({ id, title, blurb, date }) {
  const reDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return <li className={styles.item}>
    <div>
      <Link to={`/exposition/${id}`}>{title}</Link>
      <p>{blurb}</p>
    </div>
    <div className={styles.date}>
      {reDate}
    </div>
  </li>
}
export default BlogItem;
