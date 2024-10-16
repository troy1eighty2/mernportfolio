import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Exposition from "./pages/Exposition.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Content from "./pages/Content.jsx";
import styles from "./App.module.css";

function App() {


  return (
    <>
      <div className={styles.container}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/exposition" element={<Exposition></Exposition>}></Route>
          <Route path="/exposition/:id" element={<Content></Content>}></Route>
        </Routes>
        <Footer></Footer>
      </div >
    </>
  )
}

export default App
