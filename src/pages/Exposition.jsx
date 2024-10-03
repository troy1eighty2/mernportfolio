import styles from "./Exposition.module.css";
import { useState, useEffect } from "react";
import boilerplate from "./Boilerplate.module.css";
import axios from "axios";
import BlogItem from "../components/BlogItem/BlogItem.jsx";

function Exposition() {
  const [blog, setBlog] = useState([]);
  const [recent, setRecent] = useState(null);
  const blog_sorted = blog.sort((a, b) => new Date(b.date) - new Date(a.date));

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/exposition`)
      .then((response) => {
        setBlog(response.data);
        if (response.data.length > 0) {
          setRecent(response.data[0].date);
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);
  return <>
    <div className={boilerplate.page}>
      <div>
        <h1>Exposition</h1>
        <p className={boilerplate.info}>{recent ? `Last Updated {new Date(recent).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}` : ""}</p>
      </div>
      <p>
        Silly little thoughts from my silly little smooth brain
      </p>
      <div>
        {blog_sorted.map((blog) =>
          <BlogItem key={blog._id} id={blog._id} title={blog.title} blurb={blog.blurb} date={blog.date}></BlogItem>
        )}
      </div>
    </div>
  </>
}
export default Exposition;
