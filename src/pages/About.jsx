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
        I was born and raised in Texas. I go to school here too, where I picked up programming for fun.
        I am obsessed with workflow configuration and VIM. I love collecting laptops to refurbish with new parts and software to be brandished as daily drivers. I like guitar and bodybuilding with my role models being Yvette Young and Wesley Vissers.
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
        <h2>Guitar:</h2>
        <ul>
          <li>Ibanez Gio</li>
          <li>Mini Boss Katana</li>
          <li>Jazz 3 Picks</li>
          <li>Rhythm and Hybrid Picking</li>
        </ul>
        {/* hi */}
      </div>
      <p>My <a href="https://github.com/troy1eighty2/config" target="_blank"> nvim config files</a> and <a href="https://github.com/troy1eighty2/vimconfig" target="_blank"> vim config files</a> are on my GitHub</p>
    </div>
  </>
}
export default About;
