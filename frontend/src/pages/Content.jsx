import styles from "./Content.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Content() {
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/exposition/${id}`)
      .then((response) => {
        setBlog(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return <>
    <div >
      {blog.title}
      {blog.blurb}
      {blog.date}
    </div>
  </>
}
export default Content;
