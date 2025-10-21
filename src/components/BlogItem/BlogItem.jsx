import styles from "./BlogItem.module.css";
import { Link } from "react-router-dom";

function BlogItem({ id, title, blurb, date, isSanityContent}) {
  const reDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "America/Chicago"
  });
  return (isSanityContent ? <li className={styles.item}>

    <div className={styles.row1}>
      <Link to={`/exposition/${id}`}>{title}</Link>
      <p className={styles.date}>{reDate}</p>
    </div>
    <div className={styles.row2}>
      <div>
        {isSanityContent.map((item, index)=>`[${item}] `)}
      </div>
    </div>
    <div className={styles.row3}>
      {blurb}
    </div>
  </li>:
    <li className={styles.legacyitem}>
      <div className={styles.row1}>
        <Link className={styles.legacy}to={`/exposition/${title}`}>{title}</Link>
        <p className={styles.date}>{reDate}</p>
      </div>
      <div className={styles.row2}>
        <p>[legacy]</p>
      </div>
      <div className={styles.row3}>
        {blurb}
      </div>
    </li>)
}
export default BlogItem;
