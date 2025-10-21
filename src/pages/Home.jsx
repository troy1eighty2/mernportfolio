import styles from "./Home.module.css";
import Comments from "./Comments.jsx"
function Home() {
  return <>
    <div className={styles.homecontent}>
      <p className={styles.first}>I am a full-time student and a hobby programmer from <b>Texas</b>.</p>
      <p className={styles.last}>Reach me at <a href="mailto:troytran000@gmail.com">troytran000@gmail.com</a> and lets make something cool together!</p>
      <img className={styles.profile} src="/real.JPG" alt=""/>
    </div >
  </>
}
export default Home;
