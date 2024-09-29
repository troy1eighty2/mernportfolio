import styles from "./Home.module.css";
function Home() {
  return <>
    <div className={styles.homecontent}>
      <h1>Hello!</h1>
      <h2>I am a full-time student and programmer from Texas.</h2>
      <h2>Reach me @ <a href="mailto:troytran000@gmail.com">troytran000@gmail.com</a> and lets make something cool together!</h2>
    </div>
  </>
}
export default Home;
