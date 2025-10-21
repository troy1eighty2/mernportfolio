import styles from "./Exposition.module.css";
import { useState, useEffect } from "react";
import boilerplate from "./Boilerplate.module.css";
import BlogItem from "../components/BlogItem/BlogItem.jsx";
import Filter from "../components/Filter.jsx";
import {client} from "../sanity/client.js"

function Exposition({ blog, recent }) {

  const [blogs, setBlogs] = useState(null);
  const [filteredBlogs, setFilteredBlogs] = useState(null);
  const [pinned_blogs, setPinned_Blogs] = useState(null);

  const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState("");
  
  const filter = (funcFilters, funcSearch) => {
    // console.log(funcSearch)
    // console.log(funcFilters)

    setFilteredBlogs(()=>{
      let filtered;
      filtered = blogs.filter((blog)=> blog.title.toLowerCase().includes(funcSearch.toLowerCase()))
      if (funcFilters.length > 0){
        return filtered.filter((item)=>item.categories.some((category)=>funcFilters.includes(category)))
      }
      return filtered
    })
  }
  const handleChange = (e) =>{
    setSearch(e.target.value);

    if (e.target.value.trim() == ""){
      filter(filters, e.target.value)
    }else{
      //partial matches
      filter(filters, e.target.value)
    }
  }

  const handleClick = (title)=>{
    let currFilters;
    setFilters((prevFilters) => {
      if (prevFilters.includes(title)) {
        // remove if already selected
        currFilters = prevFilters.filter((item) => item !== title)
      } else {
        // add new title to filters
        currFilters = [...prevFilters, title]
      }
      if (currFilters.length === 0){
        // setFilteredBlogs(blogs)
        filter(currFilters, search)
      }else{
        // setFilteredBlogs(()=>{
        //   return blogs.filter((item)=>item.categories.some((category)=>currFilters.includes(category)))
        // })
        filter(currFilters, search)
      }
      return currFilters;
    });
    
  }

  // console.log(filteredBlogs)
  useEffect(()=>{
    client
      .fetch(`*[_type == 'post' && !('pinned' in categories[]->title)]|order(date desc){title, blurb, publishedAt, slug, "categories":categories[]->title}[0...100]`)
      .then((data)=>{
        setBlogs(data)
        setFilteredBlogs(data.sort((a, b)=> new Date(b.publishedAt) - new Date(a.publishedAt)))
      })

      .catch((error) => {
        console.log(error)
      })
    client
      .fetch(`*[_type == 'post' && ('pinned' in categories[]->title)]|order(date desc){title, blurb, publishedAt, slug, "categories":categories[]->title}[0...100]`)
      .then((data)=>{
        setPinned_Blogs(data.sort((a, b)=> new Date(b.publishedAt) - new Date(a.publishedAt)))})
      .catch((error) => {
        console.log(error)
      })


  },[])
  // console.log(filteredBlogs)
  return <>
    <div className={boilerplate.page}>
      <div>
        <h1>Exposition</h1>
        <p className={boilerplate.info}>{recent ? `Last Updated ${new Date(recent).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}` : ""}</p>
      </div>
      <p>
        Silly little thoughts from my silly little smooth brain
      </p>
      <div style={{display:"flex"}}>
        <h2>Pinned</h2>
      </div >
      <div className={styles.list}>
        {pinned_blogs && pinned_blogs.map((blog, index) =>
          <div className={styles.item}key={index} >
            <img src="/pin.gif" style={{width:"30px",height:"30px", alignItems:"center"}}/>
            <BlogItem  id={blog.slug} title={blog.title} blurb={blog.blurb} date={blog.publishedAt} isSanityContent={blog.categories}></BlogItem>
          </div>
        )}
      </div>
      <div style={{display:"flex"}}>
        <Filter filters={filters} setFilters={setFilters} handleClick={handleClick} handleChange={handleChange} search={search}></Filter>
      </div>
      <div className={styles.list}>
        {filteredBlogs && filteredBlogs.map((blog, index) =>
          <div className={styles.item}key={index}>
            {!(blog.categories.includes("legacy"))? <BlogItem  id={blog.slug} title={blog.title} blurb={blog.blurb} date={blog.publishedAt} isSanityContent={blog.categories}></BlogItem>:<BlogItem key={blog._id} id={blog._id} title={blog.title} blurb={blog.blurb} date={blog.publishedAt} isSanityContent={null}></BlogItem>}
          </div>
        )}
        {filteredBlogs && filteredBlogs.length === 0 && 
          <div className={styles.empty}>
            (╥﹏╥)  nothing to see...
          </div>
        }
      </div>
    </div>
  </>
}
export default Exposition;
