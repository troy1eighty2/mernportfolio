import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Exposition from "./pages/Exposition.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Content from "./pages/Content.jsx";
import Comments from "./pages/Comments.jsx";
import axios from "axios";

import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [blog, setBlog] = useState([])
  const [recent, setRecent] = useState(null)

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/exposition`)
      .then((response) => {
        const blog_sorted = response.data
          .sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlog(blog_sorted);

        if (blog_sorted.length > 0) {
          setRecent(blog_sorted[0].date);
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);
  return (
    <>
      <div className={styles.container}>
        <Navbar recent={recent}></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/exposition" element={<Exposition blog={blog} recent={recent}></Exposition>}></Route>
          <Route path="/exposition/:id/:title" element={<Content></Content>}></Route>
        </Routes>
        <Comments></Comments>
        <Footer></Footer>
      </div >
    </>
  )
}

export default App
