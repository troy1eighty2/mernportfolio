import styles from "./SanityContent.module.css"
import boilerplate from "./Boilerplate.module.css"
import {useEffect, useState} from "react"
import {client} from "../sanity/client.js"
import {useParams} from "react-router-dom"
import { PortableText } from "@portabletext/react";
import LastFMAndPlexStats from "../components/LastFMAndPlexStats.jsx"
import { urlFor } from "../sanity/client.js";
function SanityContent(){
  const {slug} = useParams();
  // console.log(slug)
  const [blog, setBlog] = useState(null);
  useEffect(()=>{
    window.scrollTo(0, 0);
    client
      .fetch(`*[_type == 'post' && $slug == slug.current]{title, blurb, publishedAt, body, author->{name}}`, {slug})
      .then((data)=>{
        setBlog(data[0])
      })
  },[])
  // console.log(slug)
  return (blog ? <div className={boilerplate.page}>
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.blurb}</p>
      <p className={styles.date}>{new Date(blog.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "America/Chicago" })}</p>
    </div >
    <div className={styles.content}>
      {slug === 'last-fm-and-plex-stats' ? <LastFMAndPlexStats></LastFMAndPlexStats>:
        <PortableText value={blog.body} components={{
          types: {
            image: ({ value }) => (
              <img
                src={urlFor(value).width(800).url()}
                className={styles.bodyImage}
              />
            ),
          },
          block: {
            normal: ({children}) => <p>{children}<br/><br/></p>,
          },
        }}></PortableText>}
    </div>
    <div>
      {`- ${blog.author.name}`}
    </div>
  </div>: null)
}
export default SanityContent;
