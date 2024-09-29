import styles from "./Exposition.module.css";
import { useState, useEffect } from "react";
import boilerplate from "./Boilerplate.module.css";
import axios from "axios";

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
          <div key={blog._id}>
            placeholder for blog entry
          </div>
        )}
      </div>
    </div>
  </>
}
export default Exposition;
