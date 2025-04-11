import styles from "./Home.module.css";
import Comments from "./Comments.jsx"
function Home() {
  return <>
    <div className={styles.homecontent}>
      <p className={styles.first}>I am a full-time student and a hobby programmer from Texas.</p>
      <p>Reach me at <a href="mailto:troytran000@gmail.com">troytran000@gmail.com</a> and lets make something cool together!</p>
      <p className={styles.last}>And while you're here, scroll down and sign my website.</p>
    </div >
  </>
}
export default Home;
