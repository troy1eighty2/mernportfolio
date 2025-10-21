import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Exposition from "./pages/Exposition.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Content from "./pages/Content.jsx";
import SanityContent from "./pages/SanityContent.jsx";
import Comments from "./pages/Comments.jsx";
import {client} from "./sanity/client.js"
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

      })
      .catch((error) => {
        console.log(error)
      })
    client
      .fetch(`*[_type == 'post']|order(publishedAt desc){publishedAt}`)
      .then((data)=>{
        // console.log(data[0])
        setRecent(new Date (data[0].publishedAt).toLocaleDateString("en-US", {year: "numeric",month: "short",day: "numeric",timeZone: "America/Chicago"}))
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
          <Route path="/exposition/static/:title" element={<Content></Content>}></Route>
          <Route path="/exposition/:slug" element={<SanityContent></SanityContent>}></Route>
        </Routes>
        <Comments></Comments>
        <Footer></Footer>
      </div >
    </>
  )
}

export default App
