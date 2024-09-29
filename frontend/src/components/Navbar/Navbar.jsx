import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return <>
    <nav className={styles.navbar}>
      <div>
        <Link to="/">troy tran</Link>
      </div>
      <ul className={styles.links}>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>-</li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>-</li>
        <li>
          <Link to="/exposition">exposition</Link>
        </li>
      </ul>
    </nav>
    <hr className={styles.navline} />
  </>
}

export default Navbar;
