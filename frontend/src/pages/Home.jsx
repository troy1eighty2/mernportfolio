import styles from "./Home.module.css";
function Home() {
  return <>
    <div className={styles.homecontent}>
      <p>Hello!</p>
      <p>I am a full-time student and programmer from Texas.</p>
      <p>Reach me @ <a href="mailto:troytran000@gmail.com">troytran000@gmail.com</a> and lets make something cool together!</p>
    </div>
  </>
}
export default Home;
