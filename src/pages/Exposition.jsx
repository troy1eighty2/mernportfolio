import styles from "./Exposition.module.css";
import { useState, useEffect } from "react";
import boilerplate from "./Boilerplate.module.css";
import BlogItem from "../components/BlogItem/BlogItem.jsx";
import Filter from "../components/Filter.jsx";
import {client} from "../sanity/client.js"

function Exposition({ blog, recent }) {

  const [blogs, setBlogs] = useState(null);
  useEffect(()=>{
    client
      .fetch(`*[_type == 'post']|order(date desc){title, blurb, publishedAt, slug, "categories":categories[]->title}[0...100]`)
      .then((data)=>{
        setBlogs(data)
        // console.log(data)
      })

      .catch((error) => {
        console.log(error)
      })

  },[])
  return <>
    <div className={boilerplate.page}>
      <div>
        <h1>Exposition</h1>
        <p className={boilerplate.info}>{recent ? `Last Updated ${new Date(recent).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}` : ""}</p>
      </div>
      <p>
        Silly little thoughts from my silly little smooth brain
      </p>
      <div style={{textAlign:"center",display:"flex"}}>
        <img src="/pin.gif" style={{width:"30px"}}/>
        <h2>Pinned</h2>
      </div>
      <div style={{display:"flex",border:"black solid 1px"}}>
        <Filter></Filter>
      </div>
      <div>
        {blogs && blogs.map((blog, index) =>
          <div className={styles.item}key={index}>
            <BlogItem  id={blog.slug} title={blog.title} blurb={blog.blurb} date={blog.publishedAt} isSanityContent={blog.categories}></BlogItem>
          </div>
        )}
        {blog.map((blog, index) =>

          <div className={styles.item}key={index}>
          <BlogItem key={blog._id} id={blog._id} title={blog.title} blurb={blog.blurb} date={blog.date} isSanityContent={null}></BlogItem>
          </div>
        )}
      </div>
    </div>
  </>
}
export default Exposition;
