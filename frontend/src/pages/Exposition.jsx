import styles from "./Exposition.module.css";
import { useState, useEffect } from "react";
import boilerplate from "./Boilerplate.module.css";
import axios from "axios";
import BlogItem from "../components/BlogItem/BlogItem.jsx";

function Exposition() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exposition")
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);
  return <>
    <div className={boilerplate.page}>
      <div>
        <h1>Exposition</h1>
        <p className={boilerplate.info}>last updated placehoder</p>
      </div>
      <p>
        Silly little thoughts from my silly little smooth brain
      </p>
      <div>
        {blog.map((blog) =>
          <BlogItem key={blog._id} id={blog._id} title={blog.title} blurb={blog.blurb} date={blog.date}></BlogItem>
        )}
      </div>
    </div>
  </>
}
export default Exposition;
