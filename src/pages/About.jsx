import styles from "./About.module.css";
import { CopyBlock, monokai } from "react-code-blocks";
import boilerplate from "./Boilerplate.module.css";
function About() {
  return <>
    <div className={boilerplate.page}>
      <div >
        <h1>About</h1>
        <p className={boilerplate.info}>My config stuff</p>
      </div>
      <p>
        Devops and site reliability engineering. Neovim, arch linux, and workflow enthusiast. Music and bodybuilding.
      </p>

      <img src="/arch.gif" className={styles.gif}></img>
      <div>
        <h2>Hardware I'm Rocking:</h2>
        <ul>
          <li>Main: Lenovo Thinkpad T480</li>
          <li>Typewriter: Lenovo Thinkpad x220</li>
          <li>Phone: Kyocera 902kc</li>
          <li>Mouse: Logitech M510</li>
        </ul>
      </div>
      <div>
        <h2>System Information:</h2>
        <ul>
          <li>OS: arch</li>
          <li>Terminal: kitty</li>
          <li>Text Editor: nvim</li>
          <li>DE/WM: hyprland</li>
          <li>Favorite Nvim Plugins: flash, harpoon, surround</li>
        </ul>
        <div className={styles.grid}>
          <img src="/setup.jpeg" className={styles.image}></img>
          <img src="/worm.JPG" className={styles.image}></img>
          <img src="/drives.jpeg" className={styles.image}></img>
          <img src="/mo.JPG" className={styles.image}></img>
          <img src="/x220gore.jpeg" className={styles.image}></img>
          <img src="/cat.JPG" className={styles.image}></img>
        </div>
      </div>
      {/* <div> */}
        {/* <h2>Guitar:</h2> */}
        {/* <ul> */}
        {/*   <li>Ibanez Gio</li> */}
        {/*   <li>Mini Boss Katana</li> */}
        {/*   <li>Jazz 3 Picks</li> */}
        {/*   <li>Rhythm and Hybrid Picking</li> */}
        {/* </ul> */}
        {/* hi */}
      {/* </div> */}
      <p>My <a href="https://github.com/troy1eighty2/config" target="_blank"> nvim config files</a> and <a href="https://github.com/troy1eighty2/vimconfig" target="_blank"> vim config files</a> are on my GitHub</p>
    </div>
  </>
}
export default About;
