import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({ recent }) {
  const fourteenDaysInMiliseconds = 14 * 24 * 60 * 60 * 1000

  function determineRecent() {
    if ((new Date() - new Date(recent)) < fourteenDaysInMiliseconds) {
      console.log("true")
      return true
    }
    console.log("false")
    return false

  }
  return <>
    <nav className={styles.navbar}>
      <Link to="/"><div className={styles.gifName}><img src="/welcome.gif" className={styles.welcome}></img><h2>troy tran</h2>{determineRecent() ? <img className={styles.newMobile} src="/new.gif" /> : null}</div></Link>
      <ul className={styles.links}>
        <li>
          <Link to="/about"><h2>about</h2></Link>
        </li>
        <li>-</li>
        <li>
          <Link to="/projects"><h2>projects</h2></Link>
        </li>
        <li>-</li>
        <li className={styles.exposition}>

          {determineRecent() ? <img src="/new.gif" className={styles.new} /> : null}
          <Link to="/exposition"><h2>exposition</h2></Link>
        </li>
      </ul>
    </nav>
    <hr className={styles.navline} />
  </>
}

export default Navbar;
