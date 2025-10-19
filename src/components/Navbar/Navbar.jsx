import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({ recent }) {
  const tenDaysInMiliseconds = 7 * 24 * 60 * 60 * 1000

  function determineRecent() {
    if ((new Date() - new Date(recent)) < tenDaysInMiliseconds) {
      // console.log("true")
      return true
    }
    // console.log("false")
    // return false
    return false

  }
  return <>
    <nav className={styles.navbar}>
      <Link to="/"><div className={styles.gifName}><img src="/welcome.gif" className={styles.welcome}></img><h1>troy tran</h1>{determineRecent() ? <img className={styles.newMobile} src="/new.gif" /> : null}</div></Link>
      <ul className={styles.links}>
        <li>
          <Link to="/about"><h1>about</h1></Link>
        </li>
        <li>-</li>
        <li>
          <Link to="/projects"><h1>projects</h1></Link>
        </li>
        <li>-</li>
        <li className={styles.exposition}>

          {determineRecent() ? <img src="/new.gif" className={styles.new} /> : null}
          <Link to="/exposition"><h1>exposition</h1></Link>
        </li>
      </ul>
    </nav>
    <hr className={styles.navline} />
  </>
}

export default Navbar;
