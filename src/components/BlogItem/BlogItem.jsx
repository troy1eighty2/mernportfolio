import styles from "./BlogItem.module.css";
import { Link } from "react-router-dom";

function BlogItem({ id, title, blurb, date }) {
  const reDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  });
  return <li className={styles.item}>
    <div>
      <Link to={`/exposition/${id}/${title}`}>{title}</Link>
      <p>{blurb}</p>
    </div>
    <div >
      {reDate}
    </div>
  </li>
}
export default BlogItem;
