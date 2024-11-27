import styles from "./About.module.css";
import boilerplate from "./Boilerplate.module.css";
function About() {
  return <>
    <div className={boilerplate.page}>
      <div >
        <h1>About</h1>
        <p className={boilerplate.info}>My config stuff</p>
      </div>
      <p>
        I was born and raised in Texas. I go to school here too, where I picked up programming for fun.
        I am obsessed with workflow configuration and VIM. I like guitar and pro bodybuilding.
      </p>
      <div>
        <h2>Hardware I'm Rocking:</h2>
        <ul>
          <li>Laptop: DellG15 5511</li>
          <li>GPU: NVIDIA RTX 3060 Mobile</li>
          <li>CPU: 11th Gen Intel i7-11800H</li>
          <li>Headset: HyperX Cloud Stinger 2 Wireless</li>
          <li>Keyboard: Logitech G915 TKL Wireless</li>
          <li>Mouse: Logitech M510 Wireless</li>
        </ul>
      </div>
      <div>
        <h2>System Information:</h2>
        <ul>
          <li>OS: Ubuntu</li>
          <li>Terminal: kitty</li>
          <li>Shell: bash</li>
          <li>Text Editor: nvim</li>
          <li>Favorite Nvim Plugins: flash, harpoon, surround</li>
          <li>Windows Manager: i3</li>
          <li>Theme: gruvbox</li>
        </ul>
      </div>
      <div>
        <h2>Guitar Rig:</h2>
        <ul>
          <li>Ibanez GRGR131EX</li>
          <li>EMG Pickups</li>
          <li>Mini Boss Katana</li>
          <li>Self-proclaimed numba one my bloody valentine fan</li>
        </ul>
        {/* hi */}
      </div>
      <p>My <a href="https://github.com/troy1eighty2/config" target="_blank">config files</a> are on my GitHub</p>
    </div>
  </>
}
export default About;
