import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return <>
    <nav className={styles.navbar}>
      <div>
        <Link to="/"><h2>troy tran</h2></Link>
      </div>
      <ul className={styles.links}>
        <li>
          <Link to="/about"><h2>about</h2></Link>
        </li>
        <li>-</li>
        <li>
          <Link to="/projects"><h2>projects</h2></Link>
        </li>
        <li>-</li>
        <li>
          <Link to="/exposition"><h2>exposition</h2></Link>
        </li>
      </ul>
    </nav>
    <hr className={styles.navline} />
  </>
}

export default Navbar;
