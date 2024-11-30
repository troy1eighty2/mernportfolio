import styles from "./Content.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import boilerplate from "./Boilerplate.module.css"

function Content() {
  const [blog, setBlog] = useState({ title: "", blurb: "", content: [], date: "" });
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/exposition/${id}`)
      .then((response) => {
        setBlog(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return <>
    <div className={boilerplate.page}>
      <div >
        <h1>{blog.title}</h1>
        <p>{blog.blurb}</p>
        <p className={styles.date}>{new Date(blog.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}</p>
      </div >
      <div className={styles.content}>
        {blog.content.map((item, index) => {
          const Tag = item.type;
          switch (Tag) {
            case "img":
              return <img src={item.title} className={styles.img} />;
            case "a":
              return <a href={item.title} target="_blank">{item.link}</a>;
            case "iframe":
              return <iframe width="300" height="200" src={item.title} title="YouTube video player" frameborder="0" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            default:
              return <Tag key={index}>{item.title}</Tag>
          };
        })}
      </div>
    </div>
  </>
}
export default Content;
