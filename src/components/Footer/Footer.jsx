import styles from "./Footer.module.css";

function Footer() {
  return <>
    <div >
      {/* <hr className={styles.line} /> */}
      <ul className={styles.footer}>
        <li><a href="https://github.com/troy1eighty2" target="_blank">github</a></li>
        <li>-</li>
        <li><a href="https://linktr.ee/troytran" target="_blank">linktree</a></li>
        <li>-</li>
        <li><a href="mailto:troytran000@gmail.com">email</a></li>
      </ul>
    </div>
  </>
}

export default Footer;
