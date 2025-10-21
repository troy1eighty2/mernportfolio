import styles from "./Filter.module.css"
import Dropdown from "./Dropdown.jsx"
import {client} from "../sanity/client.js"
import {useState, useEffect} from "react";

function Filter({filters, setFilters, handleClick, handleChange, search}){
  const [categories, setCategories] = useState(null);

  useEffect(()=>{
    client
      .fetch(`*[_type == 'category' && title != 'pinned']{title}`)
      .then((data)=>{
        setCategories(data)
      })

      .catch((error) => {
        console.log(error)
      })

  },[])
  return <div className={styles.container}>
    <input className={styles.input} placeholder="search by name" onChange={handleChange} value={search}></input>
    <div className={styles.filters}>
      {categories && categories.map((item, index)=> <button key={index} className={`${styles.button} ${filters.includes(item.title) ? styles.active: null}`} onClick={() => handleClick(item.title)}>{item.title}</button> )}
    </div>
  </div>
}
export default Filter;
