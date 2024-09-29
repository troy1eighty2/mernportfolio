import styles from "./Exposition.module.css";
import boilerplate from "./Boilerplate.module.css";
function Exposition() {
  return <>
    <div className={boilerplate.page}>
      <div>
        <h1>Exposition</h1>
        <p className={boilerplate.info}>Silly little thoughts from my silly little smooth brain</p>
      </div>
    </div>
  </>
}
export default Exposition;
